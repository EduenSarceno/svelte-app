export default {
  API_BASE: 'https://blog-backend-blush.vercel.app/graphql',
  api: {
    limits: {
      posts: 10,
      group: 10
    }
  },
  brand: 'EDUEN',
  navbar: {
    links: [
      {slug: '', name: 'home'},
      {slug: 'about-us', name: 'about'},
      {slug: 'posts', name: 'blog'},
      {slug: 'contact-us', name: 'contact'}
    ]
  },
  posts : {
    body: { maxLength: 280 },
    author: {
      colors: [
      '#000',
      '#8D2020',
      '#47095C',
      '#09595C'
      ]
    }
  },
  paginator: {
    size: 5
  }
};
