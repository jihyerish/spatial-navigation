function initBoxes(root, amount) {
  for (let i = 0; i < amount; i++) {
    root.innerHTML += `<div class= "item" tabindex="0" style="background-color: #${getRandomInt(100, 800)};"></div>`;
  }
}

function addBoxes(root, amount) {
  for (let i = 0; i < amount; i++) {
    let temp = document.createElement('div');
    temp.setAttribute('class', 'item');
    temp.setAttribute('tabindex', 0);
    temp.style.backGroundColor = `#${getRandomInt(100, 800)}`;

    root.appendChild(temp);
  }
}

function updateBoxes(root, amount) {
  const childNum = root.childElementCount;

  if (childNum > amount) {
    for (let i = 0; i < childNum - amount; i++) {
      root.removeChild(root.lastChild);
    }
  }
  else {
    for (let i = 0; i < amount - childNum; i++) {
      let temp = document.createNode('div');
      temp.setAttribute('class', 'item');
      temp.setAttribute('tabindex', 0);
      temp.style.backGroundColor = `#${getRandomInt(100, 800)}`;

      root.appendChild(temp);
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}