# React Context API using TypeScript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Sample application to demonstrate Context api using TypeScript. Code can be found in these branches

  - Initial set up code **Master branch**
  - Class based example **class_based_context**
  - Function based example **function_based_context**

# Why Context API
**According to documentation**
>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
# React.createContext

We can create Context by using below code
```sh
const MyContext = React.createContext(defaultValue);
```
In the example we have two context
  -  ThemeContext 
  -  TeamContext
  
A class based componet can have only one context. If more than one context is required we have to use **context.consumer**
```sh
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```
# Context.Provider
According to documentation 
>Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
```sh
<TeamContext.Provider value={{...this.state,changeTeam:this.changeTeam}}>
    {this.props.children}
</TeamContext.Provider>
```            
            
In our example NavBar requires both ThemeContext and TeamContext. To handle this we have created **High order component** in TeamContext

```sh
export const withTeam = (Component:any) => (props:any) => (
    <TeamContext.Consumer>
      {(value) => <Component teamContext={value} {...props} />}
    </TeamContext.Consumer>
  );
```

This makes using Context complicated if we require two context in single api. To make it simple the best option is to go for **functional based component with hooks approach** which can be found in **function_based_context** branch.

# Advantages functional based component with hooks
  - Reduces the number of lines
  - A simple useContext hooks will allow you to have multiple context within component
  - Higher order components can be avoided

Ex: In Navrbar functional component we can simply use multiple context by using
```sh
const {isDarkMode, toggleTheme} = useContext(ThemeContext);
const {team} = useContext(TeamContext);
```

I Personally prefer using Functional component instead of Class based component for its simplicity. Again its up to you requirement.
