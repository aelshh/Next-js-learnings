import React from "react";

export default function layout({ children }) {
  return (
    <div className="bg-black p-3 border-b-1">
      <h1>These are auth pages</h1>
      {children}
    </div>
  );
}
