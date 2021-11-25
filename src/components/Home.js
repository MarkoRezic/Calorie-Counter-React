import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="home">home</div>
            <Link to="/test">go to test</Link>
        </div>
    )
}

export default Home