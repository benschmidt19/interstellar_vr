'use client';

import { motion } from 'framer-motion';


import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Interstellar Community" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to explore the Cosmos together!</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h0-[550px]'
      >
        <img
          src='/map.png'
          alt='map'
          className='w-full h-full object-cover'
        />

        <div className='absolute bottom-20 right-20 w-[70x] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <img
            src='people-01.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-10 left-20 w-[70x] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <img
            src='people-02.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
          <img
            src='people-03.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-72 left-[18%] w-[200px] h-[150px] p-[6px] rounded-lg bg-[#5d6680]'>
          <img
            src='world-01.png'
            alt='world'
            className='w-full h-full'
          />
          <div className='absolute bottom-10 left-4 w-[16px] h-[16px]'>
            <img
              src='people-04.png'
              alt='small-image-01'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='absolute bottom-10 left-10 w-[16px] h-[16px]'>
            <img
              src='people-05.png'
              alt='small-image-02'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='absolute bottom-10 left-16 w-[16px] h-[16px]'>
            <img
              src='people-06.png'
              alt='small-image-03'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='absolute bottom-10 right-7'>
            <span className="font-normal text-[9px] text-white uppercase">
              +382 have joined
            </span>
          </div>
          <span className="absolute bottom-0 left-0 p-4 font-extrabold text-[14px] text-white uppercase">Andromeda Galaxy</span>
        </div>
        <div className='absolute bottom-72 right-[19%] w-[200px] h-[150px] p-[6px] rounded-lg bg-[#5d6680]'>
          <img
            src='world-02.png'
            alt='world'
            className='w-full h-full'
          />
          <div className='absolute bottom-10 left-4 w-[16px] h-[16px]'>
            <img
              src='people-06.png'
              alt='small-image-01'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='absolute bottom-10 left-10 w-[16px] h-[16px]'>
            <img
              src='people-04.png'
              alt='small-image-02'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='absolute bottom-10 left-16 w-[16px] h-[16px]'>
            <img
              src='people-05.png'
              alt='small-image-03'
              className='w-full h-full object-cover rounded-full'
            />
          </div>
          <div className='absolute bottom-10 right-7'>
            <span className='font-normal text-[9px] text-white uppercase'>
              +296 have joined
            </span>
          </div>
          <span className="absolute bottom-0 left-0 p-4 font-extrabold text-[14px] text-white uppercase">Kuiper Belt</span>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
