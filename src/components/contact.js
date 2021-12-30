import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="text-center">
        <h1 className="title">Contact</h1>
      </div>
      <div className="flex ">
        <div className="w-1/3">
          Please don't hesitate to reach out to me. My inbox is open to
          everyone. Whether you have a "gig" , any new opportuninty or even a
          high. I'll definitely get back to you ASAP.
          <div>
            <a href="#helo" className=" ">
              devahmed365@gmail.com
            </a>
          </div>
        </div>
        <div>
          <img src="/assets/creator.gif" alt="gig" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
