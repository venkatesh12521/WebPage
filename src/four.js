import React from 'react';

const Four = () => {
  return (
    <div className=" mt-20">
    
    
        <h2 className="flex justify-center text-3xl md:text-4xl font-bold">For teams of all sizes</h2>
        <p className=" text-center md:text-xl mt-8   text-sm"> From small businesses to Fortune 100 enterprises—Calendly supports </p>
        <p className=' text-center md:text-xl text-sm mb-8'>scheduling at scale with robust security and administrative controls.</p>
        
        
      <div className="md:flex md:space-x-4 md:ml-40 md:pl-20"> 
          <div className=" md:w-1/2 md:mt-20">
            <div className="text-black px-4 py-2 rounded-md ">
              <img src='https://miro.medium.com/v2/resize:fit:1400/1*R-vfjgNobd5dOWGS47vlUQ.jpeg' alt='img' className='h-10'></img>
              <p className='font-brahma font-bold'>Admin Management</p>
              <p>Easily manage your organization's users and scheduling</p>
              <p>processes from one centralized place.</p>
              <p className='text-blue-500 mt-14 hover:text-black pt-12 md:mt-8'>Learn more &gt;</p>
              </div>
              <div className="text-black px-4 py-2 rounded-md  h">
               <img src='https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/56-512.png'alt='img' className='h-10'></img>
               <p className='font-brahma font-bold'>Security & Compliance</p>
               <p>Trust Calendly to safeguard company data and meet your</p>
               <p>compliance requirements.</p>
               <p className='text-blue-500 mt-14 hover:text-black'>Learn more &gt;</p>
               </div>
               <div className="text-black px-4 py-2 rounded-md ">
                <img src='https://cdn-icons-png.freepik.com/512/8386/8386415.png'alt='img' className="h-10"></img>
                <p className='font-brahma font-bold'>Learn more about Calendly for Enterprise</p>
                <p>Connect up to six calenders per user to check real-time</p>
                <p>availability.</p>
                <p className='text-blue-500 mt-14 hover:text-black'>Learn more &gt;</p>
  </div>
</div>
<div className="md:w-1/2">
            <img
              src="https://www.highspot.com/wp-content/uploads/2024/02/conversation-intelligence-hero-banner.webp"
              alt="Mobile App Illustration"
              className="w-full h-auto  md:mt-60 md:pr-60"
            />
          </div>
        </div>
      
    </div>
  );
};

export default Four;
