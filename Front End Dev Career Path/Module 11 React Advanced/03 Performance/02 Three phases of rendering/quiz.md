We talk a lot about "rendering" in React, but oftentimes we lump together
the 3 phases of the rendering process. Understanding the distinction
between these phases can help us in determining a good strategy for
improving the performance of our React apps.

1. What are the 3 phases of the rendering process called in React?

1 Render
2 Reconciliation
3 Commit

2. What happens in the 1st phase?

Where the state changed, React will re-render the component and its children.

/_ Instructor's answer _/

React runs the code from the component that had the state change,
and all the descendent components of that component as well.

3. What happens in the 2nd phase?

React will compare the old and new components. Componnents with changes will be swapped out and components with no changes will be re-used.

/_ Instructor's answer _/

React compares the old render with the new render (in VDOM) using
its diffing algorithm to figure out what changes needs to be made
to the real DOM.

4. What happens in the 3rd phase?

The new branch will be committed to the DOM.

/_ Instructor's answer _/

The changes determined from the reconciliation phase are actually
committed (painted) to the real DOM, and the user sees the updates
on the page.
