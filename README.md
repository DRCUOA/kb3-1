# kb3-1

This is a Node.js app that helps you learn to code. It features a 'topic' approach, where each topic has a number of related sub-topics and each sub-topic has any number of 'cards' that represent, together for each overall topic, the body of knowledge that it required to be known to be competent in that topic.

It is study aid, where you create the content yourself from your learning and other projects you do to aquire knowledge.  The app gives a structure to make 'cards' which is the lowest level of detail you can add.  

It's core features are:
0. The app intended for multiple users.
0.1 A user must have a unique username, they can choose it (any string < 15 chars is acceptable>)
1. View all topics on a single page and use word search or filter to highlight matching topics.
2. Create new topics
3. Drill down from topic, the body of knowledge you need, e.g. 'design-patterns', to sub-topic, e.g. 'Singleton Pattern' to finally view 'cards' which are the sub-sub-sub topics, in this example, all things you need to know to use the Singleton Pattern.
4. A template for cards is provided as a boostrap model which contents a html form.  Form feature requirements are:  
4.0.1  a radio button for the user to indicate if the card they want to create relates to an existing topic or a new topic.
4.0.2 a radio button for the user to inidcate if the card they want to create relates to an existing sub-topic or a new sub-topic.
4.1. the form will use the inputs in 4.0.1 and 4.0.2 as logic to format/structure the remainder of the inputs required as follows:
4.1.1  If 4.0.1 indicates a new topic, the form will revert to 'open' inputs that are not based on the existing data from the database and if it indicates an existing topic, user must be presented with a list of all existing topics in the database to choose one from.
4.1.2  The user must be able to select a topic and sub-topic, free or from existing entries under the topic in the database based on the prior selections and input form 4.0.1 and 4.0.2.
4.1.3 When the user has selected, topic AND sub-topic from
4.2 uses enters to link the card to as provide a source for the card information and hyperlink to external reference if appropriate for more information.

## Technologies Used

- Node.js
- SQLite3
- Handlebars
- Bootstrap
- JavaScript/jQuery

## Getting Started

1. Clone the repository: `git clone # My App

This is a Node.js app that helps you learn to code. It features a 'topic' approach, where each topic has a number of related sub-topics and each sub-topic has any number of 'cards' that represent, together for each overall topic, the body of knowledge that it required to be known to be competent in that topic.

## Technologies Used

- Node.js
- SQLite3
- Handlebars
- Bootstrap
- JavaScript/jQuery

## Getting Started

1. Clone the repository: `git clone https://github.com/DRCUOA/kb3-1.git`
2. Install the dependencies: `npm install`
3. Start the app: `npm start`

## Testing

To run the test suite, run the following command:
my-app/
├── .gitignore                              # This file lists patterns for files and directories that should be ignored by Git.
├── package.json                            # This file stores metadata about your Node.js project, such as the dependencies that your app needs to run.
├── Procfile                                # This file is used by Heroku to run your app. It specifies the command that should be run to start the app.
├── README.md                               # This file is a markdown file that describes your project.
├── app.js                                  # This is the main file for your Node.js app. It sets up the app and defines the routes.
├── bin/
│   └── www                                # This file is a script that starts the app.
├── config/                                 # This directory stores configuration files for your app, such as the files that define your environment variables.
│   ├── env/                                # This directory stores the files that define your environment variables.
│   └── config.js                           # This file exports the configuration details for your app.
├── controllers/                            # This directory stores the controllers for your app.
│   ├── topics.js                           # This file defines the logic for handling the routes related to topics.
│   └── cards.js                            # This file defines the logic for handling the routes related to cards.
├── models/                                 # This directory stores the models for your app.
│   ├── topic.js                            # This file defines the schema for the topics table in the database.
│   └── card.js                             # This file defines the schema for the cards table in the database.
├── public/                                 # This directory stores static assets such as images, JavaScript files, and CSS stylesheets.
│   ├── images/                             # This directory stores any images that are used in the app, such as logos or icons.
│   ├── javascripts/                        # This directory stores any JavaScript files that are used in the app, such as third-party libraries or custom scripts.
│   └── stylesheets/                        # This directory stores any CSS stylesheets that are used in the app, such as Bootstrap or custom styles.
│       └── style.css                       # This file stores the custom styles for the app.
├── routes/                                 # This directory stores the route handlers for your app.
│   ├── index.js                            # This file defines the routes for the homepage of the app.
│   └── users.js                            # This file defines the routes for user-related functionality in the app.
├── test/                                   # This directory stores the test files for your app.
│   ├── topics.test.js                      # This file defines the test cases for the topics functionality in the app.
│   └── cards.test.js                       # This file defines the test cases for the cards functionality in the app.
└── views/                                  # This directory stores the Handlebars templates for your app.
    ├── topics/                         # This directory stores the templates for the topics functionality in the app.
    │   ├── index.hbs                   # This template displays a list of topics.
    │   ├── new.hbs                     # This template displays a form for creating a new topic.
    │   └── show.hbs                    # This template displays a single topic and its associated cards.
    ├── cards/                          # This directory stores the templates for the cards functionality in the app.
        │   ├── index.hbs                   # This template displays a list of cards for a specific topic.
        │   ├── new.hbs                     # This template displays a form for creating a new card.
        │   └── show.hbs                    # This template displays a single card.
        ├── layout.hbs                      # This template defines the layout for the app, such as the header and footer.
        ├── error.hbs                       # This template displays an error message if there is an issue with the app.
        └── index.hbs                       # This template displays the homepage of the app.
