import React from 'react'
import { Description } from '../basicscommon/Description'
import { Mainheading } from '../basicscommon/Mainheading'
import { Subheading } from '../basicscommon/Subheading'
import { Testimony } from '../box/Testimony'
import { Carousel } from 'react-responsive-carousel'

const testimonyData = [
    {
        name:"John Doey",
    },
    {
        name:"James Bond",
    },
    {
        name:"Mc Namara",
    },
]

export const Testimonials = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-pink-50 to-gray-50 flex flex-col justify-center ' data-aos="fade-up">
            {/* first Top section */}
            <div className='flex lg:justify-between p-14 sm:p-24 flex-col lg:flex-row gap-y-8'>

                <div className='text-black lg:w-[50%] flex flex-col gap-y-8'>
                    <Mainheading Maintext={"Testimonials"} />
                    <Subheading  Subheadtext={"What Our Customer Say About Us"}/>
                </div>

                <div className='lg:self-center lg:w-[42%]'>
                    <Description>
                        <p>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        </p>
                    </Description>
                </div>

            </div>
                
            {/* Second slider section */}
            <div className='sm:px-24 flex pb-14 sm:pb-28 w-[90vw] sm:w-[95vw]  sm:justify-center p-auto mx-auto'>
                <Carousel className='md:max-w-[800px] sm:w-full w-fit self-start sm:justify-center left-0 overflow-hidden'
                    autoPlay={true} infiniteLoop={true} stopOnHover={true}> 
                        {
                            testimonyData.map((item)=>(
                                <Testimony key={item.index} name={item.name}/>
                            ))
                        }
                </Carousel>
            </div>
        </div>
    </div>
  )
}
