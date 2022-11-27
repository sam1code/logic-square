function getCafes() {
  return fetch(
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json"
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

function getAdresses() {
  return fetch(
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json"
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

let cafes, places;

const query = document.getElementById("query");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    let res = await getCafes();
    cafes = res.cafes;
    res = await getAdresses();
    places = res.places;
    trigger();
  } catch (e) {
    console.log(e);
  }
});

function trigger() {
  const value = query.value;
  if (value.trim().length > 0) {
    const tmp = [];
    cafes.forEach((cafe) => {
      if (cafe.name.toLowerCase().includes(value.toLowerCase())) {
        places.forEach((place) => {
          if (cafe.location_id === place.id) {
            tmp.push({
              name: cafe.name,
              street_no: place.street_no,
              locality: place.locality,
              postal_code: place.postal_code,
              lat: place.lat,
              long: place.long,
            });
          }
        });
      }
    });
    // add the results to the table
    let myTable = document
      .getElementById("my-table")
      .getElementsByTagName("tbody")[0];
    myTable.innerHTML = "";
    tmp.forEach((item) => {
      let row = myTable.insertRow();
      let slno = row.insertCell(0);
      let cafeName = row.insertCell(1);
      let address = row.insertCell(2);
      let postal_code = row.insertCell(3);
      let lat = row.insertCell(4);
      let long = row.insertCell(5);
      slno.innerHTML = myTable.rows.length;
      cafeName.innerHTML = item.name;
      address.innerHTML = `${item.street_no}, ${item.locality}`;
      postal_code.innerHTML = item.postal_code;
      lat.innerHTML = item.lat;
      long.innerHTML = item.long;
    });
  } else {
    // clear the table
    let myTable = document
      .getElementById("my-table")
      .getElementsByTagName("tbody")[0];
    myTable.innerHTML = "";
    cafes.forEach((cafe) => {
      places.forEach((place) => {
        if (cafe.location_id === place.id) {
          let row = myTable.insertRow();
          let slno = row.insertCell(0);
          let cafeName = row.insertCell(1);
          let address = row.insertCell(2);
          let postal_code = row.insertCell(3);
          let lat = row.insertCell(4);
          let long = row.insertCell(5);
          slno.innerHTML = myTable.rows.length;
          cafeName.innerHTML = cafe.name;
          address.innerHTML = `${place.street_no}, ${place.locality}`;
          postal_code.innerHTML = place.postal_code;
          lat.innerHTML = place.lat;
          long.innerHTML = place.long;
        }
      });
    });
  }
}

query.onkeyup = trigger;