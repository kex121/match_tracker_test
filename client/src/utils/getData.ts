import axios, { type AxiosResponse } from "axios";

import type Match from "types/Matches.types";

const getData = async (): Promise<Match[]> => {
    try {
      const { data } = await axios<
        void,
        AxiosResponse<{ data: { matches: Match[] }; ok: boolean }>
      >('https://app.ftoyd.com/fronttemp-service/fronttemp');
      if (data.ok) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return data.data.matches;
      }
      throw new Error('Ошибка при получении данных');
    } catch (e) {
      const error = e as Error;
      console.error(error.message);
      throw new Error(error.message);
    }
  };

export default getData;