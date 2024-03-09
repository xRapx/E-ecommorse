// Save data to IndexedDB using Dexie
import db from './database';

const saveData = async (data) => {
  try {
    await db.myTable.add(data);
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data', error);
  }
};

// Example usage
const newData = { name: 'Example', description: 'This is an example.' };
saveData(newData);
