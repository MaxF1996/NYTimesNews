import jsScriptHeader from './js/jsScriptHeader';
import { getCategoryList } from './js/category-search';
import popularNews from './js/popularNews';
import { createCardPop } from './js/cardMarkup';
import { updateMarkup } from './js/makkupUtils';
import { createCard } from './js/cardMarkup';
import { getWeatherWidget } from './js/weather';
import NewsApiServes from './js/rest-api';

const newsBoxEl = document.querySelector('.news-container');
const news = new NewsApiServes();

jsScriptHeader();
popularNews();
getCategoryList();
console.log(news.getCardOrder());

export default function renderCards(articles, identifier) {
  news.sizeScreenCompute();
  const markup = articles
    .map((article, idx) => {
      if (identifier === 'search') {
        if (idx !== news.getCardOrder()) {
          return createCard(article);
        }
        return getWeatherWidget();
      } else if (identifier === 'populate') {
        if (idx !== news.getCardOrder()) {
          return createCardPop(article);
        }
        return getWeatherWidget();
      }
    })
    .join('');
  updateMarkup(markup, newsBoxEl);
}
