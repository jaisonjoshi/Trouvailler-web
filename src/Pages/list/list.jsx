import React from 'react'
import Navbar from '../components/navbar/navbar'
import List from '../components/cards/list'


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="">

            </div>
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-5 m-11">
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
            </div>
            
        </div>
    )
}

export default Home