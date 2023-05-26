import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authors_actions from '../store/actions/authors';
import muñeco from '../imagenes/Vector.png';
import SwitchAuthor from './SwitchAuthor';

const { read_authors } = authors_actions;

export default function Authors_table() {
  const { active, inactive } = useSelector(store => store?.authors?.authors);
  const [filteredAuthors, setFilteredAuthors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_authors());
  }, []);

  useEffect(() => {
    setFilteredAuthors([...inactive, ...active]);
  }, [inactive, active]);

  const handleSwitchChange = (authorId, isActive) => {
    // Actualizar el estado del autor en el array correspondiente (activo o inactivo)
    const updatedAuthors = filteredAuthors.map(author => {
      if (author._id === authorId) {
        return { ...author, active: isActive };
      }
      return author;
    });
    setFilteredAuthors(updatedAuthors);
  };

  return (
    <>
      {filteredAuthors.map(author => (
        <tr key={author._id} className='border border-gray-400'>
          <td className="flex">
            <img className="h-[20px] mr-2" src={muñeco} alt="Muñeco" />
            {author.name}
          </td>
          <td>{  new Date(author.createdAt).toLocaleDateString()}</td>
          <td>{author.city}</td>
          <td>
            <img className="w-[2rem] h-[2rem] rounded-full" src={author.photo} alt="Foto" />
          </td>
          <td>
            <SwitchAuthor
              isActive={author.active}
              id={author._id}
              onSwitchChange={handleSwitchChange}
            />
          </td>
        </tr>
      ))}
    </>
  );
}