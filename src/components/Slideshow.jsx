import '../styles/sass/components/slideshow.scss'
import { useState, useEffect } from 'react'
import leftArrow from '../styles/assets/leftArrow.svg'
import rightArrow from '../styles/assets/rightArrow.svg'

function Slideshow({ pictures }) {
    const [appartmentPictures] = useState(pictures)
    const [imageDisplayedIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const arrows = Array.from(
            document.querySelectorAll('.slideshow__controls__arrow')
        )
        const pagination = document.querySelector('.slideshow__pagination p')

        if (appartmentPictures.length < 2) {
            arrows.map((arrow) =>
                arrow.classList.add('slideshow__controls__arrow--noArrow')
            )
            pagination.classList.add('slideshow__pagination--noPagination')
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
                : setImageIndex(
                      actualImgIndex + (appartmentPictures.length - 1)
                  )

            handlePagination()
        } else if (arrowRightClicked) {
            actualImgIndex < appartmentPictures.length - 1
                ? setImageIndex(actualImgIndex + 1)
                : setImageIndex(0)
        }
    }

    const handlePagination = () => {
        const picturesNumber = appartmentPictures.length

        return <>{`${imageDisplayedIndex + 1}/${picturesNumber}`}</>
    }

    useEffect(() => {
        const slideshow = document.querySelector('.slideshow')
        const img = document.querySelector('.slideshow__img')

        const newImg = document.createElement('img')
        newImg.classList.add('slideshow__img')
        newImg.setAttribute('alt', 'appartment')
        newImg.setAttribute('src', `${appartmentPictures[imageDisplayedIndex]}`)

        slideshow.removeChild(img)
        slideshow.appendChild(newImg)
    }, [appartmentPictures, imageDisplayedIndex])

    return (
        <div className="slideshow">
            <div className="slideshow__controls">
                <img
                    src={leftArrow}
                    alt="left arrow"
                    onClick={(e) => handleArrowClick(e)}
                    className="slideshow__controls__arrowLeft slideshow__controls__arrow"
                />

                <img
                    src={rightArrow}
                    alt="right arrow"
                    onClick={(e) => handleArrowClick(e)}
                    className="slideshow__controls__arrowRight slideshow__controls__arrow"
                />
            </div>
            <div className="slideshow__pagination">
                <p>{handlePagination()}</p>
            </div>
            <img
                src={appartmentPictures[imageDisplayedIndex]}
                alt="appartment"
                className="slideshow__img"
            />
        </div>
    )
}

export default Slideshow
