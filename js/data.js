'use strict';
/* exported data */
/* eslint-disable @typescript-eslint/no-unused-vars */
let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
function writeData() {
  const dataJson = JSON.stringify(data);
  localStorage.setItem('Entries', dataJson);
}
function readData() {
  const JSONData = localStorage.getItem('Entries');
  if (JSONData) {
    return JSON.parse(JSONData);
  } else {
    // change this return to be an object that looks like the data object
    return { view: 'entry-form', entries: [], editing: null, nextEntryId: 1 };
  }
}
data = readData();
