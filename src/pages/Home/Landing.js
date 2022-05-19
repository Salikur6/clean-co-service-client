import React from 'react';
import cleaner from '../../assets/images/cleaner2.png'


const Landing = () => {
    return (
        <div>
            <div class="z-10 relative hero h-full lg:h-[60vh] bg-accent mt-20">
                <div class="hero-content flex-col lg:flex-row">

                    <div>
                        <p data-aos="fade-right" data-aos-duration="1000"
                            data-aos-delay="200"
                            className='text-xl'>Best Quality</p>


                        <h1 data-aos="fade-right" data-aos-duration="900"
                            data-aos-delay="400"
                            class="text-5xl font-bold ">Professional Cleaning Service</h1>
                        <p data-aos="fade-right" data-aos-duration="800"
                            data-aos-delay="600"
                            class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="1200" class="btn btn-primary mb-18">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={cleaner} class="h-full" alt='Cleaner person img' /></div>
                </div>
            </div>


            {/* bottom of the hero section */}

            <div className='shadow-lg p-10 z-50 relative w-5/6 rounded-2xl mx-auto mt-[-50px] bg-base-200'>
                <h1 className='text-2xl mb-10 font-bold text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </div>
    );
};

export default Landing;