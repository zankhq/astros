import site from "../data/site.json";
import { formatDate } from "../utils/formatDate";

const ORGANIZATION = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${site.url}#organization`,
	url: site.url,
	name: site.company.name,
	description: site.description,
	sameAs: [`https://twitter.com/${site.social.twitter}`],
	logo: `${site.url}favicon.svg`
};

const WEBSITE = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: `${site.title} • Astros`,
	url: site.url,
	description: site.description,
	sameAs: [`https://twitter.com/${site.social.twitter}`]
};

function serializeSchema(thing) {
	return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export const websiteSchema = serializeSchema(WEBSITE);

export const organizationSchema = serializeSchema(ORGANIZATION);

export function blogPostSchema(post) {
	const { ["@context"]: context, ...publisher } = ORGANIZATION;

	return serializeSchema({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		url: post.url,
		datePublished: formatDate(post.published_date),
		headline: post.title,
		publisher: {
			...publisher
		},
		dateModified: post.modified_date && formatDate(post.modified_date),
		image: `${site.url}${post.image}`,
		author: {
			"@type": "Person",
			name: "Tony Sullivan"
		}
	});
}
