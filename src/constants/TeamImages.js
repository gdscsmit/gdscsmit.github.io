import { storage } from '../firebaseConfig';

const getAllFilesFromStorage = async () => {
  try {
    const fileUrls = [];
    const storageRef = storage.ref();

    const files = await storageRef.listAll();

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

export async function fetchFiles() {
  try {
    const files = await getAllFilesFromStorage();
    console.log(files)
    return files
  } catch (error) {
    console.error('Error fetching files:', error);
  }
}
