import React from 'react';

const ProfileCard = ({ profile }) => {
    return (
        <div className="profile-card">
            <h2>{profile.name}</h2>
            <p>{profile.location}</p>
            {/* Add other profile details here */}
        </div>
    );
};

export default ProfileCard;
