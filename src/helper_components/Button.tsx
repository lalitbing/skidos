interface ButtonProps {
  name: string;
  onClick?: Function;
  onSubmit?: Function;
}

function Button(props: ButtonProps) {
  const { name, onClick, onSubmit } = props;
  return (
    <button
      className="rounded-md bg-[#3C88F7] px-3 h-10 text-white self-center"
      onClick={() => (onClick ? onClick() : {})}
      onSubmit={() => (onSubmit ? onSubmit() : {})}
    >
      {name}
    </button>
  );
}

export default Button;
