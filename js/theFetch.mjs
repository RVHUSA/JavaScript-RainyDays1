import loader from './loader.mjs'; 

export async function theFetch(url) {
  loader.show(); 
  try {
    const response = await fetch(url); //Retrieve data with fetch
    const json = await response.json(); // Convert the response to JSON
    return json;
  } catch (error) { // Catch and handle errors
    console.error("Error fetching data:", error);
    alert("An error occurred while retrieving data. Please try again later.");
  } finally {
    loader.hide(); 
  }
}

