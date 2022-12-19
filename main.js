const treeContainer = document.getElementById('dynamic-directory-structure');

const jsonData =  [
  {
    "name": ".gitignore",
    "type": "file"
  },
  {
    "name": "package.json",
    "type": "file"
  },
  {
    "name": "Procfile",
    "type": "file"
  },
  {
    "name": "README.md",
    "type": "file"
  },
  {
    "name": "app.js",
    "type": "file"
  },
  {
    "name": "bin",
    "type": "directory",
    "contents": [
      {
        "name": "www",
        "type": "file"
      }
    ]
  },
  {
    "name": "config",
    "type": "directory",
    "contents": [
      {
        "name": "env",
        "type": "directory",
        "contents": []
      },
      {
        "name": "config.js",
        "type": "file"
      }
    ]
  },
  {
    "name": "controllers",
    "type": "directory",
    "contents": [
      {
        "name": "topics.js",
        "type": "file"
      },
      {
        "name": "cards.js",
        "type": "file"
      }
    ]
  },
  {
    "name": "models",
    "type": "directory",
    "contents": [
      {
        "name": "topic.js",
        "type": "file"
      },
      {
        "name": "card.js",
        "type": "file"
      }
    ]
  },
  {
    "name": "public",
    "type": "directory",
    "contents": [
      {
        "name": "images",
        "type": "directory",
        "contents": []
      },
      {
        "name": "javascripts",
        "type": "directory",
        "contents": []
      },
      {
        "name": "stylesheets",
        "type": "directory",
        "contents": [
          {
            "name": "style.css",
            "type": "file"
          }
        ]
      }
    ]
  },
  {
    "name": "routes",
    "type": "directory",
    "contents": [
      {
        "name": "index.js",
        "type": "file"
      },
      {
        "name": "users.js",
        "type": "file"
      }
    ]
  },
  {
    "name": "test",
    "type": "directory",
    "contents": [
      {
        "name": "topics.test.js",
        "type": "file"
      },
      {
        "name": "cards.test.js",
        "type": "file"
      }
    ]
  },
  {
    "name": "views",
    "type": "directory",
    "contents": [
      {
        "name": "topics",
        "type": "directory",
        "contents": [
          {
            "name": "index.hbs",
            "type": "file"
          },
          {
            "name": "new.hbs",
            "type": "file"
          },
          {
            "name": "show.hbs",
            "type": "file"
          }
        ]
      },
      {
        "name": "cards",
        "type": "directory",
        "contents": [
          {
            "name": "index.hbs",
            "type": "file"
          },
          {
            "name": "new.hbs",
            "type": "file"
          },
          {
            "name": "show.hbs",
            "type": "file"
          }
        ]
      },
      {
        "name": "error.hbs",
        "type": "file"
      },
      {
        "name": "layout.hbs",
        "type": "file"
      },
      {
        "name": "index.hbs",
        "type": "file"
      }
    ]
  }
  ]
  
// Recursively create the tree structure from the JSON data
function createTree(parent, data) {
  // Create an unordered list for the current level of the tree
  const list = document.createElement('ul');
  parent.appendChild(list);

  // Loop through the data for the current level of the tree
  for (let i = 0; i < data.length; i++) {
    // Create a list item for the current node
    const item = document.createElement('li');
    list.appendChild(item);

    // Set the class name for the list item based on the type of node (folder or file)
    item.className = data[i].type;

    // Set the initial state of the node as collapsed (if it is a folder) or expanded (if it is a file)
    if (data[i].type === 'folder') {
      item.className += ' collapsed';
    } else {
      item.className += ' expanded';
    }

    // Add a click event handler to the list item to toggle the collapsed/expanded state when clicked
    item.addEventListener('click', function() {
      if (this.classList.contains('collapsed')) {
        this.classList.remove('collapsed');
        this.classList.add('expanded');
      } else {
        this.classList.remove('expanded');
        this.classList.add('collapsed');
      }
    });

    // Set the text content of the list item to the name of the node
    item.textContent = data[i].name;

    // If the current node has children, recursively create the tree structure for the children
    if (data[i].contents) {
      createTree(item, data[i].contents);
    }
  }
}

// Create the tree structure from the JSON data
createTree(treeContainer, jsonData);


// const treeData = function formatDirectoryStructure(jsonData, indent = 0) {
//   let result = "";
//   for (const object of jsonData) {
//     result += " ".repeat(indent) + object.name + "\n";
//     if (object.type === "directory") {
//       result += formatDirectoryStructure(object.contents, indent + 2);
//     }
//   }
  
//   return result;
// }

// const treeDataAsString = treeData(jsonData)

// // Create the root node
// const rootNode = document.createElement('ul');

// // Recursively create the tree structure
// function createTree(node, data) {
//   // Create the list item for the node
//   const li = document.createElement('li');

//   // Add the appropriate icon
//   if (data.type === 'directory') {
//     li.innerHTML = `<img src="./folder-icon.png" alt="Directory icon" /> ${data.name}`;
//   } else {
//     li.innerHTML = `<img src="./file-icon.png" alt="File icon" /> ${data.name}`;
//   }

//   // If the node has children, recursively create the tree structure for each child
//   if (data.children) {
//     const childContainer = document.createElement('ul');
//     data.children.forEach(child => createTree(childContainer, child));
//     li.appendChild(childContainer);

//     // Add a click event listener to the list item to toggle the visibility of the child container
//     li.addEventListener('click', () => {
//       childContainer.classList.toggle('hidden');
//     });
//   }

//   // Add the list item to the parent node
//   node.appendChild(li);
// }

// // Create the tree structure for the root node
// createTree(rootNode, treeDataAsString);

// // Add the root node to the tree container
// treeContainer.appendChild(rootNode);


