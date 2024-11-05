import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/header';
import Footer from './components/footer';


export default function Home() {
  return (
    <div  classname = "wapper"> 
      <Header />
      <Footer />
  </div>
  );
}
