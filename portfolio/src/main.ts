import './style.scss';

const app = document.querySelector<HTMLDivElement>( '#app' )!

const btn = document.getElementById( 'toggle-more-btn' )!;
const moreContent = document.getElementById( 'more-content' )!;

let showingMore = false;
btn.addEventListener( 'click', () => {
  showingMore = !showingMore;

  if ( showingMore ) {
    btn.innerText = 'Less';
    moreContent.style.display = 'block';
  } else {
    btn.innerText = 'More'
    moreContent.style.display = 'none';
  }
} );