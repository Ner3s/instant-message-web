import { IUploadFile } from '@/models/upload-file';
import { remoteUploadFile } from '@/services/file/upload';

type TUploadFile = IUploadFile & {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 *  Function is responsible for Upload file
 */
async function uploadFile({ setLoading, name, file }: TUploadFile) {
  try {
    const response = await remoteUploadFile({ name, file });

    console.log(response);
  } catch (error: unknown) {
    //
  } finally {
    setLoading(false);
    //
  }
}

export { uploadFile };
