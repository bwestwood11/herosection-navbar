'use client'

import Image from "next/image"
import blur from '../../public/blur.png'
import Typed from 'react-typed'
import Link from "next/link"
import Carousel from "./Carousel"

const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#ecf0f3] relative">
        <Image
   src={blur}
    alt="blur"
    layout="fill"
    objectFit="cover"
    quality={100}
    priority
    className="absolute animate-pulse"
    />
    {/* Main Text */}
    <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-48">
<h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">
    A software {" "}
    <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">
        agency
    </span>
 </h1>
 <h1 className="text-5xl sm:text-8xl font-bold z-20">with a twist</h1>
 <h2 className="text-2xl sm:text-4xl mt-4">specializing in {" "}
   <Typed
   strings={[
         'web development',
            'mobile development',
            'UI/UX design',
            'branding',
   ]}
    typeSpeed={200}
    backSpeed={100}
    loop
    /> {" "}
 </h2>
 <div className="items-center mx-auto justify-center text-center pt-16 z-20">
 <Link href="/pricing">
    <button className="bg-black text-white text-2xl px-10 py-5 rounded-lg shadow-xl shadow-black/40 hover:bg-black/70 cursor-pointer  ">
        See plans
    </button>
    </Link>
    <p className="pt-6 font-bold text-lg">
        Subscriptions based model with no hidden fees. Unlimited Requests
    </p>
 </div>
    </div>
    <div>
   <Carousel />
    </div>
    </div>
  )
}

export default Hero