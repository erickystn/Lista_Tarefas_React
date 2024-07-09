import { Component } from 'react';
import './Main.css';
import Form from './Form';
import Lista from './Lista';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    listaTarefas: [],
    index: -1,
  };

  componentDidMount() {
    const listaTarefas = localStorage.getItem('listaTarefas');
    if (listaTarefas) {
      this.setState({ listaTarefas: JSON.parse(listaTarefas) });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    const { listaTarefas } = this.state;

    if (listaTarefas === prevState.listaTarefas) return;

    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
  }

  handleInput = (event) => {
    this.setState({ novaTarefa: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { novaTarefa, listaTarefas, index } = this.state;
    const tarefa = novaTarefa.trim();
    if (!tarefa) return;

    if (listaTarefas.includes(tarefa)) return;
    const novaLista = [...listaTarefas];

    if (index !== -1) {
      novaLista[index] = tarefa;
      this.setState({
        listaTarefas: [...novaLista],
        novaTarefa: '',
        index: -1,
      });
    } else {
      this.setState({
        listaTarefas: [...novaLista, tarefa],
        novaTarefa: '',
      });
    }
  };

  handleEdit = (_event, index) => {
    const { listaTarefas } = this.state;
    if (!listaTarefas[index]) return;
    this.setState({
      novaTarefa: listaTarefas[index],
      index,
    });
  };

  handleDelete = (_event, index) => {
    const { listaTarefas } = this.state;
    if (!listaTarefas[index]) return;
    const novaLista = [...listaTarefas];
    novaLista.splice(index, 1);
    this.setState({ listaTarefas: novaLista });
  };

  render() {
    const { novaTarefa, listaTarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form
          novaTarefa={novaTarefa}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />

        <Lista
          listaTarefas={listaTarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
