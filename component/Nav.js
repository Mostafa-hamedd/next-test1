import Link from 'next/link'
import { useRouter } from 'next/router'

import navStyles from "../styles/Home.module.css"   
import LangSwitcher from './common/LangSwitcher';

const Nav = () => {
   
const { locale, asPath} = useRouter();


  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'> 
          <a className={asPath === '/' ?  "active" : ""}>
            Home 
          </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className={asPath === '/about' ?  "active" : ""}>
              About 
            </a>
          </Link>
        </li>
        <li>
          <Link href='/signin'>
            <a className={asPath === '/signin' ?  "active" : ""}>
            signin 
            </a>
          </Link>
        </li>
        <li>
          <Link href='/MacApi'>
            <a className={asPath === '/MacApi' ?  "active" : ""}>
              MacApi 
            </a>
          </Link>
        </li>
        <li>
          <Link href='/filter'>
            <a className={asPath === '/filter' ?  "active" : ""}>
            filter 
            </a>
          </Link>
        </li> 
        <li>
          <LangSwitcher>
            <div className="">
            {locale == "en" ? "ar" : "en"}
            </div>
          </LangSwitcher>
        </li>
      </ul> 
    </nav>
  )
}

export default Nav

 