module.exports = {
    base:'/SkyliHaiLan.github.io/',
    title: 'Xportal文档',
    description: '云平台产品的文档展示.',
    themeConfig: {
        repo: 'SkyliHaiLan/vuepress-docs-test',
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        docsDir: 'docs',
        nav: [
            { text: 'Guide', link: '/guide/'
            },
            { text: 'API', link: '/api/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    children: ['','guide-test'],
                },
                {
                    title: 'Guide2',
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