import { useState } from "react";

interface CardProps {
  date: string;
  title: string;
  description: string;
  author: string;
  comments: any;
  announcement?: boolean;
  promotion?: boolean;
  setComments: Function;
}
function Card(props: CardProps) {
  const {
    date,
    title,
    author,
    description,
    announcement,
    promotion,
    comments,
    setComments,
  } = props;

  const [newComment, setNewComment] = useState("");

  return (
    <div className="p-5 border border-[#E0E5ED] bg-white rounded-md">
      <p className="text-[#909CB1] text-sm mb-2.5">
        {date || "28/02/2022, 08:34:56 PM"}
      </p>
      <h3 className="font-bold">{title}</h3>
      <div className="max-w-min mb-5">
        <div
          className={`flex gap-2 px-3 py-1 rounded-md ${
            announcement ? "bg-[#F8E7DD]" : promotion ? "bg-[#EAE9EE]" : ""
          }  `}
        >
          {announcement ? (
            <i className="fa fa-bell text-sm text-[#D06700]"></i>
          ) : promotion ? (
            <i className="fa fa-star text-sm text-[#8D80A1]"></i>
          ) : null}
          <p
            className={`self-center ${
              announcement
                ? "text-[#D06700]"
                : promotion
                ? "text-[#8D80A1]"
                : ""
            } text-sm`}
          >
            {announcement ? "ANNOUNCEMENTS" : promotion ? "PROMOTIONS" : ""}
          </p>
        </div>
      </div>
      <p id="description" className="mb-3">
        {description}
      </p>
      <p id="author">{author}</p>
      <div className="flex gap-3 relative mt-2.5">
        <button>
          <i className="fa fa-smile-o text-2xl self-center"></i>
        </button>
        <input
          name="feedback"
          className="px-2.5 h-10 w-full border shadow-[5px_5px_5px_#F0F2F4] p-[5px] rounded-[5px] border-solid border-[#E3E8EF]"
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
          placeholder="Give us some feedback"
        />
        <button
          className="absolute top-2 right-4"
          onClick={() => {
            if (newComment.trim() !== "")
              setComments((prev: any) => [{ body: newComment }, ...prev]);
          }}
        >
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
      <div className="mt-5">
        {comments.length !== 0 ? <p>Comments:</p> : null}
        {comments.length !== 0
          ? comments.map((item: any) => {
              return (
                <div key={Math.random()} className="p-2.5 text-gray-500">
                  <p>{item.body}</p>
                  <p className="mt-1 w-[75%] h-full border border-gray-300 "></p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Card;