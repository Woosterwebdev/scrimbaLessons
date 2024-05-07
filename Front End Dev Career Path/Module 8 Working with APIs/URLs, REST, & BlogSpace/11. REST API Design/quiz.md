1. What does it mean for the server to be "Stateless"?
   The server does not retain requests after a response is issued.

- In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:

  2. Retrieve a list of all the bikes that are sold?
     /bikes
     GET
  3. Retrieve detailed information about the bike with an ID of 42?
     /bikes/42
     GET
  4. Update the price of the bike with an ID of 21?
     /bikes/21
     PUT
  5. Add a new bike to the list of bikes being sold?
     /bikes
     POST
  6. Remove the bike with an ID of 56 from the list of bikes?
     /bikes/56
     DELETE
