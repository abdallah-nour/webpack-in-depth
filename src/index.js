import { join } from "lodash/array";
import "./style.css";
import Icon from "./icon.png"

console.log("add assets loaders");

function component() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
