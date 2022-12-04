interface IFileInput {
  event: React.ChangeEvent<HTMLInputElement>;
  setFiles: React.Dispatch<React.SetStateAction<File[] | null>>;
  setShowImages: React.Dispatch<React.SetStateAction<string[]>>;
  multiple?: boolean;
}

function fileInput({ event, setFiles, setShowImages, multiple }: IFileInput) {
  if (event.target.files?.length) {
    const fileList = Array.from(event.target.files);

    fileList.forEach((image) => {
      const reader = new FileReader();

      setFiles((prevState) => {
        if (prevState?.length && multiple) {
          return [...prevState, image];
        }
        return [image];
      });

      reader.readAsDataURL(image);
      reader.onload = () => {
        setShowImages((prevState) => {
          if (prevState?.length && multiple) {
            return [...prevState, reader.result as string];
          }
          return [reader.result as string];
        });
      };
    });
  } else {
    setShowImages(['']);
    setFiles(null);
  }
}

export { fileInput };
