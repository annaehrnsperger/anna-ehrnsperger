// eslint-disable-next-line import/no-unresolved
import S from '@sanity/desk-tool/structure-builder';
import { FiSettings, FiLayout, FiMessageCircle } from 'react-icons/fi';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(FiLayout)
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Blog')
        .icon(FiMessageCircle)
        .child(S.documentTypeList('blogPost').title('Posts')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(FiSettings)
        .child(S.editor().schemaType('settings').documentId('settings')),
    ]);
