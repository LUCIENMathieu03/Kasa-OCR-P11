import '../../styles/sass/pages/errorPage.scss'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="errorPage">
      <p className="errorPage__errorNumber">404</p>
      <p className="errorPage__errorDescription">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorPage__linkToHomePage">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default ErrorPage
