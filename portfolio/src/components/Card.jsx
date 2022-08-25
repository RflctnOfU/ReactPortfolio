import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Card = ({ id, image, title, live, github }) => {
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: '25% center',
    }
    const shadow = {
        filter: 'drop-shadow(0 4px 3px rgb(31 41 55 / 0.15)) drop-shadow(0 2px 2px rgb(31 41 55 / 0.30))'
    }

    return (
        <div className='bg-gradient-to-br from-slate-300 to-slate-500 rounded-lg hover:scale-105 transition duration-300 opacity-70 hover:opacity-100' style={shadow}>
            <div className="shadow-lg rounded-t-lg mb-2 h-60 w-60  transition duration-300 flex justify-around items-center z-0" style={cardStyle}></div>
            <div className="flex justify-around">
                <div>
                    <a href={live} target="_blank" className='text-slate-600 hover:text-slate-300 transition duration-300' style={{ textShadow: '2px 5px 4px #1e293b' }} rel="noreferrer">
                        {title}
                    </a>
                </div>
                <div>
                    <a href={github} target='_blank' rel="noreferrer">
                        <FaGithub className='hover:text-slate-300 transition duration-300 text-4xl text-slate-600 pb-3' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card