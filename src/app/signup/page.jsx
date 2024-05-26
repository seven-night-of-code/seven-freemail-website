"use client"
import React from 'react'
import style from './page.module.css'
import Link from 'next/link'
function page() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className={style.form}>
<form class="form" onSubmit={handleSubmit}>
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required placeholder="" type="number" class="input"/>
        <span>Telephone Number</span>
    </label>
        
    <label>
        <input required placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <Link href="signin">Signin</Link> </p>
</form>
    </section>
    )
}

export default page