import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Base } from '@/components/Base';

import { ProjectSlugTemplate } from '@/templates/ProjectSlug';

import { useAuth } from '@/contexts/use-auth';
import { useProject } from '@/contexts/use-project';

import { useGetProjectById } from '@/hooks/use-get-project-by-id';
import { useGetUserProfile } from '@/hooks/use-get-user-profile';
import { useMember } from '@/hooks/use-member';

import { ROUTE_LIST } from '@/utils/constants/route-list';

export default function SlugProject() {
  const router = useRouter();
  const { slug } = router.query;

  const { currentProject: project } = useProject();
  const { handleGetProjectById } = useGetProjectById();
  const { currentUser, handleGetUserProfile } = useGetUserProfile();
  const { handleAddMember, handleRemoveMember } = useMember();
  const { user } = useAuth();

  const handleGetMembers = () => {
    return project.members?.map((member) => member.uid).includes(user.uid);
  };

  useEffect(() => {
    if (!project.name && slug) {
      handleGetProjectById({ uid: slug as string });
    }

    if (project.name && project.uid !== slug) {
      handleGetProjectById({ uid: slug as string });
    }

    if (project.ownerId !== user.uid) {
      handleGetUserProfile({ slug: project.ownerId });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, slug]);

  return (
    <Base>
      <ProjectSlugTemplate
        owner={project.ownerId === user.uid ? user : currentUser}
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
