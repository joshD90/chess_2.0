# chess_2.0

## Overview
An Typescript chess game that can be played in single player mode or in an online setting.  This project does not use any frameworks and focusses on vanilla js with an express backend.  The online portion of the game is handled through Socket.io however the chess logic is handled client side.

## Motivation
I had previously created a project that utilized React and Socket.io however I found that the code was very messy and not correctly modularized.  When I came back to it to fix some of the numerous bugs that was plagueing the site I found it was impossible to make my way through the spaghetti code.  I was recently picking up Typescript and figured that the type checking would really help in helping me navigate my way through the code.  I also realized that due to most of the changes coming from HTML5 canvas or JS code that did not paint to the DOM that having a framework which contained a Virtual DOM and component based structure did not add any additions to either performance or simplicity.  I wanted a chance to write cleaner code for some of the bigger projects that I had as yet undertaken and so redid the app.  I was also learning OOP and so wanted to incorporate classes into the work to condense some of the logic associated with pieces.

---

## Internal Workings
### Drawing
The draw functionality is built from the board up.  A grid is set up with 64 squares and the central points of each grid square is calculated.  The draw function draws from the board up based on these centralized grid squares with the offset determined by the board with.  The squares are drawn, then the pieces, then the piece that is being moved is drawn based on the mouse position.  Resizing can take place due to the fact that everything is based off the grid so the grid just needs to be recalculated with each redrawing.

### Legal Moves
When a player picks up their piece we calculate all the legal moves available to it.  At the core of of this process is a recursive function that will check the next square in a particular direction and feed back whether it is occupied by it's own piece or an opponent's piece or empty.  If empty and still within the piece's moving distance and on the board the function will continue.
Once all directions iterated through in this manner legal moves have been ascertained.  Other special use cases are implemented for en passante and castling however knight moves, which I believed would be tricky, were easy to implement through all the 8 directions being calculated and having a travel distance of 1.  Double pawn moves for first pawn move was also fairly straightforward as well, just having check whether the piece has moved before and giving the pawn a travel distance of 1 or 2 accordingly.

### Check / checkmate
Check and checkmate did not introduce any strong novelties to the code however the numerous layers of iterative functions were very tricky to keep track of while coding.  When checking to see whether a move is legal, we must calculate all the legal moves for each of the opponents pieces to see whether our move would potentially land us in check.  We need to be able to create a hypothetical position and see whether any of the legal moves of our opponent is our king square.  To calculate checkmate there is another iteration on top of this, where if our king is in check then we need to run through every iteration of every legal piece move to see whether any of those moves would result in a position where our king was not in check, if there are no such positions then it is game over.

### En-passante
When any pawn moves forwards two squares on it's first move it enters into en-passante mode which is passed over to the other player where they can base their legal moves on the hypothetical position where the pawn occupies the square behind it.

## Serverside Logic
### Joining a game
When a player joins they are given the opportunity to select a game time and enter their username.  This gets sent to the server and it will check all available rooms that match the specifications.  If there are no available rooms the server will create a new socket room which can be joined by another player joining the server.

### Passing game details
Win conditions are calculated on the side of the player who takes the turn and these win conditions are sent over to the other player along with the updated piece position format.

### Timing
As timers may not necessarily line up on the clocks of both players computers it was necessary to have an internal tick event emitted to all socket rooms from the server to keep time consistency.

---

## Getting Started
### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** You will need Node.js installed on your machine. If you haven't installed it yet, you can download it from the [official Node.js website](https://nodejs.org/). Follow the installation instructions for your specific operating system.

- **npm (Node Package Manager):** npm usually comes bundled with Node.js. After installing Node.js, you can verify if npm is installed by running:

  ```bash
  npm -v

- Nodemon package was used to develop this app to avoid the need to working out of a dist folder.
    `npm i -g nodemon`

### Clone Repo
`git clone https://github.com/joshD90/chess_2.0.git`

### Install Packages
`cd chess_2.0.git/client`

`npm i`

`cd ../server`

`npm i`

### Getting up and Running
Go to Root Directory of Project

`cd server`
`nodemon server.ts`

Open a new terminal window at the root directory of Project
`cd client`
`npm run dev`

Go to preferred browser and go to http://localhost:5173
Open a second tab at http://localhost:5173 if you wish to play simulated multiplayer.

Or even better - why not go to [Live Chess Website](https://chess2.joshuadanceywebdev.ie/) and invite a friend to play.









