'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Celestial Madness' textStyle='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>Celestial Madness </span>
        is our newest VR experience, where you can explore the universe from the comfort of your living room.
        You can experience what its like to stand on a distant planet, peer into a black hole and truly see the
        <span className='font-extrabold text-white'> beauty of the Cosmos</span>. Using any
        <span className='font-extrabold text-white'> VR </span>device, you can
        <span className='font-extrabold text-white'> explore </span>
        countless galaxies and explore the planets and stars that inhabit them.
        Keep scrolling to learn more about Celestial Madness.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] h-[28px] object-contain my-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
