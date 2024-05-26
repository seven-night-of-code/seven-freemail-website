import React from "react";
import style from "./page.module.css";
import Image from "next/image";

const Details = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <div className={style.image}>
          <Image src="/image/astronote.jpg" width={300} height={330} className={style.img} />
        </div>
        <div className={style.text}>
            <p className={style.info}>Name :Astronote </p>
            <p className={style.info}>size: 200kb</p>
            <p className={style.info}>type : jpg</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
