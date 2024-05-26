import React, { useContext } from "react";
import style from "./Home.module.css";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import { details } from "@/app/details";
import { productContext } from "../Context/Context";

function Home() {

  const [selectedP,setSelectedP] = useContext(productContext)
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.cords}>
          {details.map((name) => (
            <Link href="/Details" className={style.card} onClick={()=>setSelectedP(name)}>
              <Image
                className={style.img}
                src={name.image}
                width={280}
                height={350}
              />
              <span className={style.info}>
                <p className={style.text}>{name.name}</p>
                <span className={style.links}>
                  <p className={style.joe + " " + style.link}>{name.link}</p>
                  <p className={style.joecolor}>{name.github}</p>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
