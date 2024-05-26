


import React from "react";
import style from "./Home.module.css";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";

function Homes() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.cords}>
          <Link href="" className={style.card}>
            <Image className={style.img}
              src="/image/bless.jpg"
              width={280}
              height={350} />
            <span className={style.info}>
              <p className={style.text}>bless</p>
              <span className={style.links}>
                <p className={style.joe + " " + style.link}> Link</p>
                <p className={style.joecolor}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>

          <Link href="" className={style.card}>
            <Image className={style.img}
              src="/image/joe.jpg"
              width={280}
              height={350} />
            <span className={style.info}>
              <p className={style.joe}>joseph</p>
              <span className={style.links}>
                <p className={style.joe + " " + style.link}> Link</p>
                <p className={style.joecolor}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>
          <Link href="" className={style.card}>
            <Image className={style.img}
              src="/image/astronote.jpg"
              width={280}
              height={350} />
            <span className={style.info}>
              <p className={style.text}>edward</p>
              <span className={style.links}>
                <p className={style.text + " " + style.link}> Link</p>
                <p className={style.git}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>
          <Link href="" className={style.card}>
            <Image
              className={style.img}
              src="/image/junior.jpg"
              width={280}
              height={350}
          //      layout="fill"
          // objectFit="cover"
            />
            <span className={style.info}>
              <p className={style.text}>martin</p>
              <span className={style.links}>
                <p className={style.text + " " + style.link}> Link</p>
                <p className={style.git}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>
          <Link href="" className={style.card}>
            <Image className={style.img}
              src="/image/astronote.jpg"
              width={280}
              height={350} />
            <span className={style.info}>
              <p className={style.text}>edward</p>
              <span className={style.links}>
                <p className={style.text + " " + style.link}> Link</p>
                <p className={style.git}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>
          <Link href="" className={style.card}>
           <Image className={style.img}
              src="/image/joe.jpg"
              width={280}
              height={350} />
            <span className={style.info}>
              <p className={style.joe}>joseph</p>
              <span className={style.links}>
                <p className={style.joe + " " + style.link}> Link</p>
                <p className={style.joecolor}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>
          <Link href="" className={style.card}>
            <Image className={style.img}
              src="/image/bless.jpg"
              width={280}
              height={350} />
            <span className={style.info}>
              <p className={style.text}>bless</p>
              <span className={style.links}>
                <p className={style.joe + " " + style.link}> Link</p>
                <p  className={style.joecolor}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>
          <Link href="" className={style.card}>
            <Image
              className={style.img}
              src="/image/junior.jpg"
              width={280}
              height={350}
          //      layout="fill"
          // objectFit="cover"
            />
            <span className={style.info}>
              <p className={style.text}>martin</p>
              <span className={style.links}>
                <p className={style.text + " " + style.link}> Link</p>
                <p className={style.git}>
                  Git Hub
                </p>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homes;
