module.exports = {
   // base:'/SkyliHaiLan.github.io/',
  // base:'/',
    title: '个人主页',
    description: 'Personal Website',
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
            { text: 'PMI-ACP', link: '/acp/' }
        ],
        sidebar: {
            '/document/': [
              {
                title: 'Markdown',
                children: [''],
              },
                {
                    title: '文档站点的搭建',
                    children: ['createDoc'],
                },
                {
                    title: '前端',
                    children: ['webTechnologyStack', 'webLearningMethod'],
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
