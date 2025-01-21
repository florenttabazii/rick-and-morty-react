import { Box } from '@mui/material';
import loadingSvg from '../assets/sanchez.svg'; // Replace with your SVG path

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
      }}
    >
      <Box
        component="img"
        src={loadingSvg}
        alt="Loading..."
        sx={{
          width: '100px', // Adjust size of the SVG
          height: 'auto',
        }}
      />
    </Box>
  );
};

export default Loading;
