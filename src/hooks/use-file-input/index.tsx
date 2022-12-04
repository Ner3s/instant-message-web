import React, { useState } from 'react';

import { fileInput } from './file-input';

function useFileInput() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [showImages, setShowImages] = useState<string[]>(['']);

  const handleFileInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    multiple = false
  ) => {
    fileInput({ event: e, setFiles, setShowImages, multiple });
  };

  return { files, setFiles, showImages, setShowImages, handleFileInput };
}

export { useFileInput };
