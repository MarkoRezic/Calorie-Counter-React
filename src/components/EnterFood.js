import { Link } from "react-router-dom"
import './css/Diary.css'
import './css/Food.css'

const EnterFood = () => {
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
                            <p>Ručak</p>
                        </div>
                    </div>
                    <div className="ukloni-spremi">
                        <div className="header-ukloni">
                            <Link to="/make-food">
                                <i className="fas fa-plus"></i>
                            </Link>
                        </div>
                        <div className="header-spremi">
                            <i className="fas fa-barcode"></i>
                        </div>
                    </div>
                </div>
                <div className="uredi-podaci">
                    <div className="pretrazi">
                        <input type="text" placeholder="&#xF002; Search" />
                    </div>
                    <div className="povijest-hrana">
                        <div className="povijest-pretrazi">
                            <p>Povijest</p>
                        </div>
                        <div className="moja-hrana-pretrazi">
                            <p>Moja hrana</p>
                        </div>
                    </div>
                </div>
                <div className="secer-vlakna-sol">
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Čokolino</p>
                            <span>200,0g</span>
                        </div>
                        <div className="kalorije-jelo"><p>744</p></div>
                    </div>
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Čokolino</p>
                            <span>200,0g</span>
                        </div>
                        <div className="kalorije-jelo"><p>744</p></div>
                    </div>
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Čokolino</p>
                            <span>200,0g</span>
                        </div>
                        <div className="kalorije-jelo"><p>744</p></div>
                    </div>
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Čokolino</p>
                            <span>200,0g</span>
                        </div>
                        <div className="kalorije-jelo"><p>744</p></div>
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

export default EnterFood