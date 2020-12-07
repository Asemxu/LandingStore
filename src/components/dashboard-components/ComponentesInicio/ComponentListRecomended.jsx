import React from 'react';
import './styles.css';
import Product from '../ComponentsProducts/ComponentProduct';
export default class ComponentListRecomended extends React.Component{
    constructor(props){
        super(props);
        this.data = props.data;
    }
    render(){
        return(
            <React.Fragment>
                <div className="container__list-recomended">
                    <h2>Los Mas Recomendado </h2>
                    <div className="list__recomended">
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