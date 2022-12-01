import { toast } from 'react-toastify';

import { IUploadFile } from '@/models/upload-file';
import { remoteUploadFile } from '@/services/file/upload';

type TUploadFile = IUploadFile & {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 *  Function is responsible for Upload file
 */
async function uploadFile({ setIsLoading, name, file }: TUploadFile) {
  setIsLoading(true);
  let image_url: string | null = null;
  try {
    const response = await remoteUploadFile({ name, file });
    image_url = response;
  } catch (error) {
    toast.error('Error upload file');
  } finally {
    setIsLoading(false);
  }

  return image_url;
}

export { uploadFile };
