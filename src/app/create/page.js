"use client";

import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };

    fetch(`http://localhost:9999/topics`, options)
      .then((res) => res.json())
      .then((result) => {
        const lastId = result.id;
        router.push(`read/${lastId}`);
      });
  };

  return (
    <div>
      <p>
        <input type="text" id="title" placeholder="title" />
      </p>
      <p>
        <textarea placeholder="body" id="body" />
      </p>
      <p>
        <button onClick={handleSubmit}>Create</button>
      </p>
    </div>
  );
};

export default Create;
