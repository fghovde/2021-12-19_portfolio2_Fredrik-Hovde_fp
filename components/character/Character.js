import Image from 'next/image';
import { useEffect } from 'react';
import { useAppContext } from '../../context/state';

export default function Character({ character }) {
  const globalState = useAppContext();
  const handleClick = () => {
    if (globalState.playersSelected < 2) {
      globalState.myPlayers.push({
        id: character.id,
        name: character.name,
        token: character.token
      });
      globalState.playersSelected ++;
    } else {
      globalState.charSelect = false;
    }
    console.log(globalState.myPlayers);
    console.log(globalState.playersSelected);
  }

  useEffect(() => {
    console.log('whats wrong?')
  }, [globalState.charSelect]);

  return (
    <div className='charContent' onClick={handleClick}>
      <h3 className='charHeading'>{character.name}</h3>
      <Image src={character.token} width='75' height='120' className='charImg' alt={character.name} />
      <p className='charText'>Born {character.born}</p>
    </div>
  )
}

