import { Link } from "react-router-dom"
import './css/Diary.css'
import './css/Food.css'

const Settings = () => {
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
                            <p>Postavke</p>
                        </div>
                    </div>
                </div>
                <div className="secer-vlakna-sol postavke-content">
                    <div className="hrana-kolicina-kalorije postavke">
                        <div className="hrana-kolicina">
                            <p>Moj cilj</p>
                            <span>Održavati kilažu</span>
                        </div>
                    </div>
                    {/* <div className="modal">
                        <div className="modal-title">
                            <p>Moj cilj</p>
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
                        <div className="rucni-unos">
                            <p>Možete prilagoditi Vaš dnevni unos kalorija manualno:</p>
                            <div className="kolicina-hrane modal-input">
                                <input type="number" />
                                <span>Cal</span>
                            </div>
                        </div>
                        <div className="modal-potvrda">
                            <div className="tipka tipka-no-color">
                                <Link to="/">Nazad</Link>
                            </div>
                            <div className="tipka-2 tipka-link">
                                <Link to="/diary">Dalje</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Level aktivnosti</p>
                            <span>Održavaj trenutnu kilažu</span>
                        </div>
                    </div>
                    {/* <div className="modal">
                        <div className="modal-title">
                            <p>Level aktivnosti</p>
                        </div>
                        <div className="rucni-unos">
                            <p>Level aktivnosti se koristi da se odredi Vaš cilj automatski. Ažuriraj level aktivnosti:</p>
                        </div>
                        <select name="cars" id="cars">
                                    <option value="malo">Malo ili nimalo vježbanja</option>
                                    <option value="1-3">1-3 treninga tjedno (lagano aktivan)</option>
                                    <option value="3-5">3-5 treninga tjedno (umjereno aktivan)</option>
                                    <option value="6-7">6-7 treninga tjedno (vrlo aktivan)</option>
                                </select>
                        <div className="modal-potvrda">
                            <div className="tipka tipka-no-color">
                                <Link to="/">Nazad</Link>
                            </div>
                            <div className="tipka-2 tipka-link">
                                <Link to="/diary">Dalje</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Kilaža</p>
                            <span>74,6kg</span>
                        </div>
                    </div>
                    {/* <div className="modal">
                        <div className="modal-title">
                            <p>Kilaža</p>
                        </div>
                        <div className="rucni-unos">
                            <p>Kilaža se koristi da se odredi Vaš cilj automatski. Ažuriraj kilažu:</p>
                        </div>
                        <div className="rucni-unos">
                            <div className="kolicina-hrane modal-input">
                                <input type="number" />
                                <span>kg</span>
                            </div>
                        </div>
                        <div className="modal-potvrda">
                            <div className="tipka tipka-no-color">
                                <Link to="/">Nazad</Link>
                            </div>
                            <div className="tipka-2 tipka-link">
                                <Link to="/diary">Dalje</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Visina</p>
                            <span>183cm</span>
                        </div>
                    </div>
                    {/* <div className="modal">
                        <div className="modal-title">
                            <p>Visina</p>
                        </div>
                        <div className="rucni-unos">
                            <p>Visina se koristi da se odredi Vaš cilj automatski. Ažuriraj visinu:</p>
                        </div>
                        <div className="rucni-unos">
                            <div className="kolicina-hrane modal-input">
                                <input type="number" />
                                <span>cm</span>
                            </div>
                        </div>
                        <div className="modal-potvrda">
                            <div className="tipka tipka-no-color">
                                <Link to="/">Nazad</Link>
                            </div>
                            <div className="tipka-2 tipka-link">
                                <Link to="/diary">Dalje</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Spol</p>
                            <span>Muški</span>
                        </div>
                    </div>
                    {/* <div className="modal">
                        <div className="modal-title">
                            <p>Spol</p>
                        </div>
                        <div className="rucni-unos">
                            <p>Spol je važan za automatski izračun dnevnog cilja.</p>
                        </div>
                        <div className="spol-izbor spol-modal">
                            <div className="spol-modal-izbor">
                                <input type="radio" name="spol" />
                                <p>Muški</p>
                            </div>
                            <div className="spol-modal-izbor">
                                <input type="radio" name="spol" />
                                <p>Ženski</p>
                            </div>
                        </div>
                        <div className="modal-potvrda">
                            <div className="tipka tipka-no-color">
                                <Link to="/">Nazad</Link>
                            </div>
                            <div className="tipka-2 tipka-link">
                                <Link to="/diary">Dalje</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="hrana-kolicina-kalorije">
                        <div className="hrana-kolicina">
                            <p>Godine</p>
                            <span>21</span>
                        </div>
                    </div>
                    {/* <div className="modal">
                        <div className="modal-title">
                            <p>Godine</p>
                        </div>
                        <div className="rucni-unos">
                            <p>Godine su važne za automatski izračun dnevnog cilja.</p>
                        </div>
                        <div className="rucni-unos">
                            <div className="kolicina-hrane modal-input">
                                <input type="number" />
                            </div>
                        </div>
                        <div className="modal-potvrda">
                            <div className="tipka tipka-no-color">
                                <Link to="/">Nazad</Link>
                            </div>
                            <div className="tipka-2 tipka-link">
                                <Link to="/diary">Dalje</Link>
                            </div>
                        </div>
                    </div> */}
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

export default Settings