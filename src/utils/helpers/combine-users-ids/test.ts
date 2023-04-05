import { combineUsersIds } from '.';

const userId = '12345';
const currentUserId = '123';

describe('function combineUsersIds()', () => {
  it('should combine ids', () => {
    expect(
      combineUsersIds({
        user: { uid: userId } as never,
        currentUser: { uid: currentUserId } as never
      })
    ).toBe('12345123');
  });
});
