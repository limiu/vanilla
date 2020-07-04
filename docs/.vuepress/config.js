module.exports = {
    title: 'Vanla UI',
    description: '一个简约易用的UI框架',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',   // 必要的
                children: ['/install/','/get-started/']
            },
            {
                title: '组件',   // 必要的
                children: ['/components/button']
            },
        ]
    }
}
