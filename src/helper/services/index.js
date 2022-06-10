import Config from 'react-native-config';

import { GIF_DATA_LIMIT } from '../../utils/constants';

export const getGifDataAPI = (params = 'baseball') => {
    const _data = async (params) => {
       try {
        const _url = `${Config.GIF_DATA_DOMAIN}/search?api_key=${Config.GIF_DATA_KEY}&q=${params}&limit=${GIF_DATA_LIMIT}`
        const _apiResponse = await fetch(_url);
          const _data = await _apiResponse.json();
          //   console.log(``);
          //   console.log(`getGifDataAPI data: `);
          //   console.log(params);
          //   console.log(_data);
          //   console.log(``);

            return _data;
       } catch (error) {
            console.log(``);
            console.log(`getGifDataAPI error: `);
            console.log(error);
            console.log(``);        

            return error;
       }
    }

    return _data(params);
}