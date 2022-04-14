import React, {useState} from "react";

function NewPoemForm({addNewPoem}) {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Title: ", title)
    console.log("Author: ", author)
    console.log("Content: ", content)
    //Do Not kill ME for fetching POST request this way Micheal PLEASEEEEEEEEE
    fetch('http://localhost:8004/poems',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title:title,
        content:content,
        author: author
      })
    })
    .then((res) => res.json())
    .then((newPoem) => addNewPoem(newPoem))

    // to initilize the input form back to empty after user submits the poem 
    setTitle("")
    setAuthor("")
    setContent("")
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} value={content} onChange={(e) => setContent(e.target.value)}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
