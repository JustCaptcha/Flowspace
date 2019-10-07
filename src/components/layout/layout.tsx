import React from 'react';
import { style, classes } from './layout.st.css';
import { Header } from '../header/header';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';

export const Layout: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Header></Header>
            <Content>
                {props.children}
            </Content>
            <Footer></Footer>
        </div>
    )
}