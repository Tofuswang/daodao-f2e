import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from '@/shared/components/Image';
import { StyledStatus } from '../GroupList/GroupCard.styled';
import StyledPaper from '../Paper.styled';
import TeamInfoCard from './TeamInfoCard';
import OrganizerCard from './OrganizerCard';
import More from './More';
import { StyledContainer, StyledHeading, StyledLink } from './Detail.styled';
import ContactButton from './Contact';

function GroupDetail({ source, isLoading }) {
  return (
    <Box sx={{ background: '#f3fcfc', pb: '48px' }}>
      <StyledContainer>
        <StyledLink href="/group" style={{ marginBottom: '10px' }}>
          <ArrowBackIosNewIcon fontSize="inherit" />
          <span>返回</span>
        </StyledLink>
        {isLoading ? (
          <Skeleton variant="rounded" height={300} animation="wave" />
        ) : (
          <Image height="300px" src={source?.photoURL} alt={source?.photoAlt} />
        )}
        <Box sx={{ position: 'relative', p: '10px' }}>
          {isLoading ? (
            <Skeleton
              variant="rounded"
              height={26}
              width={68}
              animation="wave"
            />
          ) : source?.isGrouping ? (
            <StyledStatus>揪團中</StyledStatus>
          ) : (
            <StyledStatus className="finished">已結束</StyledStatus>
          )}
          <More />
          <StyledHeading>
            {isLoading ? <Skeleton animation="wave" /> : source?.title}
          </StyledHeading>
        </Box>
        <StyledPaper sx={{ mb: '10px' }}>
          <TeamInfoCard data={source} isLoading={isLoading} />
        </StyledPaper>
        <StyledPaper>
          <OrganizerCard data={source} isLoading={isLoading} />
        </StyledPaper>
        <Box
          sx={{
            mt: '32px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ContactButton
            title="聯繫主揪"
            description="想跟主揪說的話"
            descriptionPlaceholder="想參加主揪的團體嗎？可以簡單的自我介紹，寫下想加入的原因。"
          />
        </Box>
      </StyledContainer>
    </Box>
  );
}

export default GroupDetail;