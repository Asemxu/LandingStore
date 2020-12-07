import React from 'react';

const Footer = () => {
    const fecha = new Date();
    return (
        <footer className="footer text-center">
            <h5>Cajamarca, Perú</h5>
            <div className="footer_icons">
                <a  className="links" rel="noopener noreferrer" target="_BLANK"  href="https://wa.link/idrxr9">
                    <i className="mdi mdi-whatsapp icon_header_footer">961558181</i> 
                </a>
                <a  className="links" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=-7.1609822214812%2C-78.520373007218&fbclid=IwAR08Tm3bS9PxWAwn_1YGSi_5sFkh8rsgwnVMVOC9FQERallNi7ijeJoGDYs" target="_BLANK">
                    <i className="mdi mdi-google-maps icon_header_footer"> </i> 
                </a>
                <a className="links" rel="noopener noreferrer" href="https://www.facebook.com/RaveUrban" target="_BLANK">
                    <i className="mdi mdi-facebook-box icon_header_footer"> RAVE -URBAN</i> 
                </a>

                <a className="links" rel="noopener noreferrer" href="https://www.instagram.com/rave_urban01/" target="_BLANK">
                    <i className="mdi mdi-instagram icon_header_footer"> RAVE -URBANO1</i> 
                </a>
            
                <a  className="links" href={"mailto:"+"renzo@hotmail.com"}>
                    <i className="mdi mdi-gmail icon_header_footer"> </i> 
                </a>
            </div>
            <br/>
            <div className="footer_footer">
                <h6>@Rave-Urban {fecha.getFullYear()}</h6>
            </div>
        </footer>
    );
}
export default Footer;
