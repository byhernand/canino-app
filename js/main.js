const URL_API = 'https://api.thedogapi.com/v1/images/search?limit=3';

async function reload() {
  try {
    const response = await fetch(URL_API);
    const data = await response.json();
    const images = document.querySelectorAll('#images img');

    images[0].src = data[0].url;
    images[1].src = data[1].url;
    images[2].src = data[2].url;
  } catch(err) {
    console.log('Error: ' + err);
  }
}

reload();