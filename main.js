
const jsonData = 
{
  "name": "root",
  "type": "directory",
  "contents": [
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
}

// Recursive function to generate the tree view
function generateTree(node, parentElement) {
  // Create a list item for the current node
  const li = document.createElement("li");
  li.innerText = node.name;

  // Add a class to style the node differently based on its type
  if (node.type === "directory") {
    li.classList.add("directory");
  } else {
    li.classList.add("file");
  }

  // If the node has children, create a nested unordered list and
  // recursively generate the tree view for each child
  if (node.contents && node.contents.length > 0) {
    const ul = document.createElement("ul");
    ul.style.display = "none";
    node.contents.forEach(childNode => {
      generateTree(childNode, ul);
    });
    li.appendChild(ul);
  }

  // Append the current node to the parent element
  parentElement.appendChild(li);
}

// Get the root node of the tree
const rootNode = {
  name: "root",
  type: "directory",
  contents: jsonData.contents
};

// Get the tree element
const treeElement = document.getElementById("tree");

// Generate the tree view
generateTree(rootNode, treeElement);

// Add a click handler to toggle the expansion/collapse of directories
treeElement.addEventListener("click", e => {
  if (e.target.classList.contains("directory")) {
    e.target.classList.toggle("collapsed");
    const ul = e.target.querySelector("ul");
    ul.style.display = ul.style.display === "none" ? "block" : "none";
  }
});
