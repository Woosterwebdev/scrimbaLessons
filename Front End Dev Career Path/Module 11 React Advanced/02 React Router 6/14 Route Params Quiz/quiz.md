1. What is a route/url parameter?
   it is an endpoint that you can use useParams to make your code more reusable.
   ie products/:id

   /_ instructors answer _/

   A portion of our route path that is a placeholder for what will eventually be the actual segment in the URL of the page.

---

2. Add a route parameter called `productId` to the Route path below:
   ✅
   <Route path="/products/:productId" element={<ProductDetail />} />

---

3. Add whatever you need to add for the component below to display
   the route parameter in the <h1>
   ✅
   import { useParams } from "react-router-dom"

   function ProductDetail() {
   const { productId } = useParams()
   return <h1>Product id is {productId}</h1>
   }
