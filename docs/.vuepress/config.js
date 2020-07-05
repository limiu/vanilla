module.exports = {
    base:'/vanla/',
    title: 'Vanla UI',
    description: '一个简约易用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎Star', link: 'https://github.com/LiMiu331/vanilla'},
            {text: 'Github', link: 'https://github.com/LiMiu331/vanilla'},
        ],
        sidebar: [
            {
                title: '入门',   // 必要的
                children: ['/install/','/get-started/']
            },
            {
                title: '组件',   // 必要的
                children: ['/components/button','/components/input','/components/grid']
            },
        ]
    }
}
