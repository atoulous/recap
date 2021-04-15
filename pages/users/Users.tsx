import { useQuery } from '@apollo/client';

import Layout from 'components/Layout';

import QUERY_USERS from './users.graphql';
import styles from './Users.module.css';

export default function Home() {
  const { loading, error, data } = useQuery(QUERY_USERS);

  // make sure all data is loaded
  // if (loading) {
  //   return <p>loading...</p>;
  // }
  // check for errors
  // if (error) {
  //   return <p>:( an error happened</p>;
  // }

  // if all good return data
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Users</h1>
        <div>
          {data?.users.map((user) => (
            <div key={user.id}>{user.firstName}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
