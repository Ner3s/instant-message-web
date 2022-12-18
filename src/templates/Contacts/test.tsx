import { ContactsTemplate, ContactsTemplateProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const handleCurrentContactMock = jest.fn();
const handleFindContactsMock = jest.fn();
const onRouterPush = jest.fn();

const propsMock: ContactsTemplateProps = {
  isLoading: false,
  handleCurrentContact: handleCurrentContactMock,
  handleFindContacts: handleFindContactsMock,
  contacts: [
    [
      'key 0',
      {
        date: new Date().toISOString(),
        userInfo: {
          name: 'name mock 0',
          imageUrl: 'image mock 0',
          uid: 'uid mock 0'
        }
      }
    ],
    [
      'key 1',
      {
        date: new Date().toISOString(),
        userInfo: {
          name: 'name mock 1',
          imageUrl: 'image mock 1',
          uid: 'uid mock 1'
        }
      }
    ],
    [
      'key 2',
      {
        date: new Date().toISOString(),
        userInfo: {
          name: 'name mock 2',
          imageUrl: 'image mock 2',
          uid: 'uid mock 2'
        }
      }
    ]
  ] as never
};

jest.mock('next/router', () => ({
  useRouter: () => ({ push: onRouterPush })
}));

const makeSut = (props: ContactsTemplateProps) => {
  const user = userEvent.setup();

  const sut = render(<ContactsTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ContactsTemplate />', () => {
  it('should render ContactsTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /Contacts/i
      })
    ).toBeInTheDocument();
  });

  it('should show contacts', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /name mock 1/i
      })
    ).toBeInTheDocument();
  });

  it('should click in one contact', async () => {
    const { user } = makeSut(propsMock);

    const Contact = screen.getByRole('heading', {
      name: /name mock 1/i
    });

    await user.click(Contact);

    expect(handleCurrentContactMock).toBeCalledTimes(1);
    expect(onRouterPush).toBeCalledTimes(1);
  });

  it('should find contact', async () => {
    const { user } = makeSut(propsMock);

    await user.type(screen.getByRole('searchbox'), 'na');

    setTimeout(() => {
      expect(handleFindContactsMock).toBeCalledTimes(1);
    }, 0);
  });
});
