import NewsApiServes from './rest-api';
import { onError } from './renderPopularNews';
import renderCards from '../index';
import { addEvtListOnReadMore } from './onReadLink';

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
    console.log(articles);
    if (articles.length === 0) {
      throw new Error('No data');
    }
    renderCards(articles, 'search');
    addEvtListOnReadMore(articles);
  } catch {
    onError();
  }
}

function quotesReplace(quote) {
  return quote.replace('"', '').replace('"', '');
}
