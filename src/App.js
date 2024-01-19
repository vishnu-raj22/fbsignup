import React, { useState, useEffect } from 'react';

const App = () => {
  const [loginResponse, setLoginResponse] = useState(null);

  useEffect(() => {
    const initFacebookSDK = async () => {
      // Load the Facebook SDK asynchronously
      await loadFacebookSDK();

      // Initialize the SDK
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: 355406770562917, // Replace with your Facebook App ID
          cookie: true,
          xfbml: true,
          version: 'v18.0',
        });
      };
    };

    initFacebookSDK();
  }, []);

  // Load Facebook SDK asynchronously
  const loadFacebookSDK = () => {
    return new Promise((resolve) => {
      // Load the Facebook SDK script
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';

      script.onload = () => {
        resolve();
      };

      document.head.appendChild(script);
    });
  };

  // Launch Facebook login
  const handleButtonClick = () => {
    window.FB.login((response) => {
      setLoginResponse(response);

      if (response.authResponse) {
        const code = response.authResponse.code;
        console.log(code , "<---the codeee")
        // The returned code must be transmitted to your backend,
        // which will perform a server-to-server call from there to Facebook servers for an access token
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {
      config_id: 1170907760538048, // configuration ID goes here
      response_type: 'code',
      override_default_response_type: true,
      extras: {
        setup: {
          // ... Prefilled data can go here
        },
      },
    });
  };

  return (
    <div style={{ alignItems: 'center', paddingLeft: "750px", paddingTop: "400px" }}>
      <button onClick={handleButtonClick}>Click me</button>
      {loginResponse && (
        <div>
          <p>Login Response:</p>
          <pre>{JSON.stringify(loginResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;

