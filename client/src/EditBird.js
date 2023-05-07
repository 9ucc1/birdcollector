import {useState, useEffect, useContext} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'
import {BirdsContext} from './context/birds'

function EditBird(){

    const [editedBird, setEditedBird] = useState([])
    const [errorsList, setErrorsList] = useState("")
    const params = useParams()
    const history = useHistory()
    const {editBird} = useContext(BirdsContext)

    useEffect(()=> {
        fetch(`/birds/${params.id}`)
        .then(r=>r.json())
        .then(r=>setEditedBird(r))
    }, [])

    function handleChange(e){
        setEditedBird((currentBirdState)=>(
            {...currentBirdState, [e.target.name]: e.target.value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/birds/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editedBird)
        })
        .then(r=>r.json())
        .then(bird=>{
            if (!bird.errors){
                editBird(bird)
                alert("bird data updated!")
                history.push(`/birds`)
            } else {
                const errorLis = bird.errors.map(error =><li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return(
        <>
        edit bird
        <form onSubmit={handleSubmit}>
        <label>Common Name:</label>
            <input
                type="text" name="com_name"
                value={editedBird.com_name}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Scientific Name:</label>
            <input
                type="text" name="sci_name"
                value={editedBird.sci_name}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Conservation Status:</label>
            <select name="conservation_status"
                onChange={handleChange}
                value={editedBird.conservation_status}
            >
                <option>Least Concern</option>
                <option>Near Threatened</option>
                <option>Vulnerable</option>
                <option>Endangered</option>
                <option>Critically Endangered</option>
            </select>
            <br/>
            <label>Image URL:</label>
            <input
                type="text" name="image"
                value={editedBird.image}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Description:</label>
            <textarea
                type="text" name="description"
                value={editedBird.description}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <button type="submit">Save Changes</button>
        </form>
        {errorsList}
        <br/>
        <Link to='/birds'>Back to All Birds</Link>
        </>
    )
}

export default EditBird

/*
            <label>Conservation Status:</label>
            <input
                type="text" name="conservation_status"
                value={editedBird.conservation_status}
                onChange={handleChange}
                placeholder="enter text"
            />
*/