'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Navigation, Pagination } from 'swiper'
import Image from 'next/image'
import junk from '../../public/junkRemoval.jpg'
import appliance from '../../public/AppliancePlugImg.jpg'
import netflix from '../../public/NetflixImg.jpg'

const Carousel = () => {
  return (
    <div className='sm:w-[45%] 2xl:w-[30%] w-[80%] h-[80%] mx-auto mt-20 text-center'>
        <h1 className='font-bold text-2xl mb-8'>Some of our Work</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
        }}
        modeules={[EffectCoverflow, Navigation, Pagination]}
        pagnination={{
            clickable: true,
        }}
        className='w-[100%] py-[50px]'
        >
        <SwiperSlide>
            <div className='bg-black/60 absolute w-full h-[30%] bottom-0' />
            <h1 className='absolute text-white font-bold sm:text3xl sm:bottom-10 bottom-2 left-10'>Junk Removal Company</h1>
            <Image
            src={junk}
            alt='junk'
            className='block w-[100%]'
            />
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-black/60 absolute w-full h-[30%] bottom-0' />
            <h1 className='absolute text-white font-bold sm:text3xl sm:bottom-10 bottom-2 left-10'>Appliance Store</h1>
            <Image
            src={appliance}
            alt='junk'
            className='block w-[100%]'
            />
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-black/60 absolute w-full h-[30%] bottom-0' />
            <h1 className='absolute text-white font-bold sm:text3xl sm:bottom-10 bottom-2 left-10'>Netflix Clone</h1>
            <Image
            src={netflix}
            alt='junk'
            className='block w-[100%]'
            />
            </SwiperSlide>

        </Swiper>

    </div>
  )
}

export default Carousel