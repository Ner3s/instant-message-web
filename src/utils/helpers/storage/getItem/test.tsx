import { getItem } from '.';
import { setItem } from '../setItem';

describe('storage.getItem', () => {
  it('should be get item in storage', () => {
    setItem({ key: 'test', value: 'testing' });
    const item = getItem<string>({ key: 'test' });
    expect(item).toBe('testing');
  });

  it('should be get object item in storage', () => {
    setItem({ key: 'test', value: { name: 'testing' } });
    const item = getItem<{ name: string }>({ key: 'test' });
    expect(item?.name).toBe('testing');
  });

  it('should be set null object in storage', () => {
    setItem({ key: 'test', value: null });
    const item = getItem<null>({ key: 'test' });
    expect(item).toStrictEqual(null);
  });

  it('should be try get a random item in storage and return null', () => {
    const item = getItem({ key: 'random' });
    expect(item).toStrictEqual(null);
  });

  it('should be type permanent storage', () => {
    setItem({
      key: 'testingPermanent',
      value: { name: 'test' },
      type: 'permanent'
    });
    const item = getItem<{ name: string }>({
      key: 'testingPermanent',
      type: 'permanent'
    });
    expect(item).toStrictEqual({ name: 'test' });
  });
});
