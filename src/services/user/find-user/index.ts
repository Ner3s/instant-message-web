import {
  collection,
  query,
  getDocs,
  orderBy,
  endAt,
  startAt
} from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

async function remoteFindUser(search: string) {
  const docRef = collection(firebaseDatabase, 'users');
  const userQuery = query(
    docRef,
    orderBy('name'),
    startAt(search),
    endAt(search + '\uf8ff')
  );

  return await getDocs(userQuery);
}

export { remoteFindUser };
