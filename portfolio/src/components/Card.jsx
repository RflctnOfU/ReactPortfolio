import React from 'react'
import ProjectData from '../projects/ProjectData'

const Card = ({ id, image, title, live, github }) => {
    return (
        <div className="w-1/4 h-auto bg-slate-300 shadow-sm">
            <img src={image} alt={title} className='w-full' />
            <h2 className="font-bold text-slate-600 text-lg my-3 mx-5" style={{ textShadow: '5px 7px 7px #312e81' }}>{title}</h2>

            <button className="bg-indigo-500 text-slate-800 font-bold px-3 py-1 mx-2 my-2 rounded-lg hover:bg-indigo-700 hover:scale-110 duration-300">Live</button>
            <button className="bg-indigo-500 text-slate-800 font-bold px-3 py-1 mx-2 my-2 rounded-lg hover:bg-indigo-700 hover:scale-110 duration-300">Code</button>
        </div>
    )
}

export default Card