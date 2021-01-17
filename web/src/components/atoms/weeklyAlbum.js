import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Marker from './marker';
import PreviewImage from './previewImage';
import { media } from '../../utils/media-queries';
import Fade from './fade';

const WeeklyAlbum = () => {
  const [playlist, setPlaylist] = useState('');
  const [hover, setHover] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [mouseImagePos, setMouseImagePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(
          `${process.env.GATSBY_SPOTIFY_CLIENT_ID}:${process.env.GATSBY_SPOTIFY_SECRET}`
        )}`,
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then((response) => {
      axios('https://api.spotify.com/v1/playlists/5LfHHdQiBodtePB8CyovgW', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${response.data.access_token}`,
        },
      }).then((playlistRes) => setPlaylist(playlistRes.data));
    });
  }, []);

  const link = playlist?.external_urls?.spotify;
  const image = playlist.images && playlist.images[0]?.url;
  const artist = playlist?.tracks?.items[0].track.artists[0].name;
  const album = playlist?.tracks?.items[0].track.album.name;

  const moveImageMouse = (e) => {
    const speed = 30;
    setMouseImagePos({ x: e.pageX / speed, y: e.pageY / (speed * -10) });
  };

  const { ref, inView, entry } = useInView({ threshold: 0.8 });

  return (
    <Fade show={inView}>
      <StyledAlbum className="small" onMouseMove={moveImageMouse} ref={ref}>
        <a href={link} target="_blank" rel="noreferrer">
          <div
            className="title"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
          >
            <p>Album of the Week</p>
            <Marker active={hover} text="Album of the Week" duration={0.8} />
          </div>
          <div className="content">
            <div
              className="text"
              onMouseOver={() => setHoverSecond(true)}
              onMouseLeave={() => setHoverSecond(false)}
              onFocus={() => setHoverSecond(true)}
            >
              <p style={{ opacity: hoverSecond ? 0 : 1 }}>
                {artist} – {album}
              </p>
              <Marker
                active={hoverSecond}
                text={`${artist} – ${album}`}
                duration={0.8}
              />
            </div>
          </div>
          <PreviewImage
            mouseImagePos={mouseImagePos}
            imgSrc={image}
            imgAlt="Album Of The Week"
          />
        </a>
      </StyledAlbum>
    </Fade>
  );
};

const StyledAlbum = styled.section`
  margin-bottom: var(--v-spacing-M);
  height: var(--spacing-M);

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    .content {
      width: 30%;
    }

    .text,
    .title {
      position: relative;

      span {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
    }
  }

  @media ${media.M} {
  }
`;

WeeklyAlbum.propTypes = {};

export default WeeklyAlbum;
