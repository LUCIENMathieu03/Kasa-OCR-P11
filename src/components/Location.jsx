import { useNavigate } from 'react-router-dom'
import '../styles/sass/pages/homepage.scss'

function Location({ appartments }) {
  const navigate = useNavigate()

  const handleAppartmentClick = (clickedApartment) => {
    navigate(`/appartment`, { state: { appartment: clickedApartment } })
  }

  return (
    <section className="location">
      {appartments.map((appartment) => {
        return (
          <article
            key={appartment.id}
            className="location__apartmentCard"
            onClick={() => handleAppartmentClick(appartment)}
          >
            <div className="location__apartmentCard__gradient"></div>
            <img src={appartment.cover} alt={appartment.title} />
            <p className="location__apartmentCard__title">
              {appartment.title}{' '}
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default Location
