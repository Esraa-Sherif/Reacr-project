import React from "react";

const Footer = () => {
    return (
        <>
            <Footer className="fixed-bottom pt-5 text-center">
<div className="container pb-5">
    <div className="row">

        <div className="col-md-4">
            <h2 className="fw-bold text-white mb-3">LOCATION</h2>
            <p className="text-white mb-2">2215 John Daniel Drive</p>
            <p className="text-white mb-2">Clark, MO 65243</p>
        </div>
        
        <div className="col-md-4">
        <h2 className="fw-bold text-white mb-3">AROUND THE WEB</h2>
        <div className="icon d-flex justify-content-center align-item-center mt-3">
        <div className="icon2 d-flex justify-content-center align-item-center me-3"> <i className="fa-brands fa-facebook fa-xl text-white"></i></div>
        <div className="icon2 d-flex justify-content-center align-item-center me-3"> <i className="fa-brands fa-twitter fa-xl text-white"></i></div>
        <div className="icon2 d-flex justify-content-center align-item-center me-3"> <i className="fa-brands fa-linkedin fa-xl text-white"></i></div>
        <div className="icon2 d-flex justify-content-center align-item-center me-3"> <i className="fa-brands fa-web fa-xl text-white"></i></div>

            </div>
            </div>

        <div className="col-md-4">
            <div>
        <h2 className="fw-bold text-white mb-3">ABOUT FREELANCER</h2>
        <p className="text-white mb-2">freelance is free to use feature, for more info contact us</p>
            </div>
            </div>

    </div>
</div>

            <div className="footer-feet py-5 text-white">
                <p>Copyright @ Your Website 2024</p>
            </div>
            </Footer>
        </>
    )
}
export default  Footer;