import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function EditBird({onEditBird, onDeleteBird}){

    const [editBird, setEditBird] = useState([])
    const params = useParams()

    useEffect(()=> {
        fetch(`/birds/${params.id}`)
        .then(r=>r.json())
        .then(r=>setEditBird(r))
        console.log(editBird)
    }, [])

    function handleChange(e){
        setEditBird((currentBirdState)=>(
            {...currentBirdState, [e.target.name]: e.target.value}
        ))
        console.log(editBird)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/birds/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editBird)
        })
        .then(r=>r.json())
        .then(bird=>onEditBird(bird))
        alert("bird data updated!")
    }

    function handleDelete(){
        fetch(`/birds/${params.id}`,{
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                onDeleteBird(params.id)
            }
        })
        alert("bird deleted!")
    }

    return(
        <>
        edit bird
        <form onSubmit={handleSubmit}>
        <label>Common Name:</label>
            <input
                type="text" name="com_name"
                value={editBird.com_name}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Scientific Name:</label>
            <input
                type="text" name="sci_name"
                value={editBird.sci_name}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Conservation Status:</label>
            <input
                type="text" name="conservation_status"
                value={editBird.conservation_status}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Image URL:</label>
            <input
                type="text" name="image"
                value={editBird.image}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Description:</label>
            <textarea
                type="text" name="description"
                value={editBird.description}
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