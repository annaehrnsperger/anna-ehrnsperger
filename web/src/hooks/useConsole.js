import { useEffect } from 'react';

export const useConsole = () => {
  useEffect(() => {
    // eslint-disable-next-line
      console.log(
      '%c Anna Ehrnsperger Design Code ',
      'background: #000; color: #fff; font-size: 16px'
    );
    // eslint-disable-next-line
        console.log(
      '%c www.annaehrnsperger.de ',
      'background: #000; color: #fff; font-size: 16px'
    );
  }, []);
};
