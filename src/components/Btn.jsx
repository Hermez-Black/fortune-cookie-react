
export default function Btn({
  text,
  handler,
  colorBackground,
}) {
  return (
    <button
      onClick={handler}
      className="btn-next"
      style={{backgroundColor: colorBackground}}>
        {text}
    </button>
  );
}