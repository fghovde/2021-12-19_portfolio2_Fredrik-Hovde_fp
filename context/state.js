import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let globalState = {
    myPlayers: [],
    charSelect: true,
    playersSelected: 0,
  }

  return (
    <AppContext.Provider value={globalState}>
    {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}