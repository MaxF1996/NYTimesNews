import { cutText, cutTitle, formatDate } from './markupUtils';

export function createCard({
  section_name,
  web_url,
  headline,
  lead_paragraph,
  pub_date,
  multimedia,
  snippet,
}) {
  return `
        <li class="news-item">
        <div class="overlay"></div>
        <div class="img-thumb">
        <span class="readable"
        >Already read
        <svg class="icon-done" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.188 3.59413C16.0321 3.59878 15.8842 3.66393 15.7755 3.77577L6.59971 12.9516L2.82393 9.17577C2.76864 9.11819 2.70242 9.07222 2.62914 9.04054C2.55586 9.00887 2.477 8.99214 2.39718 8.99133C2.31736 8.99052 2.23817 9.00564 2.16427 9.03581C2.09036 9.06599 2.02322 9.11061 1.96677 9.16705C1.91032 9.2235 1.86571 9.29064 1.83553 9.36455C1.80536 9.43846 1.79023 9.51764 1.79105 9.59746C1.79186 9.67729 1.80859 9.75615 1.84026 9.82943C1.87193 9.9027 1.91791 9.96892 1.97549 10.0242L6.17549 14.2242C6.28802 14.3367 6.44061 14.3999 6.59971 14.3999C6.75881 14.3999 6.9114 14.3367 7.02393 14.2242L16.6239 4.62421C16.7106 4.53993 16.7698 4.43143 16.7938 4.31292C16.8178 4.19441 16.8054 4.07141 16.7583 3.96006C16.7112 3.84871 16.6315 3.75419 16.5297 3.6889C16.428 3.6236 16.3089 3.59057 16.188 3.59413Z" fill="#00DD73"/>
        </svg>
          </span>
          <img src="https://www.nytimes.com/${
            multimedia[0].url
          }" loading="lazy" alt="${snippet}" class="news-img" />
          <p class="news-chip">${section_name}</p>
          <button type="button" class="add-news-favorite">
            <p class="favorite-btn-text">Add to favorite</p>
            <svg class="favorite-icon icon-empty-heart" width="16" height="16" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66634 2C2.82567 2 1.33301 3.47733 1.33301 5.3C1.33301 6.77133 1.91634 10.2633 7.65834 13.7933C7.7612 13.8559 7.87928 13.889 7.99967 13.889C8.12007 13.889 8.23815 13.8559 8.34101 13.7933C14.083 10.2633 14.6663 6.77133 14.6663 5.3C14.6663 3.47733 13.1737 2 11.333 2C9.49234 2 7.99967 4 7.99967 4C7.99967 4 6.50701 2 4.66634 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="favorite-icon icon-heart" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66634 2C2.82567 2 1.33301 3.47733 1.33301 5.3C1.33301 6.77133 1.91634 10.2633 7.65834 13.7933C7.7612 13.8559 7.87928 13.889 7.99967 13.889C8.12007 13.889 8.23815 13.8559 8.34101 13.7933C14.083 10.2633 14.6663 6.77133 14.6663 5.3C14.6663 3.47733 13.1737 2 11.333 2C9.49234 2 7.99967 4 7.99967 4C7.99967 4 6.50701 2 4.66634 2Z" fill="#4B48DA"/>
        </svg> 
          </button>
        </div>
        <div class="news-info">
          <h2 class="news-title disable-scroll">
            ${cutTitle(headline.main)}
          </h2>
          <p class="news-desk">
          ${cutText(lead_paragraph)}
          </p>
          <div class="adding">
            <p class="news-date">${formatDate(pub_date)}</p>
            <a
              href=${web_url}
              class="news-link"
              target="_blank"
              rel="noopener noreferrer"
              >Read more</a
            >
          </div>
        </div>
      </li> `;
}

export function createCardPop({
  media,
  title,
  section,
  subsection,
  abstract,
  published_date,
  url,
}) {
  return `
        <li class="news-item is-read">
        <div class="overlay"></div>
        <div class="img-thumb">
        <span class="readable"
        >Already read
        <svg class="icon-done" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.188 3.59413C16.0321 3.59878 15.8842 3.66393 15.7755 3.77577L6.59971 12.9516L2.82393 9.17577C2.76864 9.11819 2.70242 9.07222 2.62914 9.04054C2.55586 9.00887 2.477 8.99214 2.39718 8.99133C2.31736 8.99052 2.23817 9.00564 2.16427 9.03581C2.09036 9.06599 2.02322 9.11061 1.96677 9.16705C1.91032 9.2235 1.86571 9.29064 1.83553 9.36455C1.80536 9.43846 1.79023 9.51764 1.79105 9.59746C1.79186 9.67729 1.80859 9.75615 1.84026 9.82943C1.87193 9.9027 1.91791 9.96892 1.97549 10.0242L6.17549 14.2242C6.28802 14.3367 6.44061 14.3999 6.59971 14.3999C6.75881 14.3999 6.9114 14.3367 7.02393 14.2242L16.6239 4.62421C16.7106 4.53993 16.7698 4.43143 16.7938 4.31292C16.8178 4.19441 16.8054 4.07141 16.7583 3.96006C16.7112 3.84871 16.6315 3.75419 16.5297 3.6889C16.428 3.6236 16.3089 3.59057 16.188 3.59413Z" fill="#00DD73"/>
        </svg>
          </span>
          <img src="${
            !media[0]
              ? 'https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/The_New_York_Times.jpg'
              : media[0]['media-metadata'][2].url
          }" loading="lazy" alt="${
    !media[0] ? 'NYTimes' : media[0].caption
  }" class="news-img" />
          <p class="news-chip">${section || subsection}</p>
          <button type="button" class="add-news-favorite">
            <p class="favorite-btn-text">Add to favorite</p>
            <svg class="favorite-icon icon-empty-heart" width="16" height="16" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66634 2C2.82567 2 1.33301 3.47733 1.33301 5.3C1.33301 6.77133 1.91634 10.2633 7.65834 13.7933C7.7612 13.8559 7.87928 13.889 7.99967 13.889C8.12007 13.889 8.23815 13.8559 8.34101 13.7933C14.083 10.2633 14.6663 6.77133 14.6663 5.3C14.6663 3.47733 13.1737 2 11.333 2C9.49234 2 7.99967 4 7.99967 4C7.99967 4 6.50701 2 4.66634 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="favorite-icon icon-heart" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66634 2C2.82567 2 1.33301 3.47733 1.33301 5.3C1.33301 6.77133 1.91634 10.2633 7.65834 13.7933C7.7612 13.8559 7.87928 13.889 7.99967 13.889C8.12007 13.889 8.23815 13.8559 8.34101 13.7933C14.083 10.2633 14.6663 6.77133 14.6663 5.3C14.6663 3.47733 13.1737 2 11.333 2C9.49234 2 7.99967 4 7.99967 4C7.99967 4 6.50701 2 4.66634 2Z" fill="#4B48DA"/>
            </svg>
          </button>
        </div>
        <div class="news-info">
          <h2 class="news-title disable-scroll">
            ${cutTitle(title)}
          </h2>
          <p class="news-desk">
          ${cutText(abstract)}
          </p>
          <div class="adding">
            <p class="news-date">${formatDate(published_date)}</p>
            <a
              href=${url}
              class="news-link"
              target="_blank"
              rel="noopener noreferrer"
              >Read more</a
            >
          </div>
        </div>
      </li> `;
}
