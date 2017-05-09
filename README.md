# wikipage-redux

Wiki in React/Redux

You will build a 90s-style in React/Redux! What a weird juxtaposition! Since this is a SPA (Single Page Application), So that the individual pages in the app are bookmarkable, you will use React Router (version 3.0.5) to make this happen.

The backend - at least the initial version - will be provided for you so you can focus on the frontend.

Step 0: Setup

Use create-react-app to generate a react application.
Install the modules you'll need :
redux
react-redux
react-router@3.0.5
redux-thunk
jquery
Create a HomePage component - make it say anything you want - it won't have data. It won't need a container, or actions or a reducer.
Setup a router configuration, mount the HomePage component to the root path: /. Import Router, Route, IndexRoute, Link, IndexLink, and hashHistory from react-router.
Create an AppLayout component that acts as the layout template for the application. Mount it to the root path: /. The HomePage component should now be mounted using the IndexRoute component under the AppLayout route.
Create a store for redux, as well a use ReactRedux.Provider to pass it to all container components in the app. You'll wrap the <Router> element inside of the ReactRedux.Provider element.
Test it and see that the home page displays.

Step 1: WikiPage Component

You'll now make a wiki page component.

Create a subdirectory within src called wiki-page (but you can call it poop).
Create the files:
WikiPage.js - this should contain the presentation and container components. Start off with a minimal placeholder component that displays some place holder text. Also create a minimal container component. Use export default to export the container, not the presentational component.
WikiPage.action.js - this should contain the action creators. For now, we don't need to put anything here yet.
WikiPage.reducer.js - this should contain the reducer. Create a reducer function in here that just returns the state. Setup the appropriate initial state.
Wire up the component: In your index.js file, import the WikiPage component, and the WikiPage reducer. Use Redux.combineReducers to combine the wiki page reducer as a part of a root reducer, even though there's only one sub-reducer for now.
Mount your WikiPage component to the routing definition in your index.js. You will use a route parameter :title to specify the title of the particular page that will load. The client-side URL for JavaScript, will look like #/page/JavaScript, where JavaScript will match the title parameter, for example.
Step 2: Backend Setup

You are provided an implementation of the wiki backend. You will read the source code of it's server.js to figure out what the API endpoints are. You'll also need to create a Postgresql database and create the table using the statement in schema.sql. Set up to run the backend code, and use Postman to test some of the APIs.

Step 3: Fetching a Wiki Page

You will now write code to fetch the content of a wiki page and display it on the screen.

Manually enter a wiki page into the database to use for testing.
Write an async action in WikiPage.actions.js - call it fetchPage - to make a request (using jQuery and Ajax) to the backend API to request for the page given a title. Make sure to export fetchPage. Once a response is received, it should dispatch a concrete action with type update-contents with the page content attached.
We need something to trigger the fetchPage action. The recommended place to put this code is in a component's componentDidMount. Call this.props.fetchPage, passing it the page title as an argument - you would get the page title from the params prop, which has been setup for you by React Router.
Test that the action update-contents has dispatch property when you load the page for a page for a particular client-side URL. Use Redux tools.
Update the reducer to
Add a content property to the state structure.
Update the content property in response to the update-contents action.
Check that the state has been changed correctly and contains the content that was fetched from the database.
Make sure the page content has been wired up in your container to pass it to the presentation component.
Render the page content on the page in the render method of your presentation component.
Toggle Edit mode

Next, to enable editing the page, we need to implement toggle between displaying a textarea element for editing the page content vs displaying the page content. To do this, we'll introduce a new state property editing. If editing is true, we should see a text input with the page content populated within it, otherwise, we should just see the page content.

Add a "Toggle Edit" button in your WikiPage component.
Write an action creator called toggleEdit for the toggle event.
Have the button dispatch the toggleEdit action. Test that the action is dispatched when the button is pressed using the Redux tools.
Update the reducer to change the value of editing in the state.
Make sure the editing property is passed on to the presentation component.
Edit your WikiPage component to display a textarea component if editing is true or just a paragraph if editing is false.
Link textarea value to state

To make the textarea actually work, we have to link its value with the content property in the state.

Bind the value of the text area to the content of the page, passed in as a prop.
Add an action creator called updateContent return an action type update-content, attaching the new content - passed in as a parameter.
Wire up the onChange property of the text area to dispatch the update-content action, passing to it the value from the event target - the input.
Test it.
Update the reducer to update the content in the state.
Test that the state is updating correctly.
Test that you can modify the value in the text area.
Edit page and save

To edit the page and save, you'll need to send an API request to the backend.

Create a "Save" button, displaying in edit mode only. Have it dispatch an updatePage function prop.
Create a new action creator, call it updatePage. It should send a PUT request to the API, sending the content for the page. This action creator function should take the title and the content of the page as parameters. When the data comes back, dispatch the update-content action with the content of the returning data (this is not really necessary, but ensures that the content really did save.)
Test that the Save button triggers the update-content action using the Redux tools.
While you are at it, also have the Save button trigger the toggleEdit action so the edit mode switchs back to view mode.
Wiki Linkify

By convention, any words in a wiki page that is capitalized and CamelCased, are automatically turned into links. I will provide you this function to do that:

function wikiLinkify(contents) {
  return contents.replace(/([A-Z][a-z]+){2,}/g, function(match) {
    return `${match}`;
  });
}
The above code uses regular expressions and will take the content of a page, and turn CamelCased words in to a elements - it works assuming your pages are rendered on the route /page/:title - modify the code if otherwise. Use it before setting the content on your page. Oh one more thing: you'll need to use the dangerouslySetInnerHTML property to set the HTML, otherwise it won't work:

let html = wikiLinkify(contents);
Test that CamelCased works generate links, and that you can navigate from one page to another by clicking on a link generated by them.

Make page content update when navigating from page to page

At this point, you'll notice that when you are navigating from link to link, the URL changes correctly, but the page content doesn't. You'll need to set up a componentWillReceiveProps hook to listen to a route parameter change. componentWillReceiveProps(newProps) will receive the new props as a parameter whenever the properties passed to the component changes, and you'll compare the page title within it to the one in this.props to see if it has changed. If it has changed - it means the user has navigated to a different page, and you'll need to fetch the content for the new page by calling the fetchPage function prop to trigger the corresponding action.
