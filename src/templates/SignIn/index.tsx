import { FiUser } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import * as S from './styles';

function SignInTemplate() {
  return (
    <S.Container>
      <h1>SignInTemplate</h1>
      <S.Content>
        <Input name="name" placeholder="Nome" icon={<FiUser size={22} />} />
        <Button appearance="secondary">Botão</Button>
      </S.Content>
    </S.Container>
  );
}

export { SignInTemplate };
