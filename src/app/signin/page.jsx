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
        <p class="title">Sign in </p>
        <p class="message">
          welcome back sign in and get full access to our app.{" "}
        </p>

        <label>
          <input required placeholder="" type="email" class="input" />
          <span>Email</span>
        </label>

        <label>
          <input required placeholder="" type="password" class="input" />
          <span>Password</span>
        </label>

        <button class="submit">Submit</button>
        <div className="details">
          <p class="signin">
            Don't have an acount ? <Link href="signup">Signup</Link>{" "}
          </p>
          <p class="signin">
            <Link href="resetpassword"> Forgot password?</Link>{" "}
          </p>
        </div>
      </form>
    </section>
  );
}

export default page;
