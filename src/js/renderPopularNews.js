import { createCard } from './cardMarkup';
import { createCardPop } from './cardMarkup';
import { updateMarkup } from './makkupUtils';
import NewsApiServes from './rest-api';
import { addEvtListOnReadMore } from './onReadLink';
const newsBoxEl = document.querySelector('.news-container');
const news = new NewsApiServes();

export default async function renderPopularNews() {
  if (document.title !== 'NYTimes News') {
    return;
  }
  console.log('happend');
  // try{
  const response = await news.requestPopularNews();
  const articles = response.data.results;
  if (articles.length === 0) throw new Error('No data');

  const markup = articles.reduce((markup, article) => createCardPop(article) + markup, '');
  updateMarkup(markup, newsBoxEl);

  addEvtListOnReadMore(articles);
  //   } catch{
  //     onError()
  //   }
}

export function onError() {
  newsBoxEl.textContent = 'Not found any articles';
}
