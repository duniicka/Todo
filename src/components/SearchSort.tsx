interface SearchSortProps {
    onSortChange: (order: 'newToOld' | 'oldToNew') => void;
    onStatusChange: (status: string) => void;
    onSearchChange: (text: string) => void;
  }
  
  const SearchSort = ({ onSortChange, onStatusChange, onSearchChange }: SearchSortProps) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value as 'newToOld' | 'oldToNew';
      onSortChange(value);
    };
  
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onStatusChange(e.target.value);
    };
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearchChange(e.target.value);
    };
  
    return (
      <>
        <div className="searchSort lg:px-16 px-4">
          <input
            className="search"
            type="text"
            placeholder="Search Todo"
            onChange={handleSearchChange}
          />
          <div className="sort">
            <select className="sortByDate" onChange={handleSortChange}>
              <option value="" disabled selected>Sort by Date</option>
              <option value="newToOld">New to Old</option>
              <option value="oldToNew">Old to New</option>
            </select>
            <select className="sortByCompleted" onChange={handleStatusChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </>
    );
  };
  
  export default SearchSort;
  