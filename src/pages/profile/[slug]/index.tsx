import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Base } from '@/components/Base';

import { ProfileTemplate } from '@/templates/Profile';

import { useCreateConnection } from '@/hooks/use-create-connection';
import { useGetUserProfile } from '@/hooks/use-get-user-profile';

import { dateFormatter } from '@/utils/helpers/format-date';

export default function SlugProfile() {
  const router = useRouter();
  const { slug } = router.query;

  const { currentUser, handleGetUserProfile } = useGetUserProfile();
  const { handleCreateConnection, isLoading } = useCreateConnection();

  useEffect(() => {
    !currentUser.uid && slug && handleGetUserProfile({ slug: slug as string });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <Base>
      <ProfileTemplate
        name={currentUser.name}
        birthDate={dateFormatter({ date: currentUser.birthDate })}
        description={currentUser.description}
        imageUrl={currentUser.imageUrl}
        uid={currentUser.uid}
        handleCreateConnection={handleCreateConnection}
        isLoading={isLoading}
      />
    </Base>
  );
}
