"use client"

import Image from 'next/image';
import styles from './togglebtn.module.css'
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

const Togglebtn = () => {
  const {toggle, theme} = useContext (ThemeContext);
  console.log(theme);

  return <div className={styles.container} onClick={toggle} style={theme === 'dark' ? {left: 1, backgroundColor: 'white'} : {backgroundColor: '#0f172a'}}>

    <Image src="/moon.png" alt="moon" width={14} height={14} />
    <div className={styles.ball} style={theme === 'dark' ? {left: 1, backgroundColor:'#0f172a'} : {right: 1, backgroundColor:'white'}}>
    </div>
    <Image src="/sun.png" alt="sun" width={14} height={14} />
  </div>;
  
}

export default Togglebtn;