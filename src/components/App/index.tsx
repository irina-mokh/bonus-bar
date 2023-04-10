import React, { useEffect } from 'react';
import { axiosClient, clientID, deviceID, HOST } from '../../utils/axios';
import { BonusBar } from '../BonusBar';

function App() {
  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await axiosClient.post(`${HOST.token}/api/v3/clients/accesstoken`, {
        idClient: clientID,
        accessToken: '',
        paramName: 'device',
        paramValue: deviceID,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      });
      localStorage.setItem('token', res.data.accessToken);
    };
    fetchAccessToken();
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <div className="container">
          <p className="app__logo">логотип</p>
          <button className="info-btn"></button>
        </div>
      </header>
      <BonusBar />
    </div>
  );
}

export default App;
