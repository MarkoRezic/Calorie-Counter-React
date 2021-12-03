import { Link } from "react-router-dom"
import './css/Home.css'

const Home = () => {
    return (
        <div className="home podaci">
            <div className="home-sadrzaj">
            <div className="home-logo">
                <i className="fas fa-apple-alt"></i>
                <p>CalorieCounter</p>
            </div>
            <div className="home-izbor">
                <Link to="/unos-informacija">Izgubi kilažu</Link>
                <Link to="/unos-informacija">Održavaj kilažu</Link>
                <Link to="/unos-informacija">Izgradi mišiće</Link>
            </div>
            </div>
        </div>
    )
}

export default Home