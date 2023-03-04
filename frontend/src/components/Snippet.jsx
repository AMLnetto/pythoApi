import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
   baseURL: `http://127.0.0.1:8000/`
 }) 

const Snippet = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    api.get('snippets/').then((response) => {
      console.log(response.data);
      setSnippets(response.data);
    });
  }, []);

  
  return (
    <div>
      <h2>All Posts 📫</h2>
      
      {snippets.map((snippet) => {
         
        return (
          <div key={snippet.id}>
            <h2 >{snippet.title}</h2>
            <h3 >{snippet.owner}</h3>
            <code><pre>{snippet.code}</pre></code>
          </div>
        );
      })}
    </div>
  );
};

export default Snippet;
