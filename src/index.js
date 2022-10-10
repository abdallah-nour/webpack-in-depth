import { join } from "lodash/array";
import "./style.css";
// notice the order of imports reflect the order of console.log
import(/* webpackPreload: true */ "./testPreloadImport");
import(/* webpackPrefetch: true */ "./testPrefetchImport");

console.log("output manage");

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  // button
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  // div style
  element.classList.add('hello');

  // image
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
