import React from "react";
import Slider from './ComponentSlider';
import MostListPopular from './ComponentListPopular';
import MostListRecomended from './ComponentListRecomended';
import database from '../../../database/data.json';
import './styles.css';
// import {
//     Card,
//     CardBody,
//     CardTitle,
// } from 'reactstrap';

const Feeds = () => {
    const listMostPopular = getMostPopular();
    const listRecomended = getRecomended();
    return(
        <React.Fragment>
            <Slider />
            <MostListPopular data={listMostPopular}/>
            <MostListRecomended data={listRecomended}/>
        </React.Fragment>
    );
}

const getMostPopular = () =>{
    return [
        database.Poleras.products[0],
        database.Pantalones.products[0],
        database.Casacas.products[0],
        database.Polos.products[0],
        database.Camisas.products[0],
        database.Blusas.products[0],
        database.Bermudas.products[0],
        database.Chalecos.products[0],

    ]
}

const getRecomended = () =>{
    return [
        database.Poleras.products[5],
        database.Pantalones.products[2],
        database.Casacas.products[3],
        database.Polos.products[1],
        database.Camisas.products[4],
        database.Blusas.products[0],
        database.Bermudas.products[1],
        database.Chalecos.products[0],

    ]
}

export default Feeds;
