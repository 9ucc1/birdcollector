import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {BirdsContext} from './context/birds'

function NewBird(){

    const initialNewBird = {
        com_name: "",
        sci_name: "",
        conservation_status: "",
        image: "",
        description: "",
    }

    const [newBird, setNewBird] = useState(initialNewBird)
    const {addBird} = useContext(BirdsContext)
    const [errorsList, setErrorsList] = useState("")

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
        .then(bird=>{
            if (!bird.errors){
                addBird(bird)
                alert("new bird data created!")
                setNewBird(initialNewBird)
            } else {
                const errorLis = bird.errors.map(error =><li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
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
            <select name="conservation_status"
                onChange={handleChange}
                value={newBird.conservation_status}
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
        {errorsList}
        <Link to='/birds'>Back to All Birds</Link>
        </>
    )
}

export default NewBird