import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {BirdsContext} from './context/birds'

function Bird(){

    const {birds} = useContext(BirdsContext)

    return (
        <>{birds.map(bird => (
            <div>
                <img src={bird.image}/>
                <h2>{bird.com_name}</h2>
                <h3>{bird.sci_name}</h3>
                <p>Conservation Status: {bird.conservation_status}</p>
                <p>{bird.description}</p>
                <Link to={`/birds/${bird.id}/newsighting`}>
                    Report a {bird.com_name} sighting
                </Link>
                <br/>
                <Link to={`/birds/${bird.id}/edit`}>
                    Edit {bird.com_name}
                </Link>
            </div>))}
        </>
    )
}

export default Bird