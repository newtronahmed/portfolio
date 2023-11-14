import React from "react";
// import programmer from "../images/webdev.jpg";
function About() {
  return (
    <section id="about" className="">
      <div className="text-center">
        <h1 className="title">About</h1>
      </div>
      <div className="">

        <div className="">
          <div className="m-6 wow slideInRight text-center">
            Hello, I am Ahmed Zubairu , a mid-level professional{" "}
            <strong>Web developer</strong>. I am very passionate about
            software development and I love spending time on complex problems.{" "}
            <br />
            <br />
            I've collaborated with more experienced developers which has aided me to grasp complex
            web development concepts . I practice consistently hence I get better as day goes by.
            <br />
            <br />I have hands on experience in building complex react , laravel
            and MERN stack applications .
            <br />
            <br /> My most notable achievement is contributing to <a
              href="http://app.fayasms.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fayasms,
            </a> an sms platform during my internship.
            <br />
            <br />
            When am not working , you'll find me watching anime .
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
