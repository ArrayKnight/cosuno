import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'

import { GlobalStyles, theme } from '~/common'
import introspectionQueryResultData from '~/graphql'
import { App } from './App'

const Root = (): ReactElement => {
    const client = new ApolloClient({
        uri: process.env.GRAPHQL_SCHEMA_URL || 'http://localhost:3000/graphql',
        cache: new InMemoryCache({
            fragmentMatcher: new IntrospectionFragmentMatcher({
                introspectionQueryResultData,
            }),
        }),
    })

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                <Helmet titleTemplate="Cosuno | %s" />
                <ApolloProvider client={client}>
                    <ApolloHooksProvider client={client}>
                        <App />
                    </ApolloHooksProvider>
                </ApolloProvider>
            </ThemeProvider>
        </StylesProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))
