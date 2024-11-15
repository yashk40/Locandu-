import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import {HelmetProvider} from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <Auth0Provider
      domain="dev-m2rm2mokktxmq4qu.us.auth0.com" // Change to production domain
      clientId="nROOBtUPsCgLTwbsqKSeeC9SIdUZVfGU" // Add quotes
      clientSecret="ZN7ka3anV2IDWsZUP2oJX0wgeB3P3IIb1pz1FMqJ-epdlr8UZ0lL4sk6pmbgW36h" // Add quotes
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
      
    </Auth0Provider>
    </HelmetProvider>
  </StrictMode>
);
