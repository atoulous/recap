import { Box } from '@chakra-ui/react';

import CTAWithVideo from 'components/CTAWithVideo';
import CTAWithAnnotation from 'components/CTAWithAnnotation';
import StatsGridWithImage from 'components/StatsGridWithImage';
import Testimonial from 'components/Testimonial';

import styles from './Home.module.scss';

const Home = () => {

  return (
    <Box className={styles.container}>
      <CTAWithVideo />
      <StatsGridWithImage />
      <CTAWithAnnotation />
      <Testimonial />
    </Box>
  );
};

export default Home;
