import React from 'react';
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";

function Marq({ icons,src}) {
    
    return (
        <Marquee pauseOnHover pauseOnClick direction={src} >
           {Array.from({ length: 2 }).map((_, index) => (
            <React.Fragment key={index}>
                {icons.map(({name,icon}) => (
                <div key={name} className="inline-flex justify-center items-center mx-4 bg-secondary rounded-2xl px-4 py-2 xl:flex-col xl:w-[7rem]">
                    <FontAwesomeIcon icon={icon} className='text-4xl' style={{color: '#E1F1F3'}}/>
                    <span className="ml-2 text-xl xl:ml-0 xl:py-2" style={{color: '#E1F1F3'}}>{name}</span>
                </div>
                ))}
            </React.Fragment>
        ))}
        </Marquee>
    );
};
export default Marq;