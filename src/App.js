import React from 'react';
import Navbar from './navbar';
import Second from './second';
import Third from './third';
import Four from './four';
import Five from './five';
import Six from './six';

const HomePage = () => {
  return (
    <div className="">
      {/*  */}
      <Navbar></Navbar>
      
      <section className="grid grid-cols-1 md:grid-cols-2 items-center my-12 gap-6">
        <div className="pl-5 md:-mt-40 md:ml-20">
          <p className='text-blue-500'>CALENDLY FEATURES</p>
          <h1 className="text-5xl font-bold font-causten mb-4">Take the hassle out <p >of <span className='text-blue-800'>scheduling</span></p></h1>
          <p className="text-xl text-slate-500 mb-6 ">Calendly helps you book better meetings <p>faster by syncing and integrating</p> everything in one intuitive platform</p>
          <button className="bg-blue-800 hover:bg-blue-500 text-white py-4 px-8 text-xs rounded-full mr-4">Start for free</button>
        </div>
        
        <div className="">
        
          <img
            src="https://www.siliconrepublic.com/wp-content/uploads/2022/07/Screenshot-2022-07-13-at-11.00.59.png" // Replace with the path to your image
            alt="Schedule Meeting Interface"
            className="w-full  sm:max-w-xs md:max-w-xl"
          />
        </div> 
      </section>

      <div className='bg-white-200 pb-20'>
        <p className='flex justify-center text-gray-800 text-center text-2xl font-bold'>Simplified scheduling for more than</p>
        <p className='flex justify-center  font-bold text-gray-800 text-2xl'><span className='text-blue-800 text-center md:pr-2'>10,000,000 </span>users world wide</p>
        <div className='flex iems-center justify-center  '>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5djqJb1AEltKwNQbCb6jxUsy2MdHXUkCO9etyZfXY1g&s'alt='eboy' className='h-16 md:h-40 pt-4'></img>
          <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngg1ZcM_cduHyva-zx5qFazD2crR1VG45AdCdcFjrlg&s'alt='an' className='h-20 md:h-40 md:pt-6 w-22'></img></span>
          <img src='https://media.designrush.com/inspiration_images/135173/conversions/_1511457945_616_lyft-mobile.jpg' alt='ly' className='h-16 md:h-40 pt-6 pl-0'></img>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xzZJeV30SjX4LqLMuE4tbPX6Pph4SNuUWmOhRxhMIA&s'alt='lo' className='h-14 md:h-40 pt-6'></img>
          <img src='https://logovtor.com/wp-content/uploads/2020/12/compass-logo-vector.png' alt='co' className='h-14 md:h-48 md:w-48 md:pl-6 md:pb-4 pl-1 pt-6 w-20'></img>
        </div>
      </div>
      <Second></Second>
       <Third></Third> 
       <Four></Four>
       <Five></Five>
       <Six></Six>

  
    </div>
  );
};

export default HomePage;