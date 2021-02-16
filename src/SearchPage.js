import React from 'react';
import './searchPage.css';
import ChannelRow from './ChannelRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://images.unsplash.com/photo-1613328031624-95e90cd8980b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                channel="Unsplash"
                verified
                subs="450k"
                noOfVideos="45"
                description="This is the best image I have ever seen"
            />
            <hr />
            <VideoRow
            title="Ellie Goulding - Love Me Like You Do (Fifty Shades of Grey)"
            views = "2.3M Views"
            timestamp="1 year ago"
            subs="1M"
            description = "I love this song"
            channel = "Pop World"
            image="https://i.ytimg.com/vi/CMXMELv9Pr0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbiGTQy_EuzxowTfTlau5LIQ1XJQ"
             />
        </div>
    )
}

export default SearchPage
