import React from "react";
import programmer from "../images/webdev.jpg";
function About() {
  return (
    <section id="about" className="">
      <div className="text-center">
        <h1 className="title">About</h1>
      </div>
      <div className="md:flex">
        <div className=" wow slideInLeft w-1/3 ">
          <div className="">
            <img src={programmer} alt="developer" className=" rotate-image" />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="m-6 wow slideInRight">
            Hello, I am Ahmed Zubairu , a mid-level professional{" "}
            <strong>Web developer</strong> and a L400 student of the University
            of Ghana reading Agricultural Economics . I am very passionate about
            software development and I love spending time on complex problems.{" "}
            <br />
            <br />I have hands on experience in building complex react , laravel
            and MERN stack applictions . Recently I had the opportunity to
            worked under a team of react-native developers in developing the
            interface of a car-pooling application popularly known as Vielly. I
            also interned at Anchora technologies where I worked on{" "}
            <a
              href="http://app.fayasms.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fayasms
            </a>{" "}
            (A bulk sms platform ). Added the the above , I am a part-time
            free-lancer <br />
            <br />
            When am not coding , am either resting or watching anime.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
