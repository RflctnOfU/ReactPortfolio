import { NavLink } from 'react-router-dom'
import { FaPenNib, FePenNib } from 'react-icons/fa'
function Nav() {
    const activeStyle = {
        color: '#3730a3',
        textShadow: '4px 5px 4px #292524',
    }

    return (
        <div className='w-full shadow-xl'>
            <div className='md:flex justify-between py-4 bg-gradient-to-br from-sky-400 to-indigo-500 h-auto'>
                <div>
                    <span>
                        <img src="" alt="" />
                    </span>
                    <span className="antialiased text-4xl font-bold pl-5" style={{ textShadow: '2px 5px 4px #312e81' }}>Kristofer Marshall</span>
                </div>
                <ul className='md:flex md:items-center'>
                    <li className='md:ml-4 px-4 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold' style={{ textShadow: '2px 5px 3px #312e81' }}>
                        <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : undefined}>About Me</NavLink>
                    </li>
                    <li className='md:ml-4 px-4 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold' style={{ textShadow: '2px 5px 3px #312e81' }}>
                        <NavLink to='/portfolio' style={({ isActive }) => isActive ? activeStyle : undefined}>Portfolio</NavLink>
                    </li>
                    <li className='md:ml-4 px-4 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold' style={{ textShadow: '2px 5px 3px #312e81' }}>
                        <span><FaPenNib /><NavLink to='/contact' style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink></span>
                    </li>
                    <li className='md:ml-4 px-4 cursor-pointer text-lg hover:text-sky-900 transition duration-300 ease-in-out font-mono font-semibold' style={{ textShadow: '2px 5px 3px #312e81' }}>
                        <NavLink to='/resume' style={({ isActive }) => isActive ? activeStyle : undefined}>Resume</NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Nav


{/* <a className='antialiased' href={page.path}>{page.name}</a> */ }
{/* {pages.map((page) => ( */ }