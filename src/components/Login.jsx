import { useState } from "react";

function Login({setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch("https://fsa-recipe.up.railway.app/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password})
              });  

            const result = await response.json()
            console.log(response)

            if (response.ok) {
                console.log("Login successful:", result)
                setToken(result.token)
                localStorage.setItem("token", result.token)
            } else {
                console.error("Login failed:", result.message)
                setError(result.message || "Login failed")
            }

        }catch(error){
            console.error(error.message)
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    />
                </label>
                <label>
                    Password:
                    <input 
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} 
                    required
                    />
                </label>
                <button>Sumbit</button>
            </form>
            

        </div>
    )
}

export default Login