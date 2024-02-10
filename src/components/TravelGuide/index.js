import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  MainContainer,
  Heading,
  CardsContainer,
  TravelGuidesection,
  Li,
  Img,
  Name,
  Description,
  LoaderSection,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TravelGuide extends Component {
  state = {
    travelPackagesList: [],
  }

  componentDidMount() {
    this.getTravelPackages()
  }

  formattedData = data => ({
    description: data.description,
    id: data.id,
    imageUrl: data.image_url,
    name: data.name,
  })

  getTravelPackages = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(each =>
        this.formattedData(each),
      )
      console.log(updatedData)
      this.setState({
        travelPackagesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderTravelGuideDetailsView = () => {
    const {travelPackagesList} = this.state
    return (
      <MainContainer>
        <Heading>Travel Guide</Heading>
        <CardsContainer>
          <TravelGuidesection>
            {travelPackagesList.map(each => (
              <Li key={each.id}>
                <Img src={each.imageUrl} alt={each.name} />
                <Name>{each.name}</Name>
                <Description>{each.description}</Description>
              </Li>
            ))}
          </TravelGuidesection>
        </CardsContainer>
      </MainContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderSection data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderSection>
  )
  renderFailureView = () => (
    <div>
      <h1>Nothing...</h1>
    </div>
  )
  renderTravelDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTravelGuideDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderTravelDetails()}</>
  }
}

export default TravelGuide
