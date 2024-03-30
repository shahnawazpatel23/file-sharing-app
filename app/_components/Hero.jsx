import React from 'react'

const Hero = () => {
  return (
    <section className="bg-slate-100 text-white h-screen">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Uplaod,Save and Share

        <span className="sm:block "> your files easily!! </span>
      </h1>

      <p className="text-gray-900 mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Drag and drop your files and share it securely with password authentication.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/upload"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-gray-900 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero