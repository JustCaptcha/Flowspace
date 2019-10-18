import React from 'react';
import { classes, style } from './header.st.css';
import { Typography, Container, Grid } from '@material-ui/core';
import Digitflow from '../../static/svg/logos/digitflow.svg';
import { ConsolePointer } from '../console/console';

export interface IHeaderProps {
    className?: string;
}

export const Header: React.FunctionComponent<IHeaderProps> = props => (
    <header className={style(classes.root, props.className)}>
      <Container>
        <Grid container alignItems='center' justify='center' direction='column'>
          <Grid container item xs={12} justify='center' alignItems='center'>
            <img className={style(classes.digitflowLogo)} src={Digitflow}></img>
            <div className={style(classes.titleGroup)}>
              <Typography className={style(classes.title)} variant='h4'>Flowspace</Typography>
              <ConsolePointer variant='h4'/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
);
