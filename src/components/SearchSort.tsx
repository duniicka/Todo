const SearchSort = () => {
    return (
        <>
            <div className="searchSort lg:px-16 px-4">
                <input className="search" type="text" placeholder="Search Todo" />
                <div className="sort">
                    <select className="sortByDate" name="" id="">
                        <option value="" disabled selected>Sort by Date</option>
                        <option value="">New to Old</option>
                        <option value="">Old to New</option>
                    </select>
                    <select className="sortByCompleted" name="" id="">
                        <option value="" >All</option>
                        <option value="">Completed</option>
                        <option value="">Pending</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default SearchSort