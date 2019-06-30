import React from 'react';

//Example Fetch req to illustrate rendering API data

export default class FetchYTData extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      youtubeData: null
    }
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({loading: false, person: data.results[0]});
    console.log(data);
  }

  render(){
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>Loading</div>
        ) : (
          <div>
            <div>{this.state.person.name.first}</div>
          </div>
        )}
      </div>
    )
  }

}
