import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function NewSighting({birds}){

    const [birdSeen, setBirdSeen] = useState([])

    useEffect(() => {
        fetch(`/birds/${params.id}`)
        .then(r=>r.json())
        .then(r=>setBirdSeen(r))
    }, [])

    const params = useParams()
    const [newSighting, setNewSighting] = useState([])

    return (
        <>
        <form>
            new sighting of {birdSeen.com_name}
            <br/>
            <label>Date</label>
            <input
                type="text" name="date"
                value={newSighting.date}
                placeholder="YYYY/MM/DD"
            />
        </form>
        </>
    )
}

export default NewSighting