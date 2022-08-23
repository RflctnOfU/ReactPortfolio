import { useState } from 'react'
function Nav() {
    const [pages] = useState([
        { name: 'About', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resume', path: '/resume' }
    ])
    return (
        <div className='w-full shadow-xl'>
            <div className='md:flex justify-between py-4 bg-gradient-to-br from-sky-400 to-indigo-500 h-auto'>
                <div>
                    <span>

                    </span>
                    <span className="text-4xl font-bold pl-5" style={{ textShadow: '2px 5px 5px #312e81' }}>Kristofer Marshall</span>
                </div>
                <ul className='md:flex md:items-center'>
                    {pages.map((page) => (
                        <li key={page.name} className='md:ml-4 px-4 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold' style={{ textShadow: '2px 5px 5px #312e81' }}>
                            <a href={page.path}>{page.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Nav