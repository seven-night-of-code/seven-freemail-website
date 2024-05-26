"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
function page() {
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

        <button class="submit">Reset password</button>
       
      </form>
    </section>
  );
}

export default page;
