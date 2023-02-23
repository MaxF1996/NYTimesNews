import renderCards from '../index';
import NewsApiServes from './rest-api';
import { hidCategorySectionOnError } from './categories/isHidden';
import { newsCardsFavChecker } from './fav/common';

const news = new NewsApiServes();

export default async function () {
  if (document.title !== 'NYTimes News') {
    return;
  }
  try {
    const response = await news.requestPopularNews();
    const articles = response.data.results;

    if (articles == false) {
      throw new Error('No data');
    } else if (response.status === 429) {
      throw new Error();
    }
    renderCards(articles, 'populate');
  } catch {
    hidCategorySectionOnError();
    onError();
  }

  newsCardsFavChecker();
}

export function onError() {
  // newsBoxEl.textContent = 'Not found any articles';
  const notFind = document.querySelector('.not-find');
  notFind.classList.add('find');
}
