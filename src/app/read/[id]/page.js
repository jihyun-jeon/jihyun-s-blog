import React from "react";

async function Read(props) {
  const { id } = await props.params;
  const res = await fetch(`http://localhost:9999/topics/${id}`);
  const topics = await res.json();
  return (
    <div>
      <h2>Read</h2>
      <div>title : {topics.title}</div>
      <div>content : {topics.body}</div>
    </div>
  );
}

export default Read;
