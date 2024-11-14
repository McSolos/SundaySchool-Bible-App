// database.js
import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const databaseName = 'kjv.sqlite'; // Replace with your actual file name

let db;

export const getDBConnection = async () => {
  if (!db) {
    db = await SQLite.openDatabase({ name: databaseName, location: 'default' });
  }
  return db;
};

// Function to fetch a specific verse by book ID, chapter, and verse
export const getBibleVerse = async (bookId, chapter, verse) => {
  const db = await getDBConnection();
  try {
    const [results] = await db.executeSql(
      `SELECT text FROM verses WHERE book = ? AND chapter = ? AND verse = ?`,
      [bookId, chapter, verse]
    );

    if (results.rows.length > 0) {
      return results.rows.item(0).text;
    } else {
      return 'Verse not found';
    }
  } catch (error) {
    console.error('Error fetching verse:', error);
    throw Error('Could not retrieve verse');
  }
};
