import { FC } from 'react';

import warnIcon from '@assets/warning-icon.svg';
import refreshBtn from '@assets/refresh-icon.svg';
import type HeaderProps from 'types/Header.types';

import './Header.css';

const Header: FC<HeaderProps> = ({ error, isFetching, refetch }) => (
  <div className='header'>
    <img src='logo.png' alt='Match Tracker' id='logo' />
    <div className='error-container'>
      {error && (
        <span className='error-message'>
          <img src={warnIcon} alt='Warning' />
          {error.message}
        </span>
      )}
      <button onClick={() => refetch()} className='refresh-button'>
        Обновить
        <img
          src={refreshBtn}
          className={`refresh-ico loading-${isFetching}`}
          alt='Refresh'
        />
      </button>
    </div>
  </div>
);

export default Header;
