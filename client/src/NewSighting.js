import {useState, useEffect, useContext} from 'react'
import {UserContext} from './context/user'
import {useParams, Link} from 'react-router-dom'

function NewSighting(){

    const initialNewSighting = {
        date: "",
        location: "",
        notes: ""
    }

    const [birdSeen, setBirdSeen] = useState([])
    const [errorsList, setErrorsList] = useState([])
    const {user, addSighting} = useContext(UserContext)
    const params = useParams()
    const [newSighting, setNewSighting] = useState(initialNewSighting)

    useEffect(() => {
        fetch(`/birds/${params.id}`)
        .then(r=>r.json())
        .then(r=>setBirdSeen(r))
    }, [])

    function handleChange(e){
        setNewSighting((currentSighting)=>(
            {...currentSighting, [e.target.name]: e.target.value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            date: newSighting.date,
            location: newSighting.location,
            notes: newSighting.notes,
            bird_id: params.id,
            user_id: user.id
        }
        fetch(`/sightings`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(sighting=>{
            if (!sighting.errors){
                addSighting(sighting)
                setNewSighting(initialNewSighting)
                alert("Sighting recorded!")
            } else {
                const errorLis = sighting.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h4>Record New Sighting of {birdSeen.com_name}</h4>
            <label>Date: </label>
            <input
                type="text" name="date"
                value={newSighting.date}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
            />
            <br/>
            <label>Location: </label>
            <input
                type="text" name="location"
                value={newSighting.location}
                onChange={handleChange}
                placeholder="city, state"
            />
            <br/>
            <label>Notes: </label>
            <textarea
                type="text" name="notes"
                value={newSighting.notes}
                onChange={handleChange}
            />
            <br/>
            <button type="submit">Save Sighting</button>
        </form>
        {errorsList}
        <Link to={`/birds`}>Back to Birds</Link>
        </>
    )
}

export default NewSighting