import React, { useState } from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import { apiGet } from '../misc/config';

const Home = () => {
        const [input, setInput] = useState('');
        const [results, setResult] = useState(null);
        const [searchOption, setsearchOption] = usestate('shows')

        const isShowSearch = searchOption === 'shows';
        const OnSearch = ev => {
            //bcz we need both actor and shows result so we just searchoption we get the what we want to show
            apiGet(`/search/${searchOption}?q='${input}`)
                .then(result => {
                    setResult(result);
                });
        }

        const onInputChange = ev => {
            //we updated the value with targeted value we entered
            setInput(ev.target.value);
        }

        const onKeyDown = (ev) => {
            if (env.keyCode === 13)
                OnSearch();
        }
        const onRadioChange = (ev) => {
                setsearchOption(ev.target.value)
            }
            //conditional render
        const renderResult = (ev) => {
                if (results && results.length === 0) {
                    return <div > No result found < /div>
                }
                if (results && results.length > 0) {
                    return results[0].show ? results.map((item) =>
                            ( < div key = { item.show.id } > { item.show.name } < /div> )):
                                results.map((item) =>
                                    ( < div key = { item.person.id } > { item.show.name } < /div> ));}
                                        return null;

                                    }
                                    return ( < MainPageLayout >
                                        <
                                        input type = "text"
                                        placeholder = 'search something'
                                        onChange = { onInputChange }
                                        value = { input }
                                        onKeyDown = { onKeyDown }
                                        />  <
                                        button input = "button"
                                        onClick = { OnSearch } > Search < /button> <
                                        div >

                                        <
                                        label htmlFor = 'show-search' >
                                        Shows <
                                        input id = "show-search"
                                        type = "radio"
                                        value = "shows"
                                        check = { isShowSearch }
                                        onChange = { onRadioChange }
                                        /> < /
                                        label > <
                                        label htmlFor = 'actor-search'
                                        check = {!isShowSearch }
                                        onChange = { onRadioChange } >
                                        Actors <
                                        input id = "actor-search"
                                        type = "radio"
                                        value = "people" / >
                                        <
                                        /label> < /
                                        div >

                                        <
                                        /MainPageLayout> { renderResult }
                                    )
                                }

                                export default Home