import React from 'react';


class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }

  }
  
  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return <span>{ location.state.title }</span>
    } else {
      return null;
    }
    
    // return <span>hello</span>
  }

}

export default Detail;
