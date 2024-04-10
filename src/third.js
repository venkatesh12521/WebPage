import React from 'react';

const Third = () => {
  return (
    <div className="bg-slate-100 text-black">
      <div className="container mx-auto p-4">
      

        <h1 className="desktop text-center text-2xl md:text-5xl font-brahma hidden lg:block  font-bold mb-4">Stay in sync from any app, on <h1>any device</h1></h1>
        <h1 className="text-center text-2xl md:text-5xl font-brahma md:hidden  font-bold mb-4"> Stay in sync from any app, on any device</h1>

            <p className="text-center text-sm md:text-xl mb-8">Reclaim your time and your tabs with native integrations with over 70 <p>different apps, and mobile and browser apps for easier access.</p></p>
           
        <div className="md:flex md:space-x-4">
          
          <div className="md:w-1/2">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/2bkURToFQfAyYBv7GpwIi7/2423e65d1a762de3ff264b1ec54623a8/Calendly-Mobile-App-Link.png?w=750&h=612&q=50&fm=png"
              alt="Mobile App Illustration"
              className="w-full h-auto  md:mt-40"
            />
          </div>

      
          <div className="grid grid-cols-2 gap-4 md:mt-20">
  <div className="text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
    <img src='https://theme.zdassets.com/theme_assets/1024340/455f2c607b0e8adfef191786d74c8b1ba1fcb0ba.svg'alt='ca' className='h-10'></img>
    <p className='font-brahma font-bold'>Calendly for Browsers</p>
    <p>Use Calendly while you're on the web, without switching tabs</p>
    <p className='text-blue-500 mt-14 hover:text-white'>Learn more &gt;</p>
  </div>
  <div className="text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
    <img src='https://theme.zdassets.com/theme_assets/1024340/362a71d943ca65bf32588394dd0b3ce0741ca1dd.svg'alt='ca' className='h-10'></img>
    <p className='font-brahma font-bold'>Calendly for Mobile</p>
    <p>Book meetings, get notifications, & more on the go</p>
    <p className='text-blue-500 mt-14 hover:text-white'>Learn more &gt;</p>
  </div>
  <div className="text-black px-4 py-2 rounded-md hover:bg-blue-600">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcGWSLWDRU3LAAc_eCcdbGMLYBpiJKYAg00qhfah2R6A&s'alt='ca' className='h-10'></img>
    <p className='font-brahma font-bold'>Calendly for CRMs</p>
    <p>Make booking meetings simple for teams who use CRMs</p>
    <p className='text-blue-500 mt-14 hover:text-white'>Learn more &gt;</p>
  </div>
  <div className="text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
    <img src='https://cdn-icons-png.freepik.com/512/4622/4622744.png'alt='pay' className='h-10'></img>
    <p className='font-brahma font-bold'>Payments</p>
    <p>Streamline payments for Calendly events, with PayPal or Stripe</p>
    <p className='text-blue-500 mt-14 hover:text-white'>Learn more &gt;</p>
  </div>
</div>
        </div>
      </div>
    </div>
  ); 
};

export default Third;
