import React from 'react';

import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 

class Home extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <main role="main" className="flex-shrink-0 mt-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 offset-1">
                                <Slider />
                                <Servicios />
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Home;