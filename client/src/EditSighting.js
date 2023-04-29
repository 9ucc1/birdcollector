import {useParams, useHistory, Link} from 'react-router-dom'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from './context/user'

function EditSighting({/*onDeleteSighting*/}){

    const [editSighting, setEditSighting] = useState([])
    const params = useParams()

    useEffect(()=> {
        fetch(`/sightings/${params.id}`)
        .then(r=>r.json())
        .then(r=>setEditSighting(r))
        console.log(editSighting)
    }, [])

    const {patchSighting, deleteSighting} = useContext(UserContext)
    const history = useHistory()
    //const userSighting = user.sightings.find(sighting=> sighting.id == params.id)
    //const userBirdId = userSighting.bird_id
    const userBirdId = editSighting.bird_id

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
                deleteSighting(params.id, /*userBirdId*/)
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
        .then(sighting=>patchSighting(sighting))
        alert("sighting updated!")
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h4>Edit Sighting of</h4>
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
        <Link to={`/sightings`}>Back to Sightings</Link>
        </>
    )
}

export default EditSighting