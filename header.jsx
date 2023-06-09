import React from "react";
import './header.css';
import logoEsims from '../../assets/images/logo-eSims-preto.png';
import search from '../../assets/icons/search.svg'
import user from '../../assets/icons/person.svg'
import cart from '../../assets/icons/cart.svg'

export default function Header() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav class="navbar navbar-expand-lg">
                            <div className="container">
                                <a class="navbar-brand" href="#">
                                    <img src={logoEsims} alt="Logo eSims" />
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link active" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                Home
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">O eSIM</a></li>
                                                <li><a class="dropdown-item" href="#">QUEM SOMOS</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Central de ajuda</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Torne-se um parceiro</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="navbar-tool">
                                    <button>
                                        <img src={search} alt="lupa" />
                                    </button>
                                    <button>
                                        <img src={user} alt="usuário"  className="user-img"/>
                                    </button>
                                    <button className="btn-shopping-cart">
                                        <div className="amount-product">
                                            <span>10</span>
                                        </div>
                                        <img src={cart} alt="carrinho" />
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}