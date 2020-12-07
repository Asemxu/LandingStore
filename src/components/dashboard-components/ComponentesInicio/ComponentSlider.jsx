import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
const Slider = () =>{
    return(
       <React.Fragment>
            <AwesomeSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>
       </React.Fragment>
    )
}

export default Slider;