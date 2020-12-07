import React from 'react';
// import { Card, CardBody, /*Tooltip*/ Row, Col } from "reactstrap";
// import {Link} from 'react-router-dom';
import Product from '../ComponentsProducts/ComponentProduct';
export default class ComponentListPopular extends React.Component{
    constructor(props){
        super(props);
        this.data = props.data;
    }
    render(){
        return(
            <React.Fragment>
                <div className="container__list-popular">
                    <h2>Los Mas Populares </h2>
                    <div className="list__popular">
                        {this.data.map((product) => {
                            return(
                                <React.Fragment key={product.id}>
                                    <Product key={product.id} data={product} cols={3} />
                                </React.Fragment>

                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}