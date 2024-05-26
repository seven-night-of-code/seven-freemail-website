"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
function page() {
  const navigate = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push("/passwordcode");
  };
  return (
    <section className={style.form}>
      <form class={`form formtwo`} onSubmit={handleSubmit}>
        <p class="title">Reset password</p>
        <p class="message">
          input your email to recieve a code to reset your password{" "}
        </p>

        <label>
          <input required placeholder="" type="email" class="input" />
          <span>Email</span>
        </label>

        <button class="submit">Get Code</button>
      </form>
    </section>
  );
}

export default page;
