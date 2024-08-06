# React full course

- source from freecodecamp

[youtube](https://www.youtube.com/watch?v=2-crBg6wpp0&list=PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E&index=11)

### What is react?

- React is a javascript library which is full of components

- react has speed independency reusiability and more

## Start

- to start use the command

```cmd
 npm create vite@latest
```

- now type the project name
- select the framework
- select the script
- now change the directory
- now type ` npm install`
- ` npm run dev`
  now react will be executed

#### Setting up

- go to index.html and remove the icon link tag
- delete the vite.svg in public folder
- clear the content in app.jsx index.css app.css and also clear the import in app.jsx

**Now your react is ready to be developed**

##### React components

- react components is of two types

  1. class-based components
  2. functional components

1. **Class-based components**
   ```javascript
   import React, { components } from "react";
   class Example extends Component {
     render() {
       return <div> Hello </div>;
     }
   }
   ```
   - class based components are react history
   - They are not used any more
   - No need to worry about this type.

<br/>

2. **Functional component**

   ```javascript
   import React from "react";
   const example = () => {
     return <div> Hello </div>;
   };
   ```

   - This is stored in jsx file
   - The html in this type is not a html but called jsx

## Now time to code

- React is same you have to type all the html codes inside of a function which will be reflected as a component

- You can use all the expression inside a {}
- And also use ternery operator inside a {} and asign a value

**Adjacent jsx element must be wrapped inside a closing tag**

- eg
  ```javascript
  <>
    <div>Hello</div>
  </>
  ```
  - here a div element is enclosed by a empty fragment <></>

### Creating new component

```javascript
const Person = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
};
```

- now the above person is called a component now you can just add this component in your app component or main like:

```javascript
function App() {
  return (
    <>
      <div>hello world</div>
      <person />
    </>
  );
}
```

now the code <person/> will import the component called person in app fucntion

**Note : component name must always start with capital letter**

## Props

<br/>

- To use props

```javascript
function App() {
  return (
    <>
      <div>hello world</div>
      <person h1="Hello" h2="World" />
    </>
  );
}

const Person = (props) => {
  return (
    <div>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
    </div>
  );
};
```

- so this how prosps are used it is like parameters and arguments passed via components

<br/>

## Use State

- To use useState
- we have to import first using

```javascript
import { useSate } from "react";
```

- now you can use state in your component
- state is used when a variable change according to time or chage it dynamically

```javascript
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  );
}
```

- This is how we use useState

## useEffects

- same like useState you have to import useEffect

```javascript
import { useEffect } from "react";
```

- The Effect Hook lets you perform side effects in function components
- Use effect will generall always get executed while refreshing the page
- by using dependency we can say when a state change the effect will be executed if the depndency arr is empty the effect will only be executed in the beginning

  **Never change the state manuall always use setCount like function to change the state**

-Eg:

```javascript
function App() {
  const [counter, setCounter] = useState(0);

  // The first parameter can be a function and the second should be a dependecy

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  );
}
```

<br/>

# creating a movie application

- using a async will indicate that it will take some time

- we gonna call api using useEffect
