import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Base } from '@/components/Base';

import { ProjectSlugTemplate } from '@/templates/ProjectSlug';

import { useAuth } from '@/contexts/use-auth';
import { useProject } from '@/contexts/use-project';

import { useGetProjectById } from '@/hooks/use-get-project-by-id';
import { useGetUserProfile } from '@/hooks/use-get-user-profile';
import { useMember } from '@/hooks/use-member';

import { IMember } from '@/models/member';
import { ROUTE_LIST } from '@/utils/constants/route-list';

export default function SlugProject() {
  const router = useRouter();
  const { slug } = router.query;
  const [owner, setOwner] = useState<IMember>({} as IMember);
  const [hasExecGetOwner, setHasExecGetOwner] = useState<boolean>(false);

  const { currentProject: project } = useProject();
  const { handleGetProjectById } = useGetProjectById();
  const { currentUser, handleGetUserProfile } = useGetUserProfile();
  const { handleAddMember, handleRemoveMember } = useMember();
  const { user } = useAuth();

  const handleGetOwner = () => {
    setHasExecGetOwner(true);
    if (project.ownerId === user.uid) {
      setOwner(user);
      return;
    }

    handleGetUserProfile({ slug: project.ownerId });
  };

  const handleGetMembers = () => {
    return project.members?.map((member) => member.uid).includes(user.uid);
  };

  useEffect(() => {
    console.log('RENDER COUNT');
    if (!project.name && slug) {
      handleGetProjectById({ uid: slug as string });
    }

    if (project.name && project.uid !== slug) {
      handleGetProjectById({ uid: slug as string });
    }

    if (!hasExecGetOwner && project.name) {
      handleGetOwner();
    }

    if (!owner.name && currentUser.name) {
      setOwner(currentUser);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, slug, currentUser]);

  return (
    <Base>
      <ProjectSlugTemplate
        owner={owner}
        projectData={project}
        handleEditProject={() => {
          router.push(ROUTE_LIST.PROJECT_EDIT.replace(':slug', slug as string));
        }}
        handleJoinProject={() => {
          handleAddMember({
            uid: slug as string,
            member: {
              uid: user.uid,
              name: user.name,
              image_url: user.imageUrl
            }
          });
        }}
        handleUnsubscribeProject={() => {
          handleRemoveMember({
            uid: slug as string,
            member: {
              uid: user.uid,
              name: user.name,
              image_url: user.imageUrl
            }
          });
        }}
        isOwner={user.uid === project.ownerId}
        isMember={handleGetMembers()}
      />
    </Base>
  );
}
