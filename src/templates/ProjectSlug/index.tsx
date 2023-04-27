import { ProfileBadge } from '@/components/ProfileBadge';

import * as S from './styles';

function ProjectSlugTemplate() {
  return (
    <S.Container>
      <S.Content>
        <S.Cover />
        <S.WrapperProfile>
          <ProfileBadge width="xsmall" height="xsmall" iconSize={44} />
        </S.WrapperProfile>
        <S.WrapperInnerContent>
          <S.WrapperTitleAndStartDate>
            <S.Title>ProjectSlugTemplate</S.Title>
            <S.StartDate>01/01/2021</S.StartDate>
          </S.WrapperTitleAndStartDate>
          <S.Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
            mollitia exercitationem ipsum repudiandae ratione doloribus nulla.
            Iste dolores adipisci nesciunt dolorem corporis perspiciatis
            perferendis! Ipsam quae blanditiis dolor aperiam eum! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. In modi doloribus eos
            vitae tempore alias nulla illo exercitationem esse quibusdam maxime,
            sit suscipit eius quam vel praesentium tenetur temporibus similique.
          </S.Description>
          <hr />
          <S.WrapperPeopleSection>
            <S.WrapperPeople>
              <S.TitleSection>Owner: </S.TitleSection>
              <S.WrapperOwner>
                <div>
                  <ProfileBadge width="6rem" height="6rem" iconSize={24} />
                  <S.Name>Owner Name</S.Name>
                </div>
              </S.WrapperOwner>
            </S.WrapperPeople>
            <S.WrapperPeople>
              <S.TitleSection>Owner: </S.TitleSection>
              <ProfileBadge width="6rem" height="6rem" iconSize={24} />
              <S.Name>Owner Name</S.Name>
            </S.WrapperPeople>
          </S.WrapperPeopleSection>
        </S.WrapperInnerContent>
      </S.Content>
    </S.Container>
  );
}

export { ProjectSlugTemplate };
