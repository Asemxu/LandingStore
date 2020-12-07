import React /*, { useState } */from "react";
import {Row} from 'reactstrap';
import "../../../assets/scss/Products.css";
// import img1 from "../../../assets/images/big/img1.jpg";
// import img2 from "../../../assets/images/big/img2.jpg";
// import img3 from "../../../assets/images/big/img3.jpg";
// import notFound_1 from "../../../assets/images/products-icons/svg/404-error.svg";
// import {Link} from 'react-router-dom';
import notFound_2 from "../../../assets/images/products-icons/svg/not-found.svg";
import Product from './ComponentProduct';
const TechCards = (props) => {
  const data_info = props.data;
  const categoria = props.categoria;
  // const img_bg = "../../../assets/images/products" + props.data.imagen;
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

    const isNullOrIsEmpty = () =>{
        if(data_info.products !== null && data_info.products.length > 0){
            console.log("entro");
            return (
                <React.Fragment>
                 <Row>
                    {/*IsData()*/}
                    {data_info.products.map((info) => {
                        return(
                           <Product key={info.id} data={info} cols={4} clasType=""/>
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
