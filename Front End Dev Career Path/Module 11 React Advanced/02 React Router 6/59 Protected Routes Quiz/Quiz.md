1. How did we change our route definitions in order to
   "protect" certain routes from an un-logged-in user?

   A layout element that conditionally rendered the Outlet is user was logged in or Navigated to login page.

   /_ Instructor answer _/

   Wrapped the routes we wanted to protect in a Layout route
   that contains logic to redirect someone if they're not
   logged in

2. What component can we use to automatically send someone
   to a different route in our app?

   Navigate with a to="" attribute

   /_ Instructor answer _/

   <Navigate to="/login" />

3. What component can we render if the user IS logged in?

   The Outlet

   /_ Instructor answer _/

   <Outlet />
