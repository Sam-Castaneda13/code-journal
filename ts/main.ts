/* global */

interface FormElements extends HTMLFormControlsCollection {
  photoUrl: HTMLInputElement;
  title: HTMLInputElement;
  notes: HTMLTextAreaElement;
}

const $image = document.getElementsByTagName('img');
const imf = $image[0] as HTMLImageElement;
const $newImg = document.getElementById('photo-url') as HTMLInputElement;
const $form = document.querySelector('#form') as HTMLFormElement;

function imgChanger(event: Event): void {
  const $change = event.target as HTMLInputElement;
  const picture = $change.value;
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
if (!$newImg) throw new Error('The Image did not load.');

$form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $form.elements as FormElements;
  const $titleInput = $formElements.title.value;
  console.log($titleInput);
  const $photoInput = $formElements.photoUrl.value;
  console.log($photoInput);
  const $noteInput = $formElements.notes.value;
  console.log($noteInput);
  let entryId = 1;
  const entries = {
    image: $photoInput,
    title: $titleInput,
    photoURL: $photoInput,
    note: $noteInput,
  };
  console.log(entries);
  const data = {
    view: 'entry-form',
    entries: [entries],
    editing: null,
    nextEntryId: entryId,
  };
  console.log(data);
  entryId++;
  $form.reset();
  const photoReset = '/images/placeholder-image-square.jpg';
  imf.src = photoReset;
});
