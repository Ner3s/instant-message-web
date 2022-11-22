import { useRouter } from 'next/router';

import { Base } from '@/components/Base';

import { ProfileEditTemplate } from '@/templates/ProfileEdit';

export default function Profile() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  return (
    <Base>
      <ProfileEditTemplate />
    </Base>
  );
}
