import React from 'react';
import HomeNavbar from '../../components/home-navbar/HomeNavbar'

import './Home.css';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "user": ""
    }
  }

  render() {
    return (
      <section>
        <HomeNavbar/>

        <div className="home">
          HOME
        </div>

      </section>
    )
  }
};

export default Home;
