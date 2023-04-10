import React, { useEffect, useState } from 'react';
import { axiosClient, clientID, deviceID } from '../../utils/axios';

const HOST = {
  token: 'http://84.201.188.117:5021',
  bonus: 'http://84.201.188.117:5003',
};

function App() {
  const [token, setToken] = useState();
  const [bonus, setBonus] = useState();

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
      setToken(res.data.accessToken);
    };
    fetchAccessToken();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosClient.get(`${HOST.bonus}/api/v3/ibonus/generalinfo/${token}`);
      setBonus(res.data);
    };

    fetchData();
  }, [token]);
  return (
    <div className="app">
      <header className="app__header"></header>
      <p>{JSON.stringify(bonus)}</p>
    </div>
  );
}

export default App;
