import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const MapMarkers = ({ profiles }) => {
    return (
        <>
            {profiles.map(profile => (
                <Marker key={profile.id} position={[profile.lat, profile.lng]}>
                    <Popup>
                        <div>
                            <h2>{profile.name}</h2>
                            <p>{profile.location}</p>
                            {/* Add other profile details here */}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default MapMarkers;
