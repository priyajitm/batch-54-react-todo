import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
             <h1>My ToDo List App</h1>
             <Link to="/login"><button>Login</button></Link>
             <Link to="/signup"><button>Signup</button></Link>
        </div>
       
    )
}

export default Home