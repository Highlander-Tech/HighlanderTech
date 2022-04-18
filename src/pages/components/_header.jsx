import React from 'react'
import Head from 'next/head'

export default function Header() {
    return (
        <>
            <Head>
                <title>Highlander Tech - RS</title>
            </Head>
            <header id="logo">
                <div id="header">
                <h1><a href="/">Highlander Tech</a></h1>
                    <img src="./logo.svg" alt="logo" width="80px" height="80px" />
                    
                </div>
            </header>
        </>
    )
}
