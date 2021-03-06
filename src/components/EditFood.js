import { Link } from "react-router-dom"
import './css/Diary.css'
import './css/Food.css'

const EditFood = () => {
    return (
        <div className="food">
            <div className="edit-food-home">
                <div className="header-uredi">
                    <div className="header-icon-edit">
                        <div className="header-icon">
                            <Link to="/">
                                <i className="fas fa-arrow-left"></i>
                            </Link>
                        </div>
                        <div className="header-edit">
                            <p>Uredi unos</p>
                        </div>
                    </div>
                    <div className="ukloni-spremi">
                        <div className="header-ukloni">
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="header-spremi">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                </div>
                <div className="uredi-podaci">
                    <div className="mar naziv-hrane">
                        <p>Čokolino</p>
                    </div>
                    <div className="mar kolicina-hrane">
                        <p>Količina</p>
                        <input type="number" />
                    </div>
                    <div className="carbs-fat-protein-cal">
                        <div className="carbs-fat-protein">
                            <div className="vrijednost v1">
                                <p>54g</p>
                                <span>Ugljikohidrati</span>
                            </div>
                            <div className="vrijednost v2">
                                <p>5,4g</p>
                                <span>Masti</span>
                            </div>
                            <div className="vrijednost v3">
                                <p>8,4g</p>
                                <span>Proteini</span>
                            </div>
                        </div>
                        <div className="uredi-cal">
                            <div className="vrijednost vrijednost2">
                                <p>316</p>
                                <span>Cal</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secer-vlakna-sol">
                    <div className="mar kolicina-hrane">
                        <p>Šećeri</p>
                        <span>0</span>
                    </div>
                    <div className="mar kolicina-hrane">
                        <p>Vlakna</p>
                        <span>0</span>
                    </div>
                    <div className="mar kolicina-hrane">
                        <p>Sol</p>
                        <span>0</span>
                    </div>
                    <div className="mar kolicina-hrane">
                        <p>Kalcij</p>
                        <span>0</span>
                    </div>
                    <div className="mar kolicina-hrane">
                        <p>Željezo</p>
                        <span>0</span>
                    </div>
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

export default EditFood