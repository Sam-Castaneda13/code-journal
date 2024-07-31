'use strict';
/* global data */
const $image = document.getElementsByTagName('img');
const imf = $image[0];
const $newImg = document.getElementById('photo-url');
const $form = document.querySelector('#form');
function imgChanger(event) {
  const $change = event.target;
  const picture = $change.value;
  if (urlChecker(picture) === true) {
    imf.src = picture;
  } else {
    imf.src =
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png';
  }
}
function urlChecker(string) {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
  );
  return res !== null;
}
if ($newImg) $newImg.addEventListener('change', imgChanger);
if (!$newImg) throw new Error('The Image did not load.');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements;
  const $titleInput = $formElements.title.value;
  const $photoInput = $formElements.photoUrl.value;
  const $noteInput = $formElements.notes.value;
  // we are not reassigning data here, we should be creating an entry object and adding to our entries property of te data object
  data.entries.push({
    image: $photoInput,
    title: $titleInput,
    photoURL: $photoInput,
    note: $noteInput,
    entryId: data.nextEntryId,
  });
  data.nextEntryId++;
  writeData();
  $form.reset();
  const photoReset = '/images/placeholder-image-square.jpg';
  imf.src = photoReset;
});
