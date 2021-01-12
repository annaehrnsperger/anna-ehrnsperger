// eslint-disable-next-line import/no-unresolved
import S from '@sanity/desk-tool/structure-builder';
import {
  FiSettings,
  FiLayout,
  FiFile,
  FiSquare,
  FiMessageCircle,
  FiSmile,
  FiSidebar,
  FiCircle,
} from 'react-icons/fi';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(FiLayout)
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Work')
        .icon(FiCircle)
        .child(S.documentTypeList('project').title('Project')),
      S.listItem()
        .title('Blog')
        .icon(FiMessageCircle)
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Page')
                .icon(FiSidebar)
                .child(
                  S.editor().schemaType('blogPage').documentId('blogPage')
                ),
              S.listItem()
                .title('Posts')
                .icon(FiSquare)
                .child(S.documentTypeList('blogPost').title('Post')),
              S.listItem()
                .title('Authors')
                .icon(FiSmile)
                .child(S.documentTypeList('author').title('Author')),
            ])
        ),
      S.listItem()
        .title('About')
        .icon(FiSmile)
        .child(S.editor().schemaType('about').documentId('about')),
      S.listItem()
        .title('Legal Notice')
        .icon(FiFile)
        .child(S.editor().schemaType('legalNotice').documentId('legalNotice')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(FiSettings)
        .child(S.editor().schemaType('settings').documentId('settings')),
    ]);
