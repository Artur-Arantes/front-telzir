import React from "react";
import "../assets/css/planos.css";

class Planos extends React.Component {
  isObject(obj) {
    return obj !== undefined && obj !== null && obj.constructor == Object;
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    let args =
      "?tempo=" +
      form.elements["tempo"].value +
      "&" +
      "dddOrigem=" +
      form.elements["dddOrigem"].value +
      "&" +
      "dddDestino=" +
      form.elements["dddDestino"].value +
      "&" +
      "id_plan=" +
      form.elements["id_plan"].value;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(process.env.REACT_APP_URL_PROD + "plano/busca" + args, requestOptions)
      .then((response) => {if (response.ok) {
        return response.json();
      } else {
        response.text().then((text)=>this.setState({erro:text}));
      }})
      .then((response) => {
        this.setState({ resultado: response });
      });
  }

  buscaPlanos() {
    fetch(process.env.REACT_APP_URL_PROD + "plano/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ planos: response });
      });
  }
  componentDidMount() {
    this.handleSubmit=this.handleSubmit.bind(this);
    document.title = this.state.title;
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "planos",
      plano: [],
      resultado: null,
      erro: null,
    };
    this.buscaPlanos();
   
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
    if (!!this.state.resultado) {
      tabela = (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tipo de Plano</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Com Plano</td>
              <td>{this.state.resultado.comFaleMais}</td>
            </tr>
            <tr>
              <td>Sem Plano</td>
              <td>{this.state.resultado.taxaNormalDaLigacao}</td>
            </tr>
          </tbody>
        </table>
      );
    }
    let erro = "";
    if (!!this.state.erro) {
      erro = (
        <div class="alert alert-danger" role="alert">
          {this.state.erro}
        </div>
      );
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
                  onChange={(e) => (this.id_plan = e.target.value)}
                >
                  {optionTemplate}
                </select>
              </div>
              <button id="btnCalcular" type="submit" className="btn btn-primary">
                Calcular
              </button>
            </form>
            {tabela}
            {erro}
          </div>
        </div>
      </div>
    );
  }
}
export default Planos;
