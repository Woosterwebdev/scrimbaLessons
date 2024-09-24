Virtual DOM is a lightweight copy of the DOM used by React to update the DOM.

-Virtual DOM can't direct update HTML / real DOM directly updates and manipulates HTML

-Virtual DOM acts as a copy of the real DOM, which can be frequently updated without a page fresh / the real DOM completely gets completely rerender if updated

-Virtual DOM has more of a pattern than a specific technology / the real DOM is an oject based representation of an HTML document and is an interface for manipulating that object

-Virtual DOM is synced with real DOM with 'react-dom'

Key difference is DIFFING!

The virtual DOM looks at the real DOM between one state vs the next and indicates what needs to change.

The virtual DOM and shadow DOM are not the same thing. Shadow DOM is more browser speciic and used for styling.
