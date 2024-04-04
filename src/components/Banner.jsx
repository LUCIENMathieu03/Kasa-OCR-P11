import '../styles/sass/components/banner.scss'

function Banner({ text, imgLink }) {
  return (
    <div className="banner">
      {text && <p className="banner__text">{text}</p>}
      <div className="banner__darkLayout"></div>
      <img className="banner__img" src={imgLink} alt="bannerImg" />
    </div>
  )
}

export default Banner
