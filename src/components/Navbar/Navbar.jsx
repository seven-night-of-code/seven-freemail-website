'use client'
import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

  const links = [
    { name: '', href: '/' },
    { name: 'Login', href: '/LoginForm' },
    { name: 'Sign up', href: '/SignUpForm' }
  ];

  return (
    <div className={styles.con}>
      <img style={{ marginLeft: '20px', height: '85px',}} src="/sevenfreemail-removebg-preview.png" alt="" />
      {/* <h1 style={{ color: 'black', marginLeft: 20 }}> 2factor</h1> */}
      <div className={styles.linksCon}>
        <input type="search" name="search" id="" placeholder='Search' />
        <button className={styles.btn}>Login</button>
        <button className={styles.Btn}>Sign Up</button>
              
      </div>
    </div>
  )
}

export default Navbar