// Samodzielne tworzenie Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const timestamp = Date.now();

    if (timestamp % 2 === 0) {
      resolve(timestamp);
    } else {
      reject(timestamp);
    }
  }, 1000);
});

// Obsługa promise
promise
  .then((response) => console.log("Success", response)) // pozytywny koniec ("resolve")
  .catch((err) => console.log("Error", err)) // błąd ("reject")
  .finally(() => console.log("Koniec")); // odpalane niezależnie od wyniku
