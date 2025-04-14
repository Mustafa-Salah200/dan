import { motion } from 'framer-motion'
import './Teachers.css'
import t1 from './images/t-1.jpeg'
import t2 from './images/t-2.jpeg'
const Teachers = () => {

  return (
    <div className="teachers_content_container">

    <div className='teachers'>
        <div className="top">
            <h1>تعرف على مدربينا المميزين
            </h1>
        </div>
        
        <div className="box">
            <motion.div
            initial={{opacity:0,y:"100px"}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}
            >
                <div className="image">
                    <img src={t1} alt="" />
                </div>
                <div className="info">
                    <p>مدير أكاديمية دان البريطانية للعلوم والتكنولوجيا 
                    </p>
                    <h3>د: نيلسون مويسيغي
                    </h3>
                </div>
            </motion.div>
            <motion.div
            initial={{opacity:0,y:"100px"}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}
            >
                <div className="image">
                    <img src={t2} alt="" />
                </div>
                <div className="info">
                    <p>جمهورية ليبيريا، غرب أفريقيا.
                    </p>
                    <h3>موريس إس لانجاما،
                    </h3>
                </div>
            </motion.div>
        </div>
    </div>
    </div>
  )
}

export default Teachers