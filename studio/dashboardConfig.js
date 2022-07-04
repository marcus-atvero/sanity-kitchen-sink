export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c30f9f6f33180c64055b0f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6axhr5os',
                  apiId: 'bd2e62fe-80a5-4bc3-bc06-33747fd9785c'
                },
                {
                  buildHookId: '62c30f9f31cc4409e498c6d2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r6jo4oko',
                  apiId: '400c3f7e-e4e4-42b2-9daf-a93e3328afe6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcus-atvero/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r6jo4oko.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
