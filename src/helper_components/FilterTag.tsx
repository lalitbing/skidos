interface TagProps {
  name: string;
  selected: boolean;
  setFeedTag: Function;
}

function FilterTag(props: TagProps) {
  return (
    <div
      className={`flex p-2.5 ${props.selected ? "bg-gray-200" : ""} rounded-md`}
      role="button"
      onClick={(e) => {
        props.setFeedTag(e.currentTarget.textContent);
      }}
    >
      <div
        className={`h-auto w-2 ${
          props.name === "All"
            ? "bg-gray-500"
            : props.name === "Promotions"
            ? "bg-[#EAE9EE]"
            : props.name === "Announcements"
            ? "bg-[#F8E7DD]"
            : ""
        } rounded-md mr-2`}
      ></div>
      <p className="min-h-[30px]">{props.name}</p>
    </div>
  );
}

export default FilterTag;
