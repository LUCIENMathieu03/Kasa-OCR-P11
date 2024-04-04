import '../styles/sass/pages/homepage.scss'

function Location({ apartments }) {
  console.log(apartments)
  return (
    <section className="location">
      {apartments.map((apartment) => {
        return (
          <article key={apartment.id} className="location__apartmentCard">
            <div className="location__apartmentCard__gradient"></div>
            <img src={apartment.cover} alt={apartment.title} />
            <p className="location__apartmentCard__title">{apartment.title} </p>
          </article>
        )
      })}
    </section>
  )
}

export default Location
