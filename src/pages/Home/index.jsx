import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Location from '../../components/Location'
import data from '../../data/data.json'
import homeBanner from '../../styles/assets/home_banner.png'

function Home() {
    const [appartmentAds, setAppartmentAds] = useState([])

    useEffect(() => {
        setAppartmentAds(data)
    }, [])

    return (
        <>
            <Banner
                text="Chez vous, et partout ailleurs"
                imgLink={homeBanner}
            />
            <Location appartments={appartmentAds} />
        </>
    )
}

export default Home
