module.exports = [
  {
    title: "个人简介",
    path: "/personal",
    collapsable: false,
    children: ["/personal/personal-avocation", "/personal/personal-production", "/personal/personal-gongzonghao"],
  },
  {
    title: "架构",
    collapsable: false,
    children: [{ title: "DepOps", path: "/architecture/dev-ops/" }],
  },
  {
    title: "编程语言",
    collapsable: false,
    path: "/language",
    children: [
      { title: "C", path: "/language/c/" },
      {
        title: "java",
        collapsable: false,
        path: "/language/java/",
        children: [{ title: "并发编程", path: "/language/java/concurrency/" }],
      },
      {
        title: "scala",
        path: "/language/scala/",
        collapsable: false,
        children: ["/language/scala/concurrency/"],
      },
    ],
  },
  {
    title: "大数据",
    collapsable: false,
    path: "/bigdata",
    children: [
      "/bigdata/hadoop/hadoop",
      {
        title: "datax",
        collapsable: false,
        path: "/bigdata/datax",
        children: ["/bigdata/datax/secondary-development"],
      },
      {
        title: "elasticsearch",
        collapsable: false,
        path: "/bigdata/elasticsearch",
        children: ["/bigdata/elasticsearch/elasticsearch-write"],
      },
    ],
  },
  {
    title: "微服务",
    collapsable: false,
    path: "/micro-service",
    children: ["/micro-service/spring-cloud/"],
  },
  {
    title: "运维",
    collapsable: false,
    path: "/operation",
    children: [
      {
        title: "软件部署文档",
        path: "/operation/install-software/",
        children: [
          "/operation/install-software/jdk",
          "/operation/install-software/mysql",
          "/operation/install-software/redis",
          "/operation/install-software/minio",
          "/operation/install-software/jira",
          "/operation/install-software/confluence",
          "/operation/install-software/docker",
          "/operation/install-software/kubernetes",
          "/operation/install-software/rocketmq",
          "/operation/install-software/gitlab",
          "/operation/install-software/jenkins",
          "/operation/install-software/skywalking",
          "/operation/install-software/nexus",
          "/operation/install-software/sonar",
        ],
      },
    ],
  },
  {
    title: "容器",
    collapsable: false,
    path: "/container-platform",
    children: [
      { title: "docker", collapsable: false, path: "/container-platform/docker/" },
      { title: "kubernetes", collapsable: false, path: "/container-platform/kubernetes/" },
    ],
  },
  {
    title: "安全",
    collapsable: false,
    path: "/safety",
    children: ["/safety/cloud-server-virus-solve"],
  },
  {
    title: "源码分析",
    collapsable: false,
    path: "/source-analysis",
    children: ["/source-analysis/openfeign"],
  },
];
