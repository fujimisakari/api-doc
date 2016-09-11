
// For fixed Navigation and ContentHeader setting
const naviMenu = document.getElementById('naviMenu');
const breadcrumbs = document.getElementById('breadcrumbs');
const contentElements = document.getElementsByClassName('content');

function windowLoad() {
  naviMenu.style.height = `${window.innerHeight}px`;
}

function scrollLoad() {
  if (window.pageYOffset > 64) {
    breadcrumbs.style.position = 'fixed';
    breadcrumbs.style.top = '0px';
    naviMenu.style.position = 'fixed';
    naviMenu.style.top = '0px';
    for (let i = 0; i < contentElements.length; i++) {
      contentElements[i].style.paddingTop = '64px';
    }
  } else {
    breadcrumbs.style.position = 'relative';
    breadcrumbs.style.top = '';
    naviMenu.style.position = 'relative';
    naviMenu.style.top = '';
    for (let i = 0; i < contentElements.length; i++) {
      contentElements[i].style.paddingTop = '';
    }
  }
}

windowLoad();
scrollLoad();
window.onresize = windowLoad;
window.onscroll = scrollLoad;
