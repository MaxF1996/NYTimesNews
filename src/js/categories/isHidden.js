import { ref } from './refCaregories';

function makeVisibleCategories() {
  ref.list.style.visibility = 'visible';
}

function makeHiddenCategories() {
  ref.list.style.visibility = 'hidden';
}

function hidCategorySectionOnError() {
  ref.categories.style.display = 'none';
}

export {
  makeVisibleCategories,
  makeHiddenCategories,
  hidCategorySectionOnError,
};
