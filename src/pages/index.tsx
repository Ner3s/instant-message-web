import Link from 'next/link';

import { ROUTE_LIST } from '@/utils/constants/route-list';

export default function Index() {
  return (
    <div>
      <h1>LANDING PAGE</h1>
      <Link href={ROUTE_LIST.SIGN_IN}>Ir para SignIn</Link>
    </div>
  );
}
