import {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import {BirdsContext} from './context/birds'

function EditBird({/*onEditBird, onDeleteBird*/}){

    const [editedBird, setEditedBird] = useState([])
    const params = useParams()
    const {editBird} = useContext(BirdsContext)

    useEffect(()=> {
        fetch(`/birds/${params.id}`)
        .then(r=>r.json())
        .then(r=>setEditedBird(r))
        console.log(editedBird)
    }, [])

    function handleChange(e){
        setEditedBird((currentBirdState)=>(
            {...currentBirdState, [e.target.name]: e.target.value}
        ))
        console.log(editedBird)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/birds/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editedBird)
        })
        .then(r=>r.json())
        .then(bird=>editBird(bird))
        alert("bird data updated!")
    }

    /*function handleDelete(){
        fetch(`/birds/${params.id}`,{
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                onDeleteBird(params.id)
            }
        })
        alert("bird deleted!")
    }*/

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
            <input
                type="text" name="conservation_status"
                value={editedBird.conservation_status}
                onChange={handleChange}
                placeholder="enter text"
            />
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
        <br/>
        <Link to='/birds'>Back to All Birds</Link>
        </>
    )
}

export default EditBird