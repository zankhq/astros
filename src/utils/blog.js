/**
 * @description Get the reading time of an article
 * @param {*} body
 * @returns {number} readTime
 */
export const getArticleReadingTime = (body) => {
	const wordsPerMinute = 183;
	const numberOfWords = body.split(/\s/g).length;
	const minutes = numberOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return readTime;
};
