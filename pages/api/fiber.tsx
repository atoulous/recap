import { NextSeo } from 'next-seo';
import { Fade } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Fiber from 'components/Fiber';

const HomePage = () => {
    return (
        <Layout>
            <NextSeo
                title="Recap Vacances Vilnavey"
                description="Recap maison vacances des vilnavey"
            />
            <Fade in>
                <Fiber />
            </Fade>
        </Layout>
    );
};

export default HomePage;
