import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme } from 'lib/theme';
import { CssBaseline } from '@material-ui/core';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	useEffect(() => {
		const serverStyles = document.querySelector('#jss-server-side');
		if (serverStyles) serverStyles.remove();
	});

	return (
		//ts-skip-next-line
		<ThemeProvider theme={darkTheme /*lightTheme*/}>
			<CssBaseline />
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
