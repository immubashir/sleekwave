import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Pricing = () => {
  return (
    <div className='h-screen flex flex-col lg:flex-row items-center justify-between gap-20'>
      <div className='w-full h-full lg:hidden flex items-center justify-center'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className='w-full h-full lg:hidden'
        >
          <SwiperSlide>
            <div className='h-full w-full bg-[#d4227864] rounded-3xl flex flex-col items-center justify-center gap-10 relative'>
              <h1 className='text-4xl montserrat-bold text-[#ff8543]'>Basic</h1>
              <h2 className='text-3xl montserrat-medium'>Free</h2>
              <ul className='flex flex-col gap-4'>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> lorem</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Ipsum</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Gen</p></li>
              </ul>
              <button className='absolute bottom-6 hover:-translate-y-2 transition-all duration-300'>
                <div className='border-2 border-orange-500 rounded-xl hover:bg-orange-500 transition-all duration-300'>
                  <h1 className='px-5 py-3'>Learn more</h1>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-full w-full bg-[#c419638f] rounded-3xl flex flex-col items-center justify-center gap-10 relative'>
              <h1 className='montserrat-medium text-[#FED7A5]'>✨ Most Popular</h1>
              <h1 className='text-4xl montserrat-bold text-[#FED7A5]'>Pro</h1>
              <h2 className='text-3xl montserrat-medium'>$19.99 / month</h2>
              <ul className='flex flex-col gap-4'>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> lorem</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Ipsum</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Gen</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Impact</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Tememt</p></li>
              </ul>
              <button className='absolute bottom-6 hover:-translate-y-2 transition-all duration-300'>
                <div className='bg-orange-500 rounded-xl'>
                  <h1 className='px-5 py-3'>Current plan</h1>
                </div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-full w-full bg-[#d4227864] rounded-3xl flex flex-col items-center justify-center gap-10 relative'>
              <h1 className='text-4xl montserrat-bold text-[#ff8543]'>Enterprise</h1>
              <h2 className='text-3xl montserrat-medium'>$24.99 / month</h2>
              <ul className='flex flex-col gap-4'>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> lorem</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Ipsum</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Gen</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Impact</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Tememt</p></li>
                <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Dolor</p></li>
              </ul>
              <button className='absolute bottom-6 hover:-translate-y-2 transition-all duration-300'>
                <div className='border-2 border-orange-500 rounded-xl hover:bg-orange-500 transition-all duration-300'>
                  <h1 className='px-5 py-3'>Learn more</h1>
                </div>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
      <div className='hidden lg:flex h-full w-1/3 bg-[#d4227864] rounded-3xl flex-col items-center justify-center gap-10 relative'>
        <h1 className='text-4xl montserrat-bold text-[#ff8543]'>Basic</h1>
        <h2 className='text-3xl montserrat-medium'>Free</h2>
        <ul className='flex flex-col gap-4'>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> lorem</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Ipsum</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Gen</p></li>
        </ul>
        <button className='absolute bottom-6 hover:-translate-y-2 transition-all duration-300'>
          <div className='border-2 border-orange-500 rounded-xl hover:bg-orange-500 transition-all duration-300'>
            <h1 className='px-5 py-3'>Learn more</h1>
          </div>
        </button>
      </div>
      <div className='hidden lg:flex h-full w-1/3 bg-[#c419638f] rounded-3xl flex-col items-center justify-center gap-10 relative'>
        <h1 className='montserrat-medium text-[#FED7A5]'>✨ Most Popular</h1>
        <h1 className='text-4xl montserrat-bold text-[#FED7A5]'>Pro</h1>
        <h2 className='text-3xl montserrat-medium'>$19.99 / month</h2>
        <ul className='flex flex-col gap-4'>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> lorem</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Ipsum</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Gen</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Impact</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Tememt</p></li>
        </ul>
        <button className='absolute bottom-6 hover:-translate-y-2 transition-all duration-300'>
          <div className='bg-orange-500 rounded-xl'>
            <h1 className='px-5 py-3'>Current plan</h1>
          </div>
        </button>
      </div>
      <div className='hidden lg:flex h-full w-1/3 bg-[#d4227864] rounded-3xl flex-col items-center justify-center gap-10 relative'>
        <h1 className='text-4xl montserrat-bold text-[#ff8543]'>Enterprise</h1>
        <h2 className='text-3xl montserrat-medium'>$24.99 / month</h2>
        <ul className='flex flex-col gap-4'>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> lorem</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Ipsum</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Gen</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Impact</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Tememt</p></li>
          <li><p className='text-xl montserrat-medium'><span className='text-green-500 font-extrabold'>✓</span> Dolor</p></li>
        </ul>
        <button className='absolute bottom-6 hover:-translate-y-2 transition-all duration-300'>
          <div className='border-2 border-orange-500 rounded-xl hover:bg-orange-500 transition-all duration-300'>
            <h1 className='px-5 py-3'>Learn more</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
