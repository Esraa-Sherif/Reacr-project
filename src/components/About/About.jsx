import React from "react";

export default function About() {
    return
        <>
        <section className="vh-100 text-center about d-flex justify-content-center align-item-center">
            <div>
                <h className="fw-bolder text-white mb-4">ABOUT COMPONENT</h>
                <div className="container">
                    <div className="row">
                    <div className="icon-home">   <i className="fa-solid fa-star text-white fa-xl"></i> </div>
                        <div className="col-md-6"><p className="text-white"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas distinctio, beatae expedita corporis amet sapiente odit error minus voluptatibus soluta.
                        </p>
                        </div>
                        <div className="col-md-6"><p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nemo minima eveniet. Totam eius ducimus blanditiis alias vel libero assumenda?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
}  