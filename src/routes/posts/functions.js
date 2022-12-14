import config from '$lib/config.js';
import { goto } from '$app/navigation';

const { maxLength } = config.posts.body;

export function safeBody(body) {
  if (body.length > maxLength) {
    const len = maxLength - 3;
    return body.substring(0, len) + '...';
  }
  return body;
}
