import { useContext, useState } from "react"
import { AppContext } from "../context/AppState"

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {loginUser} = useContext(AppContext)

    const handleSubmit = async (e) => {
    e.preventDefault()
    loginUser(userName, password)
    }

    return (
        <div className="form-container" onSubmit={handleSubmit}>
            <form className="form">
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                
                <button 
                    className="form--submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login