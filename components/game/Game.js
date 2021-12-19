import { useAppContext } from '../../context/state';

export default function Game() {
    const globalState = useAppContext();
    const selectedPlayers = globalState.myPlayers;
  return (
    <>
    <div className="logo">
    </div>
    <div className="">
        Players: {selectedPlayers.map(player => <div key={player.id}>{player.name}</div>)}<br />
    </div>
    <div className="controls">
      <button onClick={() => {
        console.log('hello');
        }
      } className="characterBtn">
        dice
      </button>
    </div>
    </>
  )
}