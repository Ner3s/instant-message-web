import { Base } from '@/components/Base';

import { HomeTemplate } from '@/templates/Home';

import { useAuth } from '@/contexts/use-auth';

import { useFindUser } from '@/hooks/use-find-user';

export default function Home() {
  const { user, handleClearSession } = useAuth();
  const { users, isLoading, handleFindUser, setCurrentUser } = useFindUser();

  return (
    <Base>
      <HomeTemplate
        users={users}
        isLoading={isLoading}
        handleFindUser={handleFindUser}
        handleLogout={handleClearSession}
        setCurrentUser={setCurrentUser}
        myProfile={user}
      />
    </Base>
  );
}
