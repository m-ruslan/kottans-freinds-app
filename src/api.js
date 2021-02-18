const getData = (url) =>
  fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }

    throw new Error(res.statusText);
  });

export const fetchSeveralUsers = (url, qOfUsers) =>
  getData(url + qOfUsers).then(({ results }) => results);
