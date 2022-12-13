module.exports = {
   // base:'/SkyliHaiLan.github.io/',
  // base:'/',
    title: '小海学前端',
    description: 'Personal Weblog ',
    themeConfig: {
        repo: 'SkyliHaiLan/SkyliHaiLan.github.io',
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        docsDir: 'docs',
        docsBranch: 'person-docs',
        nav: [
            { text: '文档', link: '/document/'
            },
            { text: '工作总结', link: '/summary/' },
            { text: 'PMI-ACP', link: '/acp/' },
            { text: '留言板', link: '/messages/' }
        ],
        sidebar: {
            '/document/': [
              {
                title: 'Markdown',
                children: [''],
              },
                {
                    title: '文档站点',
                    children: ['createDoc'],
                },
                {
                    title: 'Front',
                    children: ['webTechnologyStack', 'webLearningMethod','sshConfig'],
                },
                {
                  title: 'uni-app',
                  children: ['uniApp'],
              }
            ],
            '/summary/': [
                {
                    title: '伟博瑞吉',
                    children: ['lenovo','webridge'],
                },
              {
                title: '中软集团',
                children: ['ICSS'],
              }
            ],
            '/acp/': [
              {
                  title: 'ACP随手记录',
                  children: ['','scrum','lean','program','tools','steɪkhəʊldə'],
              },
              {
                title:'易错题',
                children:['issues']
              },
          ],
        },
    },
};
