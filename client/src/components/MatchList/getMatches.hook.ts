import { useState } from "react";

import Match from "types/Matches.types";

const useMatch = (): [Match[], (match: Match) => void] => {
    const [selectedMatches, setSelectedMatches] = useState<Match[]>([]);

    const toggleMatchInfo = (match: Match) => {
        setSelectedMatches((prevMatches) => {
            if (prevMatches.includes(match)) {
                return prevMatches.filter((prevMatch) => prevMatch !== match);
            } else {
                return [...prevMatches, match];
            }
        });
    };

    return [selectedMatches, toggleMatchInfo];
}

export default useMatch;