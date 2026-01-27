

import React, { useState } from "react";
import Welcome from "./components/welcome";
import About from "./components/about";
import Services from "./components/services";
import Work from "./components/work";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="bg-navy min-h-screen">
      <Welcome openNav={openNav} setOpenNav={setOpenNav} />
      <main className="container mx-auto px-6 md:px-20">
        <About />
        <Services />
        <Work />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
