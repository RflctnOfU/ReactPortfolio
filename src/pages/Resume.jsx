import React from 'react'
import { FaFileDownload } from 'react-icons/fa'

const Resume = () => {

    return (
        <div className='my-12 mb-16 pl-9'>
            <div className='leading-7' style={{ textShadow: '5px 5px 5px #292524' }}>
                <div className='w-1/6'>
                    <h1 className='text-4xl text-slate-400 antialiased inline'>Resume</h1>
                    <a href="assets/KrisMarshall_Resume.pdf" target="_blank" className='mx-0 inline'><FaFileDownload size={60} />Download Resume</a>
                </div>
                <div className=''>
                    <div>
                        <h2 className='text-3xl text-slate-400 antialiased'>Proficiencies</h2>
                    </div><br />
                    <div>
                        <h3 className='text-2xl text-slate-400 antialiased'>Frontend</h3>
                        <span className='text-lg text-slate-400 antialiased'>HTML5, CSS3, JavaScript, jQuery, React, Handlebars</span>
                        <div>
                            <img src="images/html5.png" alt="html-icon" className='h-12 inline px-1' />
                            <img src="images/css3.png" alt="css-icon" className='h-12 inline px-3' />
                            <img src="images/javascript.png" alt="js-icon" className='h-12 inline px-3' />
                            <img src="images/jquery.png" alt="jquery-icon" className='h-12 inline px-3' />
                            <img src="images/react.png" alt="react-icon" className='h-12 inline px-1' />
                            <img src="images/handlebars.png" alt="handlebars-icon" className='h-12 inline px-3' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl text-slate-400 antialiased'>Backend</h3>
                        <span className='text-lg text-slate-400 antialiased'>Node.JS, MySQL, MongoDB, NPM</span>
                        <div>
                            <img src="images/nodejs.png" alt="nodejs-icon" className='h-12 inline px-3' />
                            <img src="images/mysql.png" alt="mysql-icon" className='h-12 inline px-3' />
                            <img src="images/mongodb.png" alt="mongodb-icon" className='h-12 inline px-4' />
                            <img src="images/npm.png" alt="npm-icon" className='h-12 inline px-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume