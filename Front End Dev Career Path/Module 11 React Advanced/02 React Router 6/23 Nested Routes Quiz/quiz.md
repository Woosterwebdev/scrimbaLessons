1. What is the primary reason to use a nested route?

When there is shared UI components between a parent and its children.

/_ Instructors response _/

Whenever we have some shared UI between routes in our app.

2. What is a "Layout Route"?

Layout Route is a parent component that can share UI elements with its children.

/_ Instructors response _/

It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.

3. What does the <Outlet /> component do? When do you use it?

The Outlet Component renders the child of the parent when the path matches.

/_ Instructors response _/

We use it anytime we have a parent Route that's wrapping
children routes. It renders the matching child route's
`element` prop given in its route definition

4. What is an "Index Route"?

Index Route has a child render when it's parent renders.

/_ Instructors response _/

It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.
