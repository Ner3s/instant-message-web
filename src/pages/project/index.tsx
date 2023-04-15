import Link from 'next/link';

import { Base } from '@/components/Base';

import { ROUTE_LIST } from '@/utils/constants/route-list';

export default function Project() {
  return (
    <Base>
      <Link href={ROUTE_LIST.PROJECT_CREATE}>Create</Link>
    </Base>
  );
}
