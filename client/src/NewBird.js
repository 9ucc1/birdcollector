import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {BirdsContext} from './context/birds'

function NewBird({/*onAddBird*/}){

    const initialNewBird = {
        com_name: "",
        sci_name: "",
        conservation_status: "",
        image: "",
        description: "",
    }

    const [newBird, setNewBird] = useState(initialNewBird)
    const {addBird} = useContext(BirdsContext)

    function handleChange(e){
        setNewBird((currentBirdState)=>(
            {...currentBirdState, [e.target.name]: e.target.value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            com_name: newBird.com_name,
            sci_name: newBird.sci_name,
            conservation_status: newBird.conservation_status,
            image: newBird.image,
            description: newBird.description,
        }
        fetch('/birds', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        //catch errors (phase 1 fetch)
        .then(r=>addBird(r))
        alert("new bird data created!")
        setNewBird(initialNewBird)
    }

    return(
        <>
        Report a new bird!
        <form onSubmit={handleSubmit}>
            <label>Common Name:</label>
            <input
                type="text" name="com_name"
                value={newBird.com_name}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Scientific Name:</label>
            <input
                type="text" name="sci_name"
                value={newBird.sci_name}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Conservation Status:</label>
            <input
                type="text" name="conservation_status"
                value={newBird.conservation_status}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Image URL:</label>
            <input
                type="text" name="image"
                value={newBird.image}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <label>Description:</label>
            <textarea
                type="text" name="description"
                value={newBird.description}
                onChange={handleChange}
                placeholder="enter text"
            />
            <br/>
            <button type="submit">Submit</button>
        </form>
        <Link to='/birds'>Back to All Birds</Link>
        </>
    )
}

export default NewBird