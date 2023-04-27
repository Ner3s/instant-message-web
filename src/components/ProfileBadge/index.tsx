import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';

import { Theme } from '@/styles/theme/styled';

import * as S from './styles';

export interface ProfileBadgeProps {
  imageUrl?: string;
  imageAlt?: string;
  icon?: IconType;
  iconColor?: string;
  iconSize?: number;
  height?: keyof Theme['frameSizes'];
  width?: keyof Theme['frameSizes'] | '100%';
}

function ProfileBadge({
  height = 'xxsmall',
  width = 'xxsmall',
  imageUrl,
  imageAlt = 'Badge profile image',
  icon: Icon = FiUser,
  iconColor = 'fff',
  iconSize = 32
}: ProfileBadgeProps) {
  return (
    <>
      {imageUrl ? (
        <S.ImageProfile
          height={height}
          width={width}
          src={imageUrl}
          alt={imageAlt}
        />
      ) : (
        <S.Circle role="icon" height={height} width={width}>
          <Icon size={iconSize} color={iconColor} />
        </S.Circle>
      )}
    </>
  );
}

export { ProfileBadge };
