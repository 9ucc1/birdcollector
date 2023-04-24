function Sighting({sightings, birds}){

    const renderSightings = sightings.map(sighting=>(
        <>
        <h3>{sighting.bird_id}</h3>
        <h3>{sighting.user_id}</h3>
        </>
    ))
    //how to get bird name

    return(
        <>
        sighting
        {renderSightings}
        </>
    )
}

export default Sighting