// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Outlet } from 'react-router-dom';

/**
 * Représente le layout qui contient le header et le menu de navigation
 * Outlet représente l'élément enfant en fonction de la route sur laquelle on se trouve
 */

const App = () => {
  return <Outlet />;
};

export default App;
