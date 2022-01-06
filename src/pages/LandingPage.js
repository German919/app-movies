import React from 'react'
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { useQuery } from '../hooks/useQuery';
import {useDebounce} from "../hooks/useDebounce";

export const LandingPage = () => {

    const search = useQuery().get("search");

    const debouncedValue = useDebounce(search, 400);
    
    return (
        <div>
            <Search />
            <Movies search={debouncedValue} />
        </div>
    )
}
