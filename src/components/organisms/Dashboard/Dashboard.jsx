import React, { useContext, useEffect } from 'react';

import { useFetch } from '../../../hooks';
import { AppContext } from '../../../context';
import Card from '../../molecules/Card';

import url from '../../../../config/connections.json';
import { UPDATE_DATA } from '../../../utils/actions.json';

import './styles.scss';

const Dashboard = () => {
  const { loading, error, data } = useFetch(
    url[process.env.NODE_ENV]
  );
  const { dispatch } = useContext(AppContext);
  // eslint-disable-next-line no-console
  // console.log(loading, error, data);

  useEffect(() => {
    if (data) {
      dispatch({ type: UPDATE_DATA, data: data?.results });
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error Occurred while Fetching Data...</p>;
  }

  return (
    <main className="dashboard">
      <Card />
    </main>
  );
};

export default React.memo(Dashboard);
