import PropTypes from 'prop-types';
import './Form.css';

import { FaPlus } from 'react-icons/fa6';

export default function Form({ novaTarefa, handleInput, handleSubmit }) {
  return (
    <form action="#">
      <input
        type="text"
        value={novaTarefa}
        onChange={handleInput}
        placeholder="Digite uma tarefa"
      />
      <button onClick={handleSubmit}>
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  novaTarefa: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
