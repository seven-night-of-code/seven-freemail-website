'use client'
import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const navigate = useRouter();
  const links = [
    { name: '', href: '/' },
    { name: 'Login', href: '/LoginForm' },
    { name: 'Sign up', href: '/SignUpForm' }
  ];

  return (
    <div className='mt-[-2vh] '>
    <div className={styles.con} >
      <img style={{ marginLeft: '20px', height: '85px',}} src="/sevenfreemail-removebg-preview.png" alt="" />
      {/* <h1 style={{ color: 'black', marginLeft: 20 }}> 2factor</h1> */}
      <div className={styles.linksCon}>
      
        <button className={styles.btn} onClick={()=>navigate.push("/signin")}>Login</button>
        <button className={styles.Btn} onClick={()=>navigate.push("/signup")}>Sign Up</button>
              
      </div>
    </div>
    </div>
  )
}

export default Navbar