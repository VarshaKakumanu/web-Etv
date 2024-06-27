import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { router } from './Router';
// import getKeycloakConfig from './getKeycloakConfig';
import Keycloak, { KeycloakInitOptions } from 'keycloak-js';

const App: React.FC = () => {
  const [keycloakInitialized, setKeycloakInitialized] = useState<boolean>(false);

  // useEffect(() => {
  //   const initKeycloak = async () => {
  //     try {
  //       const keycloakConfig = await getKeycloakConfig();
  //       const keycloak = new Keycloak({
  //         url: keycloakConfig.url,
  //         realm: keycloakConfig.realm,
  //         clientId: keycloakConfig.clientId,
  //       });

  //       const keycloakInitOptions: KeycloakInitOptions = {
  //         onLoad: 'check-sso',
  //       };

  //       keycloak.init(keycloakInitOptions).then((authenticated: boolean) => {
  //         setKeycloakInitialized(authenticated);

  //         if (authenticated) {
  //           // Token Refresh
  //           setInterval(() => {
  //             keycloak.updateToken(70).then((refreshed: boolean) => {
  //               if (refreshed) {
  //                 console.log('Token refreshed');
  //               } else {
  //                 console.warn(
  //                   'Token not refreshed, valid for ' +
  //                     Math.round(
  //                       keycloak.tokenParsed?.exp! +
  //                         keycloak.timeSkew! -
  //                         new Date().getTime() / 1000
  //                     ) +
  //                     ' seconds'
  //                 );
  //               }
  //             }).catch(() => {
  //               console.error('Failed to refresh token');
  //             });
  //           }, 60000);
  //         }
  //       }).catch(() => {
  //         console.error('Authentication Failed');
  //       });
  //     } catch (error) {
  //       console.error('Keycloak initialization failed', error);
  //     }
  //   };

  //   if (localStorage.getItem('access_token')) {
  //     initKeycloak();
  //   } else {
  //     setKeycloakInitialized(true);
  //   }
  // }, []);

  // if (!keycloakInitialized) {
  //   return <div>Loading...</div>;
  // }

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;

// const App: React.FC = () => {
//   useEffect(() => {
//     axios.post('https://kb.etvbharat.com/keycloak/wp-json/users/v1/checklogin')
//       .then(response => console.log(response))
//       .catch(error => console.error('Proxy test error:', error));
//   }, []);

//   return <div>Proxy Test</div>;
// };