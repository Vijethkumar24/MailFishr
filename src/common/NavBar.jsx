import { Divide as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    const navitems = [
        { id: 1, item: 'Home' },
        { id: 2, item: 'About' },
        { id: 3, item: 'Contact' },
        { id: 4, item: 'Login' },
        { id: 5, item: 'SignUp' }
    ];

    // Auto-close mobile menu when screen size increases to md
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-[100%] min-h-[100px] border-2   shadow-xl">

            <div className="flex min-w-10 border-2 ">
                <p className="absolute top-9 left-14 text-4xl">M<span className='text-blue-500'>a</span>ilFi<span className='text-red-500'>s</span>hr</p>
                <div className="md:hidden mt-7 absolute right-2 "><Hamburger toggled={isOpen} toggle={setOpen} /></div>
            </div>
            <ul className="hidden md:flex mt-10 text-xl w-3/4 ml-auto gap-12 justify-center items-center ">

                {
                    navitems.map((navitem) => (
                        <li key={navitem.id}>{navitem.item}</li>
                    ))
                }

            </ul>

            {/* Mobile menu */}
            {
                isOpen && (
                    <ul className="flex md:hidden flex-col mt-24 text-xl w-full justify-around items-center gap-4 z-50">
                        {navitems.map((navitem) => (
                            <li key={navitem.id}>{navitem.item}</li>
                        ))}
                    </ul>
                )
            }
        </div >

    );
}

export default NavBar;
