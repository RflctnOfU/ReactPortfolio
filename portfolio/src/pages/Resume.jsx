import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

const Resume = () => {
    return (
        <div>
            <div className='leading-7 flex-col' style={{ textShadow: '5px 5px 5px #292524' }}>
                <div className='w-1/6'>
                    <h1 className='text-5xl text-slate-400 antialiased'>Resume</h1>
                    <a href="assets/resume.pdf" className='mx-0'><FaFileDownload size={60} /></a>
                </div>
                <div>
                    <h2 className='text-4xl text-slate-400 antialiased'>Proficiencies</h2>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-3xl text-slate-400 antialiased'>Frontend</h3>
                        <span className='text-lg text-slate-400 antialiased'>HTML5, CSS3, JS, jQuery, React, Handlebars</span>
                    </div>
                    <div>
                        <h3 className='text-3xl text-slate-400 antialiased'>Backend</h3>
                        <span className='text-lg text-slate-400 antialiased'>Node.JS, MySQL, MongoDB, NPM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume