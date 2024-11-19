import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './logo.module.scss'
import logoIcon from '../image/logo.png'; 

export default function Logo() {
  return (
    <Link href="/">
      <div>
        <Image src={logoIcon} alt="Logotip company" width={156} height={60} />
      </div>
    </Link>
  );
}
