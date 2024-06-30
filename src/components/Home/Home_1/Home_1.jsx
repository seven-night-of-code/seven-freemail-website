import React from "react";
import Image from "next/image";

function Home_1() {
  return (
    <>
      <section className="w-full h-[90vh]  bg-vector-green bg-cover bg-center relative">
       <div className="flex justify-between">

        <div className="  p-4 w-[30rem]  ml-12">
          <h1 className="text-5xl">
            Easy to <span className="text-[#2DF8BB] text-5xl">Hire</span>
            <br />
            Talented <span className="text-[#2DF8BB] text-5xl">Developers</span>&<br />
            Professional Agencies!
          </h1>
          <h5 className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            inventore labore dolorem rem molestias ipsam, repellat accusantium
            consectetur, odit enim perspiciatis ex fuga ea numquam architecto
            quibusdam aliquam quaerat. Ducimus?
          </h5>
        </div>
        <div className=" absolute bottom-[0] z-[-1]">
        <svg
          width="100%"
          height="700"
          viewBox="0 0 1920 759"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M1157 443.601C820.863 784.734 219 653.435 -47.5 576.101L-64 862.601H2040.5V12.1012C1798 -15.3988 1628 -34.3988 1157 443.601Z"
            fill="#2DF8BB"
            />
        </svg>
        </div>
        <div className=" absolute w-[40rem] right-[10rem] "> 
          <Image src='/image/Group 2156.png' width={500} height={300} className="w-full "/>
        </div>
        </div>

      </section>
      <section className="flex justify-center items-center w-full h-[30vh] bg-[#243A5A]">
         <div className="flex justify-around   w-[30%] h-[80%]">
          <div className="bg-white w-[20%] h-[100%] rounded-lg p-4">
            <div className="  w-full h-full ">
             <Image src='/image/Frame 10.png' width={50} height={50}/>
             <h3 className="font-medium mt-4"><span className="font-bold">10K</span> Developers</h3>
             <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nobis, quisquam ratione molestias in perspiciatis omnis non dolores nulla commodi. Nihil consequuntur qui alias mollitia praesentium nulla. Accusantium </p>
            </div>
          </div>
          <div className="bg-white w-[20%] h-[100%] p-4 rounded-lg">
          <div className="  w-full h-full ">
          <Image src='/image/Frame 10 (1).png' width={50} height={50}/>
             <h3 className="font-medium mt-4"><span className="font-bold">4K</span>Agencies</h3>
             <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nobis, quisquam ratione molestias in perspiciatis omnis non dolores nulla commodi. Nihil consequuntur qui alias mollitia praesentium nulla. Accusantium </p>
          </div>
          </div>
          <div className="bg-white w-[20%] rounded-lg h-[100%] p-4">
          <div className="  w-full h-full ">
          <Image src='/image/Frame 10 (2).png' width={50} height={50}/>
             <h3 className="font-medium mt-4"><span className="font-bold">80K+</span> Users</h3>
             <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nobis, quisquam ratione molestias in perspiciatis omnis non dolores nulla commodi. Nihil consequuntur qui alias mollitia praesentium nulla. Accusantium </p>
          </div>
          </div>
         </div>
      </section>
    </>
  );
}

export default Home_1;
