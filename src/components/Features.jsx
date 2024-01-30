import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const featuresData = [
  {
    id: 1,
    title: "Spyware detection",
    description: "Our advanced spyware detection engine can identify if a device contains spyware or bugging software.",
    imageSrc: "/eye.png"
  },
  {
    id: 2,
    title: "Keylogger detection",
    description: "Find malicious keywords installed on your device that could allow someone to record things you type (e.g. passwords).",
    imageSrc: "/search.png"
  },
  {
    id: 3,
    title: "Find tracking apps",
    description: "Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.",
    imageSrc: "/location-route.png"
  },
  {
    id: 4,
    title: "OS integrity check",
    description: "Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.",
    imageSrc: "/os-integrity.png"
  },
  {
    id: 5,
    title: "Threat removal",
    description: "Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.",
    imageSrc: "/threat.png"
  },
  {
    id: 6,
    title: "Easy to use",
    description: "We create easy-to-use apps that can check your device for vulnerabilities in a matter of minutes.",
    imageSrc: "/gear.png"
  },
];

const Features = () => {
  return (
    <main className='flex flex-col gap-10 justify-center items-center bg-gradient-to-t from-[#E7EFFA] to-[#F3F8FF] min-h-screen py-20'>
      <h2 className='text-4xl font-bold mb-8 w-1/2 text-center'>Get your freedom back, stop mobile spyware today</h2>
      <section className='flex flex-col justify-center items-center gap-10 py-14 bg-white rounded-2xl shadow-lg w-1/2 p-6'>
        <div className='flex flex-row flex-wrap gap-10 justify-center items-center'>
          {featuresData?.map((feature) => (
            <div key={feature?.id} className='flex flex-col justify-center items-center text-center gap-3 w-44 p-2'>
              <img src={feature?.imageSrc} alt={feature?.title} />
              <span className='font-bold'>{feature?.title}</span>
              <p className='font-semibold'>{feature?.description}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-row gap-5 justify-center items-center'>
          <button className='bg-[#FFC247] flex flex-row gap-2 items-center justify-center px-3 py-2 rounded-full'>
            <span className='font-bold'>Get Certro for iPhone</span>
            <IoIosArrowRoundForward className='w-6 h-6' />
          </button>
          <button className='border-2 border-black font-bold px-3 py-2 rounded-full'>
            Get Certro for Android
          </button>
        </div>
      </section>
    </main>
  );
};

export default Features;
