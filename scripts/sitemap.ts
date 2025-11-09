import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

class PublicPage {
	HOME = "/";
}

const PAGE = new PublicPage();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const links = [{ url: PAGE.HOME, changefreq: "daily", priority: 1.0 }];

	const stream = new SitemapStream({
		hostname: "https://next-structure-seven.vercel.app/",
	});

	res.writeHead(200, { "Content-Type": "application/xml" });
	streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
		res.end(data.toString())
	);
}
