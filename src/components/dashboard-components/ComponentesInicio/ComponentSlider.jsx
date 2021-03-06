import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "../../../assets/scss/slider.css";
//img
import img1 from "../../../assets/images/slider_img/pantalon_principal_1.jpg";
import img2 from "../../../assets/images/slider_img/polera_justDoIt_principal.jpeg";
import img3 from "../../../assets/images/slider_img/chaleco_principal.jpg";
import img4 from "../../../assets/images/slider_img/polera_principal_3.jpg";

const Slider = () => {
  return (
    <React.Fragment>
      <AwesomeSlider animation="cubeAnimation">
        <div className="slider-div" data-src={img1}>
          <i>Calidad</i>          
        </div>
        <div className="slider-div" data-src={img2}>
          <i>Personalidad</i>
        </div>
        <div className="slider-div" data-src={img3}>
          <i>Estilo</i>
        </div>
        <div className="slider-div" data-src={img4}>
          <i>Comodidad</i>
        </div>
      </AwesomeSlider>
    </React.Fragment>
  );
};

export default Slider;
