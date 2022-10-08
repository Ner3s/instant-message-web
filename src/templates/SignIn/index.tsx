import { Button } from '@/components/Button';

import * as S from './styles';

function SignInTemplate() {
  return (
    <S.Container>
      <h1>SignInTemplate</h1>
      <S.Content>
        <Button appearance="primary">Botão</Button>
      </S.Content>
    </S.Container>
  );
}

export { SignInTemplate };
