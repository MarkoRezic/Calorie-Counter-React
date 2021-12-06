import { Link } from "react-router-dom"
import './css/Diary.css'
import './css/Food.css'
import './css/Progress.css'
import Prva from './img/prva.jfif'
import Druga from './img/druga.jfif'
import Treca from './img/treca.jfif'

const Progress = () => {
    return (
        <div className="food">
            <div className="edit-food-home napredak-glavno">
                <div className="header-uredi">
                    <div className="header-edit header-edit-progress">
                        <select name="cars" id="cars">
                            <option value="izg">Tjedno</option>
                            <option value="izg">Mjesečno</option>
                            <option value="izg">Godišnje</option>
                        </select>
                    </div>
                </div>
                <div className="secer-vlakna-sol">
                    <div className="secer-vlakna-sol date">
                        <div className="mar kolicina-hrane datum-diary">
                            <i className="fas fa-chevron-left"></i>
                            <span>29 stu - 05 pro</span>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="secer-vlakna-sol napredak-content napredak-margin">
                    <p>Unos kalorija</p>
                    <img src={Prva} />
                </div>
                <div className="secer-vlakna-sol napredak-content napredak-margin">
                    <p>Mikro ravnoteža</p>
                    <img src={Druga} />
                </div>
                <div className="secer-vlakna-sol napredak-content napredak-margin ostalo">
                    <p>Praćenje težine</p>
                    <img src={Treca} />
                </div>
            </div>
            <div className="footer">
                <div className="footer-nav footer1">
                    <Link to="/diary">
                        <i class="fas fa-home"></i>
                        <p>Početna</p>
                    </Link>
                </div>
                <div className="footer-nav footer2">
                    <Link to="/progress">
                        <i class="fas fa-chart-line"></i>
                        <p>Napredak</p>
                    </Link>
                </div>
                <div className="footer-nav footer3">
                    <Link to="/settings">
                        <i class="fas fa-cog"></i>
                        <p>Postavke</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Progress