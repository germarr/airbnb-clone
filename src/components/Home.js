import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home__section">
                <Card src="https://images.pexels.com/photos/1229753/pexels-photo-1229753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    title="Entire Homes" description="Comfortable pricate places, with room for friends or family."/>
                <Card src="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    title="New Countries" description="Awesome views in every part of the house.."/>
                <Card src="https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    title="Charming Places" description="Relax and re-discover nature with this amazing place."/>
            </div>
            <div className="home__section">
                <Card price="$385.00" src="https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    title="New Addition" description="Comfortable pricate places, with room for friends or family."/>
                <Card price="$390.00" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    title="Amzing Location" description="Comfortable pricate places, with room for friends or family."/>
                <Card price="$411.00" src="https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                    title="Walk and Enjoy" description="Comfortable pricate places, with room for friends or family."/>
            </div>
        </div>
    )
}

export default Home
