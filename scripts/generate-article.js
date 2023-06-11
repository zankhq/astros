import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import fs from "fs";
import Parser from "rss-parser"; // https://www.npmjs.com/package/rss-parser

import Filter from "bad-words";

import http from "https";
import { Configuration, OpenAIApi } from "openai";

let parser = new Parser();

let filter = new Filter();

const blogFeeds = process.env.BLOG_FEEDS?.split(",");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateText(prompt, maxTokens) {
  const openAiResponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: maxTokens,
    temperature: 1,
  });

  const {
    data: {
      choices: [
        {
          message: { content: generatedText },
        },
      ],
    },
  } = openAiResponse;

  return generatedText;
}

async function generateImage(prompt, imageName) {
  const openAiResponse = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });

  const file = fs.createWriteStream(`./public/images/${imageName}.png`);

  const request = await http.get(openAiResponse.data.data[0].url, function (response) {
    response.pipe(file);
    file.on("finish", () => {
      file.close();
    });
  });

  return file;
}

/**
 * Retrieve a specific feed
 * @param {string} feed
 * @returns
 */
async function getFeed(feed) {
  return await parser.parseURL(feed);
}

/**
 * Retrieve a list of feeds
 * @param {string[]} feeds
 * @returns
 */
async function getAllFeeds(feeds) {
  return await Promise.all(feeds.map(getFeed));
}

/**
 * get all published articles guid
 * @returns {string[]}
 */
function getPublishedArticles() {
  return publishedArticles;
}

/**
 * Add published article to the list
 * @param {string} guid
 */
function addPublishedArticle(guid) {
  publishedArticles.push(guid);
}

/**
 * Normalize feed item
 * @param {any} item
 * @returns
 */
function normalizeFeedItem(item) {
  return {
    title: item.title,
    link: item.link,
    content: item.content,
    isoDate: item.isoDate,
    categories: item.categories,
    guid: item.guid,
  };
}

/**
 * Get a random feed item
 * @param {any[]} feedsItems
 * @returns
 */
function selectFeedItem(feedsItems) {
  const publishedArticles = getPublishedArticles();

  const filteredFeedsItems = feedsItems.filter((item) => !publishedArticles.includes(item.guid));

  var randomFeedItem = filteredFeedsItems[Math.floor(Math.random() * filteredFeedsItems.length)];

  return normalizeFeedItem(randomFeedItem);
}

/**
 * Get sanitized text
 * @param {string} text
 * @returns
 */
function getSanitizedText(text, spaceSeparator = null, toLowerCase = false) {
  text = text.trim().replace(/[^a-zA-Z0-9 ]/g, "");

  if (spaceSeparator != null) {
    text = text.replace(/ /g, spaceSeparator);
  }

  if (toLowerCase) {
    return text.toLowerCase();
  } else {
    return text;
  }
}

/**
 * Filter and sanitize text
 * @param {string} text
 * @returns
 */
function getFilteredAndSanitezedText(text) {
  text = filter.clean(text);
  text = text.replace(/[^a-zA-Z0-9 ]/g, "");
  return text;
}

function getRandomAuthor() {
  // TODO: Get authors from content
  const authors = ["Janette Lynch", "Jenny Wilson", "John Doe", "Jane Doe", "John Smith", "Jane Smith"];

  return authors[Math.floor(Math.random() * authors.length)];
}

function getImage() {
  // TODO: Compute image
  return null;
}

function getCategory() {
  // TODO: Compute category
  return "test";
}

/**
 * Compute frontmatter
 * @param {*} item
 * @param {*} title
 * @returns
 */
function getFrontmatter(item) {
  // ---
  // draft: false
  // title: "The Complete Guide to Full Stack Web Development"
  // snippet: "Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti."
  // image: {
  //     src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240",
  //     alt: "full stack web development"
  // }
  // publishDate: "2022-11-08 11:39"
  // category: "Tutorials"
  // author: "Janette Lynch"
  // tags: [webdev, tailwindcss, frontend]
  // ---

  const date = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  return {
    draft: false,
    title: item.title,
    snippet: item.snippet,
    image: {
      src: getImage(),
      alt: item.title,
    },
    publishDate: formattedDate,
    category: getCategory(),
    author: getRandomAuthor(),
    tags: item.tags,
  };
}

/**
 * Generate article in markdown format
 * @param {*} fileName
 * @param {*} frontMatter
 * @param {*} body
 */
function generateMarkdownArticle(fileName, frontMatter, body) {
  var frontMatterString = `---
draft: ${frontMatter.draft}
title: "${frontMatter.title}"
snippet: "${frontMatter.snippet}"
image: {
    src: "/images/${fileName}.png",
    alt: "${frontMatter.image.alt}"
}
publishDate: "${frontMatter.publishDate}"
category: "${frontMatter.category}"
author: "${frontMatter.author}"
tags: [${frontMatter.tags.map((tag) => `"${tag}"`).join(", ")}]
---`;

  const newContent = `${frontMatterString}\n${body}`;
  fs.writeFileSync(`./src/content/blog/${fileName}.md`, newContent);
}

// https://blog.feedspot.com/rss_directory/
let feeds = await getAllFeeds(blogFeeds);

let feedsItems = [];

feeds.forEach((feed) => {
  feed?.items?.forEach((item) => {
    feedsItems.push(item);
  });
});

var item = selectFeedItem(feedsItems);

addPublishedArticle(item.guid);

const articleTitle = await generateText(`Rewrite this title "${item.title}"`, 100);

item.title = getFilteredAndSanitezedText(articleTitle);
item.content = getFilteredAndSanitezedText(item.content);

const articleBody = await generateText(
  `Create an article about "${item.title}" considering this content "${item.content.substring(0, 1024)}", format as markdown, exclude title`,
  2048
);

item.body = articleBody;

const articleSnippet = await generateText(`Create a synthetic version of this text: "${item.body}"`, 25);

item.snippet = getSanitizedText(articleSnippet);

const articleTags = await generateText(`Create a comma separated list of tags (single words) for this blog article: "${item.body}"`, 10);

let tags = articleTags.split(",");

item.tags = [];
if (tags && tags.length > 0) {
  tags.forEach((tag) => {
    if (tag) {
      let sanitizedTag = getSanitizedText(tag, "", true);
      item.tags.push(sanitizedTag);
    }
  });
}

let fileName = getSanitizedText(item.title, "-", true);

generateImage(`Thumbnail photo image for the article "${item.title}", no text`, fileName);

let frontMatter = getFrontmatter(item);

generateMarkdownArticle(fileName, frontMatter, articleBody);

