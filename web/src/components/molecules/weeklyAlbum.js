import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Marker from '../atoms/marker';
import PreviewImage from '../atoms/previewImage';
import { media } from '../../utils/media-queries';
import Fade from '../atoms/fade';

const WeeklyAlbum = () => {
  const [playlist, setPlaylist] = useState('');
  const [hover, setHover] = useState(false);
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

  const { ref, inView } = useInView({ threshold: 0.8 });

  return (
    <Fade show={inView}>
      <StyledAlbum
        className="small"
        onMouseMove={moveImageMouse}
        ref={ref}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <div className="title">
            <p>
              Album of <br />
              the Week
            </p>
          </div>
          <div className="content">
            <div className="text">
              <p style={{ opacity: hover ? 0 : 1 }}>
                {artist} – {album}
              </p>
              <Marker
                active={hover}
                text={`${artist} – ${album}`}
                duration={0.8}
              />
            </div>
          </div>
          <PreviewImage mouseImagePos={mouseImagePos} imgSrc={image} album />
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

    .title {
      min-width: 27vw;
    }

    .content {
      width: 100%;
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
    a {
      .content {
        width: 30%;
      }
    }
  }
`;

WeeklyAlbum.propTypes = {};

export default WeeklyAlbum;
