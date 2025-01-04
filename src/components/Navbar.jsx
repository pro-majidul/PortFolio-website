import logo from '../assets/logo.png';

const Navbar = () => {
    const navOptions = (
        <>
            <li><a href="#home" className='text-xl hover:text-orange-300' smooth={true} duration={500}>Home</a></li>
            <li><a href="#about" className='text-xl hover:text-orange-300' smooth={true} duration={500}>About</a></li>
            <li><a href="#projects" className='text-xl hover:text-orange-300' smooth={true} duration={500}>Projects</a></li>
            <li><a href="#skills" className='text-xl hover:text-orange-300' smooth={true} duration={500}>Skills</a></li>
            <li><a href="#contact" className='text-xl hover:text-orange-300' smooth={true} duration={500}>Contact</a></li>
        </>
    );

    return (
        <div className="navbar bg-[#0A101E] bg-opacity-60 fixed z-50 max-w-7xl mx-auto w-full md:px-12 px-3 mb-2 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#0A101E] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-10 h-10' src={logo} alt="Logo" />
                    <p className='ml-1 text-xl font-bold'><span className='bg-gradient-to-r  from-blue-500 to-purple-600 font-Cinzel text-transparent bg-clip-text'>M</span>ajidul</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-5">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='' className='px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer'> Resume</a>
            </div>
        </div>
    );
};

export default Navbar;
