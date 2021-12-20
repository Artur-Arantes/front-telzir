import React from "react";
import "../assets/css/planos.css";

class Planos extends React.Component {
  state = {
    title: "Planos",
    planos: this.buscaPlanos()
  };
  handleSubmit(e){
      const data = {
          name: this.name,
          email: this.email,
          password: this.password,
      }

      console.log(data)

  }

  buscaPlanos(){
    return [
      {
        "id": 1,
        "name": "Plano Fale Mais 30"
      },
      {
        "id": 2,
        "name": "Plano Fale Mais 60"
      },
      {
        "id": 3,
        "name": "Plano Fale Mais 120"
      },
    ]
  }
  componentDidMount() {
    document.title = this.state.title;
  }

  componentWillUnmount() {
  }

  render() {
    let optionTemplate = this.state.planos.map(v => (
      <option value={v.id}>{v.name}</option>
    ));
    return (
      <div className="container py-4 mt-5 ">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <form className="shadow-sm p-4" onSubmit={this.handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="dddOrigem" className="form-label">DDD Origem</label>
                                <input type="number" className="form-control" id="dddOrigem" name="dddOrigem" 
                                onChange={e => this.dddOrigem = e.target.value}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dddDestino" className="form-label">DDD Destino</label>
                                <input type="number" className="form-control" id="dddDestino" name="dddDestino" 
                                onChange={e => this.dddDestino = e.target.value}  /></div>
                            <div className="mb-3">
                                <label htmlFor="tempo" className="form-label">Tempo (Minutos)</label>
                                <input type="number" className="form-control" id="tempo" name="tempo" 
                                onChange={e => this.tempo = e.target.value}  />
                                </div>
                            <div className="mb-3">
                                <label htmlFor="passwod" className="form-label">Plano</label>
                                <select class="form-select" aria-label="Default select example">
                                  {
                                    optionTemplate
                                  }
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Calcular</button>
                        </form>
                    </div>
                </div>
            </div>
    );
  }
}
export default Planos;
