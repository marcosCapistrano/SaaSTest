import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

export default function index() {
	useEffect(() => {
		console.log('oi');
	});
	return (
		<div>
			<Head>
				<title>Página Index</title>
				<meta
					name="description"
					content="Essa é uma descrição da pagina index"
				/>
			</Head>

			<Layout firstGridItem={true}>
				<div>
					<p>Oie</p>
					<Link href="/csr-page" as="/csr-page">
						<a>Go to CSR page</a>
					</Link>
				</div>
			</Layout>
		</div>
	);
}
