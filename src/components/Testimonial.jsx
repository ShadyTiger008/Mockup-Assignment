import React from 'react'
import Marquee from "react-fast-marquee";

  const testimonialImage = [
    {
      id: 1,
      imageSrc: "/cnbc.png"
    },
    {
      id: 2,
      imageSrc: "/newyorkpostblue.png"
    },
    {
      id: 3,
      imageSrc: "/financialtimes.png"
    },
    {
      id: 4,
      imageSrc: "/readersdigest.png"
    },
    {
      id: 5,
      imageSrc: "/zdnet.png"
    },
    {
      id: 6,
      imageSrc: "/wired.png"
    },
  ]

  const testimonials = [
    {
      id: 1,
      message: "Does exactly wat it says. Clear to read and understand. This is now the second iphone we've used it on add would certainly recommend this app.",
      user: "colinandmandy94"
    },
    {
      id: 2,
      message: "Love the ease and efficiency. Awesome app. Very informative and isightful if wanting to know more about your device. The added beach check is a great bonus. Check any email of they've ever been named in a data breach from years ago. Sweet tool. Love it highly recoomended.",
      user: "Jennifer Black"
    },
    {
      id: 3,
      message: "This app is good if you need to identify certain vulnerabilities on your iphone. If you have any issues, their customer service was quite helpful and responsive.",
      user: "Phillip Colligan"
    },
    {
      id: 4,
      message: "Does exactly wat it says. Clear to read and understand. This is now the second iphone we've used it on add would certainly recommend this app.",
      user: "colinandmandy94"
    },
    {
      id: 5,
      message: "Does exactly wat it says. Clear to read and understand. This is now the second iphone we've used it on add would certainly recommend this app.",
      user: "colinandmandy94"
    },
  ]

const Testimonial = () => {
  return (
    <main className='bg-gradient-to-t from-[#FDB235] to-[#F7C95F] py-20 -top-10 flex flex-col gap-20'>
        <h2 className='w-[700px] font-bold text-4xl px-20'>Loved by thousands of iphone and Android users alike</h2>  
        <Marquee direction="left" pauseOnClick>
            {testimonials.map((testimonial) => (
              <div className="bg-white h-72 px-8 rounded-3xl shadow-lg py-3 flex flex-col gap-5 justify-center mx-2 w-96" key={ testimonial?.id }>
                <div className='flex flex-row'>
                    { [ 0, 1, 2, 3, 4 ].map((star) => (
                        <img src="/star.png" alt="" />
                    ))}
                </div>
                <p className='font-semibold'>{testimonial?.message}</p>
                <p className='font-bold'>{testimonial?.user}</p>
              </div>
            ))}
        </Marquee>
        <div className='flex flex-row gap-40 items-center px-20'>
            <span className='font-bold text-xl'>Featured in:</span>
            <div className='flex flex-row gap-10'>
                { testimonialImage?.map((item) => (
                    <img key={item?.id} src={item?.imageSrc} alt="" />
                ))}
            </div>
        </div>
    </main>
  )
}

export default Testimonial