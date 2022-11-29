import storedUserDataMapper from '.';

const mockData = {
  auth: { uid: '123' } as unknown,
  storedData: {
    name: 'Test',
    email: 'test@mock.com',
    created_at: 'test',
    updated_at: 'test'
  }
};

describe('stored-user-data-mapper', () => {
  it('should return user', () => {
    const data = storedUserDataMapper(mockData as never);

    expect(data.name).toBe('Test');
  });

  it('should return an empty string when the user null', () => {
    Object.assign(mockData, { auth: null, storedData: null });

    const data = storedUserDataMapper(mockData as never);

    expect(data.name).toBe('');
  });
});
