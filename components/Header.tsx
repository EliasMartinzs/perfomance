interface Props {
  type: string;
  query: string;
  category: string;
}

export default function Header({ type, query, category }: Props) {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}" in {type}{" "}
        <span className="capitalize">{category}</span>
      </h1>
    );
  }
  if (category) {
    return <h1 className="heading3 self-start text-white-800">{category}</h1>;
  }

  if (query) {
    return <h1 className="heading3 self-start text-white-800">{query}</h1>;
  }

  return <div>Header</div>;
}
