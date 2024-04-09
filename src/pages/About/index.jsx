import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import '../../styles/sass/pages/about.scss'

function About() {
  return (
    <div className="aboutMain">
      <Banner imgLink="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q7UzOTWmW1NckKlYYlIB4IfZnSzA4Uk-utjwsgYhLegXJZ9rwP2JERU2U3f0EkoESz7agw~zCP5cTvrBZCDFezps0TWus67sOI-HYTTMhrnSVnu0nSdUWGuMq7KtGBE9CjYghbN01CdgpGkLaBX9jQPjMFBLmYjevvS73G1-k4PEb5q6266hwS-OaXdgUQWzWMe2aFr~UkHhvgahRIuF8e2n6BdmjPTmW03YKdRLVUBeIojpvOCwjk5J33z73xre2QNvLOqrw0KnVb-jvYScDVYOwU1wt3QdurOE~KZqy-EHJfOAiURDrCBF6n0aaHdSXfU7ovlY1mnsZdSbkk0NOg__" />
      <div className="aboutMain__collapses">
        <Collapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  )
}

export default About
