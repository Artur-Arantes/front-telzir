import React from "react";
import "../assets/css/planos.css";

class Planos extends React.Component {
  handleSubmit(e) {
    const data = {
      tempo: this.tempo,
      dddOrigem: this.dddOrigem,
      dddDestino: this.dddDestino,
      id_plan: this.id_plan,
    };
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch(process.env.REACT_APP_URL_PROD + "plano/busca", requestOptions).then(
      (response) => response.json()
    );
  }

  buscaPlanos() {
    fetch(process.env.REACT_APP_URL_PROD + "plano/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ planos: response });
      });
  }
  componentDidMount() {
    document.title = this.state.title;
  }

  componentWillUnmount() {}

  render() {
    let optionTemplate = [];
    if (!!this.state.planos) {
      optionTemplate = this.state.planos.map((v) => (
        <option value={v.id}>{v.nome}</option>
      ));
    }
    let tabela = "";
    if (this.state.resultado) {
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>;
    }
    return (
      <div className="container py-4 mt-5 ">
        <div className="row">
          <div className="col-6 mx-auto">
            <form className="shadow-sm p-4" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="dddOrigem" className="form-label">
                  DDD Origem
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="dddOrigem"
                  name="dddOrigem"
                  onChange={(e) => (this.dddOrigem = e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dddDestino" className="form-label">
                  DDD Destino
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="dddDestino"
                  name="dddDestino"
                  onChange={(e) => (this.dddDestino = e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tempo" className="form-label">
                  Tempo (Minutos)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="tempo"
                  name="tempo"
                  onChange={(e) => (this.tempo = e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="plano" className="form-label">
                  Plano
                </label>
                <select
                  class="form-select"
                  id="id_plan"
                  aria-label="Default select example"
                >
                  {optionTemplate}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Calcular
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Planos;
