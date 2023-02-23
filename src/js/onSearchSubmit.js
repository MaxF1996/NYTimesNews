import NewsApiServes from './rest-api';
import { onError } from './renderPopularNews';
import renderCards from '../index';
import { hidCategorySectionOnError } from './categories/isHidden';

const news = new NewsApiServes();

export default async function onSearchSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const storage = localStorage.getItem('selectedDateKey');
  news.setDate = quotesReplace(storage);
  news.query = e.target.elements.word.value;
  try {
    const response = await news.searchNewsByInputAndDate();
    const articles = response.data.response.docs;
    if (response.data.results == false) {
      throw new Error('No data');
    } else if (response.status === 429) {
      throw new Error();
    }
    renderCards(articles, 'search');
  } catch {
    hidCategorySectionOnError();
    onError();
  }
}

function quotesReplace(quote) {
  return quote.replace('"', '').replace('"', '');
}
