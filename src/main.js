
// For fixed Navigation and ContentHeader setting
const navi = document.getElementById('navi');
const head = document.getElementById('mainHead');
const content = document.getElementById('mainCotent');

function windowLoad() {
  navi.style.height = `${window.innerHeight}px`;
}

function scrollLoad() {
  if (window.pageYOffset > 64) {
    head.style.position = 'fixed';
    head.style.top = '0px';
    navi.style.position = 'fixed';
    navi.style.top = '0px';
    content.style.paddingTop = '64px';
  } else {
    head.style.position = 'relative';
    head.style.top = '';
    navi.style.position = 'relative';
    navi.style.top = '';
    content.style.paddingTop = '';
  }
}

windowLoad();
scrollLoad();
window.onresize = windowLoad;
window.onscroll = scrollLoad;
