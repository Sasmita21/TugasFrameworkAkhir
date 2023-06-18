import React from 'react'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <div>
        
<div class="relative h-screen overflow-hidden bg-indigo-900">
    <img src="https://images.unsplash.com/photo-1529528744093-6f8abeee511d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="absolute object-cover w-full h-full"/>
    <div class="absolute inset-0 bg-black opacity-25">
    </div>
    <header class="absolute top-0 left-0 right-0 z-20">
        <Navbar/>
    </header>
    <div class="container text-start relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span class="font-bold text-yellow-400 uppercase">
               Pinjaman sayangku
            </span>
            <h1 class="mt-4 text-5xl font-bold leading-tight text-white sm:text-7xl">
                pinjaman 
                <br/>
                dengan jaminan bunga <span className='text-yellow-500'>0%</span>
            </h1>
            <a href="#" class="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                pinjam yukk!
            </a>
        </div>
    </div>
</div>

    </div>
  )
}

export default Home