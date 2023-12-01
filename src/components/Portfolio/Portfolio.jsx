import React, { useState } from "react";

export default function Portfolio() {
    const [data, setData]= useState ([
        {img:'./images/1.jpg', id:'img1'},
        {img:'./images/2.jpg', id:'img2'},
        {img:'./images/3.jpg', id:'img3'},
        {img:'./images/4.jpg', id:'img4'},
        {img:'./images/5.jpg', id:'img5'},
        {img:'./images/6.jpg', id:'img6'},


    ]

    )
    
    return
    <>
    <header className="portfolio py-5 text-center">
        <h2 className="fw-bolder mb-5">PORTFOLIO COMPONENT</h2>
        <div className="container">
            <div className="row g-4">
                {data.map((item)=> (
                <div className="col-md-4">
                    <div className="portfolio-item">
                    <img src={item.img} alt="" className="w-100 rounded-3"/>
                    <div data-bs-toggle="modal" data-bs-target={"#"+item.id} className="plus rounded-3">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    </div>
                    
                </div>


                ))}
                {data.map((item)=>
                <>


<div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
     
      <div className="modal-body p-0">
        <img src={item.img} className="w-100" alt=""/>
      </div>

    </div>
  </div>
</div>
                </>

                )}
                
            </div>
        </div>
    </header>
    
    </>
}