import Sighting from './Sighting.js'

function Sightings({sightings, birds}){

    return (
        <>
        <Sighting sightings={sightings} birds={birds}/>
        </>
    )
}

export default Sightings