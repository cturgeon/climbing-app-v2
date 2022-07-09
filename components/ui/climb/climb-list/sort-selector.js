export default function SortSelector({ sortHandler }) {
  return (
    <>
      <button onClick={(event) => sortHandler()}>Click</button>
    </>
  );
}
