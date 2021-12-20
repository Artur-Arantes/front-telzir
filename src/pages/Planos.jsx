import React from "react";
import "../assets/css/planos.css";

class Planos extends React.Component {
  state = {
    title: "Planos",
  };
  componentDidMount() {
    document.title = this.state.title;
  }
  render() {
    return (
      <div>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">PLANOS</h1>
          <p class="lead">
            Confira abaixo os planos que oferecemos:
          </p>
        </div>
        <div class="container">
          <div class="card-deck row text-center">
            <div class="card col-12 col-md-3 offset-md-1 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">FALE MAIS 30</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  -- <small class="text-muted">/ mes</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
            <div class="card col-12 col-md-3 offset-md-1 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">FALE MAIS 60</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  -- <small class="text-muted">/ mes</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Get started
                </button>
              </div>
            </div>
            <div class="card col-12 col-md-3 offset-md-1 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">FALE MAIS 120</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  -- <small class="text-muted">/ mes</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Planos;
