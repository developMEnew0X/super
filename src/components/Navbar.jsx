'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const { status , data: session } = useSession();
  console.log(session?.user?.name);

  // const routerX = useRouter();
  // if(status !== "authenticated"){
  //   routerX.push("/login");
  // }
  return (
    <>
    <div>Navbar</div>
    {status === "authenticated" ? (
      <>
        <p onClick={()=>signOut()}>SIGN OUT</p>
        <p>authenticated</p>
        <p>NAME : {session?.user?.name}</p><br/>
        <p>Email : {session?.user?.email}</p><br/>
        <Image src={session?.user?.image} width={100} height={100}/>
        <p>authenticated</p>
      </>
    ) : (
      
      <Link href={"/login"}>Not authenticated</Link>
      
    )}
    </>
  )
}

export default Navbar