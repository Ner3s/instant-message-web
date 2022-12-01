import { Base } from '@/components/Base';

import { ProfileTemplate } from '@/templates/Profile';

import { useAuth } from '@/contexts/use-auth';

import { dateFormatter } from '@/utils/helpers/format-date';

export default function Profile() {
  const { user } = useAuth();

  return (
    <Base>
      <ProfileTemplate
        name={user.name}
        birthDate={dateFormatter({ date: user.birthDate })}
        description={user.description}
        imageUrl={user.imageUrl}
        myAccount
      />
    </Base>
  );
}
