interface Player {
    kills: number;
    username: string;
  }
  
interface Team {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
  }
  
export default interface Match {
    awayScore: number;
    awayTeam: Team;
    homeScore: number;
    homeTeam: Team;
    status: 'Scheduled' | 'Ongoing' | 'Finished';
    time: string;
    title: string;
  }