"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { useRouter } from "next/navigation";
function page() {
  const [apiKey, setApiKey] = useState("d78q3e78yusahuidh87qy");
  const [showKey, setShowKey] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const navigate = useRouter();
  const copyToClip = () => {
    const notyf = new Notyf({
      position: {
        x: "right",
        y: "top",
      },
    });
    navigator.clipboard.writeText(apiKey);
    notyf.success({
      message: "Copied to clipboard",
    });
  };

  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <div className="leftNav" onClick={() => navigate.push("/")}>
          <div className="logo">Logo</div>
        </div>
        <div className={style.rightNav}>
          <ul>
            <li>
              <Link href={""}>
                <i class="fa fa-search" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <i class="fa fa-bell" aria-hidden="true"></i>
              </Link>
            </li>
            <li className={style.image}>
              <Link href={""}>
                <Image
                  src={"/images/blank-profile-picture-973460_960_720.webp"}
                  width={50}
                  height={50}
                />
              </Link>
            </li>
          </ul>
          <p
            style={{
              fontSize: "13px",
              cursor: "pointer",
              padding: "0 .3em",
            }}
          >
            Ilma F...
          </p>
        </div>
      </nav>
      <section className={style.form}>
        <aside className={style.sidebar}>
          <div className={style.topAside}>
            <ul>
              <li>
                <Link href={"/"}>
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href={""} className={style.active}>
                  <i class="fa fa-key" aria-hidden="true"></i>
                  <p>API key</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.botAside}>
            <button class="Btn">
              <div class="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div class="text">Logout</div>
            </button>
          </div>
        </aside>
        <div className={style.details}>
          <h1>Dashboard</h1>
          <div className={style.dashboard}>
            <h2>API key</h2>
            <div className={style.apidetails}>
              <input
                // type={showKey ? "text" : "password"}
                type="text"
                value={showKey ? apiKey : "************************"}
                onChange={(e) => setApiKey(e.target.value)}
                className={style.apivalue}
              />
              <i
                onClick={copyToClip}
                class={`fa-regular fa-copy ${style.showKey}`}
                aria-hidden="true"
              ></i>
              <i
                onClick={() => {
                  showKey ? setShowKey(false) : setShowKey(true);
                }}
                class={`fa ${showKey ? "fa-eye-slash" : "fa-eye"} ${
                  style.showKey
                }`}
                aria-hidden="true"
              ></i>
              <label className={style.switch}>
                <input
                  type="checkbox"
                  onClick={() => {
                    enabled ? setEnabled(false) : setEnabled(true);
                  }}
                  checked={enabled ? true : false}
                />
                <div className={style.slider}>
                  <div className={style.circle}>
                    <svg
                      className={style.cross}
                      xmlSpace="preserve"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      viewBox="0 0 365.696 365.696"
                      height="6"
                      width="6"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          fill="currentColor"
                          d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      className={style.checkmark}
                      xmlSpace="preserve"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      viewBox="0 0 24 24"
                      height="10"
                      width="10"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          fill="currentColor"
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </label>{" "}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
