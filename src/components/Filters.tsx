import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Filter {
  status: string;
  species: string;
}

interface FiltersProps {
  filters: Filter;
  onFilterChange: (key: keyof Filter, value: string) => void;
  onSortChange: (option: string) => void;
}

const Filters = ({ filters, onFilterChange, onSortChange }: FiltersProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // Stack filters on small screens
          sm: 'row', // Align filters horizontally on larger screens
        },
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '24px',
        padding: '16px',
        alignItems: 'center', // Center filters vertically when stacked
      }}
    >
      <FormControl sx={{ minWidth: '200px', width: { xs: '100%', sm: 'auto' } }}>
        <InputLabel>{t('status')}</InputLabel>
        <Select
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value as string)}
        >
          <MenuItem value="">{t('all')}</MenuItem>
          <MenuItem value="Alive">{t('alive')}</MenuItem>
          <MenuItem value="Dead">{t('dead')}</MenuItem>
          <MenuItem value="unknown">{t('unknown')}</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: '200px', width: { xs: '100%', sm: 'auto' } }}>
        <InputLabel>{t('species')}</InputLabel>
        <Select
          value={filters.species}
          onChange={(e) => onFilterChange('species', e.target.value as string)}
        >
          <MenuItem value="">{t('all')}</MenuItem>
          <MenuItem value="Human">{t('Human')}</MenuItem>
          <MenuItem value="Alien">{t('Alien')}</MenuItem>
          <MenuItem value="Robot">{t('Robot')}</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: '200px', width: { xs: '100%', sm: 'auto' } }}>
        <InputLabel>{t('sort')}</InputLabel>
        <Select onChange={(e) => onSortChange(e.target.value as string)}>
          <MenuItem value="">{t('none')}</MenuItem>
          <MenuItem value="name">{t('name')}</MenuItem>
          <MenuItem value="origin">{t('origin')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
