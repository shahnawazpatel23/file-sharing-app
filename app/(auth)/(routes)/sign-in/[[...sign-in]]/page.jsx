"use client"
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <Image src='/logo.svg' width={100} height={100}/>

        <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to Share-me {`>>>`}
        </h2>

        
      </div>
    </section>

    <main
      className="flex items-center justify-center bg-blue-50 px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl -mt-4">
        <div className="relative -mt-16 block lg:hidden">
          
          <h1 className="  text-2xl text-white font-bold  sm:text-3xl md:text-4xl">
            Welcome to Share-me {`>>>`}
          </h1>
        <Image src='/logo.svg' width={100} height={70} className="mt-3"/>

          
        </div>
        <div className="flex items-center justify-center mx-auto mt-10">
        <SignIn/>
        </div>
        
      </div>
    </main>
  </div>
</section>);
}