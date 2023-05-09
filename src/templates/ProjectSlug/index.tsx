import { FiStar } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { ProfileBadge } from '@/components/ProfileBadge';

import { IMember } from '@/models/member';
import { IProject } from '@/models/project';

import * as S from './styles';

export interface IProjectSlugTemplateProps {
  projectData: IProject;
  owner: IMember;
  isMember?: boolean;
  isOwner?: boolean;
  handleJoinProject: () => void;
  handleEditProject: () => void;
  handleUnsubscribeProject: () => void;
}

// @TODO - Fix names for users. // Owner and Members
function ProjectSlugTemplate({
  projectData,
  owner,
  isMember = false,
  isOwner = false,
  handleEditProject,
  handleJoinProject,
  handleUnsubscribeProject
}: IProjectSlugTemplateProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Cover imageCover={projectData.imageCover} />
        <S.WrapperProfile>
          <ProfileBadge
            imageUrl={projectData.imageProfile}
            width="xsmall"
            height="xsmall"
            icon={FiStar}
            iconSize={44}
          />
        </S.WrapperProfile>
        <S.WrapperInnerContent>
          <S.WrapperTitleAndStartDate>
            <S.Title>{projectData.name}</S.Title>
            <S.StartDate>{projectData.startDate}</S.StartDate>
          </S.WrapperTitleAndStartDate>
          <S.Description>{projectData.description}</S.Description>
          <hr />
          <S.WrapperUserSection>
            <S.WrapperOwnerAndMember>
              <S.TitleSection>Owner: </S.TitleSection>
              <S.DFlex>
                <S.WrapperCommonUser>
                  <ProfileBadge
                    imageUrl={owner.imageUrl}
                    width="6rem"
                    height="6rem"
                    iconSize={24}
                  />
                  <S.Name owner>{owner.name}</S.Name>
                </S.WrapperCommonUser>
              </S.DFlex>
            </S.WrapperOwnerAndMember>
            <S.WrapperOwnerAndMember>
              <S.TitleSection>Members: </S.TitleSection>
              <S.DGrid>
                {projectData.members?.map((member) => (
                  <S.WrapperCommonUser key={member.uid}>
                    <ProfileBadge
                      imageUrl={member.imageUrl}
                      width="6rem"
                      height="6rem"
                      iconSize={24}
                    />
                    <S.Name>{member.name}</S.Name>
                  </S.WrapperCommonUser>
                ))}
                {projectData.members?.length === 0 && (
                  <span>This project dont have member</span>
                )}
              </S.DGrid>
            </S.WrapperOwnerAndMember>
          </S.WrapperUserSection>
          <S.WrapperButtons>
            {isOwner && <Button onClick={handleEditProject}>Edit</Button>}
            {isMember && !isOwner && (
              <Button onClick={handleUnsubscribeProject} appearance="secondary">
                Unsubscribe
              </Button>
            )}
            {!isMember && !isOwner && (
              <Button onClick={handleJoinProject}>Join</Button>
            )}
          </S.WrapperButtons>
        </S.WrapperInnerContent>
      </S.Content>
    </S.Container>
  );
}

export { ProjectSlugTemplate };
