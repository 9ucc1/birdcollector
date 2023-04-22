import {Link, useParams} from 'react-router-dom'

function Bird({birds}){

    const params = useParams()

    const renderBird = birds.map(bird => (
        <div>
            <img src={bird.image}/>
            <h2>{bird.com_name}</h2>
            <h3>{bird.sci_name}</h3>
            <p>Conservation Status: {bird.conservation_status}</p>
            <p>{bird.description}</p>
            <button>Report a {bird.com_name} sighting!</button>
            <Link to={`/birds/${bird.id}/edit`}>
            Edit {bird.com_name}
            </Link>
        </div>
    ))

    return (
        <>
        {renderBird}
        </>
    )
}

export default Bird