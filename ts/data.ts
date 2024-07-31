/* exported data */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface Entry {
  image: string;
  title: string;
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

function writeData(): void {
  const dataJson = JSON.stringify(data);
  localStorage.setItem('Entries', dataJson);
}

function readData(): Data {
  const JSONData = localStorage.getItem('Entries');
  if (JSONData) {
    return JSON.parse(JSONData);
  } else {
    return { view: 'entry-form', entries: [], editing: null, nextEntryId: 1 };
  }
}

data = readData();
