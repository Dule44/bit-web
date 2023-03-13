
import React, { useEffect, useState } from "react";
import { fetchId } from "../../services/fetchID";
import { fetchNews } from "../../services/fetchNews";
import { Post } from "../Post/Post";



export const ListOfNews = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchId().then((data) => {
      const ids = data.slice(0, 10);
      const reqs = ids.map((id) => fetchNews(id));
      Promise.all(reqs).then((data) => {
        setStories(data);
      });
    });
  }, []);

  return (
    <div>
      {console.log(stories)}
      {stories.map((story, i) => (
        <Post
          number={i + 1}
          title={story.title}
          points={story.score}
          author={story.by}
          time={story.time}
          comments={story.descendants}
        />
      ))}
    </div>
  );
};




