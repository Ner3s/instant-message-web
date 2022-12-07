import { toast } from 'react-toastify';

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { firebaseStore } from '@/configs/firebase';
import { IUploadFile } from '@/models/upload-file';

async function remoteUploadFile({ name, file }: IUploadFile) {
  let image_ref: string | null = null;

  const storageRef = ref(firebaseStore, name);

  try {
    await uploadBytesResumable(storageRef, file);
    const response = await getDownloadURL(storageRef);

    image_ref = response;
  } catch (error) {
    toast.error('Error upload file');
  }
  return image_ref;
}

export { remoteUploadFile };
