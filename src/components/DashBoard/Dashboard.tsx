import { useCallback, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Card from "./Card";
import axios from "axios";
import FilterTag from "../../helper_components/FilterTag";

function Dashboard() {
  // Define a list of authors
  const authors = ["Skidos Team", "Lalit", "Virat", "Shumaker", "Max", "Togo"];

  // Initialize state variables
  const [feed, setFeed] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [feedtag, setFeedTag] = useState("All");
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
    category: "",
  });

  // Function to handle input changes for new announcements
  const onInputChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewAnnouncement((prev) => ({ ...prev, [name]: value }));
  };

  function getCurrentFormattedDate(): string {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = String(currentDate.getFullYear());

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
  }

  // Fetch data from an API on component mount
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        let feedData = data.data;
        let newFeed = feedData.map((item: any, index: number) => {
          return {
            ...item,
            id: `card-${index + 1}`,
            announcement: index % 2 === 0,
            promotion: index % 2 !== 0,
            author: authors[Math.floor(Math.random() * authors.length)],
            comments: [],
            date: getCurrentFormattedDate(),
          };
        });
        setFeed(newFeed);
        setIsFetching(false);
      })
      .catch(() => {
        setIsFetching(false);
      });
  }, []);

  // Function to filter the current feed based on selected tags
  const returnCurrentFeed = useCallback(() => {
    if (feedtag === "Announcements") {
      let filteredFeed = feed.filter((item: any) => item.announcement);
      let newFeed = filteredFeed.map((item: any, index: number) => ({
        id: `card-${index + 2}`,
        ...item,
      }));
      return newFeed;
    }
    if (feedtag === "Promotions") {
      let filteredFeed = feed.filter((item: any) => item.promotion);
      let newFeed = filteredFeed.map((item: any, index: number) => ({
        id: `card-${index + 2}`,
        ...item,
      }));
      return newFeed;
    }
    return feed;
  }, [feed, feedtag]);

  return (
    <>
      <Navbar />
      <div className="screenHeight bg-[#F8FAFC] p-5 flex gap-3 w-full">
        <div className="flex flex-col gap-5">
          <div>
            <form className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                className="p-2.5 border border-gray-300 rounded-md"
                type="text"
                name="title"
                value={newAnnouncement.title}
                onChange={(e: any) => {
                  onInputChange(e);
                }}
                placeholder="Title"
              />
              <label htmlFor="description">Description</label>
              <textarea
                className="p-2.5 border border-gray-300 rounded-md "
                name="description"
                rows={4}
                cols={50}
                placeholder="Description"
                value={newAnnouncement.description}
                onChange={(e: any) => {
                  onInputChange(e);
                }}
              ></textarea>
              <label htmlFor="category">Category</label>
              <input
                className="p-2.5 border border-gray-300 rounded-md"
                type="text"
                name="category"
                value={newAnnouncement.category}
                onChange={(e: any) => {
                  onInputChange(e);
                }}
                placeholder="Category"
              />
            </form>
          </div>
          {isFetching ? (
            "Loading..."
          ) : feed.length === 0 ? (
            <div>Something went Wrong</div>
          ) : (
            returnCurrentFeed().map((item: any) => {
              return (
                <Card
                  index={item.id}
                  key={Math.random()}
                  title={item.title}
                  description={item.body}
                  author={item.author}
                  comments={item.comments}
                  announcement={item.announcement}
                  promotion={item.promotion}
                  feed={feed}
                  setFeed={setFeed}
                  date={item.date}
                />
              );
            })
          )}
        </div>
        <div className="w-[40%]">
          <button
            className="rounded-md bg-[#3C88F7] px-3 text-white self-center mb-5"
            onClick={() => {
              const { title, category, description } = newAnnouncement;
              const noEmptyField =
                title !== "" && description !== "" && category !== "";
              const rightCategory =
                category === "Promotions" || category === "Announcements";
              if (noEmptyField && rightCategory) {
                let feedData = feed.map((item: any, index: number) => {
                  return {
                    id: `card-${index + 2}`,
                    ...item,
                  };
                });
                feedData.unshift({
                  id: `card-0`,
                  title,
                  body: description,
                  announcement: category === "Announcements",
                  promotion: category === "Promotions",
                  date: getCurrentFormattedDate(),
                  comments: [],
                });
                setFeed(feedData);
                setNewAnnouncement({
                  title: "",
                  description: "",
                  category: "",
                });
              } else
                alert(
                  "Please check category it should only be Promotions or Announcements"
                );
            }}
          >
            Submit An Announcement
          </button>
          <div>
            <FilterTag
              name="All"
              selected={feedtag === "All"}
              setFeedTag={setFeedTag}
            />
            <FilterTag
              name="Promotions"
              selected={feedtag === "Promotions"}
              setFeedTag={setFeedTag}
            />
            <FilterTag
              name="Announcements"
              selected={feedtag === "Announcements"}
              setFeedTag={setFeedTag}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
