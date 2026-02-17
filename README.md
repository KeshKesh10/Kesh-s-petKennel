Instructions

Fork this repository to your own GitHub account.

Setup: Open your terminal in the project folder and run npm install.

Coding Task:

State: In App.jsx (Class Component), initialize your state using the data from data.js.

Mapping: Use .map() to render at least two ChildComponent cards.

Events: Implement a method in the Parent to change a child's image/status. Pass this method to the Child via props.

Child Logic: Complete ChildComponent.jsx to display the props and trigger the parent's method on button click.

Why Vite?

We are using Vite instead of the deprecated Create React App.

Files: Ensure your components use the .jsx extension.

Speed: You'll notice the development server starts almost instantly.

How to Run

1. Install dependencies:
```
npm install
```

2. Start the dev server:
```
npm run dev
```

3. Open your browser and go to http://localhost:5173/

That's it! Click the buttons to feed your pets and watch them get happy.

Note: Vite defaults to port 5173. Check your terminal output for the local URL.
