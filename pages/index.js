import useSWR from 'swr';
import Character from '../components/character/Character';
import Intro from '../components/intro/Intro';
import Game from '../components/game/Game';
import CharModal from '../components/character/CharModal';
import { useAppContext } from '../context/state';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/characters', fetcher);
  const globalState = useAppContext();

  if (error) return <div>Could not load characters. Try to refresh your browser</div>
  if (!data) return <div>Loading characters ...</div>

  return (
    <>
    {globalState.charSelect ?
    <>
    <Intro />
    <CharModal>
      {data.map((p, i) => (
        <Character key={i} character={p} />
      ))}
    </CharModal>
    </>
      :
    <Game />
    }
    </>
  )
}