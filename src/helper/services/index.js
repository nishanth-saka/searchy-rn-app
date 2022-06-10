import Config from 'react-native-config';

import { GIF_DATA_LIMIT } from '../../utils/constants';

export const getGifDataAPI = (params) => {
    const _data = async (params) => {
       try {
        const _url = `${Config.GIF_DATA_DOMAIN}/search?api_key=${Config.GIF_DATA_KEY}&q=${params?.searchParam ?? 'baseball'}&limit=${GIF_DATA_LIMIT}`
        const _apiResponse = await fetch(_url);
          const _data = await _apiResponse.json();
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

export const updateGifDataAPI = (params) => {
   console.log(``);
   console.log(`updateGifDataAPI params: `);
   console.log(params);
   console.log(``);  
    const _data = async (params) => {
       try {
        const _url = `${Config.GIF_DATA_DOMAIN}/search?api_key=${Config.GIF_DATA_KEY}&q=${params?.searchParam ?? 'baseball'}&limit=${GIF_DATA_LIMIT}&offset=${params?.offSet ? (params?.offSet*GIF_DATA_LIMIT) : GIF_DATA_LIMIT}`
        const _apiResponse = await fetch(_url);
          const _data = await _apiResponse.json();
         
          console.log(``);
         console.log(`updateGifDataAPI _url: `);
         console.log(_url);
         console.log(params);
         console.log(``);  
         
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