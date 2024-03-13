import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function AboutPage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
        <div className="h-auto w-auto z-1 relative">
          <Navbar />
        </div>
        <div className="relative mx-auto sm:mx-0 md:mx-6 lg:mx-24 xl:mx-78 2xl:mx-88 4xl:mx-98 imac:mx-180">
          <div className="relative z-1 flex flex-col justify-center items-center  p-20 mx-auto">
            <p className="text-[#e55db2] text-3xl font-bold" style={{ fontFamily: "Bebas Neue" }}>About</p>
            <p className="text-xl text-white my-5 font-normal">
              CURIOUS CAPITAL invests in generational crypto startups who lay
              the foundation for our growing ecosystem. Our operational
              excellence allows great founders to build and their protocols to
              thrive.{" "}
            </p>
          </div>
        </div>

        <div className="relative z-1 flex flex-col justify-end items-center w-screen h-screen">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
