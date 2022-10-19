import React from 'react'
import FAQ from '../components/FAQ/FAQ'
const IntroBid = () => {
    return (
        <div>
            <div className='px-10 sm:px-32 bg-graydust-extralight'>
                <h1 className='pt-6 text-center font-bold text-2xl'>Frequently asked questions</h1>
                <div className='pt-6'>
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <FAQ />
                    <div className='py-5 flex justify-end'>
                        <button className='font-medium hover:border-graydust-dark border hover:text-blacky-dark p-2 rounded-md w-full sm:w-auto px-10 hover:bg-transparent bg-evergreen text-whiteglow border-transparent hover:transition-colors hover:duration-200 ' >Ask a Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroBid