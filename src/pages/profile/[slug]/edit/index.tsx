import { useRouter } from 'next/router';

import { ProfileEditTemplate } from '@/templates/ProfileEdit';

export default function Profile() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  return <ProfileEditTemplate />;
}
