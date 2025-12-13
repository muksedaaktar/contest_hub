import React from 'react';
import Banner from '../Banner/Banner';
import ContributionSection from '../../shared/contribution/ContributionSection';
import PopularContest from '../popularContest/PopularContest';
;

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <PopularContest></PopularContest>
           <ContributionSection></ContributionSection>
        </div>
    );
};

export default Home;