import { useState } from 'react';

import { uploadFile } from './uploadFile';

interface IHandleUploadFile {
  name: string;
  file: File;
}

function useUploadFile() {
  const [loading, setLoading] = useState(false);

  const handleUploadFile = async ({ name, file }: IHandleUploadFile) => {
    uploadFile({ setLoading, name, file });
  };

  return { loading, handleUploadFile };
}

export { useUploadFile };
