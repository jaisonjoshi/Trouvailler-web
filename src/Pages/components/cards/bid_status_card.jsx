import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const BidStatusCard = () => {
    return (
        <div>
            <div>
                <div>
                    <h1><span><FontAwesomeIcon icon={solid('location-dot')} /></span>Where you want to go</h1>
                    <div><h3><span><FontAwesomeIcon icon={solid('circle-check')} /></span> Accepted</h3> </div>
                </div>
            </div>
        </div>
    );
};



export default BidStatusCard;
