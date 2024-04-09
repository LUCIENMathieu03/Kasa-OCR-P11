function Appartement({ appartment }) {
  return (
    <>
      <article className="location__apartmentCard">
        <div className="location__apartmentCard__gradient"></div>
        <img src={appartment.cover} alt={appartment.title} />
        <p className="location__apartmentCard__title">{appartment.title} </p>
      </article>
    </>
  )
}

export default Appartement
