import { Box, Typography, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        backgroundColor: '#282c34',
        color: '#fff',
        padding: '16px 24px',
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center',
        borderTop: '1px solid #444',
        zIndex: 10,
      }}
    >
      {/* Language Switcher */}
      <Box sx={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <IconButton
          onClick={() => changeLanguage('en')}
          sx={{
            color: i18n.language === 'en' ? 'primary.main' : '#fff',
          }}
          aria-label="Switch to English"
        >
          <LanguageIcon />
          <Typography variant="body2" sx={{ marginLeft: '4px' }}>
            English
          </Typography>
        </IconButton>
        <IconButton
          onClick={() => changeLanguage('de')}
          sx={{
            color: i18n.language === 'de' ? 'primary.main' : '#fff',
          }}
          aria-label="Switch to German"
        >
          <LanguageIcon />
          <Typography variant="body2" sx={{ marginLeft: '4px' }}>
            Deutsch
          </Typography>
        </IconButton>
      </Box>

      {/* Footer Text */}
      <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {t('footer_text')}
      </Typography>
    </Box>
  );
};

export default Footer;