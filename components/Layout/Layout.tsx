import {
    Box
} from '@chakra-ui/react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Header />
      {children}
    <Footer />
  </>
);

export default Layout;
