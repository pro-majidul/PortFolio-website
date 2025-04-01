
const Navbar = () => {
    const navOptions = (
        <>
            <li><a href="#home" className=' hover:text-orange-300 font-extrabold' duration={500}> <span className="text-green-500 text-lg">🏠</span>Home</a></li>
            <li><a href="#about" className=' hover:text-orange-300 font-extrabold' duration={500}>
                <span className="text-green-500 text-lg">👤</span>
                <span className="font-extrabold">About</span></a></li>
            <li><a href="#projects" className=' hover:text-orange-300 font-extrabold' duration={500}><span className="text-red-500 text-lg">🚀</span>Projects</a></li>
            <li><a href="#skills" className=' hover:text-orange-300 font-extrabold' duration={500}><span className="text-purple-500 text-lg">💻</span>Skills</a></li>
            <li><a href="#contact" className=' hover:text-orange-300 font-extrabold' duration={500}><span className="text-red-500 text-lg">🔗</span>Contact</a></li>
        </>
    );

    return (

        <section className="bg-[#0A101E] fixed bg-opacity-75  top-0 left-0 right-0 z-50">
            <div className="navbar max-w-7xl mx-auto w-full  md:px-12 px-3 mb-2">
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
                            className="menu menu-sm dropdown-content bg-[#0A101E] rounded-box shadow-lg z-[1] mt-3 w-52 p-2">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <img className='w-10 h-10' src='https://i.ibb.co.com/Z6MxQWF2/letter-m.png' alt="Logo" />
                        <p className='font-bold uppercase text-lg md:text-xl'>
                            <span className='bg-gradient-to-r from-blue-500 to-purple-600 font-Cinzel text-transparent bg-clip-text'>M</span>ajidul
                        </p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-5">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        target='_blank'
                        rel="noopener noreferrer"
                        href='https://drive.google.com/file/d/1xULRceWwX4n5yOTUT-zLvqYJx4hgQeH3/view'
                        className='md:px-3 px-1 py-1 text-white flex gap-1 items-center font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer text-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Navbar;
