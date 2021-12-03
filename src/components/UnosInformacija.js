import { Link } from "react-router-dom"
import './css/Home.css'

const UnosInformacija = () => {
    return (
        <div>
            <div className="home podaci">
                <div className="unos-inf">
                    <div className="unos-inf-content">
                        <div className="obavjestenje">
                            <p>Unesite Vaše informacije kako bi izračunali Vaš dnevni kalorijski cilj</p>
                        </div>
                        {/* <div className="pitanje pitanje1">
                            <div className="info-left"><i className="fas fa-dot-circle"></i></div>
                            <div className="info-right">
                                <div className="info-right-pitanje">
                                    <p>Koji je Vaš spol?</p>
                                </div>
                                <div className="spol-izbor">
                                    <div className="tipka tipka-spol">Muški</div>
                                    <div className="tipka tipka-spol tipka-2">Ženski</div>
                                </div>
                            </div>
                        </div>
                        <div className="pitanje">
                            <div className="info-left"><i className="fas fa-dot-circle"></i></div>
                            <div className="info-right">
                                <div className="info-right-pitanje">
                                    <p>Koliko godina imate?</p>
                                </div>
                                <input type="number" />
                            </div>
                        </div>
                        <div className="pitanje">
                            <div className="info-left"><i className="fas fa-dot-circle"></i></div>
                            <div className="info-right">
                                <div className="info-right-pitanje">
                                    <p>Koliko često ste aktivni?</p>
                                </div>
                                <select name="cars" id="cars">
                                    <option value="malo">Malo ili nimalo vježbanja</option>
                                    <option value="1-3">1-3 treninga tjedno (lagano aktivan)</option>
                                    <option value="3-5">3-5 treninga tjedno (umjereno aktivan)</option>
                                    <option value="6-7">6-7 treninga tjedno (vrlo aktivan)</option>
                                </select>
                            </div>
                        </div> */}
                        {/* <div className="pitanje pitanje1">
                            <div className="info-left"><i className="fas fa-dot-circle"></i></div>
                            <div className="info-right">
                                <div className="info-right-pitanje">
                                    <p>Koja je Vaša kilaža?</p>
                                </div>
                                <input type="number" />
                            </div>
                        </div><div className="pitanje">
                            <div className="info-left"><i className="fas fa-dot-circle"></i></div>
                            <div className="info-right">
                                <div className="info-right-pitanje">
                                    <p>Koliko ste visoki?</p>
                                </div>
                                <input type="number" />
                            </div>
                        </div> */}
                        <div className="preporucene-kalorije">
                            <div className="preporuka-p"><p>Preporučeni dnevni unos</p></div>
                            <div className="preporuka-content">
                                <p>1535</p>
                                <span>Cal</span>
                            </div>
                        </div>
                        <div className="pitanje">
                            <div className="info-left"><i className="fas fa-dot-circle"></i></div>
                            <div className="info-right">
                                <div className="info-right-pitanje">
                                    <p>Prilagodite brzinu napredovanja</p>
                                </div>
                                <select name="cars" id="cars">
                                    <option value="izg">Izgubiti 0,25kg tjedno</option>
                                    <option value="izg">Izgubiti 0,5kg tjedno</option>
                                    <option value="izg">Izgubiti 0,75kg tjedno</option>
                                    <option value="izg">Izgubiti 1kg tjedno</option>
                                    <option value="izg">Održavaj trenutnu kilažu</option>
                                    <option value="izg">Dobiti 0,25kg tjedno</option>
                                    <option value="izg">Dobiti 0,5kg tjedno</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="unos-inf-bottom">
                        <div className="tipka tipka-no-color">
                            <Link to="/">Nazad</Link>
                        </div>
                        <div className="left-right">
                            <i class="fas fa-circle"></i>
                            <i class="fas fa-circle bijeli-krug"></i>
                            <i class="fas fa-circle"></i>
                            <i class="fas fa-circle"></i>
                        </div>
                        <div className="tipka-2 tipka-link">
                            <Link to="/diary">Dalje</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnosInformacija