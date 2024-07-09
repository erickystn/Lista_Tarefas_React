import './Lista.css';
import PropTypes from 'prop-types';
import { FaPen, FaWindowClose } from 'react-icons/fa';

export default function Lista({ listaTarefas, handleEdit, handleDelete }) {
  return (
    <div className="lista">
      <ul>
        {listaTarefas.map((item, index) => (
          <li key={item}>
            <h4 className="item-name"> {item} </h4>
            <span>
              <FaPen className="edit" onClick={(ev) => handleEdit(ev, index)} />
              <FaWindowClose
                className="delete"
                onClick={(ev) => handleDelete(ev, index)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Lista.propTypes = {
  listaTarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
