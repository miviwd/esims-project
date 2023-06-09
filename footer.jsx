import React from "react";
import './footer.css';
import logoEsims from '../../assets/images/logo-eSIMS-branco.png';
import youtube from '../../assets/icons/youtube.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about">
                            <img src={logoEsims} alt="Logo eSims" />
                            <p>eSIMs é uma marca da JSC e é uma Market Place que permite aos consumidores encontrar e comprar as melhores ofertas de dados móveis através do eSIM as melhores operadoras ao redor do mundo.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-tool">
                            <h4>Institucional</h4>
                            <ul>
                                <li>
                                    <a href="">Quem somos</a>
                                </li>
                                <li>
                                    <a href="">Depoimentos</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Central de ajuda</a>
                                </li>
                                <li>
                                    <a href="">Compre seu eSIM</a>
                                </li>
                                <li>
                                    <a href="">Torne-se um afiliado</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-tool">
                            <h4>Canais de atendimento</h4>
                            <ul>
                                <li>
                                    <a href="">Termos e condições</a>
                                </li>
                                <li>
                                    <a href="">Política de privacidade</a>
                                </li>
                                <li>
                                    <a href="">Política de reembolso</a>
                                </li>
                            </ul>     
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-tool">
                            <h4>Regiões</h4>
                            <ul>
                                <li>
                                    <a href="">Europa</a>
                                </li>
                                <li>
                                    <a href="">Ásia</a>
                                </li>
                                <li>
                                    <a href="">Américas</a>
                                </li>
                                <li>
                                    <a href="">Oriente Médio</a>
                                </li>
                                <li>
                                    <a href="">Oceania</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-tool">
                            <h4>Países</h4>
                            <ul>
                                <li>
                                    <a href="">Estados Unidos</a>
                                </li>
                                <li>
                                    <a href="">França</a>
                                </li>
                                <li>
                                    <a href="">Arábia Saudita</a>
                                </li>
                                <li>
                                    <a href="">Reino Unido</a>
                                </li>
                                <li>
                                    <a href="">Japão</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="media">
                            <a href="">
                                <img src={youtube}alt="logo youtube" />
                            </a>
                            <a href="">
                                <img src={linkedin} alt="logo linkedin" />
                            </a>
                            <a href="">
                                <img src={instagram }alt="logo instagram" />
                            </a>
                        </div>
                        <div className="copyright">
                            <span>2023 © - Todos os Direitos Reservados - The Penser</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}