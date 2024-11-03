export async function theFetch(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) { 
    
  }
}