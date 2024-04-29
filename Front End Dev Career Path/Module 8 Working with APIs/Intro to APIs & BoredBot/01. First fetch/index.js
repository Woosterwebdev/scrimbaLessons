/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
*/

async function dogImages() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await response.json();
    console.log(dog);
}