import React from 'react'

const About = () => {
    return (
        <section className='flex' style={{ textShadow: '5px 5px 5px #292524' }}>
            <div className='place-self-center flex-col pl-8'>
                <h1 className="text-4xl py-5 font-bold align-middle">
                    About Me
                </h1>
                <p className='text-2xl px-8'>
                    I am a Full-Stack Web Developer with a background in music, and a passion for elegance. I have an eye for aesthetic harmony and will bring that to the design of your application.
                </p>
            </div>

        </section>
    )
}

export default About