
// For fixed Navigation and ContentHeader setting
var navi = document.getElementById('navi');
var head = document.getElementById('mainHead');
var content = document.getElementById('mainCotent');

function windowLoad() {
  navi.style.height = window.innerHeight + 'px';
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
};

windowLoad();
scrollLoad();
window.onresize = windowLoad;
window.onscroll = scrollLoad;
