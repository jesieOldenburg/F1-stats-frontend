import React from 'react';
import MainBillboardHeading from './billboard-headings'

const BillboardBanner = () => {
    return (
        <div className="billboard-banner">
            <div className="billboard-banner-row">
                <div className="billboard-banner-col">
                    <MainBillboardHeading headingContent="Grand Prix Stats"></MainBillboardHeading>
                </div>
            </div>
        </div>
    )
}

export default BillboardBanner