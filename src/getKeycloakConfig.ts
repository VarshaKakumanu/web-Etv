// // src/getKeycloakConfig.ts

// import axios from 'axios';
// import { Console } from 'console';

// const getKeycloakConfig = async () => {
//   try {
//     const response = await axios.get('https://kb.etvbharat.com/keycloak/wp-json/settings/v1/ckValues');
//     const keys = response.data;
//     console.log(keys,"keyssssssssss")
//     return {
//       url: keys?.KeyCL_Host,
//       realm: keys?.KeyCL_Realm,
//       clientId: keys?.KeyCL_Client,
//       grantType: keys?.KeyCL_GrantType,
//       pwd: keys?.KeyCL_Pwd,
//       secret:keys?.KeyCL_Secret,
//     };
//   } catch (error) {
//     console.error('Failed to fetch Keycloak configuration', error);
//     throw new Error('Could not fetch Keycloak configuration');
//   }
// };

// export default getKeycloakConfig;
