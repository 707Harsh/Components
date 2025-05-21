import { useState } from 'react';
import { FiSearch, FiEdit3 } from 'react-icons/fi';

export const Navbar = () => {
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const toggleMobileSearch = () => {
        setMobileSearchOpen((open) => !open);
    };

    return (
        <>
            <nav className="w-full border-b px-6 py-3 flex items-center justify-between bg-white">
                {/* Left: Logo and Search */}
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-serif font-bold">Solute</h1>

                    {/* Desktop search */}
                    <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1 w-60">
                        <FiSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-sm w-full"
                        />
                    </div>

                    {/* Mobile search icon */}
                    <button
                        className="md:hidden w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                        onClick={toggleMobileSearch}
                    >
                        <FiSearch className="text-gray-600 text-md" />
                    </button>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 text-sm">
                    <button className="flex items-center gap-1 text-gray-700 hover:text-black">
                        <FiEdit3 />
                        <span className="hidden sm:inline">Write</span>
                    </button>
                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full ">
                        <span className="font-medium text-gray-600 ">PV</span>
                    </div>
                </div>
            </nav>

            {/* Mobile search bar below navbar */}
            {mobileSearchOpen && (
                <div className="md:hidden w-full  px-4 py-2 border-b animate-slide-down">
                    <div className="flex items-center border rounded-full px-3 py-1">
                        <FiSearch className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search Solute"
                            className="outline-none flex-1 text-sm"
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

// just run npm install react-icons to install the react icons
// and this navbar has a functionality that when the viewport width is below md then the searchbox collapses and then upon clicking the
// search icon a new searchbox appears just below the navbar
