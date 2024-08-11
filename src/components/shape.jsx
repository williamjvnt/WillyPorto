import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";

function AbstractShapes({src}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div 
        ref={ref}
        initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
                type: "spring",
                duration: 1,
                delay: 0.5
            }}
        className="relative flex justify-center items-center">
            {src}
        </motion.div>
    );
}

export default AbstractShapes;
