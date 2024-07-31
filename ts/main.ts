/* global data */

interface FormElements extends HTMLFormControlsCollection {
  photoUrl: HTMLInputElement;
  title: HTMLInputElement;
  notes: HTMLTextAreaElement;
}

const $image = document.querySelector('#img') as HTMLImageElement;
const $newImg = document.getElementById('photo-url') as HTMLInputElement;
const $form = document.querySelector('#form') as HTMLFormElement;
function imgChanger(event: Event): void {
  const $eventTarget = event.target as HTMLInputElement;
  const $eventTargetURL = $eventTarget.value;
  if (urlChecker($eventTargetURL)) {
    $image.src = $eventTargetURL;
  } else {
    $image.src =
      'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/403.png';
  }
}

function urlChecker(string: string): boolean {
  const res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
  );
  return res !== null;
}

if (!$newImg) throw new Error('The Image did not load.');
if ($newImg) $newImg.addEventListener('change', imgChanger);

if (!$form) throw new Error('The Form did now load');
$form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $form.elements as FormElements;
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
