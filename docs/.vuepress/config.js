module.exports = {
    base:'/SkyliHaiLan.github.io/',
    title: '李海兰博客',
    description: '学习中的个人总结.',
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
            { text: 'API', link: '/api/' }
        ],
        sidebar: {
            '/document/': [
                {
                    title: 'Markdown and Vuepress',
                    children: ['','createDoc'],
                },
                {
                    title: '前端',
                    children: ['webTechnologyStack', 'webLearningMethod'],
                }
            ],
            '/api/': [
                {
                    title: 'API',
                }
            ],
        },
    },
};