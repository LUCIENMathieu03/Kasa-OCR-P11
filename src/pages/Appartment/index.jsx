import '../../styles/sass/pages/appartment.scss'
import { useLocation } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'

function Appartment() {
  const location = useLocation()
  const appartment = location.state.appartment

  const handleHostName = (fullName) => {
    const fullNameTable = fullName.split(' ')

    return (
      <>
        <p>{fullNameTable[0]}</p>
        <p>{fullNameTable[1]}</p>
      </>
    )
  }

  const handleRating = (ratingNumber) => {
    // const missingStars = 5 - parseInt(ratingNumber)
    const filledStar = (
      <svg
        className="star"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z"
          fill="#FF6060"
        />
      </svg>
    )

    const greyStar = (
      <svg
        className="star"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z"
          fill="#E3E3E3"
        />
      </svg>
    )

    let allStars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= ratingNumber) {
        allStars.push(filledStar)
      } else {
        allStars.push(greyStar)
      }
    }

    return (
      <>
        {allStars.map((star) => {
          return star
        })}
      </>
    )
  }

  return (
    <div className="appartmentMain">
      <Slideshow />
      <div className="appartmentMain__information">
        <div className="appartmentMain__information__grp1">
          <h1 className="appartmentMain__information__grp1__title">
            {appartment.title}
          </h1>
          <p className="appartmentMain__information__grp1__location">
            {appartment.location}
          </p>
          <div className="appartmentMain__information__grp1__tags">
            {appartment.tags.map((tag) => {
              return <Tag key={tag} tagText={tag} />
            })}
          </div>
        </div>
        <div className="appartmentMain__information__grp2">
          <div className="appartmentMain__information__grp2__host">
            <div className="appartmentMain__information__grp2__host__name">
              {handleHostName(appartment.host.name)}
            </div>

            <img
              src={appartment.host.picture}
              alt="host_photo"
              className="appartmentMain__information__grp2__host__img"
            />
          </div>
          <div className="appartmentMain__information__grp2__stars">
            {handleRating(appartment.rating)}
          </div>
        </div>
      </div>
      <div className="appartmentMain__collapses">
        <Collapse title="Description" text={appartment.description} />
        <Collapse title="Équipements" text={appartment.equipments} />
      </div>
    </div>
  )
}

export default Appartment