import { useState } from "react"

function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)
    async function handleClick() {
        try {
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/me",
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer your_token_here"
                      }
                })
                const result = await response.json()
                setSuccessMessage(result.message)
        }catch(error){
            console.log(error)
        }
    }

    return (
    <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
    </div>
    )

}

export default Authenticate