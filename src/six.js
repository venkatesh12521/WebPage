import React from 'react';

const Six = () => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
    
      <div className="text-gray-800 p-8 bg-neutral-100 pb-10 mb-10">
        <h1 className="text-4xl font-bold text-center">We take the manual work out of <h1>scheduling</h1></h1>
        <p className="text-xl mt-4 text-center">Get insight, access to all of these features and more, so you can have more </p>
        <p className='text-xl text-center'>productive meetings without the back-and-forth</p>
        <div className="mt-6 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-xs rounded-full mr-4">Start for free</button>
          <button className="border-2 border-solid border-black text-xs hover:text-white hover:bg-black font-bold py-2 px-4 rounded-full">Contact Sales</button>
        </div>
      </div>
      
     
      <footer className="bg-white-800  text-slate-500 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800">Easy </h2>
              <h2 className='text-3xl font-bold text-blue-800 mb-2'>ahead</h2>
              <p className="mb-4">We take the work out of connecting with others so you can accomplish more.</p>
              <select className='w-60 rounded-lg border-2 text-black  mt-6 mb-6'><option>English</option></select>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZoWmjVjRg4kaoxLayZ5qcrY5kmPEXsP0x9A&s'alt='app' className='h-10'></img>
              
              <div className="flex justify-start mt-8 ">
                <img src='https://cdn-icons-png.flaticon.com/512/733/733635.png' alt='twi' className='h-6 pr-4'></img>
                <img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png'alt='fb' className='h-6 pr-4'></img>
                <img src='https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png' alt='insta' className='h-6 pr-4'></img>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSR9lcymP3fWP_PnWsuuJ9aYUP7PYuZ2glKkkHmBA2A&s'alt='linkedin' className='h-6 pr-4'></img>
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png'alt='yt' className='h-6 '></img>
              </div>
            </div>
            
          
            <div className="mb-4 md:ml-20">
              <h3 className="font-bold mb-2 text-gray-800 ">About</h3>
              <ul>
                <li className='pb-4'><a href=" " className="mb-1">About Calendly</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Contact Sales</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Newsroom</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Careers</a></li>
                <li><a href=" " className="mb-1">Security</a></li>
              </ul>
              <h3 className="font-bold mb-2 mb-4 mt-4 text-gray-800">Support</h3>
              <ul>
                <li className='pb-4'><a href=" " className="mb-1">Help Center</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Video Tutorials</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Cookie Settings</a></li>
              </ul>
            </div>
            
        
            <div className="mb-4">
              <h3 className="font-bold mb-2 text-gray-800">Solutions</h3>
              <ul>
                <li className='pb-4'><a href=" " className="mb-1">Customer Success</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Sales</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Recruiting</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Information Technology</a></li>
                <li className=''><a href=" " className="mb-1">Marketing</a></li>
              </ul>
              <h3 className='font-bold mb-2 mb-4 mt-4 text-gray-800'>Add-Ons</h3>
              <ul>
                
                <li className='pb-4'>Download For Chrome</li>
                <li className='pb-4'>Download For FireFox</li>
              </ul>
            </div>

            <div className="mb-4 ">
              <h3 className="font-bold mb-2 text-gray-800">Popular Features</h3>
              <ul>
                <li className='pb-4'><a href=" " className="mb-1">Embed Calendly</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Availability</a></li>
                <li className='pb-4'><a href=" " className="mb-1">Sending Notifications</a></li>
                <li className='pb-4'><a href=' ' className='mb-1'>Using Calendly Mobile</a></li>
              </ul>
              <h3 className='font-bold mb-2 mb-4 mt-10 text-gray-800'>Developers</h3>
              <ul>
                <li>Developer Tools</li>
              </ul>
            </div>
          </div>
          <div className=" text-sm text-slate-500 mt-4">
            <p className='flex justify-start'>Copyright Calendly 2022</p>
            <a href=" " className="mr-2 md:flex justify-end -mt-4">Privacy / Terms And Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Six;
