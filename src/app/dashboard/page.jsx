import React from "react";
import style from "./page.module.css";
import Link from "next/link";
function page() {
  return (
    <main>
      
      <nav className={style.nav}>
        <div className="leftNav">
          <div className="logo"></div>
        </div>
        <div className="rightNav">
          <ul>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default page;
