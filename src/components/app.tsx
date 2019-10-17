import React from 'react';
import { Content } from './content/content';
import { Header } from './header/header';
import { Router, View } from 'react-navi';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { routes } from '../routes';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: process.env.APOLLO_CLIENT_URI,
    credentials: 'same-origin'
})

const client = new ApolloClient({
    cache,
    link
});

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
    }
})

export interface IAppProps {
    className?: string;
}

export const App: React.FunctionComponent<IAppProps> = props => (
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
        <Router routes={routes}>
            <View />
        </Router>
        </ThemeProvider>
    </ApolloProvider>
);
