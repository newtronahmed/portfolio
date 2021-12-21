import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="text-center">
        <h1 className="title">Services</h1>
      </div>
      <div className="container flex  w-full mx-auto md:flex-row flex-wrap">
        <div className=" md:w-1/3  p-3 wow  slideInUp ">
          <div className="shadow-md p-4 mx-2">
            <div className="  bg-gray inline-flex designer-border p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              sapiente omnis, consequuntur, nisi quisquam consequatur totam
              saepe laboriosam inventore, magnam est eveniet voluptates
              architecto iure ipsa aspernatur dolore nobis molestiae!
            </p>
          </div>
        </div>

        <div className=" md:w-1/3  p-3 wow  slideInUp ">
          <div className="shadow-md p-4 mx-2">
            <div className=" bg-gray inline-flex designer-border p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              sapiente omnis, consequuntur, nisi quisquam consequatur totam
              saepe laboriosam inventore, magnam est eveniet voluptates
              architecto iure ipsa aspernatur dolore nobis molestiae!
            </p>
          </div>
        </div>

        <div className=" md:w-1/3  p-3 wow  slideInUp ">
          <div className="shadow-md p-4 mx-2">
            <div className=" bg-gray designer-border inline-flex p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              sapiente omnis, consequuntur, nisi quisquam consequatur totam
              saepe laboriosam inventore, magnam est eveniet voluptates
              architecto iure ipsa aspernatur dolore nobis molestiae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
