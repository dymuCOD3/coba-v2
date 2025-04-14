import "../styles/loaderHome.css"
import {motion} from "framer-motion";

export default function LoaderHome() {
  return (
    <motion.section
    initial={{y: 0, opacity: 1}}
    animate={{
        y: -1000, 
        transition: {
            duration: 1,
            delay: 2
        }
    }}
    exit={{y: window.innerWidth}}
    className="loaderHome">
        <div className='containerLoaderHome'>
            <motion.span className="loaderText" 
            initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 0.5}, 
            transitionEnd: {
                display: "none"}
                }}>
                Halo
            </motion.span>
            <motion.span className="loaderText"
            initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 0.8}, 
            transitionEnd: {
                display: "none"}
                }}>
                Hello
            </motion.span>
            <motion.span className="loaderText"
            initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 1.1}, 
            transitionEnd: {
                display: "none"}
                }}>
                مرحبًا
            </motion.span>
            <motion.span className="loaderText"
            initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 1.4}, 
            transitionEnd: {
                display: "none"}
                }}>
                Bonjour
            </motion.span>
            <motion.span className="loaderText"
            initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 1.7}, 
                }}>
                привет
            </motion.span>
        </div>
    </motion.section>
  )
}
