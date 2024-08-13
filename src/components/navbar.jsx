import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ scrollToSection }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className='w-full sticky top-0 p-4 z-10' style={{backgroundColor: '#0E1D2B'}}>
            <div className='flex justify-between items-center mx-auto' style={{maxWidth: '450px'}}>
                <p className='text-fifth font-semibold hover:text-gold text-xl'>WILLYPORTO</p>
                <button  
                    className='text-white font-semibold hover:text-gold text-xl md:hidden'
                    onClick={toggleCollapse}
                    aria-controls="navbarToggleExternalContent" 
                    aria-expanded={isCollapsed}
                > 
                    <FontAwesomeIcon icon={faBars} size='xl'/>
                </button>
                <ul className='hidden md:flex space-x-4'>
                    <li className="text-third font-semibold hover:text-gold text-sm cursor-pointer" onClick={() => scrollToSection.intro()}>HOME</li>
                    <li className="text-third font-semibold hover:text-gold text-sm cursor-pointer" onClick={() => scrollToSection.about()}>ABOUT</li>
                    <li className="text-third font-semibold hover:text-gold text-sm cursor-pointer" onClick={() => scrollToSection.skills()}>SKILL</li>
                    <li className="text-third font-semibold hover:text-gold text-sm cursor-pointer" onClick={() => scrollToSection.projects()}>PROJECT</li>
                </ul>
            </div>
                
            {isCollapsed && (
                <div id='navbarToggleExternalContent' className='mt-4 md:hidden'>
                    <ul className='flex flex-col space-y-3'>
                        <li className="text-third font-semibold hover:text-gold text-sm self-center cursor-pointer" onClick={() => scrollToSection.intro()}>HOME</li>
                        <li className="text-third font-semibold hover:text-gold text-sm self-center cursor-pointer" onClick={() => scrollToSection.about()}>ABOUT</li>
                        <li className="text-third font-semibold hover:text-gold text-sm self-center cursor-pointer" onClick={() => scrollToSection.skillsMobile()}>SKILL</li>
                        <li className="text-third font-semibold hover:text-gold text-sm self-center cursor-pointer" onClick={() => scrollToSection.projects()}>PROJECT</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
