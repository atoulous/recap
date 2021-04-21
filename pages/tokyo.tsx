import { NextSeo } from 'next-seo';
import { Fade } from '@chakra-ui/react';

import Layout from 'components/Layout';
import Three from 'components/Tokyo';

const HomePage = () => {
    return (
        <Layout>
            <NextSeo
                title="Recap Vacances Vilnavey"
                description="Recap maison vacances des vilnavey"
            />
            <Fade in>
                <Three />
            </Fade>
        </Layout>
    );
};

export default HomePage;
