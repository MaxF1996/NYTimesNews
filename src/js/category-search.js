import NewsApiServes from './rest-api';

const news = new NewsApiServes();

const categoriesList = document.querySelector('.filter-section__container');
const categoriesDropdownList = document.querySelector(
  '.categories-dropdown-list-js'
);
const othersDropdownList = document.querySelector('.others-dropdown-list-js');

async function getCategoryList() {
  const response = await news.requestListCategories();

  const markupOthers = response.data.results
    .map((arr, index) => {
      if (index > 5) {
        return `<li class="dropdown__item">
            <button class="dropdown__category-btn category__btn">${arr.display_name}</button>
          </li>`;
      }
    })
    .join('');
  othersDropdownList.innerHTML = markupOthers;

  const markupCategories = response.data.results
    .map(
      arr => `<li class="dropdown__item">
                            <button class="dropdown__category-btn category__btn">${arr.display_name}</button>
                        </li>`
    )
    .join('');
  categoriesDropdownList.innerHTML = markupCategories;
}

categoriesList.addEventListener('click', hendleOnBtn);

function hendleOnBtn(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const categories = event.target.innerHTML;
  hendleRequest(categories);
}

async function hendleRequest(categories) {
  const string = categories.toLowerCase();
  const encodeURI = encodeURIComponent(string);

  news.category = encodeURI;
  try {
    const response = await news.searchNewsOnClick();
    const checkedResponse = await responseСheck(response);
    console.log(checkedResponse);
  } catch (error) {
    console.log(error);
  }
}

function responseСheck(response) {
  if (response.data.results == false) {
    throw new Error();
  }
  return response;
}

export { getCategoryList };
