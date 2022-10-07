import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardData} = props
  const {id, name, teamImageUrl} = cardData

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img className="team-image" src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
