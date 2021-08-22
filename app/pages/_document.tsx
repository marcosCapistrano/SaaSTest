import React from 'react';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static override async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => App,
				enhanceComponent: (Component) => Component,
			});

		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	override render(): JSX.Element {
		return (
			<Html>
				<Head lang="pt-br" />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
