/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import about from './documents/about';
import blogPost from './documents/blogPost';
import homepage from './documents/homepage';
import project from './documents/project';
import settings from './documents/settings';

// object schemas
import mainImage from './objects/mainImage';
import portableText from './objects/portableText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    about,
    blogPost,
    homepage,
    project,
    settings,

    // objects
    mainImage,
    portableText,
  ]),
});
