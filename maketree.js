const treeContainer = document.getElementById('dynamic-directory-structure');

// Load the JSON file
fetch('./structure_draft01.json')
  .then(response => response.json())
  .then(data => {
    // Create the root node
    const rootNode = document.createElement('ul');

    // Recursively create the tree structure
    function createTree(node, data) {
      // Create the list item for the node
      const li = document.createElement('li');

      // Add the appropriate icon
      if (data.type === 'directory') {
        li.innerHTML = `<img src="./icons/directory.png" alt="Directory icon" /> ${data.name}`;
      } else {
        li.innerHTML = `<img src="./icons/file.png" alt="File icon" /> ${data.name}`;
      }

      // If the node has children, recursively create the tree structure for each child
      if (data.children) {
        const childContainer = document.createElement('ul');
        data.children.forEach(child => createTree(childContainer, child));
        li.appendChild(childContainer);

        // Add a click event listener to the list item to toggle the visibility of the child container
        li.addEventListener('click', () => {
          childContainer.classList.toggle('hidden');
        });
      }

      // Add the list item to the parent node
      node.appendChild(li);
    }

    // Create the tree structure for the root node
    createTree(rootNode, data);

    // Add the root node to the tree container
    treeContainer.appendChild(rootNode);
  });
