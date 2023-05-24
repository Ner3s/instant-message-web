import { setItem } from '.';
import { getItem } from '../getItem';

describe('storage.setItem', () => {
  it('should be set item in storage', () => {
    setItem({ key: 'test', value: 'testing' });
    const item = getItem<string>({ key: 'test' });
    expect(item).toStrictEqual('testing');
  });

  it('should be set object item in storage', () => {
    setItem({ key: 'test', value: { name: 'testing' } });
    const item = getItem<{ name: string }>({ key: 'test' });
    expect(item?.name).toStrictEqual('testing');
  });

  it('should be set null object in storage', () => {
    setItem({ key: 'test', value: null });
    const item = getItem<null>({ key: 'test' });
    expect(item).toStrictEqual(null);
  });

  it('should be set undefined object in storage and return null', () => {
    setItem({ key: 'test', value: undefined });
    const item = getItem({ key: 'test' });
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
