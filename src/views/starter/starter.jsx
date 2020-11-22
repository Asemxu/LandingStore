import React from 'react';
// import {
//     Row,
//     Col
// } from 'reactstrap';
import { ComponentsProducts } from 'components/dashboard-components';
import data from '../../database/data.json';

const Starter = (props) => {
    let path = props.location.pathname;
    let result = "";
    path = path.substring(1);
    switch(path){
        case "Inicio":
            return null;
        case "Casacas":
            result = data.Casacas;
            break;
        case "Poleras":
            result = data.Poleras;
            break;
        case "Pantalones":
            result = data.Pantalones;
            break;
        case "Camisas":
            result = data.Camisas;
            break;
        case "Blusas":
            result = data.Blusas;
            break;
        case "Polos":
            result = data.Polos;
            break;
        case "Bermudas":
            result = data.Bermudas;
            break
    }
    return (
        <div>
            {/* <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row> */}
            <ComponentsProducts data = {result} categoria = {path}/>
        </div>
    );
}

export default Starter;