import {useParams, useHistory, Link} from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from './context/user'
import {BirdsContext} from './context/birds'

function EditSighting(){

    const [editSighting, setEditSighting] = useState([])
    const params = useParams()
    const [errorsList, setErrorsList] = useState([])

    useEffect(()=> {
        fetch(`/sightings/${params.id}`)
        .then(r=>r.json())
        .then(sighting=>{
            if (!sighting.errors){
                setEditSighting(sighting)
            } else {
                const errorLis = sighting.errors.map(error=> <li>{error}</li>)
                setErrorsList(errorLis)
                console.log(errorsList)
            }
        })
        console.log(editSighting)
    }, [])

    const {patchSighting, deleteSighting} = useContext(UserContext)
    const {birds} = useContext(BirdsContext)
    const {user} = useContext(UserContext)
    const history = useHistory()
    const userBird = birds.find(bird=>bird.id === editSighting.bird_id)
    console.log(userBird)

    function handleChange(e){
        setEditSighting(currentState=>(
            {...currentState, [e.target.name]: e.target.value}
        ))
        console.log(editSighting)
    }

    function handleDelete(e){
        e.preventDefault()
        fetch(`/sightings/${params.id}`,{
            method: "DELETE",
        })
        .then(r=> {
            if (r.ok){
                deleteSighting(params.id, userBird)
                //console.log(userBird)
            }
        })
        alert("sighting deleted!")
        history.push(`/sightings`)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/sightings/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(editSighting)
        })
        .then(r=>r.json())
        .then(sighting=>{
            if (sighting.errors){
                const errorLis = sighting.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
            } else {
                patchSighting(sighting)
                alert("sighting updated!")
            }
        })
    }
    
    if (!user || user.error){
        return <h3>Please log in to view sightings.</h3>
    } else {
        return(
            <>
            <form onSubmit={handleSubmit}>
                <h4>Edit Sighting</h4>
                <label>Date: </label>
                <input
                    type="text" name="date"
                    value={editSighting.date}
                    onChange={handleChange}
                    placeholder="YYYY-MM-DD"
                />
                <br/>
                <label>Location: </label>
                <input
                    type="text" name="location"
                    value={editSighting.location}
                    onChange={handleChange}
                    placeholder="city, state"
                />
                <br/>
                <label>Notes: </label>
                <textarea
                    type="text" name="notes"
                    value={editSighting.notes}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Save Sighting</button>
                <button onClick={handleDelete}>Delete Sighting</button>
            </form>
            {errorsList}
            <Link to={`/sightings`}>Back to Sightings</Link>
            </>
    )}
}

export default EditSighting