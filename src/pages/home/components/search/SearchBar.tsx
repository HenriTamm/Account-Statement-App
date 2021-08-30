interface SearchBarProps {
  filterText: string;
  handleFilterTextChange: (filterText: string) => void;
}

export const SearchBar = ({ filterText, handleFilterTextChange }: SearchBarProps) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => handleFilterTextChange(e.target.value)}
      />
    </form>
  );
};
