import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const About = () => {
    return (
        <section className=' w-2/3 mb-20' style={{ textShadow: '5px 5px 5px #292524' }}>
            <div className='place-self-center flex-col pl-8'>
                <div>

                    <h1 className="antialiased text-4xl py-6 font-bold align-middle text-slate-400">
                        About Me
                    </h1>
                </div>
                <div>
                    <FaUserCircle className='text-slate-400 pb-4' size={100} />
                </div>
                <p className='antialiased text-2xl px-8 font-mono text-slate-400'>
                    I am a Full-Stack Web Developer with a background in music. As such, I have extensive experience with collaboration in large and small contexts alike, as well as a passion for elegance.  I am biased towards aesthetic harmony and will bring that to the design of your application.
                </p><br />
                <p className='antialiased text-2xl px-8 font-mono text-slate-400'>
                    Having recently completed a full-stack bootcamp, my next area of study is design and backend frameworks in order to streamline the development process.
                </p>
            </div>

        </section>
    )
}

export default About