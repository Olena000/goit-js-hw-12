export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
            class="gallery-img"
            src="${webformatURL}"
            alt="${tags}"
        />
        <ul class="gallery-info">
         <li class="galery-info-item">
             <h2 class="gallery-info-title">Likes</h2>
             <p class="gallery-info-text">${likes}</p>
        </li>
        <li class="gallery-info-item">
            <h2 class="gallery-info-title">Views</h2>
            <p class="gallery-info-text">${views}</p>
        </li>
         <li class="gallery-info-item">
            <h2 class="gallery-info-title">Comments</h2>
            <p class="gallery-info-text">${comments}</p>
        </li>
        <li class="gallery-info-item">
            <h2 class="gallery-info-title">Downloads</h2>
            <p class="gallery-info-text">${downloads}</p>
        </li>
     </ul>
	</a>
</li>`
    )
    .join('');
}
