import { ref } from './refCaregories';
import { hidCategorySectionOnError } from '../../js/categories/isHidden';
import weatherTemplate from '../../template/weatherTemplate';
import createCards from '../cards/createCards';
import queueWeather from '../../js/countCard';
import { getWeatherWidget } from '../../js/weather';
import { onError } from '../renderPopularNews';

export default async function onClikCategories(news, e) {
  // if pressed <svg> or <span>
  let btn = e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;

  btn = btn.nodeName !== 'BUTTON' ? btn.parentNode : btn; // if pressed <use>

  if (btn.nodeName !== 'BUTTON') return; // if pressed <li.categories__item-drop>

  if (ref.drop !== btn) {
    ref.dropList.classList.add('visually-hidden'); //close .categories__list-drop

    ref.dropList.classList.remove('isActiveCateg');
    try {
      const response = await news.getCategory(btn.dataset.category);
      if (response.data.results == false) {
        throw new Error('No data');
      } else if (response.status === 429) {
        throw new Error();
      }
      // const filterArr = createArrayNews(dataByCategory);
      const queueWeat = queueWeather();
      const strInj = response.data.results
        .map((el, i) => (i === queueWeat ? weatherTemplate() : createCards(el)))
        .join('');
      // const strInj =  createCards(dataByCategory);
      document.querySelector('.news-container').innerHTML = strInj;
      getWeatherWidget();
    } catch {
      hidCategorySectionOnError();
      onError();
    }
  }

  document.querySelector('.isActiveCateg')?.classList.remove('isActiveCateg');

  btn.parentNode.classList.add('isActiveCateg');
}
