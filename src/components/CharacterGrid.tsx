import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const CharacterGrid = ({ characters }: any) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)', // 1 column for small screens
          sm: 'repeat(2, 1fr)', // 2 columns for medium screens
          md: 'repeat(3, 1fr)', // 3 columns for large screens
          lg: 'repeat(4, 1fr)', // 4 columns for extra large screens
        },
        gap: '16px',
        justifyContent: 'center',
        padding: {
          xs: '8px', // Smaller padding for mobile
          sm: '16px',
        },
      }}
    >
      {characters.map((char: any) => (
        <Card
          key={char.id}
          sx={{
            maxWidth: '300px',
            margin: 'auto',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)', // Add a hover effect for better UX
            },
          }}
        >
          <CardMedia
            component="img"
            image={char.image}
            alt={char.name}
            sx={{ height: '300px', objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="h6" align="center" gutterBottom>
              {char.name}
            </Typography>
            <Typography>
              <strong>{t('status')}:</strong> {t(char.status.toLowerCase())}
            </Typography>
            <Typography>
              <strong>{t('species')}:</strong> {char.species}
            </Typography>
            <Typography>
              <strong>{t('gender')}:</strong> {char.gender}
            </Typography>
            <Typography>
              <strong>{t('origin')}:</strong> {char.origin.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CharacterGrid;
