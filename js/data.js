'use strict';
/* exported data */
const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
function writeData() {
  const dataJson = JSON.stringify(data);
  localStorage.setItem('Entry-1', dataJson);
}
