import React from "react";

export default function Contact() {
    return 
    <>
    <section className="contact py-5">
        <h4 className="fw-bolder text-center mb-5">
CONTACT SECTION
<div className="w-50 m-auto">
    <form action="">
        <input type="text" placeholder="User Name" className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5" />
        <input type="number" placeholder="User Age" className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5" />
        <input type="email" placeholder="User E-mail" className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5" />
        <input type="password" placeholder="User Password" className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5" />
<button className="btn send">Send</button>
    </form>
</div>
        </h4>
    </section>
    </>
}