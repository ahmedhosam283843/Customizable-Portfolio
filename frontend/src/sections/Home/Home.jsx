import { images } from '../../constants';
import React from 'react'
import './Home.scss';
import { motion } from 'framer-motion';



const Home = () => {
  return (
    <div className='app_home app_flex'>
      <motion.div

        whileInView={{ x: [-120, 0], opacity: [0, 1], rotate: [80, 0] }}
        transition={{ duration: 0.8 }}
        className="app_home_info"
      >
        <div className="app_home_badge">
          <div className="badge_cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ahmed</h1>
            </div>
          </div>

          <div className="tag_cmp app_flex">
            <p className="p-text">Android Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ delayChildren: 0.8, duration: 0.8 }}
        className="app_home_img"
      >


        <img src={images.profile} className='user_image' alt="user image" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          alt="profile picture background"
          src={images.circle}
          className="background_circle"
        />
      </motion.div>




    </div>
  )
}

export default Home