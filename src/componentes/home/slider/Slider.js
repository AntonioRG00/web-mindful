import React from 'react';
//import './Slider.css';

class Slider extends React.Component {
    render() {
        return (
            <div id="carouselTop" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselTop" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselTop" data-slide-to="1"></li>
                    <li data-target="#carouselTop" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://www.planchasdevapor.com/wp-content/uploads/2017/06/bg.jpg" alt="Primera img" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Primer Carrusel</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://www.planchasdevapor.com/wp-content/uploads/2017/06/bg.jpg" alt="Segunda img" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Segundo Carrusel</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://www.planchasdevapor.com/wp-content/uploads/2017/06/bg.jpg" alt="Tercera img" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Tercer Carrusel</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselTop" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselTop" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Siguiente</span>
                </a>
            </div>
        )
    }
}

export default Slider;