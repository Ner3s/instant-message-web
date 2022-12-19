import { ChatTemplate, ChatTemplateProps } from '.';

import { Contact } from '@/models/contact';
import { User } from '@/models/user';
import { render, screen, userEvent } from '@/utils/test';

const onHandleSendMessage = jest.fn();
const onRouterBack = jest.fn();
const onRouterPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({ back: onRouterBack, push: onRouterPush })
}));

const propsMock: ChatTemplateProps = {
  user: new User(
    'user id mock',
    'name user mock',
    'email user mock',
    'image user mock',
    '2000-01-01',
    'description',
    '2000-01-01',
    '2000-01-01'
  ),
  handleSendMessage: onHandleSendMessage,
  contact: new Contact('2000-01-01', {
    name: 'name mock',
    imageUrl: 'image mock',
    uid: 'id mock'
  }),
  messages: []
};

const makeSut = (props: ChatTemplateProps) => {
  const user = userEvent.setup();

  const sut = render(<ChatTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ChatTemplate />', () => {
  it('should render ChatTemplate', () => {
    const { container } = makeSut(propsMock);

    expect(container).toBeInTheDocument();
  });

  it('should click on the arrow to return to the contacts page', async () => {
    const { user } = makeSut(propsMock);

    const returnContactArea = screen.getByLabelText(
      /button to return contact page/i
    );

    await user.click(returnContactArea);

    expect(onRouterBack).toBeCalledTimes(1);
  });

  it('should render the contact name and click on it', async () => {
    const { user } = makeSut(propsMock);

    const nameContactArea = screen.getByLabelText(
      /contact name, if clicked go to profile contact/i
    );

    await user.click(nameContactArea);

    expect(onRouterPush).toBeCalledTimes(1);
    expect(
      screen.getByText(propsMock.contact?.userInfo.name as string)
    ).toBeInTheDocument();
  });

  it('should render my messages and contact messages', async () => {
    makeSut({
      ...propsMock,
      messages: [
        {
          date: '2022-01-01',
          senderId: 'mock id 1',
          text: 'text 1',
          uid: 'uid mock 1'
        },
        {
          date: '2022-01-01',
          senderId: 'user id mock',
          text: 'text 2',
          uid: 'uid mock 2'
        }
      ]
    });

    const contactMessage = screen.getByText(/text 1/i);
    const myMessage = screen.getByText(/text 2/i);

    expect(contactMessage).toBeInTheDocument();
    expect(myMessage).toBeInTheDocument();
  });

  it('should type in input and send message', async () => {
    const { user } = makeSut(propsMock);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'write test');
    await user.click(button);

    expect(onHandleSendMessage).toBeCalledTimes(1);
  });

  it('should render the icon when the user does not have an image in the profile', () => {
    makeSut({
      ...propsMock,
      contact: new Contact('2000-01-01', {
        name: 'name mock',
        imageUrl: '',
        uid: 'id mock'
      })
    });

    screen.logTestingPlaygroundURL();

    expect(
      screen.getByLabelText(/this icon represents the user image/i)
    ).toBeInTheDocument();
  });
});
