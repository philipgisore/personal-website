console.log('Navbar component file loaded');
import { useState, useRef, useLayoutEffect } from 'react';
import Resume from './Resume';

const items = ["home", "about", "projects", "contact"];

export default function Navbar() {
    console.log('Navbar component is rendering');
    const [active, setActive] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = useRef(null);
    const indicatorRef = useRef(null);

    // Handle active indicator positioning
    useLayoutEffect(() => {
        const container = containerRef.current;
        const activeButton = container?.querySelector(`[data-id='${active}']`);
        const indicator = indicatorRef.current;

        if (activeButton && indicator && container) {
            const leftOffset = activeButton.offsetLeft;
            const buttonWidth = activeButton.offsetWidth;

            indicator.style.width = `${buttonWidth}px`;
            indicator.style.transform = `translateX(${leftOffset}px)`;
            indicator.style.opacity = '1';
        }
    }, [active]);

    // Handle scroll effects and active section detection
    useLayoutEffect(() => {
        const handleScroll = () => {
            // Update active section
            const scrollPosition = window.scrollY + 100;

            for (const item of items) {
                const element = document.getElementById(item);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActive(item);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle navigation click
    const handleNavClick = (id) => {
        setActive(id);
        setIsMenuOpen(false); // Close mobile menu

        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Close menu when clicking outside or on link
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="text-lg font-bold text-white">
                                <span className="text-orange-500">Pg.</span> Philip Gisore
                            </div>
                        </div>

                        {/* Desktop Navigation - hidden on mobile */}
                        <div className="hidden md:flex items-center gap-8 relative" ref={containerRef}>           
                            {items.map((id) => (
                                <button
                                    key={id}
                                    onClick={() => handleNavClick(id)}
                                    className={`px-4 py-2 capitalize transition-all duration-200 relative z-10 font-medium ${
                                        active === id
                                            ? "text-orange-500"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                    data-id={id}
                                >
                                    {id}
                                </button>
                            ))}
                        </div>

                        {/* Resume Button - Desktop */}
                        <div className="hidden md:block">
                            <Resume />
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-300 hover:text-orange-500 focus:outline-none focus:text-orange-500 transition-colors duration-300"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${
                                        isMenuOpen ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                    <div className="px-4 py-6 space-y-4">
                        {items.map((id, index) => (
                            <button
                                key={id}
                                onClick={() => handleNavClick(id)}
                                className={`block w-full text-left capitalize font-medium py-2 transition-all duration-300 hover:translate-x-2 ${
                                    active === id
                                        ? "text-orange-500"
                                        : "text-gray-300 hover:text-white"
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {id}
                            </button>
                        ))}
                        <div className="pt-4 border-t border-gray-700">
                            <Resume />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={closeMenu}
                ></div>
            )}
        </>
    );
}
