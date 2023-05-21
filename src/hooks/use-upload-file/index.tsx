import { useState } from 'react';

import { uploadFile } from './uploadFile';

interface IHandleUploadFile {
  name: string;
  file: File;
}

function useUploadFile() {
  const [isLoading, setIsLoading] = useState(false);

  function handleUploadFile({ name, file }: IHandleUploadFile) {
    return uploadFile({ setIsLoading, name, file });
  }

  return { isLoading, handleUploadFile };
}

export { useUploadFile };
