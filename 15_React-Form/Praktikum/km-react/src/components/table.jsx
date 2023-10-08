import React, { useState } from "react";
import "../styles/table.css";
import { Link } from "react-router-dom";

export default function Table(props) {
  const { headers = [], datas = [], onEdit, onDelete } = props;
  const [editingRow, setEditingRow] = useState(null);

  const handleEditClick = (data) => {
    onEdit(data);
    setEditingRow(data.id);
  };

  const handleCancelEdit = () => {
    onEdit(null);
    setEditingRow(null);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border-b">
              {header}
            </th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => (
          <tr key={data.id} className="hover border-b">
            <td>{data.id}</td>
            <td>
              {editingRow === data.id ? (
                <input type="text" value={data.productName} />
              ) : (
                data.productName
              )}
            </td>
            <td>
              {editingRow === data.id ? (
                <input type="text" value={data.productCategory} />
              ) : (
                data.productCategory
              )}
            </td>
            <td>
              {editingRow === data.id ? (
                <input type="text" value={data.productImage} />
              ) : (
                <img src={data.productImage} alt="Product" />
              )}
            </td>
            <td>
              {editingRow === data.id ? (
                <input type="text" value={data.productFreshness} />
              ) : (
                data.productFreshness
              )}
            </td>
            <td>
              {editingRow === data.id ? (
                <input type="number" value={data.productPrice} />
              ) : (
                data.productPrice
              )}
            </td>
            <td>
              {editingRow === data.id ? (
                <input type="text" value={data.productDescription} />
              ) : (
                data.productDescription
              )}
            </td>
            <td>
              {editingRow === data.id ? (
                <>
                  <button onClick={handleCancelEdit} className="btn-cancel">
                    Cancel
                  </button>
                  <button className="btn-save">Save</button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditClick(data)}
                    className="btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(data.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
