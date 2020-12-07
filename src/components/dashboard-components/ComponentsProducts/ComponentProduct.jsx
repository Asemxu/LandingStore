import React from 'react';
import { Card, CardBody, /*Tooltip*/ Row, Col } from "reactstrap";
import {Link} from 'react-router-dom';


const isDisponible = (status) =>{
    let className = "";
    let estado = "";
    if(status){
        className = "disponible";
        estado = "Disponible";
    }else{
        className = "no_disponible";
        estado = "No disponible"
    }
    return (
        <b className={className}>{estado}</b>
    )
}

const ComponentProduct = (props) => {
    const producto = props.data;
    const cols = props.cols;
    return (
        <Col lg={cols} key={producto.id}>
            <Card className="blog-widget">
                <CardBody>
                    <div className="blog-image">
                        <img src={require('../../../assets/images/products'+producto.img)} alt="img" className="img-fluid img_most" />
                    </div>
                    <h4>{producto.nombre}</h4>
                    <div className="badge badge-rounded badge-success text-white">
                        {producto.categoria}
                    </div>
                    <p className="mt-3 mb-3">
                        Precio : S/. {producto.precio}.00
                    </p>
                    <p className="mt-3 mb-3 text-center">
                        {isDisponible(producto.status)}
                    </p>
                    <div className="btn_añadir">
                        <input type="button" className="btn btn-success btn_carrito" value="Añadir al Carrito 🛒" />
                    </div>
                    <div className="d-flex">
                        <div className="read">
                            <Link to="#" className="link font-medium">
                                Read More
                            </Link>
                        </div>
                        <div className="ml-auto">
                            <Link to="#"   className="link mr-2" id="TooltipExample">
                                <i className="mdi mdi-heart-outline" />
                            </Link>
                            {/* <Tooltip
                                placement="top"
                                isOpen={tooltipOpen}
                                target="TooltipExample"
                                toggle={toggle.bind(null)}
                            >
                                Like
                            </Tooltip> */}
                            <Link to="#"  className="link" id="TooltipExample2">
                            <i className="mdi mdi-share-variant" />
                            </Link>
                            {/* <Tooltip
                                placement="top"
                                isOpen={tooltipOpen2}
                                target="TooltipExample2"
                                toggle={toggle2.bind(null)}
                            >
                                Share
                            </Tooltip> */}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>    
    )
}

export default ComponentProduct;