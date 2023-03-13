
export const fetchId = () => {
    return fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(
      (response) => response.json()
    );
  };
  