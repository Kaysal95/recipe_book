import { useState } from "react"

function Register({setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()

        try { 
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/register")
            const result = await response.json()
            localStorage.setItem('token', result.token)
        }catch(error) {
            setError(error.message)

        }
    }
    
    return (
        <div>
            <h2>Register here!</h2> 
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                    <input value={username} 
                    onChange={(event) => setUsername(event.target.value)} />
                </label>
                <label>
                    Password: 
                    <input value={password} 
                    onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
        
    )
    
}

export default Register