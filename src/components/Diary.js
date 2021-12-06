import { Link } from "react-router-dom"
import './css/Diary.css'

const Diary = () => {
    return (
        <div className="diary">
            <div className="home">
                <div className="header">
                    <div className="header-link">
                        <Link to="/">CalorieCounter</Link>
                    </div>
                    <div className="pie-calendar">
                        <div className="header-calendar">
                            <i class="fas fa-server"></i>
                        </div>
                        <div className="header-calendar">
                            <Link to="/nutrition">
                                <i class="fas fa-chart-pie"></i>
                            </Link>
                        </div>
                        <div className="header-calendar">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="diary-content">
                <div className="secer-vlakna-sol date">
                    <div className="mar kolicina-hrane datum-diary">
                        <i className="fas fa-chevron-left"></i>
                        <span>Danas</span>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
                <div className="diary-div preostale-kalorije">
                    <div className="preostale-kalorije-naslov">
                        <p>Pregled kalorija</p>
                    </div>
                    <div className="preostale-kalorije-brojevi">
                        <div className="broj">
                            <p>2620</p>
                            <span>Cilj</span>
                        </div>
                        <div>-</div>
                        <div className="broj">
                            <p>744</p>
                            <span>Hrana</span>
                        </div>
                        <div>=</div>
                        <div className="broj broj1">
                            <p>1876</p>
                            <span>Preostalo</span>
                        </div>
                    </div>
                </div>
                <div className="diary-div unos-hrane">
                    <div className="jelo-kalorije">
                        <p>Doručak</p>
                        <span>744</span>
                    </div>
                    <div className="hrana-kolicina-kalorije">
                        <Link to="/edit-food">
                            <div className="hrana-kolicina">
                                <p>Čokolino</p>
                                <span>200,0g</span>
                            </div>
                        </Link>
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
                        <div className="hrana-kolicina dodaj-hranu">
                            <p>Dodaj hranu</p>
                        </div>
                    </div>
                </div>
                <div className="diary-div unos-hrane">
                    <div className="jelo-kalorije">
                        <p>Ručak</p>
                        <span>0</span>
                    </div>
                    <div className="hrana-kolicina-kalorije">
                        <Link to="/enter-food">
                            <div className="hrana-kolicina dodaj-hranu">
                                <p>Dodaj hranu</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="diary-div unos-hrane">
                    <div className="jelo-kalorije">
                        <p>Večera</p>
                        <span>0</span>
                    </div>
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina dodaj-hranu">
                            <p>Dodaj hranu</p>
                        </div>
                    </div>
                </div>
                <div className="diary-div unos-hrane ostalo">
                    <div className="jelo-kalorije">
                        <p>Ostalo</p>
                        <span>0</span>
                    </div>
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina dodaj-hranu">
                            <p>Dodaj hranu</p>
                        </div>
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

export default Diary