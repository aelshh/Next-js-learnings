import axios from "axios";
import React from "react";

export default async function blogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  const data = await response.data;

  return (
    <div>
      {data.map((todo, index) => {
        return (
          <>
            <Todo
              title={todo.title}
              description={todo.description}
              key={index}
            ></Todo>
          </>
        );
      })}
    </div>
  );
}

function Todo({ title, description }: { title: string; description: string }) {
  return (
    <div>
      {title} {description}
    </div>
  );
}
