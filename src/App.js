import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ProfileMap from './ProfileMap';
import ProfileCard from './ProfileCard';
import SearchBar from './SearchBar';

const App = () => {
    const [profiles, setProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);

    useEffect(() => {
        // Fetch profiles data from an API
        axios.get('https://api.example.com/profiles')
            .then(response => {
                setProfiles(response.data);
                setFilteredProfiles(response.data);
            })
            .catch(error => {
                console.error('Error fetching profiles:', error);
            });
    }, []);

    const handleSearch = (query) => {
        const filtered = profiles.filter(profile =>
            profile.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProfiles(filtered);
    };

    return (
        <div className="app">
            <Header />
            <SearchBar onSearch={handleSearch} />
            <ProfileMap profiles={filteredProfiles} />
            <div className="profile-list">
                {filteredProfiles.map(profile => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default App;
