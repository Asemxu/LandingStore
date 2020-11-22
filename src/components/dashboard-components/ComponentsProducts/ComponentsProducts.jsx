import React, { useState } from "react";
import { Card, CardBody, Tooltip, Row, Col } from "reactstrap";
import "../../../assets/scss/Products.css";
import img1 from "../../../assets/images/big/img1.jpg";
import img2 from "../../../assets/images/big/img2.jpg";
import img3 from "../../../assets/images/big/img3.jpg";
import notFound_1 from "../../../assets/images/products-icons/svg/404-error.svg";
import notFound_2 from "../../../assets/images/products-icons/svg/not-found.svg";

const TechCards = (props) => {
  const data_info = props.data;
  const categoria = props.categoria;
  const img_bg = "../../../assets/images/products" + props.data.imagen;
  // const [tooltipOpen, setTooltipOpen] = useState(false);
  // const [tooltipOpen2, setTooltipOpen2] = useState(false);
  // const [tooltipOpen3, setTooltipOpen3] = useState(false);
  // const [tooltipOpen4, setTooltipOpen4] = useState(false);
  // const [tooltipOpen5, setTooltipOpen5] = useState(false);
  // const [tooltipOpen6, setTooltipOpen6] = useState(false);

  // const toggle = () => {
  //     setTooltipOpen(!tooltipOpen);
  // }

  // const toggle2 = () => {
  //     setTooltipOpen2(!tooltipOpen2);
  // }

  // const toggle3 = () => {
  //     setTooltipOpen3(!tooltipOpen3);
  // }

  // const toggle4 = () => {
  //     setTooltipOpen4(!tooltipOpen4);
  // }

  // const toggle5 = () => {
  //     setTooltipOpen5(!tooltipOpen5);
  // }

    // const toggle6 = () => {
    //     setTooltipOpen6(!tooltipOpen6);
    // }

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

    const isNullOrIsEmpty = () =>{
        if(data_info.products !== null && data_info.products.length > 0){
            console.log("entro");
            return (
                <React.Fragment>
                 <Row>
                    {/*IsData()*/}
                    {data_info.products.map((info) => {
                        return(
                            <Col lg="4" key={info.id}>
                                <Card className="blog-widget">
                                    <CardBody>
                                        <div className="blog-image">
                                            <img src={require('../../../assets/images/products'+info.img)} alt="img" className="img-fluid" />
                                        </div>
                                        <h4>{info.nombre}</h4>
                                        <div className="badge badge-rounded badge-success text-white">
                                            {categoria}
                                        </div>
                                        <p className="mt-3 mb-3">
                                            Precio : S/. {info.precio}.00
                                        </p>
                                        <p className="mt-3 mb-3 text-center">
                                            {isDisponible(info.status)}
                                        </p>
                                        <div className="btn_añadir">
                                            <input type="button" className="btn btn-success" value="Añadir al Carrito 🛒" />
                                        </div>
                                        <div className="d-flex">
                                            <div className="read">
                                                <a className="link font-medium">
                                                    Read More
                                                </a>
                                            </div>
                                            <div className="ml-auto">
                                                <a className="link mr-2" id="TooltipExample">
                                                    <i className="mdi mdi-heart-outline" />
                                                </a>
                                                {/* <Tooltip
                                                    placement="top"
                                                    isOpen={tooltipOpen}
                                                    target="TooltipExample"
                                                    toggle={toggle.bind(null)}
                                                >
                                                    Like
                                                </Tooltip> */}
                          <a className="link" id="TooltipExample2">
                            <i className="mdi mdi-share-variant" />
                          </a>
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
              );
            })}
          </Row>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container__error">
            <i id="errori-img">
              <img className="img-error" src={notFound_2} />
            </i>
            <i id="errori-text">Lo sentimos, aún no tenemos artículos en esta categoría.</i>
          </div>
        </React.Fragment>
      );
    }
  };
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Hook                                                       */
    /*--------------------------------------------------------------------------------*/
    <React.Fragment>
      <div
        className="img__container"
        style={{
          backgroundImage: `url(${require("../../../assets/images/products" +
            data_info.imagen)})`,
        }}
      >
        {/* <img  className="img-fluid" src="" alt={categoria}/> */}
        <h1 className="title_categoria">{categoria}</h1>
      </div>
      {/* <div className={`img__${categoria}`} style={style}>
                </div> */}
      {isNullOrIsEmpty()}
    </React.Fragment>
  );
};

export default TechCards;
