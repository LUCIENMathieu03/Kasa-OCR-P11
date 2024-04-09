import { Link } from 'react-router-dom'
import '../styles/sass/pages/homepage.scss'
import './Appartement'
import Appartement from './Appartement'

function Location({ appartments }) {
  return (
    <section className="location">
      {appartments.map((appartment) => {
        return (
          <Link to={`/appartment/${appartment.id}`} key={appartment.id}>
            <Appartement appartment={appartment} />
          </Link>
        )
      })}
    </section>
  )
}

export default Location
