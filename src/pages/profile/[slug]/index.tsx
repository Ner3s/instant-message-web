import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Base } from '@/components/Base';

import { ProfileTemplate } from '@/templates/Profile';

import { useGetUserProfile } from '@/hooks/use-get-user-profile';

import { dateFormatter } from '@/utils/helpers/format-date';

export default function SlugProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const { userProfile, handleGetUserProfile } = useGetUserProfile();

  useEffect(() => {
    handleGetUserProfile({ slug: slug as string });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Base>
      <ProfileTemplate
        name={userProfile.name}
        birthDate={dateFormatter({ date: userProfile.birthDate })}
        description={userProfile.description}
        imageUrl={userProfile.imageUrl}
        uid={userProfile.uid}
      />
    </Base>
  );
}
