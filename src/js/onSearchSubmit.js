import NewsApiServes from './rest-api';
import { onError } from './renderPopularNews';
import renderCards from '../index';
import pickedDate from './calendar';

const news = new NewsApiServes();

export default async function onSearchSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  news.currtentDate();
  console.log(pickedDate);
  news.query = e.target.elements.word.value;
  try {
    const response = await news.searchNewsByInputAndDate();
    const articles = response.data.response.docs;
    if (articles.length === 0) throw new Error('No data');
    renderCards(articles, 'search');
    // addEvtListOnReadMore(articles);
  } catch (error) {
    console.log(error);
    onError();
  }
}
