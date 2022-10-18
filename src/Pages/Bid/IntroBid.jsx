import React from 'react'
import FAQ from '../components/FAQ/FAQ'
const IntroBid = () => {
    return (
        <div>
            <div className='px-32'>
            <h1 className='pt-6 text-center font-bold text-2xl'>Frequently asked questions</h1>
                <div className='pt-6'>
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                </div>
            </div>
        </div>
    )
}

export default IntroBid