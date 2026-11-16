export let EN_RECORDS = {};

let loadPromise = null;

export async function loadEnRecords() {
  if (Object.keys(EN_RECORDS).length > 0) {
    return EN_RECORDS;
  }
  if (!loadPromise) {
    loadPromise = import('./enRecordsAll.js')
      .then((mod) => {
        EN_RECORDS = mod.EN_RECORDS || {};
        return EN_RECORDS;
      })
      .catch((err) => {
        loadPromise = null;
        throw err;
      });
  }
  return loadPromise;
}
