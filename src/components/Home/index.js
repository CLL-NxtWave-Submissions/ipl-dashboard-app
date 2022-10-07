import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

export default class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }

  componentDidMount() {
    this.fetchTeamsData()
  }

  fetchTeamsData = async () => {
    const teamsDataAPIResponse = await fetch(teamsApiUrl)
    const fetchedTeamsData = await teamsDataAPIResponse.json()
    const formattedTeamsData = fetchedTeamsData.teams.map(
      fetchedTeamsDataItem => ({
        id: fetchedTeamsDataItem.id,
        name: fetchedTeamsDataItem.name,
        teamImageUrl: fetchedTeamsDataItem.team_image_url,
      }),
    )

    this.setState({
      isLoading: false,
      teamsData: formattedTeamsData,
    })
  }

  render() {
    const {isLoading, teamsData} = this.state

    return isLoading ? (
      //   <div testid="loader">
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="ipl-dashboard-bg-container">
        <img
          className="ipl-logo-img"
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <ul className="ipl-team-card-collection">
          {teamsData.map(teamsDataItem => (
            <TeamCard key={teamsDataItem.id} cardData={teamsDataItem} />
          ))}
        </ul>
      </div>
    )
  }
}
