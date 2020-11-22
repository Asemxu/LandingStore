import React from 'react';

const Footer = () => {
    return (
        <footer className="footer text-center">
            <h5>Cajamarca, Perú</h5>
            <div className="footer_icons">
                <a href={"tel:"+"http://987771610"}>
                    <i className="mdi mdi-phone icon_header_footer"></i> 
                </a>
                <a href="https://www.google.com" target="_BLANK">
                    <i className="mdi mdi-google-maps icon_header_footer"> </i> 
                </a>
                <a href="https://www.facebook.com" target="_BLANK">
                    <i className="mdi mdi-facebook-box icon_header_footer"> </i> 
                </a>
            
                <a href={"mailto:"+"renzo@hotmail.com"}>
                    <i className="mdi mdi-gmail icon_header_footer"> </i> 
                </a>
            </div>
        </footer>
    );
}
export default Footer;
