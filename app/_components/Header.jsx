"use client";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-slate-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Image  src='/logo.svg' width = {150} height = { 150} className="p-1"/>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/upload"
                >
                  Get Started
                </a>

                
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
