import "./style.css";
import testingImage from "./icon.png"
// notice the order of imports reflect the order of console.log
import(/* webpackPreload: true */ "./testPreloadImport");
import(/* webpackPrefetch: true */ "./testPrefetchImport");

async function importLodash() {
  const { join } = await import("lodash/array");
  const element = document.createElement('div');
  element.innerHTML = join(['Lodash', 'imported', 'successfully'], ' ');
  element.classList.add('red-text');
  return element;
}

function getIcon() {
  const icon = new Image();
  icon.src = testingImage;
  return icon;
}

function getButton() {
  const btn = document.createElement('button');
  btn.innerHTML = 'import Lodash';
  btn.onclick = async () => {
    const comp = await importLodash();
    document.body.appendChild(comp);
  }
  return btn;
}

const elements = [getButton(), getIcon()];
elements.forEach(elm => document.body.appendChild(elm))
