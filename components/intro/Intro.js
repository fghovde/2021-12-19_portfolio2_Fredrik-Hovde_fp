import Image from 'next/image';
import styles from './Intro.module.css';

export default function Intro() {
	return (
		<>
		<div className={styles.logoContainer}>
            <Image src="/logo.svg" layout="fill" alt="Race to the North logo" className={styles.logo} />
        </div>
		</>
	);
}



