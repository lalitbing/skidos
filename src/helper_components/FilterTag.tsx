// Define the props interface for the FilterTag component
interface TagProps {
  name: string; // The name of the tag
  selected: boolean; // Whether the tag is selected or not
  setFeedTag: Function; // A function to set the selected feed tag
}

// Define the FilterTag component
function FilterTag(props: TagProps) {
  return (
    <div
      className={`flex p-2.5 ${props.selected ? "bg-gray-200" : ""} rounded-md`}
      role="button"
      onClick={(e) => {
        // When the tag is clicked, call the setFeedTag function with the tag's name
        props.setFeedTag(e.currentTarget.textContent);
      }}
    >
      <div
        className={`h-auto w-2 ${
          // Apply different background colors based on the tag name
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

// Export the FilterTag component
export default FilterTag;
