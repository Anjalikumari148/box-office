/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import { apiGet } from '../misc/config';
import ShowGrid from '../Components/show/ShowGrid';
import ActorGrid from '../Components/actor/actorGrid';
import { SearchInput,RadioInputsWrapper,SearchButtonWrapper} from './HomeStyled';
import CustomRadioButton from '../Components/CustomRadioButton';





function Home() {
    // the state for the input on a  search bar 
    const [input, setInput] = useState(' ');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

     const isShowsSearch = searchOption === 'shows';


   

    function onSearch() {
        // we need both actor and shows result so we just searchoption we get the what we want to show
        apiGet(`/search/${searchOption}?q= ${input}`)
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
            return results[0].show ? <ShowGrid data ={results}/>
             :<ActorGrid data= {results}/>
        


        }
        return null;
    }

    return (
        <MainPageLayout>
            <SearchInput type="text"
                placeholder='Search for movie or actor'
                onChange={onInputChange}
                onKeyDown={onKeyDown} value={input} />

              



            <RadioInputsWrapper>
                <div>
                <CustomRadioButton
               label ="Shows"
               id="shows-search"
               checked={isShowsSearch}
               value="shows"
               onChange={onRadioChange}
               />
                </div>

                <div>

                <CustomRadioButton
               label =' Actors'
               id="actor-search"
               value="people"
               checked={!isShowsSearch}
               onChange={onRadioChange}
               />
                
                </div>
            </RadioInputsWrapper>

            <SearchButtonWrapper>
            <button type='button' onClick={onSearch}>Search
            </button>
            </SearchButtonWrapper>

            {renderResults()}
        </MainPageLayout>
    );
}

export default Home;