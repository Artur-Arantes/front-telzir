import React from "react";
import img1 from "../assets/image/home-background-image.jpg";
import '../assets/css/home.css'

class Home extends React.Component {
  state = {
    title: "Home",
  };

  componentDidMount() {
    document.title = this.props.title + " - " + this.state.title;
  }

  render() {
    return (
      <div>
        <div
          class="home-main"
          style={{
            backgroundImage:'url(' + img1 + ')'
          }}
        >
          <div class="blend-image">
          </div>
        </div>
        <div class="row justify-content-center align-middle principal-text">
          <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 align-self-center">
              <div class="typewriter text-primary">
                <h1>Telzir Empresa de Telefonia.</h1>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
