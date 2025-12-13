import React from 'react';
import Banner from '../Banner/Banner';
import ContributionSection from '../../shared/contribution/ContributionSection';
import PopularContest from '../popularContest/PopularContest';
import WinnerAdvertisement from '../../shared/Advertisement/WinnerAdvertisement';
;

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <PopularContest></PopularContest>
          <WinnerAdvertisement></WinnerAdvertisement>
           <ContributionSection></ContributionSection>
        </div>
    );
};

export default Home;