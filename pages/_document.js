import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<script type="module" defer src="https://test.biometric.kz/liveness-detection/BiometricPackage.js"></script>
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
