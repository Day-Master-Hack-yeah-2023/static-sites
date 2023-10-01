import React from 'react';

type DashboardContextProps = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

const DashboardContext = React.createContext<DashboardContextProps>({
  number: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNumber: () => {},
});

const DashboardProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [number, setNumber] = React.useState<number>(0);

  return (
    <DashboardContext.Provider value={{ number, setNumber }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider, DashboardContext };
