"use client";
import React, { useEffect, useRef } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const inputRefs = useRef([]);
  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push("/signin");
  };

  useEffect(() => {
    const handleInput = (e) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
    };

    inputRefs.current.forEach((inputElement) => {
      if (inputElement) {
        inputElement.addEventListener("input", handleInput);
      }
    });

    return () => {
      inputRefs.current.forEach((inputElement) => {
        if (inputElement) {
          inputElement.removeEventListener("input", handleInput);
        }
      });
    };
  }, []);

  return (
    <section className={style.form}>
      <form className="form formtwo" onSubmit={handleSubmit}>
        <p className="title">Input code</p>

        <div className="codes">
          {Array(5)
            .fill()
            .map((_, index) => (
              <label key={index}>
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  required
                  placeholder=""
                  type="number"
                  min={0}
                  max={9}
                  className="inputCode"
                />
              </label>
            ))}
        </div>

        <button className="submit">Verify</button>
        <p className="signin">
          Didn't get any code? <Link href="signup">Request</Link>
        </p>
      </form>
    </section>
  );
}

export default Page;
