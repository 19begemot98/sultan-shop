import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/header';
import Header2 from './components/header2';



export default function Home() {
  return (
    <div  classname = "wapper"> 
      <Header />
      <Header2 />
    
    </div>
  );
}
