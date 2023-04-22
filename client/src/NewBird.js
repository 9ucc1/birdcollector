import {useState} from 'react'

function NewBird(){

    const initialNewBird = {
        com_name: "",
        sci_name: "",
        conservation_status: "",
        image: "",
        description: "",
    }

    const [newBird, setNewBird] = useState(initialNewBird)

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
        .then(r=>console.log(r))
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
        </>
    )
}

export default NewBird