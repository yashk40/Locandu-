import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-4wpnwnb5hufkpy4z.us.auth0.com" // Change to production domain
      clientId="UBbJm8l4lZwsqcc06jyskRXng4KvdTHX" // Add quotes
      clientSecret="2b0_CxyRaiiUVDhcHxSVmcqPoI_z4jSRZN_b_8FCSw0QfVDssgzu6vcxY2A2rL52" // Add quotes
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
