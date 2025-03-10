import { QueryObserverResult } from "@tanstack/react-query";

import Match from "./Matches.types";

export default interface HeaderProps {
  error: Error | null;
  isFetching: boolean;
  refetch: () => Promise<QueryObserverResult<Match[], Error>>;
}
