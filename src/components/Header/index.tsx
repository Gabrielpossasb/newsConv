import { SignInButton } from '../SignInButton/index';
import styles from './styles.module.scss'

export function Header() {
   return(
      <header className={styles.headerContainer}>
         <div className={styles.headerContent}>
            <img src="/images/logo.svg" alt="news.Conv"/>
            <nav>
               <a className={styles.active}>Home</a>
               <a>Posts</a>
            </nav>
            <SignInButton/>
         </div>
      </header>
   );
}