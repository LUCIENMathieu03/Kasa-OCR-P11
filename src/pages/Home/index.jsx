import { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Location from '../../components/Location'
import data from '../../data/data.js'

function Home() {
  const [appartmentAds, setAppartmentAds] = useState([])

  // const URL = '../../data/data.json'
  // async function fetchApartmentAds() {
  //   try {
  //     const response = await fetch(URL)
  //     if (!response.ok) {
  //       throw new Error('Erreur lors de la récupération des données')
  //     }
  //     const data = await response.json()
  //     setApartmentAds(data)
  //     console.log(data)
  //   } catch (error) {
  //     console.error('Erreur:', error.message)
  //   }
  // }

  useEffect(() => {
    // fetchApartmentAds()
    setAppartmentAds(data)
  }, [])

  return (
    <>
      <Banner
        text="Chez vous, et partout ailleurs"
        imgLink="https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8yr9Fkdk8mEnw9yT5ABxget1H7J6y0yY4NjOCh5Djk8yoL0x0sP4FVCmITv1JCuqeDor0wU-X2GyLi1MbfUZDIsQZvrZlVLENwwDLiNu5-K2eCw6Z~CpsvQ3aZzv03V-fQB-PNdFxEKZWDB~m47QBZ3OYijAv8Sm46mJcwgYlcNAMji3~wlC9jk-FvbZXFau08GEXjQPV40JudzWeznyihN8oCpFjNwDEUz1Ys0XGRDCCElu3mv3V-J5gUC1z8G3hYUnyLBHxm8HfQq5Gp-~SsecqSHAgHFk44ezMGqsZxAry-rNdfvtkyWkjEs-ctMO565WUtrjUk8FfBBVW0BhQ__"
      />
      <Location appartments={appartmentAds} />
    </>
  )
}

export default Home
