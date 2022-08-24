import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
function Footer() {
    return (
        <footer className='flex justify-around h-auto bg-gradient-to-br  from-indigo-500 box-border to-sky-400'>
            <a className='py-5' href="https://github.com/RflctnOfU" target='_blank' rel="noreferrer"><FaGithub className='hover:scale-110 hover:text-blue-900 transition duration-300 ease-in-out' size={60} /></a>
            <a className='py-5' href="https://www.linkedin.com/in/kristofer-marshall-7a211441/" target='_blank' rel="noreferrer"><FaLinkedin className='hover:scale-110 hover:text-blue-900 transition duration-300 ease-in-out' size={60} /></a>
            <a className='py-5' href="https://stackoverflow.com/users/19216309/rflctnofu" target='_blank' rel="noreferrer"><FaStackOverflow className='hover:scale-110 hover:text-blue-900 transition duration-300 ease-in-out' size={60} /></a>
        </footer>
    )
}

export default Footer