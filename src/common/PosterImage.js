import React, {useState} from 'react';
import {Image} from 'react-native';

const PosterImage = ({uri,style}) => {
    const [poster, setPoster] = useState({uri: uri === 'N/A' ? 'null' : uri});
    return (
        <Image
            style={style}
            source={poster}
            onError={() => {
                setPoster(require('../assets/images/no-image.jpg'));
            }}
        />

    );
};
export {PosterImage};
