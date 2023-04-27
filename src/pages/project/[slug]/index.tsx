import { useRouter } from 'next/router';

import { Base } from '@/components/Base';

export default function SlugProject() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Base>
      <h1>PROJETO SLUG: {slug}</h1>
    </Base>
  );
}
