import React from 'react';
import { Redirect } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer class="page-footer font-small stylish-color-dark pt-4" style={{ backgroundColor: '#F4FAFF' }}>
                <div class="container text-center text-md-left">
                    <div class="row">
                        <div class="col-md-4 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Compañía</h5>
                            <p>Grupo SATCOM | Volters KluVer</p>
                            <p>Desarrollando software durante mas de 20 años, apasionados por la innovación</p>
                        </div>
                        <hr class="clearfix w-100 d-md-none" />
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">CONTACTO</h5>
                            <ul class="list-unstyled list-inline text-center">
                                <li className="mb-3">+34 655815024</li>
                                <li class="list-inline-item">
                                    <a href="https://instagram.com" class="btn-floating btn-li mx-1">
                                        <img src="https://image.flaticon.com/icons/png/512/174/174855.png" style={{ width: '50px', height: '50px' }} />
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://facebook.com" class="btn-floating btn-dribbble mx-1">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" style={{ width: '50px', height: '50px' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr class="clearfix w-100 d-md-none" />
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">DIRECCIÓN</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <p>Calle Virgen del Carmen, Nº 2</p>
                                </li>
                                <li>
                                    <p>CIF: 3245643543234</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;