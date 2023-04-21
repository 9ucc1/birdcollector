import {useState} from 'react'

function NewBird(){

    const initialNewBird = {
        com_name: "",
        sci_name: "",
        conservation_status: "",
        image: "",
        description: "",
    }

    const [newBird, setNewBird] = useState(initialNewBird)

    return(
        <>
        Report a new bird!
        <form>
            <label>Common Name:</label>
            <input
                type="text"
                value={initialNewBird.com_name}
            />
            <br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default NewBird