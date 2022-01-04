import { Divider } from "@material-ui/core";
import React from "react";
import projects from "../projects";

function Work() {
  return (
    <section id="work" className="py-5 w-full">
      <div className="text-center">
        <h1 className="title">Work</h1>
      </div>
      <div className="container flex md:justify-center w-full mx-auto md:flex-row flex-wrap    ">
        {projects.map((each, i) => (
          <div key={i} className="w-full   md:w-1/3 p-6 wow slideInUp h-auto">
            <div className="max-w-full ">
              <div className="project-wrapper bg-light-navy  raise shadow-md hover:shadow-lg p-4 lg:p-6">
                <img
                  src={each.image}
                  alt="project"
                  className=" w-full lg:h-32 "
                />

                <div className="lg:h-24 lg:h-20">
                  {/* <Divider /> */}
                  <a
                    href={each.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-full font-bold my-2"
                  >
                    {each.title}
                  </a>
                  <Divider className="" />
                  <ul className="max-w-full ">
                    {each.stack.map((each) => (
                      <li className="text-xs inline-flex px-3 capitalize py-2 leading-lg text-slate">
                        {each}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
