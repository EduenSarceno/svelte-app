import config from '$lib/config/all.js';
const { maxLength } = config.article.body;
const { colors } = config.article.author

export function safeBody(body) {
  if (body.length > maxLength) {
    const len = maxLength - 3;
    return body.substring(0, len) + '...';
  }
  return body;
}

export function authorColor(author) {
  const str = author.name || 'Anonymous';
  var hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  let color = hash % colors.length;
  if (color < 0) color = colors.length + color;
  return colors[color];
}
