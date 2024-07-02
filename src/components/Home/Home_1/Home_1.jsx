import React from "react";
import Image from "next/image";
import StatsCards from "@/components/StatsCards/StatsCards.jsx";

function Home_1() {
  return (
    <>
      <section className="w-full min-h-screen relative flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-12 lg:px-24 py-12  bg-vector-green bg-cover bg-center outline-2 outline-red-500 ">
        <div className="w-full md:w-2/3 lg:w-2/5 p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Easy to <span className="text-[#2DF8BB] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Hire</span>
            <br />
            Talented <span className="text-[#2DF8BB] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Developers</span>&<br />
            Professional Agencies!
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore labore dolorem rem molestias ipsam, repellat accusantium consectetur, odit enim perspiciatis ex fuga ea numquam architecto quibusdam aliquam quaerat. Ducimus?
          </p>
        </div>
        <div className="hidden md:block relative w-full md:w-1/2 lg:w-2/5">
          <Image src="/image/Group 2156.png" width={500} height={300} className="w-full" alt="Landing Illustration" />
        </div>
        <div className="absolute bottom-0 left-0 w-full  z-[-1] ">
          <svg width="100%" height="759" viewBox="0 0 1920 759" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1157 443.601C820.863 784.734 219 653.435 -47.5 576.101L-64 862.601H2040.5V12.1012C1798 -15.3988 1628 -34.3988 1157 443.601Z" fill="#2DF8BB" />
          </svg>
        </div>
      </section>

      <StatsCards />
    </>
  );
}

export default Home_1;
