import { storage } from '../firebaseConfig';

// Get all files from storage
const getAllFilesFromStorage = async () => {
  try {

    const fileUrls = [];

    // Create a reference under which you want to list
    const storageRef = storage.ref();

    // Promise that resolves with the list of files under the path
    const files = await storageRef.listAll();

    // Get the download URL for each file
    for (const file of files.items) {
      const url = await file.getDownloadURL();
      fileUrls.push({ name: file.name, url });
    }
    return fileUrls;

  } catch (error) {
    console.error('Error fetching files from storage:', error);
    throw error;
  }

};

// Fetch files from storage
export async function fetchFiles() {
  try {
    const files = await getAllFilesFromStorage();
    return files
  } catch (error) {
    console.error('Error fetching files:', error);
  }
}
