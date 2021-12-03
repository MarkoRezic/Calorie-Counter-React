import { Link } from "react-router-dom"
import './css/Nutrition.css'
import './css/Diary.css'
import './css/Food.css'
import './css/Progress.css'
import Druga from './img/druga.jfif'

const Progress = () => {
    return (
        <div className="food">
            <div className="edit-food-home napredak-glavno">
                <div className="header-uredi">
                    <div className="header-icon-edit">
                        <div className="header-icon">
                            <Link to="/">
                                <i className="fas fa-arrow-left"></i>
                            </Link>
                        </div>
                        <div className="header-edit">
                            <p>Nutritivne vrijednosti</p>
                        </div>
                    </div>
                </div>
                <div className="secer-vlakna-sol">
                    <div className="secer-vlakna-sol date">
                        <div className="mar kolicina-hrane datum-diary">
                            <i className="fas fa-chevron-left"></i>
                            <span>Danas</span>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="nutrition-content">
                    <div className="nutr-title">
                        <div className="nutr-title-1">
                            <p>Ukupno</p>
                        </div>
                        <div className="nutr-title-1">
                            <p>Cilj</p>
                        </div>
                        <div className="nutr-title-1 nutr-ostalo">
                            <p>Preostalo</p>
                        </div>
                    </div>
                    <div className="nutr-content secer-vlakna-sol">
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Proteini</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>68</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>131</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo">
                                    <p>63g</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside proteini-line"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Ugljikohidrati</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>215</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>328</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo">
                                    <p>113</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside ugljikohidrati-line"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Masti</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>106</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>87</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo nutr-minus">
                                    <p>-19g</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside masti-line"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Šećeri</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>70</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>98</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo">
                                    <p>28g</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside ostalo-line"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Vlakna</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>4</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>38</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo">
                                    <p>34g</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside ostalo-line line1"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Sol</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>196</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>2300</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo">
                                    <p>2104mg</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside ostalo-line line2"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Kalcij</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>15</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>100</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo">
                                    <p>85%</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside ostalo-line line3"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                        <div className="nutr-content-top">
                            <div className="nutr-content-top-name">
                                <p>Željezo</p>
                            </div>
                            <div className="nutr-brojevi">
                                <div className="nutr-content-top-number">
                                    <p>1</p>
                                </div>
                                <div className="nutr-content-top-number">
                                    <p>100</p>
                                </div>
                                <div className="nutr-content-top-number nutr-ostalo">
                                    <p>99%</p>
                                </div>
                            </div>
                        </div>
                        <div className="nutr-content-bottom">
                            <div className="nutr-line">
                                <div className="nutr-line-inside ostalo-line line4"></div>
                            </div>
                        </div>
                        <div className="lajna"></div>
                    </div>
                </div>
                <div className="secer-vlakna-sol napredak-content napredak-margin ostalo">
                    <p>Mikro ravnoteža</p>
                    <img src={Druga} />
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