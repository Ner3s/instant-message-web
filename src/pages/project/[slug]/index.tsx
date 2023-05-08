import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Base } from '@/components/Base';

import { ProjectSlugTemplate } from '@/templates/ProjectSlug';

import { useAuth } from '@/contexts/use-auth';

import { useGetProjectById } from '@/hooks/use-get-project-by-id';
import { useGetUserProfile } from '@/hooks/use-get-user-profile';

import { IMember } from '@/models/member';

export default function SlugProject() {
  const router = useRouter();
  const { slug } = router.query;
  const [owner, setOwner] = useState<IMember>({} as IMember);

  const { project, handleGetProjectById } = useGetProjectById();
  const { currentUser, handleGetUserProfile } = useGetUserProfile();
  const { user } = useAuth();

  const handleGetOwner = () => {
    if (project.ownerId === user.uid) return user;
    handleGetUserProfile({ slug: project.ownerId });
    return currentUser;
  };

  const handleGetMembers = () => {
    return project.members?.map((member) => member.uid).includes(user.uid);
  };

  useEffect(() => {
    !project.name && slug && handleGetProjectById({ uid: slug as string });
    project.name && setOwner(handleGetOwner());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, slug]);

  // @TODO: Create handle functions to edit, join and unsubscribe project
  return (
    <Base>
      <ProjectSlugTemplate
        owner={owner}
        projectData={project}
        handleEditProject={() => {
          console.log('EDIT');
        }}
        handleJoinProject={() => {
          console.log('JOIN');
        }}
        handleUnsubscribeProject={() => {
          console.log('UNSUBSCRIBE');
        }}
        isOwner={owner.uid === project.ownerId}
        isMember={handleGetMembers()}
      />
    </Base>
  );
}
