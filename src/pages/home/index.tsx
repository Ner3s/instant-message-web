import { Base } from '@/components/Base';

import { HomeTemplate } from '@/templates/Home';

import { useAuth } from '@/contexts/use-auth';

export default function Home() {
  const { user, handleClearSession } = useAuth();

  return (
    <Base>
      <HomeTemplate
        handleLogout={handleClearSession}
        imageUrl={user.imageUrl}
        name={user.name}
      />
    </Base>
  );
}
