let myNL = document.createElement('div');

// add 5 child elems to myNL
for (let i = 0; i < 5; i++) {
    let child = document.createElement('div');
    child.innerText = Math.floor(Math.random()*100).toString();
    myNL.appendChild(child);
}

function getNodeArray(NodeList) {
    // make empty arr
    let nodeArray = [];

    // add each val to nodeArray
    for (let val of NodeList.values()) {
        nodeArray.push(val);
    }

    return nodeArray;
}

console.log(getNodeArray(myNL.childNodes));