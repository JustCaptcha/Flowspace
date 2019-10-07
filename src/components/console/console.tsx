import React from 'react';
import { style, classes } from './console.st.css';
import { Typography } from '@material-ui/core';

interface IConsolePointerProps {
    className?: string;
    variant?: any;
}

interface IConsoleLogProps {
    className?: string;
    user?: any;
    pointer?: boolean;
}

export const ConsolePointer: React.FunctionComponent<IConsolePointerProps> = props => {
    const variant = (props.variant) ? props.variant : 'body1'
    return (
        <Typography variant={variant} className={style(classes.consolePointer, props.className)}>█</Typography>
    )
}

export const ConsoleLog: React.FunctionComponent<IConsoleLogProps> = props => {
    const user = (props.user) ? (
        <span className={style(classes.user)}>{props.user}</span>
    ) : 'anonym';
    const pointer = (props.pointer) ? <ConsolePointer /> : '';

    return (
        <div className={style(classes.consoleLog, props.className)}>
            <Typography>{user}:</Typography>
            <Typography className={style(classes.consoleLogContent)}>{props.children}</Typography>
            {pointer}
        </div>
    )
}