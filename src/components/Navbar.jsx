console.log('Navbar component file loaded');
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState, useRef, useLayoutEffect } from 'react';


const items = ["home", "about", "projects", "contact"];

export default function Navbar() {
    console.log('Navbar component is rendering');
    const [active, setActive] = useState("home");
    const containerRef = useRef();
    const indicatorRef = useRef();

    useLayoutEffect(() => {
        const container = containerRef.current;
        const btn = container?.querySelector(`[data-id='${active}']`);
        const indicator = indicatorRef.current;
        if (btn && indicator) {
            indicator.style.width = `${btn.offsetWidth}px`;
            indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
        }
    }, [active]);

    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-zinc-900 shadow-md'>
            <div className='flex justify-center py-4'>
                <div ref={containerRef} className='flex bg-zinc-800 rounded-full px-4 py-2 gap-4 relative'>
                    {items.map((id) => (
                        <ScrollLink
                            key={id}
                            to={id}
                            smooth
                            duration={500}
                            spy
                            offset={-80}
                            onSetActive={() => setActive(id)}
                            className={`px-4 py-1 rounded-full text-white cursor-pointer capitalize ${
                                active === id ? "font-semibold" : "hover:text-gray-300"
                            }`}
                            data-id={id}
                        >
                            {id}
                        </ScrollLink>
                    ))}

                    <motion.div
                        ref={indicatorRef}
                        className='absolute bottom-1 h-1 bg-blue-500 rounded-full'
                        layout
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </div>
            </div>
        </nav>
    );
}
