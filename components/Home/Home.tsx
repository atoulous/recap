import { Box } from '@chakra-ui/react';

import CTAWithVideo from 'components/CTAWithVideo';
import ArticleList from 'components/ArticleList';
import Testimonial from 'components/Testimonial';

import styles from './Home.module.scss';

const Home = () => {

  return (
    <Box className={styles.container}>
      <CTAWithVideo />
      <ArticleList />
      <Testimonial />
    </Box>
  );
};

export default Home;
