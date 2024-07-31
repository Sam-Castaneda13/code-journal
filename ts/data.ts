/* exported data */
/* eslint-disable @typescript-eslint/no-unused-vars */

// need an interface for the data object
// need an interface for the entries (singular Entry object).. what properties should this have?
interface Entry {
  image: string;
  title: string;
  photoURL: string;
  note: string;
  entryId: number;
}

interface Data {
  view: string;
  entries: Entry[];
  editing: unknown;
  nextEntryId: number;
}

let data: Data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

data = readData();

function writeData(): void {
  const dataJson = JSON.stringify(data);
  localStorage.setItem('Entries', dataJson);
}

function readData(): Data {
  const JSONData = localStorage.getItem('Entries');
  if (JSONData) {
    return JSON.parse(JSONData);
  } else {
    // change this return to be an object that looks like the data object
    return { view: '', entries: [], editing: undefined, nextEntryId: 0 };
  }
}
