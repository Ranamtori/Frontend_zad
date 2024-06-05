// Samodzielne tworzenie Promise
const promise = new Promise((resolve, reject) => {
  const timestamp = Date.now();
  if (timestamp % 2 === 0) {
    resolve(timestamp);
  } else {
    reject(timestamp);
  }
});

async function fetchData() {
  setTimeout(async () => {
    try {
      const timestamp = await promise;
      console.log(timestamp);
    } catch (err) {
      console.log("Error", err);
    } finally {
      console.log("Koniec");
    }
  }, 1000);
}
fetchData();

// Obsługa promise
// promise
//   .then((response) => console.log("Success", response)) // pozytywny koniec ("resolve")
//   .catch((err) => console.log("Error", err)) // błąd ("reject")
//   .finally(() => console.log("Koniec")); // odpalane niezależnie od wyniku
