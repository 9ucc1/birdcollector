
function Bird({birds}){

    const renderBird = birds.map(bird => (
        <div>
            {bird.com_name}
        </div>
    ))

    return (
        <>
        {renderBird}
        </>
    )
}

export default Bird