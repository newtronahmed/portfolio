import React from "react";
import programmer from "../images/webdev.jpg";
function About() {
  return (
    <section id="about" className="">
      <div className="text-center">
        <h1 className="title">About</h1>
      </div>
      <div className="flex ">
        <div className=" wow slideInLeft w-1/3 ">
          <div className="">
            <img src={programmer} alt="developer" className=" rotate-image" />
          </div>
        </div>
        <div className="w-2/3">
          <div className="m-6 wow slideInRight">
            Hello, I am Ahmed Zubairu , a mid-level professional{" "}
            <strong>Web developer</strong> and a L400 student of the University
            of Ghana reading Agricultural Economics . I am a hardworking ,
            creative , and a very honest person . I am very passionate about
            software development and I enjoy solving problems. I am a
            self-taught web developer. <br />
            <br />
            I have hands on experience in building complex react , laravel and
            Mern stack applictions . Recently I had the opportunity to worked
            under a team of react-native developers in developing the interface
            of a car-pooling application popularly known as Vielly. I also
            interned at Anchora technologies where I worked on FayaSMS (A bulk
            sms platform ) Added the the above free-lance using the skills I
            have acquired from platforms like Udemy , Freecodecamp , tech blogs
            etc. <br />
            <br />
            Currently, I am learning nodejs and mongoDB. Lastly , I am open to
            job opportunities.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
