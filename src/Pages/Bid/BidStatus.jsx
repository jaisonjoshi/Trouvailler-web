import React from 'react';
import BidStatusCard from '../components/cards/bid_status_card';
import Footer from '../components/Footer/Footer'

const BidStatus = () => {
    return (
        <div>
            <div className='mx-28  xl:mx-40 pb-16'>
                <h1 className='text-2xl font-bold text-blacky-bright py-7'>Bid Status</h1>
                <BidStatusCard />
                <BidStatusCard />
                <BidStatusCard />
                <BidStatusCard />
                <BidStatusCard />
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default BidStatus;