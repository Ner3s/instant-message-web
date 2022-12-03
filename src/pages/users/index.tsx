import { Base } from '@/components/Base';

import { UsersTemplate } from '@/templates/Users';

import { useAuth } from '@/contexts/use-auth';

export default function Users() {
  const { user, handleClearSession } = useAuth();

  return (
    <Base>
      <UsersTemplate
        handleLogout={handleClearSession}
        imageUrl={user.imageUrl}
        name={user.name}
      />
    </Base>
  );
}
