import CharacterList from './components/CharacterList';
import { Box } from '@mui/material';
import rnmlogo from './assets/rnmlogo.png'; // Ensure the path is correct

const App = () => {
  return (
    <Box>
      {/* Logo */}
      <Box
        component="img"
        src={rnmlogo}
        alt="Rick and Morty Logo"
        sx={{
          display: 'block',
          margin: '16px auto', // Center the logo
          width: '200px', // Adjust the size as needed
          height: 'auto',
        }}
      />

      {/* Character List */}
      <CharacterList />
    </Box>
  );
};

export default App;
