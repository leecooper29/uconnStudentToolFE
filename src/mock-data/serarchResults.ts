import {use} from 'react'
import { fetchData } from './data.js';

export default function SearchResults({{query}}){
    if(query === ''){
        return null;
    }
    const results = use(fetchData(`search?q=${query}`));
    if (results.length === 0){
        return <p>not matches for <i>"{query}"</i></p>
    }
    
    return(
        <ul >
        // x.map(x=> { <li key={x.id}>{x.data}, {x.data}</li>})
        </ul>
    )

}