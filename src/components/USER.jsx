'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { signOut, useSession } from "next-auth/react";
import GoogleLogin from './GoogleLogin';

export default function USERinfoTab() {
  const {status ,data : session} = useSession();
  const [navbar , setNavbar] =  useState(false);
  const [chat , setChat] =  useState(false);
return (
  <>
  <button onClick={()=> setNavbar(!navbar)} className="text-gray-500 z-10 focus:outline-none focus:text-gray-900 lg:hidden md:hidden">
    {status === "authenticated" ?(
      <Image 
        src={session?.user?.image} 
        width={50} 
        height={50} 
        className={"flex bg-cover"}
        alt={'gg'}
      />
      ):(
        <></>)
        
    }
  </button>
  
  <div className={navbar ? "right-0 top-0 z-0 fixed w-4/5  border-green-500 transition h-svh mt-14 opacity-1 overflow-y-scroll shadow-lg bg-gray-100 rounded" : "right-0 top-0 z-0 fixed w-4/5  border-green-500 transition h-svh mt-14 opacity-1 overflow-y-scroll translate-y-0  translate-x-full"}>
    
    {status === "authenticated" ?(
      <div id={"mobileNavBarHiddenAria"} className={ " h-auto md:hidden lg:hidden p-2 px-4"}>
        <div className="flex items-center justify-center border border-gray-500 rounded-full w-24 h-24 mx-auto my-3 overflow-hidden shadow-lg">
          <Image 
            src={session?.user?.image} 
            width={100} 
            height={100} 
            className={"flex bg-cover"}
            alt={'gg'}
          />
        </div>
        
        <p className={"bg-white py-2 px-2 m-1 rounded capitalize"}><span className={'p-1 max-h-3 mr-3 min-w-3 min-h-3 rounded-full bg-green-600'}></span>Online</p>
        <p className={"bg-white py-2 px-2 m-1 rounded"}>NAME : <input type={"text"} disabled value={session?.user?.name}/></p>
        <p className={"bg-white py-2 px-2 m-1 rounded"}>Email : <input type={"text"} disabled value={session?.user?.email}/></p>
        <button className={ " mt-5 m-2 bg-white text-red-600 border border-spacing-6 border-red-500 rounded-lg px-6 py-1"}><p onClick={()=>signOut()}>SIGN OUT</p></button>
      </div>
    ):(
      <GoogleLogin></GoogleLogin>
    )}
    
    
  </div>
  </>
  )
}