
function Bird({birds}){

    const renderBird = birds.map(bird => (
        <div>
            <img src={bird.image}/>
            {bird.com_name}
            {bird.sci_name}
            {bird.conservation_status}
            {bird.description}
        </div>
    ))

    return (
        <>
        {renderBird}
        </>
    )
}

export default Bird