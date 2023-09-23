// Define the props interface for the Button component
interface ButtonProps {
  name: string; // The text displayed on the button
  onClick?: Function; // Optional onClick function
  onSubmit?: Function; // Optional onSubmit function
}

// Define the Button component
function Button(props: ButtonProps) {
  const { name, onClick, onSubmit } = props; // Destructure props

  return (
    <button
      className="rounded-md bg-[#3C88F7] px-3 h-10 text-white self-center"
      onClick={() => (onClick ? onClick() : {})} // Execute onClick function if provided
      onSubmit={() => (onSubmit ? onSubmit() : {})} // Execute onSubmit function if provided
    >
      {name} {/* Display the button text */}
    </button>
  );
}

export default Button;
