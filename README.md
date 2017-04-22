# Description

Two simple node applications, one for inserting random numbers and one for getting all documents from randoms.numbers collection.

# Prerequisites

Docker and Node need to be installed

```
brew install node
brew install docker
```

# How to run application

Start compose file
```
docker-compose up -d 
```

Go to app folder app/create or app/get and run 
Applications are not taking any parameters.

```
npm install
npm start
```

# Questions

1. How does npm know how to start application?

# Answers

1. Npm is looking for command in script property
```json
"scripts": {
    "start": "_command_"
}
```