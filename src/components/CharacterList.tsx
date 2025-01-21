import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Filters from './Filters';
import CharacterGrid from './CharacterGrid';
import Footer from './Footer';
import Loading from './Loading';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $filters: FilterCharacter) {
    characters(page: $page, filter: $filters) {
      info {
        next
      }
      results {
        id
        name
        image
        status
        species
        gender
        origin {
          name
        }
      }
    }
  }
`;

interface Filter {
  status: string;
  species: string;
}

const CharacterList = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<Filter>({ status: '', species: '' });
  const [sortOption, setSortOption] = useState<string>('');
  const [characters, setCharacters] = useState<any[]>([]);
  const { data, loading, error, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page, filters },
  });

  useEffect(() => {
    if (data?.characters.results) setCharacters(data.characters.results);
  }, [data]);

  const loadMore = async () => {
    if (data?.characters.info.next) {
      const nextPage = page + 1;
      const { data: newData } = await fetchMore({
        variables: { page: nextPage, filters },
      });
      setCharacters((prev) => [...prev, ...newData.characters.results]);
      setPage(nextPage);
    }
  };

  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    if (sortOption === 'origin') return a.origin.name.localeCompare(b.origin.name);
    return 0;
  });

  if (loading && characters.length === 0)
    return <Loading />;

  if (error)
    return <p>{t('error')}</p>;

  return (
    <Box
      sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Filters
        filters={filters}
        onFilterChange={(key: keyof Filter, value: string) =>
          setFilters({ ...filters, [key]: value })
        }
        onSortChange={(option: string) => setSortOption(option)}
      />
      <InfiniteScroll
        dataLength={sortedCharacters.length}
        next={loadMore}
        hasMore={!!data?.characters.info.next}
        loader={<Loading />}
      >
        <CharacterGrid characters={sortedCharacters} />
      </InfiniteScroll>
      <Footer />
    </Box>
  );
};

export default CharacterList;
