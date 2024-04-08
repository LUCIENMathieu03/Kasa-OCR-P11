import '../styles/sass/components/collapse.scss'

function Collapse({ title, text }) {
  const handleText = (text) => {
    if (Array.isArray(text)) {
      return (
        <ul className="collapse__textBox__paragraph collapse__textBox__paragraph--closed">
          {text.map((elem) => {
            return <li key={`equipement-${elem}`}>{elem}</li>
          })}
        </ul>
      )
    } else {
      return (
        <p className="collapse__textBox__paragraph collapse__textBox__paragraph--closed">
          {text}{' '}
        </p>
      )
    }
  }

  const toggleCollapse = (e) => {
    //Get the collapse elem
    const collapseTextElem = e.target
      .closest('.collapse')
      .querySelector('.collapse__textBox')

    //Box drop down animation
    collapseTextElem.classList.toggle('collapse__textBox--open')
    //Text inside animation
    const paragraph = collapseTextElem.querySelector(
      '.collapse__textBox__paragraph'
    )
    if (paragraph.classList.contains('collapse__textBox__paragraph--show')) {
      paragraph.classList.toggle('collapse__textBox__paragraph--show')
      paragraph.classList.toggle('collapse__textBox__paragraph--closed')
    } else {
      paragraph.classList.toggle('collapse__textBox__paragraph--closed')
      paragraph.classList.toggle('collapse__textBox__paragraph--show')
    }
    //Arrow annimation
    const arrow = e.target
      .closest('.collapse')
      .querySelector('.collapse__arrow')

    arrow.classList.toggle('collapse__arrow--open')
  }

  return (
    <div
      className="collapse"
      onClick={(e) => toggleCollapse(e)}
      key={title.toString()}
    >
      <div className="collapse__button">
        <p className="title">{title}</p>
        <svg
          className="collapse__arrow"
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="collapse__textBox">{handleText(text)}</div>
    </div>
  )
}

export default Collapse
