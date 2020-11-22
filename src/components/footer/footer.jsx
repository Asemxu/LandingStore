import React from 'react';

const Footer = () => {
    const fecha = new Date();
    return (
        <footer className="footer text-center">
            <h5>Cajamarca, Perú</h5>
            <div className="footer_icons">
                <a  className="links"  href={"tel:"+"http://959951172"}>
                    <i className="mdi mdi-phone icon_header_footer"></i> 
                </a>
                <a  className="links" href="https://www.google.com" target="_BLANK">
                    <i className="mdi mdi-google-maps icon_header_footer"> </i> 
                </a>
                <a className="links" href="https://www.facebook.com" target="_BLANK">
                    <i className="mdi mdi-facebook-box icon_header_footer"> </i> 
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
