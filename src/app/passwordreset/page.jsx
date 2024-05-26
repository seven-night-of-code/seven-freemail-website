"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
function page() {
  const navigate = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={style.form}>
      <form class={`form formtwo` } onSubmit={handleSubmit}>
        <p class="title">Input new password </p>
        

        <label>
          <input required placeholder="" type="text" class="input" />
          <span>Password</span>
        </label>

        <label>
          <input required placeholder="" type="text" class="input" />
          <span>Confirm Password</span>
        </label>

        <button class="submit" onClick={()=>navigate.push("/signin")}>Reset password</button>
       
      </form>
    </section>
  );
}

export default page;
