import { useRouter } from 'next/router';

import { Base } from '@/components/Base';

import { ProjectSlugTemplate } from '@/templates/ProjectSlug';

export default function SlugProject() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Base>
      <ProjectSlugTemplate />
    </Base>
  );
}
