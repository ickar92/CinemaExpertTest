var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

function selectItem(e) {
  if (e.target.classList.contains('active')) return;

  featured.style.backgroundImage = e.target.style.backgroundImage;

  for (var i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains('active'))
      galleryItems[i].classList.remove('active');
  }

  e.target.classList.add('active');
}

//Start this baby up
(function init() {
  var images = [
    'img/main-1.png',
    'img/main-2.png',
    'img/main-3.png',
    'img/main-4.png'

  ];

  //Set Initial Featured Image
  featured.style.backgroundImage = 'url(' + images[0] + ')';

  //Set Images for Gallery and Add Event Listeners
  for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
    galleryItems[i].addEventListener('click', selectItem);
  }
})();