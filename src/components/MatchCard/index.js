import './index.css'

const MatchCard = props => {
  const {matchCardData} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchCardData

  return (
    <li className="match-card-bg-container">
      <img
        className="match-card-competing-team-logo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <p className="match-card-competing-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className="match-card-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
