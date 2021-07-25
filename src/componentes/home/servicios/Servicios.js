import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
//import './Slider.css';

class Servicios extends React.Component {

    render() {
        const header1 = <img style={{ width: '100%', height: '240px' }} alt="Card" src='https://arzakpsicologia.es/wp-content/uploads/2020/04/tipos-de-terapia.jpg'/>;
        const header2 = <img style={{ width: '100%', height: '240px' }} alt="Card" src='https://narapsicologia.es/wp-content/uploads/2020/08/terapia_2_gif_narapsicologia-901x675.jpg' />;
        const header3 = <img style={{ width: '100%', height: '240px' }} alt="Card" src='https://www.yorokobu.es/wp-content/uploads/2018/11/terapia-pareja.jpg' />;
        const header4 = <img style={{ width: '100%', height: '240px' }} alt="Card" src='https://d2lcsjo4hzzyvz.cloudfront.net/blog/wp-content/uploads/2020/11/26144509/Terapia-de-pareja-.jpg' />;
        const footer = <Button className="col-12" label="Seguir leyendo..." style={{ marginRight: '.25em' }} />;
        
        return (
            <div class="row justify-content-around">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-3">
                    <Card title="Texto terapia 1" subTitle="Subtítulo" style={{ width: '100%' }} footer={footer} header={header1}>
                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-3">
                    <Card title="Texto terapia 2" subTitle="Subtítulo" style={{ width: '100%' }} footer={footer} header={header2}>
                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-3">
                    <Card title="Texto terapia 3" subTitle="Subtítulo" style={{ width: '100%' }} footer={footer} header={header3}>
                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-3">
                    <Card title="Texto terapia 4" subTitle="Subtítulo" style={{ width: '100%' }} footer={footer} header={header4}>
                        <p className="p-m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Servicios;