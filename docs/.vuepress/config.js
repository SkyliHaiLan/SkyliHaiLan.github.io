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
            { text: '项目总结', link: '/summary/' }
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
                    title: 'Lenovo',
                    children: ['lenovo'],
                },
              {
                title: 'Webridge',
                children: ['webridge'],
              }
            ],
        },
    },
};
