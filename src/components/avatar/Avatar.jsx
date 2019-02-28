// react libs
import React from 'react';

// material ui lib
import AvatarMUI from '@material-ui/core/Avatar';

// custom utils
import titleInitials from '../../utils/title-initial';
import getColor from '../../utils/color-from';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <AvatarMUI style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(children)}
  </AvatarMUI>
);

export default Avatar;
