import renderCards from '../index';
import NewsApiServes from './rest-api';
const newsBoxEl = document.querySelector('.news-container');
const news = new NewsApiServes();
import { newsCardsFavChecker } from './fav/common';

export default async function () {
  if (document.title !== 'NYTimes News') {
    return;
  }
  try {
    const response = await news.requestPopularNews();
    const articles = response.data.results;
    if (response.data.results == false) {
      throw new Error('No data');
    }
    renderCards(articles, 'populate');
  } catch {
    onError();
  }

  newsCardsFavChecker();
}

export function onError() {
  // newsBoxEl.textContent = 'Not found any articles';
  const notFind = document.querySelector('.not-find');
  notFind.classList.add('find');
}
