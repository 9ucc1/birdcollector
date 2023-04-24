import {useState} from 'react'
import {useParams} from 'react-router-dom'

function EditBird({birds}){

    const params = useParams()
    const birdToEdit = birds.find((bird)=>bird.id == params.id)
    //useEffect?

    const initialBird = {
        com_name: "",
        sci_name: "",
        conservation_status: "",
        image: "",
        description: "",
    }
    
    const [editBird, setEditBird] = useState(initialBird)

    function handleChange(e){
        setEditBird((currentBirdState)=>(
            {...currentBirdState, [e.target.name]: e.target.value}
        ))
        console.log(editBird)
        console.log(birdToEdit.com_name)
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            com_name: editBird.com_name,
            sci_name: editBird.sci_name,
            conservation_status: editBird.conservation_status,
            image: editBird.image,
            description: editBird.description
        }
        fetch(`/birds/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(r=>console.log(r))
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
                //placeholder="enter text"
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