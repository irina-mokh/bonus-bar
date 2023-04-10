// "currentQuantity":150,"forBurningQuantity":150,"dateBurning":"2024-02-27T18:18:00"
import React, { useEffect, useState } from 'react';
import { BonusInfo } from '../../types';
import { HOST, axiosClient } from '../../utils/axios';
import { Loader } from '../Loader';

const INITIAL_BONUS = {
  currentQuantity: 0,
  forBurningQuantity: 0,
  dateBurning: '',
};
export const BonusBar = () => {
  const token = localStorage.getItem('token');
  const [bonus, setBonus] = useState<BonusInfo>(INITIAL_BONUS);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosClient.get(`${HOST.bonus}/api/v3/ibonus/generalinfo/${token}`);
      const data: BonusInfo = res.data.data;
      setBonus(data);
      setLoading(false);
    };

    fetchData();
  }, [token]);
  const { currentQuantity, forBurningQuantity, dateBurning } = bonus;
  return (
    <section className="bonus">
      <div className="container">
        <div className="bonus__bar">
          {loading ? (
            <Loader />
          ) : (
            <>
              <p className="bonus__current">
                <span>{`${currentQuantity} бонусов`}</span>
              </p>
              <p className="bonus__burn">
                {dateBurning && forBurningQuantity && (
                  <>
                    <span>{`${new Date(dateBurning)
                      .toLocaleDateString()
                      .slice(0, 5)} сгорит`}</span>
                    <span className="bonus__burn-icon"></span>
                    <span>{`${forBurningQuantity} бонусов`}</span>
                  </>
                )}
              </p>
              <a href="/details" className="details-btn"></a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
