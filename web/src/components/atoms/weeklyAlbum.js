import React, { useEffect, useState } from 'react';

const WeeklyAlbum = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getSpotifyToken = async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(
            `${process.env.GATSBY_SPOTIFY_CLIENT_ID}:${process.env.GATSBY_SPOTIFY_SECRET}`
          )}`,
          data: 'grant_type=client_credentials',
        },
      });

      const data = await response.json();
      setToken(data.access_token);
    };

    const fetchPlaylist = async () => {
      const response = await fetch(
        'https://api.spotify.com/v1/users/rykettid/playlists',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      console.log(data);
    };

    getSpotifyToken();
    fetchPlaylist();
  }, []);

  return <div />;
};

export default WeeklyAlbum;
