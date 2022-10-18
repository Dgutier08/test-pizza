import Card from "../components/Card";
import React from 'react'
import Header from "../components/header";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <Card />
                </div>
            </div>
        </>
    )
}
export default Home
