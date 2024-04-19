import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MapMarkers from './MapMarkers';

const ProfileMap = ({ profiles }) => {
    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapMarkers profiles={profiles} />
        </MapContainer>
    );
};

export default ProfileMap;
