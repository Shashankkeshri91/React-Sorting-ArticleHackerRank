import React, { useState } from 'react';
import './App.css';
import 'h8k-components';
import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [sortedBy, setSortedBy] = useState('upvotes'); // Default sorting by upvotes

    const handleSort = (sortBy) => {
        setSortedBy(sortBy);
    };

    const sortedArticles = [...articles].sort((a, b) => {
        if (sortedBy === 'upvotes') {
            return b.upvotes - a.upvotes; // Sort by upvotes in descending order
        } else if (sortedBy === 'date') {
            return new Date(b.date) - new Date(a.date); // Sort by date in descending order
        }
    });

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => handleSort('upvotes')}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => handleSort('date')}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles} />
        </div>
    );
}

export default App;
