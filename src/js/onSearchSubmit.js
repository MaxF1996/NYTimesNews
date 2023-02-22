import NewsApiServes from './rest-api';
import { onError } from './renderPopularNews';
import renderCards from '../index';

const news = new NewsApiServes();

export default async function onSearchSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  news.currtentDate();
  // const storage = localStorage.getItem('selectedDateKey');
  // console.log(storage);
  // news.setDate = storage;
  news.query = e.target.elements.word.value;
  try {
    const response = await news.searchNewsByInputAndDate();
    const articles = response.data.response.docs;
    console.log(articles);
    if (articles.length === 0) {
      throw new Error('No data');
    }
    renderCards(articles, 'search');
  } catch (error) {
    console.log(error);
    onError();
  }
}

function checkLockalStorage() {
  const storage = localStorage.getItem('selectedDateKey');

  if (storage === false) {
  }
}
