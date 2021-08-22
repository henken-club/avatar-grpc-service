import {proxy} from './imgproxy';
import {AvatarServer} from './protogen/avatar';

const getAvatar: AvatarServer['getAvatar'] = ({request: {id}}, callback) =>
  callback(null, {
    url: proxy(`https://identicon-api.herokuapp.com/${id}/256?format=png`),
  });

export const impl: AvatarServer = {
  getAvatar,
};
