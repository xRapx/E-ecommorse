// database.js

import Dexie from 'dexie';

class MyDatabase extends Dexie {
  constructor() {
    super('MyDatabase');
    this.version(1).stores({
      myTable: '++id, name, description',
      // Add more tables and indexes as needed
    });
  }
}

const db = new MyDatabase();

export default db;
