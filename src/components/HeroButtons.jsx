import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function HeroButtons() {
    return (
        <div className='flex items-center justify-center gap-6 mt-8 mb-6'>
            <div className='h-px bg-gray-600 w-10'/>

            <ScrollLink 
                to='contact'
                smooth={true}
                duration={500}
                offset={-50}
            >
                <button className='bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-5 py-2 rounded-full hover:from-orange-600 transition duration-300'>
                     Get In Touch
                </button>
            </ScrollLink>

            <ScrollLink
                to='projects'
                smooth={true}
                duration={500}
                offset={-50}
                className='text-white font-medium hover:underline cursor-pointer'
            >
                View My Projects
            </ScrollLink>

            <ScrollLink
                to='projects'
                smooth={true}
                duration={500}
                offset={-50}
            >
                <button className='bg-white text-black p-2 rounded-full hover:bg-gray-200 transition duration-300'>
                    <ArrowRight className='w-5 h-5' />
                </button>
            </ScrollLink>

            <div className='h-px bg-gray-600 w-10'/>
        </div>
    );
}