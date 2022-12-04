import React from 'react'
import * as footerStyles from "./footer.module.css"


const Footer = () => {
    const year = new Date().getFullyYear();

    return <p className={footerStyles.footer}>{'Copyright © Evelyn Padilla ${year}'}</p>;
};

export default Footer;