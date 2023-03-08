import React, { useState } from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import { apiGet } from '../misc/config';



function Home() {
    // the state for the input on a  search bar 
    const [input, setInput] = useState(' ');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

     const isShowsSearch = searchOption === 'shows';


   

    function onSearch() {
        // we need both actor and shows result so we just searchoption we get the what we want to show
        apiGet(`/search/${searchOption}?q='${input}`)
            .then(result => {
                setResults(result);
            });
    }

    function onInputChange(ev) {
        setInput(ev.target.value);
    }

    function onKeyDown(ev) {
        if (ev.keyCode === 13) {
            onSearch();
        }
    }

    function onRadioChange(ev) {
        setSearchOption(ev.target.value);
    }

    function renderResults() {
        if (results && results.length === 0) {
            return <div>No results</div>;
        }
        if (results && results.length > 0) {
            return results[0].show ? results.map(item => (
                <div key={item.show.id}>{item.show.name}</div>
            )) : results.map(item => (
                <div key={item.id}>{item.show.name}</div>
            ));


        }
        return null;
    }




    return (
        <MainPageLayout>
            <input type="text"
                placeholder='Search for movie or actor'
                onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
            <div>
                <label htmlFor='shows-search'>
                    Shows
                    <input id="shows-search"
                        type='radio'
                        checked={isShowsSearch}
                        value="shows"
                        onChange={onRadioChange} />
                </label>

                <label htmlFor='actor-search'>
                    Actors
                    <input id="actor-search"
                        type='radio'
                        value="people"
                        checked={!isShowsSearch}
                        onChange={onRadioChange} />
                </label>
            </div>


            <button type='button' onClick={onSearch}>Search
            </button>

            {renderResults()}
        </MainPageLayout>
    );
}

export default Home;