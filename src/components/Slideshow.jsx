import '../styles/sass/components/slideshow.scss'
import { useState, useEffect } from 'react'

function Slideshow({ pictures }) {
  const [appartmentPictures, setPicture] = useState(pictures)
  const [imageDisplayedIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const arrows = Array.from(
      document.querySelectorAll('.slideshow__controls__arrow')
    )

    if (appartmentPictures.length < 2) {
      arrows.map((arrow) =>
        arrow.classList.add('slideshow__controls__arrow--noArrow')
      )
    }
  }, [appartmentPictures.length])

  const handleArrowClick = (e) => {
    const arrowLeftClicked = e.target.classList.contains(
      'slideshow__controls__arrowLeft'
    )
    const arrowRightClicked = e.target.classList.contains(
      'slideshow__controls__arrowRight'
    )

    let actualImgIndex = imageDisplayedIndex

    if (arrowLeftClicked) {
      actualImgIndex > 0
        ? setImageIndex(actualImgIndex - 1)
        : setImageIndex(actualImgIndex + (appartmentPictures.length - 1))

      handlePagination()
    } else if (arrowRightClicked) {
      actualImgIndex < appartmentPictures.length - 1
        ? setImageIndex(actualImgIndex + 1)
        : setImageIndex(0)

      handlePagination()
    }
  }

  const handlePagination = () => {
    const picturesNumber = appartmentPictures.length

    return <>{`${imageDisplayedIndex + 1}/${picturesNumber}`}</>
  }

  return (
    <div className="slideshow">
      <img src={appartmentPictures[imageDisplayedIndex]} alt="appartment" />
      <div className="slideshow__controls">
        <svg
          onClick={(e) => handleArrowClick(e)}
          className="slideshow__controls__arrowLeft slideshow__controls__arrow"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>

        <svg
          onClick={(e) => handleArrowClick(e)}
          className="slideshow__controls__arrowRight slideshow__controls__arrow"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="slideshow__pagination">
        <p>{handlePagination()}</p>
      </div>
    </div>
  )
}

export default Slideshow
