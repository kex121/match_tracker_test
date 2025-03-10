import { useQuery } from '@tanstack/react-query';

import { Header, MatchList } from './components';
import getData from './utils/getData';
import type Match from 'types/Matches.types';

import './App.css';

function App() {
  const { data, error, isFetching, refetch } = useQuery<Match[], Error>({
    queryKey: ['matches'],
    queryFn: getData,
  });

  return (
    <>
      <Header error={error} isFetching={isFetching} refetch={refetch}/>
      <MatchList data={data ?? []}/>
    </>
  );
}

export default App;
