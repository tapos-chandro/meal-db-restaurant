import { createContext, useState } from "react";


export const SearchContext = createContext();


const SearchProvider = ({children}) => {
    
    const [search, setSearch] = useState('');




    const searchInfo = {
        search,
        setSearch
    }


    return (
        <SearchContext.Provider value={searchInfo}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;