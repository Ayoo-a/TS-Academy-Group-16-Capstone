const API_URL = 'https://anurella.github.io/json/planets.json';

/**
 * this Fetches the planet list from the external GitHub API provided.
 * Returns an array of planet objects.
 */
export const getPlanets = async () => {
  try {
    const response = await fetch(API_URL);
    
    // Check if the response is successful (status 200) that means it could reach the api successfully 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Since the API is "Direct", we return the data as-is. that means it is not wrapped, it is direct and section by section not wrapped 
    // If the API ever changes to a "Wrapped" version (data.planets), by this i mean if it ever changes to something wrapped in the future. the '||' simply means [or] that means if this no work give me this
    // the '||'  logic below handles both cases safely. it will just return data
    return data.planets || data;

  } catch (error) {
    // If the internet is down or the link breaks, 
    //I return an empty list so the .map() in my JSX doesn't crash. so .map is just like telling react to take an array and wrap it into a <li> something 
    console.error("Error Fetching Planet:", error);
    return [];
  }
};
export const submitContactForm = async (formData) => {
  const endpoint = "https://whitebricks.com/tsacademy.php";
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Submission failed');
    
    return true; // Return true if it worked
  } catch (error) {
    console.error('Submission Error:', error);
    return false; // Return false if it failed
  }
};