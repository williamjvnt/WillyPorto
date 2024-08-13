import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";

function Card ({src,text,img,title}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div ref={ref}
            whileHover={{ scale: [null, 1.05, 1.05] }}
            transition={{ duration: 0.3, delay: 0.2, ease: [0.6, 0.01, -0.05, 0.9] }} 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-fourth w-[20rem] h-fit">
            <div 
                
                className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                
                    className="rounded-t-lg w-[20rem] h-[18rem] object-cover" 
                    src={img}
                    alt=""
                />
            </div>
            <div className="p-6 bg-fourth rounded-lg">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-secondary dark:text-secondary">
                    {title}
                </h5>
                <p className="mb-4 text-base text-neutral-200">
                    {text}
                </p>
                
                <a href={src}>
                    <button
                    type="submit"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    See My Project!
                    </button>
                </a>
                
            </div>
        </motion.div>
    );
}

export default Card;