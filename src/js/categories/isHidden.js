import { ref } from './refCaregories';

function makeVisibleCategories() {
  ref.list.style.visibility = 'visible';
}

function makeHiddenCategories() {
  ref.list.style.visibility = 'hidden';
}

export { makeVisibleCategories, makeHiddenCategories };
