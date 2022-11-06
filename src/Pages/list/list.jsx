import React from 'react'
import Navbar from '../components/navbar/navbar'
import List1 from '../components/cards/list1'
import List2 from '../components/cards/list2'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="">

            </div>
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-5 m-11">
                <List1 />
                <List2 />
                <List1 />
                <List2 />
                <List1 />
                <List2 />
                <List2 />
                <List1 />
                <List1 />
            </div>

            <Footer/>

        </div>
    )
}

export default Home