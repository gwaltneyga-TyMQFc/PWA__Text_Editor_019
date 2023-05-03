import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log ('PUT to the database')
  //Add create the database with a version number of 1
  const jateDb = await openDB('jate',1);
  //Call the process of storing the data by readrwriting since we are putting data in
  const tx = jateDb.transaction('jate', 'readwrite');
  //Ensure the data has an object to be stored in using the const to store it.
  const store = tx.objectStore('jate');
  //Request the data to be stored in the object "store"
  const request = store.put({id:1, value:content});
  //Ensure it waits to check the result of storing before continuing.
  const conclusion = await request;
  console.log("Data Saved to the database", conclusion.value);

}
export const getDb = async (content) => {
  console.log ('GET from the database')
  //Add create the database with a version number of 1
  const jateDb = await openDB('jate',1);
  //Call the process of getting the data by readonly since we are pulling for display.
  const tx = jateDb.transaction('jate', 'readonly');
  //Ensure the data has an object to be stored in using the const to store it.
  const store = tx.objectStore('jate');
  //Request the data to be gathered in the object "store"
  const request = store.get(1);
  //Ensure it waits to check the result of getting it before continuing.
  const conclusion = await request;
  conclusion
    ? console.log("Data retrieved!", result.value)
    : console.log("Data not found.");
    
  return result?.value;

}

initdb();
