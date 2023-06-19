import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material'; 
import { Feed, SearchFeed, VideoDetail, ChannelDetail, SearchBar} from './components';
import Navbar from './components/Navbar';

const App = () => {
    return(
        <BrowserRouter>
            <Box sx = {{backgroundColor: "#000"}}>
                <Navbar/>
                <Routes>
                    <Route path = '/' exact element = {<Feed/>}/>
                    <Route path = '/video/:id' element = {<VideoDetail/>} />
                    <Route path = '/channel/:id' element = {<ChannelDetail/>} />
                    <Route path = '/search/:term' element = {<SearchFeed/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App