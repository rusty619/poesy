import React, {useState} from "react";

function Poem({poem}) {

  const {id, title, content, author} = poem

  const [isMarked, setIsMarked] = useState(false)

  const handleMarkBtn = () => {
    setIsMarked(!isMarked)
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleMarkBtn}>{isMarked ? "Mark as unread" : "Mark as read" }</button>
    </div>
  );
}

export default Poem;
