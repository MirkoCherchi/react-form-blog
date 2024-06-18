import { useState } from "react";
import { TiDeleteOutline as Delete } from "react-icons/ti";

const Form = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postArray, setPostArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostArray([...postArray, postTitle]);
    setPostTitle("");
  };
  const handleDelete = (index) => {
    const newPostArray = postArray.filter((_, i) => i !== index);
    setPostArray(newPostArray);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Inserisci Post</label>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <button className="btnSubmit" type="submit">
            Submit
          </button>
        </form>
        <div>
          <ul>
            {postArray.map((post, index) => (
              <li key={index}>
                {post}{" "}
                <button
                  onClick={() => handleDelete(index)}
                  className="btnDelete"
                >
                  <Delete className="iconDelete" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Form;
