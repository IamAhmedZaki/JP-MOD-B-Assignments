import react from 'react'
import ReactDom from 'react-dom/client'

const divElement=document.getElementById('root')

let listed=()=>{
  return(
    <ul>
      <li>Apple</li>
      <li>Grape</li>
    </ul>
  );
};


ReactDom.createRoot(divElement).render(
  <>
  <h1 >
    Hello World
  </h1>
  <listed/>
  
  </>
)
