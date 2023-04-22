import {useState} from 'react'
import {useParams} from 'react-router-dom'

function EditBird({birds}){

    const params = useParams()

    const initialBird = {
        com_name: ""
    }

    const [editBird, setEditBird] = useState(initialBird)

    //const birdToEdit = birds.find()

    function handleChange(e){
        console.log(e)
    }

    function handleSubmit(e){
        e.preventDefault()
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
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default EditBird