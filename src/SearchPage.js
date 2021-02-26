import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core"
import SearchResult from "./components/SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays | 26 august to 30 august | 2 guest</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                location="Private Room in center of London"
                title="Stay at this spacious Edwardian House"
                star={4.73}
                price="$300 / night"
                total="$3217 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/604661/pexels-photo-604661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                location="Apartment in Downtown."
                title="The best spot in the city."
                star={5.00}
                price="$380 / night"
                total="$1117 total"
            />
        </div>
    )
}

export default SearchPage
