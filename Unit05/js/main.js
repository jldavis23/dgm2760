// Create an array with the four trees listed
let trees = ['oak', 'Pine', 'aspen', 'Bald Cypress'];
const errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#displayResults');

// Display the list of trees inisde the displayResults div
const listTrees = () => {
    let treeList = "";
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })

    displayResults.innerHTML = `${treeList} <span>${trees.length} trees to be planted</span>`;
}

listTrees(trees);

// Add a Redwood tree to the end
document.querySelector('#add_redwood').onclick = () => {
    trees.push("redwood");
    listTrees();
}

// Add a pear tree to the start
document.querySelector('#add_pear').onclick = () => {
    trees.unshift("pear");
    listTrees();
}

// Remove the first tree
document.querySelector("#remove_tree1").onclick = () => {
    if (trees.length > 0) {
        trees.shift();
        listTrees();
    } else {
        errorElement.textContent = "There are no trees to remove"
    }
}

// Remove the second tree
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        let i = 1
        trees.splice(i, 1);
        listTrees();
    } else {
        errorElement.textContent = "There is no second tree to remove"
    }
}

// Remove the last tree 
document.querySelector('#remove_tree3').onclick = () => {
    if (trees.length > 0) {
        trees.pop();
        listTrees();
    } else {
        errorElement.textContent = "There are no trees to remove"
    }
}

// Sort the trees alphabetically
document.querySelector('#sort_trees').onclick = () => {
    if (trees.length > 0) {
        trees.sort();
        listTrees();
    } else {
        errorElement.textContent = "There are no trees to sort"
    }
}

// Make all trees lowercase
document.querySelector('#lowercase_trees').onclick = () => {
    if (trees.length > 0) {
        let treeList = []
        trees.forEach(tree => {
        treeList.push(tree.toLowerCase())
        })
        trees = treeList;
        listTrees();
    } else {
        errorElement.textContent = "There are no trees"
    }

    // let treeList = []
    // trees.forEach(tree => {
    //     treeList.push(tree.toLowerCase())
    // })
    // trees = treeList;
    // listTrees();
}

// Display the name of tree 3
document.querySelector('#display_tree3').onclick = () => {
    if (trees.length > 2) {
        errorElement.textContent = `${trees[2]}`
    } else {
        errorElement.textContent = "There is no tree 3"
    }
}

// Display the name of tree 4
document.querySelector('#display_tree4').onclick = () => {
    if (trees.length > 3) {
        errorElement.textContent = `${trees[3]}`
    } else {
        errorElement.textContent = "There is no tree 4"
    }
}