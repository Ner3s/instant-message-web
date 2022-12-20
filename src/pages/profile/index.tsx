import { Base } from '@/components/Base';

import { ProfileTemplate } from '@/templates/Profile';

import { useAuth } from '@/contexts/use-auth';

import { IUser } from '@/models/user';
import { dateFormatter } from '@/utils/helpers/format-date';

export default function Profile() {
  const { user } = useAuth();

  return (
    <Base>
      <ProfileTemplate
        name={user.name}
        birthDate={dateFormatter({ date: user.birthDate }) || ''}
        description={user.description}
        imageUrl={user.imageUrl}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        handleCreateConnection={(user: IUser) =>
          new Promise<void>((resolve) => resolve())
        }
        myAccount
      />
    </Base>
  );
}
