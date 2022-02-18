module.exports = {
    title: '茉莉',
    description: '茉莉的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/logo.jpg'}], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', {rel: 'apple-touch-icon', href: '/logo.jpg'}], //PWA
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            {text: '首页', link: '/'},
            {text: '图虫', link: 'https://tuchong.com/16557320/'},
            {text: 'github', link: 'https://github.com/wujinsen/'}
        ],
        searchMaxSuggestions: 10,
        logo: '/logo.jpg',
        sidebar: [
            {
                title: '个人简介',   // 必要的
                path: '/personal',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/personal/personal-avocation',
                    '/personal/personal-production'
                ]
            },
            {
                title: '架构',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                children: [{
                    title: 'DepOps',
                    path: '/architecture/dev-ops/'
                }]
            },
            {
                title: '编程语言',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                children: [{
                        title: 'C',
                        path: '/language/c/'
                    },
                    {
                        title: 'java',
                        collapsable: false,
                        path: '/language/java/',
                        children: [{
                            title: '并发编程',
                            path: '/language/java/concurrency',
                            children: [
                                '/language/java/concurrency'
                            ]
                        }]
                    },
                    {
                        title: 'scala',
                        path: '/language/scala/',
                        collapsable: false,
                        children: [
                            '/language/scala/concurrency'
                        ]
                    }
                ]
            },
            {
                title: '大数据',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                path: '/bigdata',
                children: [
                    '/bigdata/hadoop/hadoop'
                ]
            },
            {
                title: '微服务',
                collapsable: false, // 可选的, 默认值是 true,
                path: '/micro-service',
                children: [
                    '/micro-service/spring-cloud/'
                ]
            },
            {
                title: '运维',
                collapsable: false, // 可选的, 默认值是 true,
                path: '/operation',
                children: [
                    {
                        title: '软件安装文档',

                        path: '/operation/install-software/',
                        children: [
                            '/operation/install-software/jdk',
                            '/operation/install-software/mysql',
                            '/operation/install-software/redis',
                            '/operation/install-software/minio',
                            '/operation/install-software/jira',
                            '/operation/install-software/confluence',
                            '/operation/install-software/docker',
                            '/operation/install-software/kubernetes',
                            '/operation/install-software/rocketmq',
                            '/operation/install-software/gitlab',
                            '/operation/install-software/jenkins',
                            '/operation/install-software/skywalking',
                            '/operation/install-software/nexus'
                        ]
                    }
                ]
            },
            {
                title: '容器',
                collapsable: false, // 可选的, 默认值是 true,
                path: '/container',
                children: [{
                    title: 'docker',
                    collapsable: false,
                    path: '/container/docker',
                    children: [
                        '/container/docker'
                    ]
                }, {
                    title: 'kubernetes',
                    collapsable: false,
                    path: '/container/kubernetes',
                    children: [
                        '/container/kubernetes'
                    ]
                }
                ]
            },
            {
                title: '源码分析',
                collapsable: false, // 可选的, 默认值是 true,
                path: '/source-analysis',
                children: [
                    '/source-analysis/openfeign'
                ]
            }
        ]
    }
};
