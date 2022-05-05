import body from "./getBody";

const getContainer = () => {
  const container = document.createElement('section');
  container.setAttribute('class', 'container');
  
  //appends
  body.appendChild(container);
}

export default getContainer;