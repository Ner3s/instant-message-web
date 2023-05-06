// import { useRouter } from 'next/router';

import { Base } from '@/components/Base';

import {
  IProjectSlugTemplateProps,
  ProjectSlugTemplate
} from '@/templates/ProjectSlug';

import { useAuth } from '@/contexts/use-auth';

import { dateFormatter } from '@/utils/helpers/format-date';

const projectSlugMock: IProjectSlugTemplateProps = {
  projectData: {
    name: 'Project Name',
    startDate: dateFormatter({ date: '2021-01-01' }) as string,
    description: 'lorem ipsum dolor sit amet',
    members: [
      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      },
      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      },
      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      },

      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      }
    ],
    uid: '',
    status: true,
    imageProfile: '',
    imageCover: '',
    createdAt: '',
    updatedAt: '',
    ownerId: '123123'
  },
  owner: { imageUrl: '', name: 'Owner', uid: '123123' },
  handleJoinProject: function (): void {
    console.log('JOIN');
  },
  handleEditProject: function (): void {
    console.log('EDIT');
  },
  handleUnsubscribeProject: function (): void {
    console.log('UN SUBSCRIBE');
  }
};

export default function SlugProject() {
  // const router = useRouter();
  // const { slug } = router.query;

  const { user } = useAuth();

  return (
    <Base>
      <ProjectSlugTemplate
        {...projectSlugMock}
        isOwner={user.uid === projectSlugMock.projectData.ownerId}
        isMember={false}
      />
    </Base>
  );
}
