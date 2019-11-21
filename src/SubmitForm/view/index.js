import React, { useEffect } from "react";

const SubmitForm = () => {
  useEffect(() => {
    let url = "http://localhost:3000/data";
    fetch(url)
      .then(res => res.json())
      .then(result => console.log("result"));
  }, []);
  return <div>ome</div>;
};

export default SubmitForm;
