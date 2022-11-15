import React from 'react'
import Header from "./header"
import BottomNav from './bottomNav'

const Layout = props => {
    return(
        <div>
            <Header />
            {props.children}
            <BottomNav />
        </div>
    )
}
export default Layout