/* global  */

const $image = document.getElementsByTagName('img');
const imf = $image[0];
const $newImg = document.querySelector('#photo-url');

function imgChanger(event: Event): void {
  const $change = event.target as HTMLInputElement;

  if ($change) {
    imf.src =
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png';
  } else {
    imf.src =
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png';
  }
}

if ($newImg) $newImg.addEventListener('change', imgChanger);
