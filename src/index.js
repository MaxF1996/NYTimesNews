import jsScriptHeader from './js/jsScriptHeader';
import { getCategoryList } from './js/category-search';
import weatherTemplate from './template/weatherTemplate';
import { getWeatherWidget } from './js/weather';
import popularNews from './js/renderPopularNews';
import { createCardPop } from './js/cardMarkup';
import { categoryCard } from './js/cardMarkup';
import { updateMarkup } from './js/markupUtils';
import { createCard } from './js/cardMarkup';
import NewsApiServes from './js/rest-api';
import footerJs from './js/footer';
import jsCalendar from './js/calendar';
import { addEvtListOnReadMore } from './js/onReadLink';

const newsBoxEl = document.querySelector('.news-container');
const news = new NewsApiServes();

jsScriptHeader();
if (document.title === 'NYTimes News') {
  jsCalendar();
  popularNews();
}

footerJs();

if (document.title !== 'NYTimes News: Read By Yourself') {
  getCategoryList();
}

export default function renderCards(articles, identifier) {
  news.sizeScreenCompute();
  const markup = articles
    .map((article, idx) => {
      if (identifier === 'categories') {
        if (idx !== news.getCardOrder()) {
          return categoryCard(article);
        }
        return weatherTemplate() + categoryCard(article);
      } else if (identifier === 'search') {
        if (idx !== news.getCardOrder()) {
          return createCard(article);
        }
        return weatherTemplate() + createCard(article);
      } else if (identifier === 'populate') {
        if (idx !== news.getCardOrder()) {
          return createCardPop(article);
        }
        return weatherTemplate() + createCardPop(article);
      }
    })
    .join('');

  updateMarkup(markup, newsBoxEl);
  addEvtListOnReadMore(articles);
  getWeatherWidget();
}
