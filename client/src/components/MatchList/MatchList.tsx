import useMatch from './getMatches.hook';
import DetailTeam from '../DetailTeam';
import teamIcon from '@assets/team-icon.svg';
import { MatchStatus } from './MatchStatus';
import type Match from 'types/Matches.types';

import './MatchList.css';

const MatchList = ({ data }: { data: Match[] }) => {
  const [selectedMatches, toggleMatchInfo] = useMatch();

  return (
    <div className='match-list'>
      {data?.map((match, index) => (
        <>
          <div
            key={index}
            className='match'
            onClick={() => toggleMatchInfo(match)}
          >
            <div className='team1'>
              <img src={teamIcon} alt='logoTeam' />
              {match.awayTeam.name}
            </div>
            <div className='score'>
              {match.awayScore} : {match.homeScore}
              <div className={`status ${match.status.toLowerCase()}`}>
                {match.status === MatchStatus.Finished
                  ? MatchStatus.Finished
                  : match.status === MatchStatus.Ongoing
                  ? 'Live'
                  : MatchStatus.Preparing}
              </div>
            </div>
            <div className='team2'>
              {match.homeTeam.name}
              <img src={teamIcon} alt='logoTeam' />
            </div>
          </div>
          <div>
            {selectedMatches.includes(match) && <DetailTeam match={match} />}
          </div>
        </>
      ))}
    </div>
  );
};

export default MatchList;
