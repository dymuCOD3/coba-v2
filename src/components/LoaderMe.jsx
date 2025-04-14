import "../styles/loaderMe.css"
import {motion} from "framer-motion";

export default function LoaderMe() {
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
            transition: {delay: 0.2}, 
                }}>
                More Contact/Info
            </motion.span>
        </div>
    </motion.section>
  )
}
