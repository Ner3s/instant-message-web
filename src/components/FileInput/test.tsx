import { FileInput, FileInputProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const inputMock: FileInputProps = {
  placeholder: 'teste',
  name: 'teste'
};

const makeSut = (props: FileInputProps) => {
  const user = userEvent.setup();

  const sut = render(<FileInput {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<FileInput />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    makeSut(inputMock);

    expect(
      screen.getByText(inputMock.placeholder as string)
    ).toBeInTheDocument();

    expect(screen.getByTestId('input-file')).toBeInTheDocument();
  });

  it('should be upload multiple files', async () => {
    const { user } = makeSut({ ...inputMock, multiple: true });

    const files = [
      new File(['mock'], 'text/txt'),
      new File(['mock'], 'text/txt')
    ];

    const input = screen.getByTestId('input-file') as HTMLInputElement;
    await user.upload(input, files);

    expect(input.files).toHaveLength(2);
    if (input.files != null) {
      expect(input.files[0]).toStrictEqual(files[0]);
      expect(input.files[1]).toStrictEqual(files[1]);
    }
  });
});
