import React, { Fragment } from 'react'
import Nav from './Nav'
import Head from "next/head";
import styles from "../styles/Layout.module.css"

const Layout = ({children}) => {
  return (
    <Fragment>
    <Head>
      <title>Test</title>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        /> 
        
    </Head>
      <Nav />
        <main className={styles.main}>
          {children}
        </main>
    </Fragment>
  )
}

export default Layout