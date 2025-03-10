import playerIcon from '@assets/player-icon.svg';
import type Match from 'types/Matches.types';

import './DetailTeam.css';

const DetailTeam = ({
  match: { awayTeam: firstTeam, homeTeam: secondTeam },
}: {
  match: Match;
}) => (
  <div className='info-match'>
    <div className='info-team'>
      <div className='players-info'>
        {firstTeam.players.map((player, index) => (
          <div key={index} className='player'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={playerIcon} alt={`${player.username} icon`} />
              {player.username}
            </div>
            <div>
              <span className='gray-text'>Убийств: </span> {player.kills}
            </div>
          </div>
        ))}
      </div>
      <div className='total-info'>
        <div>
          <span className='gray-text'>Points: </span>
          +{secondTeam.points}
        </div>
        <div>
          <span className='gray-text'>Место: </span>
          <span>{secondTeam.place}</span>
        </div>
        <div>
          <span className='gray-text'>Всего убийств: </span>
          {secondTeam.total_kills}
        </div>
      </div>
    </div>
    <div className='info-team'>
      <div className='players-info'>
        {firstTeam.players.map((player, index) => (
          <div key={index} className='player'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={playerIcon} alt={`${player.username} icon`} />
              {player.username}
            </div>
            <div>
              <span className='gray-text'>Убийств: </span> {player.kills}
            </div>
          </div>
        ))}
      </div>
      <div className='total-info'>
        <div>
          <span className='gray-text'>Points: </span>
          +{secondTeam.points}
        </div>
        <div>
          <span className='gray-text'>Место: </span>
          {secondTeam.place}
        </div>
        <div>
          <span className='gray-text'>Всего убийств: </span>
          {secondTeam.total_kills}
        </div>
      </div>
    </div>
  </div>
);

export default DetailTeam;
