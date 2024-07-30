/* global */

const $image = document.getElementsByTagName('img');
const imf = $image[0];
const $newImg = document.getElementById('photo-url') as HTMLInputElement;

function imgChanger(event: Event): void {
  const $change = (event.target as HTMLInputElement).value;

  const picture = $change;

  if (urlChecker(picture) === true) {
    imf.src = picture;
  } else {
    imf.src =
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png';
  }
}

function urlChecker(string: string): boolean {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
  );
  return res !== null;
}

if ($newImg) $newImg.addEventListener('change', imgChanger);
