import '../styles/sass/components/banner.scss'

function Banner({ text, imgLink }) {
  let part1 = ''
  let part2 = ''
  // to wrap after "Chez vous,"
  if (text === 'Chez vous, et partout ailleurs') {
    ;[part1, part2] = text.split(', ')
  }

  return (
    <div className="banner">
      {text &&
        (part1 && part2 ? (
          <p className="banner__text">
            {part1}, <span className="banner__text--wrapText">{part2}</span>
          </p>
        ) : (
          <p className="banner__text">{text}</p>
        ))}

      <div className="banner__darkLayout"></div>
      <img className="banner__img" src={imgLink} alt="bannerImg" />
    </div>
  )
}

export default Banner
