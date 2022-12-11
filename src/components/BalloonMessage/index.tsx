import { dateFormatter } from '@/utils/helpers/format-date';

import * as S from './styles';

export interface BalloonMessageProps {
  children: React.ReactNode;
  side?: 'RIGHT' | 'LEFT';
  dateTime?: string;
}

const CUSTOM_OPTIONS_DATETIME: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
};

function BalloonMessage({
  children,
  side = 'RIGHT',
  dateTime
}: BalloonMessageProps) {
  return (
    <S.Container side={side}>
      <span>{children}</span>
      <S.Datetime>
        {dateFormatter({
          date: dateTime,
          customOptions: CUSTOM_OPTIONS_DATETIME
        })}
      </S.Datetime>
    </S.Container>
  );
}

export { BalloonMessage };
