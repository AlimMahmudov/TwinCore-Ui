import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo";

const Head = () => {
	return (
		<head>
			<meta
				name="google-site-verification"
				content="fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY"
			/>
			<link rel="manifest" href="/manifest.json" />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/icons/icon-192x192.png"
			/>

			<meta property="title" content={SITE_NAME} />
			<meta name="description" content={SITE_DESCRIPTION} />
			<meta property="og:title" content={SITE_NAME} />
			<meta property="og:description" content={SITE_DESCRIPTION} />

			{/* <!-- iOS Safari --> */}
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			/>
			<meta name="robots" content="index, follow" />
		</head>
	);
};

export default Head;
