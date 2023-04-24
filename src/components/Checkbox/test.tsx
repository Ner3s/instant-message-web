import { Checkbox, CheckboxProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const mockProps: CheckboxProps = {
  name: 'checkbox_mock',
  value: false
};

const onChange = jest.fn();

const makeSut = (props: CheckboxProps) => {
  const user = userEvent.setup();

  const sut = render(<Checkbox {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<Input />', () => {
  it('should render Checkbox', () => {
    makeSut(mockProps);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render Checkbox', async () => {
    const { user } = makeSut({ ...mockProps, onChange });

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(onChange).toBeCalledTimes(1);
  });
});
