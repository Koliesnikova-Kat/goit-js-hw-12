export const createGalleryMarkup = imgInfo => {
  return `
    <li class='gallery-item'>
      <a class='gallery-link' href='${imgInfo.largeImageURL}'>
        <img class='gallery-image' src='${imgInfo.webformatURL}' alt='${imgInfo.tags}' />
      </a>
      <div class='info'>
        <p class='info-item'>
          <b>Likes</b> ${imgInfo.likes}
        </p>
        <p class='info-item'>
          <b>Views</b> ${imgInfo.views}
        </p>
        <p class='info-item'>
          <b>Comments</b> ${imgInfo.comments}
        </p>
        <p class='info-item'>
          <b>Downloads</b> ${imgInfo.downloads}
        </p>
      </div>
    </li>
  `;
};