'use strict';
/* global data */
const $image = document.querySelector('#img');
const $newImg = document.getElementById('photo-url');
const $form = document.querySelector('#form');
function imgChanger(event) {
  const $eventTarget = event.target;
  const $eventTargetURL = $eventTarget.value;
  if (urlChecker($eventTargetURL)) {
    $image.src = $eventTargetURL;
  } else {
    $image.src =
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png';
  }
}
function urlChecker(string) {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
  );
  return res !== null;
}
if (!$newImg) throw new Error('The Image did not load.');
if ($newImg) $newImg.addEventListener('change', imgChanger);
if (!$form) throw new Error('The Form did now load');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements;
  const $titleInput = $formElements.title.value;
  const $photoInput = $formElements.photoUrl.value;
  const $noteInput = $formElements.notes.value;
  data.entries.push({
    image: $photoInput,
    title: $titleInput,
    note: $noteInput,
    entryId: data.nextEntryId,
  });
  data.nextEntryId++;
  writeData();
  $form.reset();
  const photoReset = '/images/placeholder-image-square.jpg';
  $image.src = photoReset;
});
