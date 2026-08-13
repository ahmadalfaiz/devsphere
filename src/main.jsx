import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { GoogleOAuthProvider }
from "@react-oauth/google";

 
//Edited testing line here
console.log(
  "Google Client ID:",
  import.meta.env.VITE_GOOGLE_CLIENT_ID
); //up to this line testing

//testing line here added
console.log(
  "Google Client ID:",
  import.meta.env.VITE_GOOGLE_CLIENT_ID
); //upto this testing line

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <GoogleOAuthProvider
      clientId={
        import.meta.env.VITE_GOOGLE_CLIENT_ID
      }
    >

      <App />

    </GoogleOAuthProvider>

  </React.StrictMode>

);
