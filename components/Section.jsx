"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <div
          className='flex flex-col justify-center items-center'
          style={{
            transform: isInView ? "none" : "translatey(400px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </div>
      </section>
    );
}
  export default Section