import React from 'react';
import { linkedComponent } from '../package.js';
import { ImageObject } from '../shapes/ImageObject.js';
import { asset } from '@_linked/core/utils/LinkedFileStorage';
const query = ImageObject.select((imageObject) => ({
    contentUrl: imageObject.contentUrl,
}));
export const ImageView = linkedComponent(query, (props) => {
    let { contentUrl, width, height, _refresh, ...restProps } = props;
    //when using restProps because we want to allow many other props, it's important to remove the source & shape prop
    //we could potentially make a utility for this
    delete restProps.source;
    // delete restProps.shape;
    return (React.createElement("img", { ...restProps, src: asset(contentUrl), width: width, height: height }));
});
//register all components in this file
// registerPackageModule(module);
//# sourceMappingURL=ImageView.js.map