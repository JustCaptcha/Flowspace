import React from 'react';
import { classes, style } from './header.st.css';
import { Typography } from '@material-ui/core';
import Digitflow from '../../static/svg/logos/digitflow.svg';
import { ConsolePointer } from '../console/console';

export interface IHeaderProps {
    className?: string;
}

export const Header: React.FunctionComponent<IHeaderProps> = props => (
    <header className={style(classes.root, props.className)}>
        <img className={style(classes.digitflowLogo)} src={Digitflow}></img>
        <div className={style(classes.titleGroup)}>
            <Typography className={style(classes.title)} variant='h2'>Flowspace</Typography>
            <ConsolePointer variant='h3'/>
        </div>
    </header>
);
