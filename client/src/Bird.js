import {Link, useParams} from 'react-router-dom'

function Bird({birds}){

    //const params = useParams()

    const renderBird = birds.map(bird => (
        <div>
            <img src={bird.image}/>
            {bird.com_name}
            {bird.sci_name}
            {bird.conservation_status}
            {bird.description}
            <button>Report a {bird.com_name} sighting!</button>
            <button>Edit {bird.com_name}</button>
        </div>
    ))

    return (
        <>
        {renderBird}
        </>
    )
}

export default Bird