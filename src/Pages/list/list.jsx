import React from 'react'
import Navbar from '../components/navbar/navbar'
import List1 from '../components/cards/list1'
import List2 from '../components/cards/list2'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <div className="md:flex justify-center">
                <div className="flex justify-center items-center m-3">
                    <input type="text" className="w-48 flex justify-center outline-none items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs" placeholder="Search"/>
                </div>
                <div className="flex justify-center items-center m-3">
                        <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                            <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                            Categories
                        </button>
                    </div>
                    <div className="flex justify-center items-center m-3">
                        <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                            <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                            Budget
                        </button>
                    </div>
                    <div className="flex justify-center items-center m-3">
                        <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                            <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                            Activities
                        </button>
                    </div>
                    <div className="flex justify-center items-center m-3">
                        <button className="w-48 flex justify-center items-center text-blacky-light p-3 shadow-lg shadow-gray-500 rounded-2xl text-xs">
                            <img src={require('../Assets/Variant2.png')} alt="Facebook" className="h-3 w-3 mr-2" />
                            Rooms
                        </button>
                    </div>
            </div>
            <hr className="w-full my-5" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-11">
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