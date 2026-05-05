const zhSidebar = [
  {
    title: "个人简介",
    path: "/personal",
    collapsable: false,
    children: ["/personal/personal-avocation", "/personal/personal-production", "/personal/personal-gongzonghao"],
  },
  {
    title: "架构",
    collapsable: false,
    children: [{ title: "DevOps", path: "/architecture/dev-ops/" }],
  },
  {
    title: "编程语言",
    collapsable: false,
    path: "/language",
    children: [
      { title: "C", path: "/language/c/" },
      {
        title: "Java",
        collapsable: false,
        path: "/language/java/",
        children: [{ title: "并发编程", path: "/language/java/concurrency/" }],
      },
      {
        title: "Scala",
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
        title: "DataX",
        collapsable: false,
        path: "/bigdata/datax",
        children: ["/bigdata/datax/secondary-development"],
      },
      {
        title: "Elasticsearch",
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
      { title: "Docker", collapsable: false, path: "/container-platform/docker/" },
      { title: "Kubernetes", collapsable: false, path: "/container-platform/kubernetes/" },
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

const enSidebar = [
  {
    title: "Profile",
    path: "/personal",
    collapsable: false,
    children: ["/personal/personal-avocation", "/personal/personal-production", "/personal/personal-gongzonghao"],
  },
  {
    title: "Architecture",
    collapsable: false,
    children: [{ title: "DevOps", path: "/architecture/dev-ops/" }],
  },
  {
    title: "Languages",
    collapsable: false,
    path: "/language",
    children: [
      { title: "C", path: "/language/c/" },
      {
        title: "Java",
        collapsable: false,
        path: "/language/java/",
        children: [{ title: "Concurrency", path: "/language/java/concurrency/" }],
      },
      {
        title: "Scala",
        path: "/language/scala/",
        collapsable: false,
        children: ["/language/scala/concurrency/"],
      },
    ],
  },
  {
    title: "Big Data",
    collapsable: false,
    path: "/bigdata",
    children: [
      "/bigdata/hadoop/hadoop",
      {
        title: "DataX",
        collapsable: false,
        path: "/bigdata/datax",
        children: ["/bigdata/datax/secondary-development"],
      },
      {
        title: "Elasticsearch",
        collapsable: false,
        path: "/bigdata/elasticsearch",
        children: ["/bigdata/elasticsearch/elasticsearch-write"],
      },
    ],
  },
  {
    title: "Microservices",
    collapsable: false,
    path: "/micro-service",
    children: ["/micro-service/spring-cloud/"],
  },
  {
    title: "Operations",
    collapsable: false,
    path: "/operation",
    children: [
      {
        title: "Software setup",
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
    title: "Containers",
    collapsable: false,
    path: "/container-platform",
    children: [
      { title: "Docker", collapsable: false, path: "/container-platform/docker/" },
      { title: "Kubernetes", collapsable: false, path: "/container-platform/kubernetes/" },
    ],
  },
  {
    title: "Security",
    collapsable: false,
    path: "/safety",
    children: ["/safety/cloud-server-virus-solve"],
  },
  {
    title: "Source analysis",
    collapsable: false,
    path: "/source-analysis",
    children: ["/source-analysis/openfeign"],
  },
];

const jaSidebar = [
  {
    title: "プロフィール",
    path: "/personal",
    collapsable: false,
    children: ["/personal/personal-avocation", "/personal/personal-production", "/personal/personal-gongzonghao"],
  },
  {
    title: "アーキテクチャ",
    collapsable: false,
    children: [{ title: "DevOps", path: "/architecture/dev-ops/" }],
  },
  {
    title: "プログラミング言語",
    collapsable: false,
    path: "/language",
    children: [
      { title: "C", path: "/language/c/" },
      {
        title: "Java",
        collapsable: false,
        path: "/language/java/",
        children: [{ title: "並行処理", path: "/language/java/concurrency/" }],
      },
      {
        title: "Scala",
        path: "/language/scala/",
        collapsable: false,
        children: ["/language/scala/concurrency/"],
      },
    ],
  },
  {
    title: "ビッグデータ",
    collapsable: false,
    path: "/bigdata",
    children: [
      "/bigdata/hadoop/hadoop",
      {
        title: "DataX",
        collapsable: false,
        path: "/bigdata/datax",
        children: ["/bigdata/datax/secondary-development"],
      },
      {
        title: "Elasticsearch",
        collapsable: false,
        path: "/bigdata/elasticsearch",
        children: ["/bigdata/elasticsearch/elasticsearch-write"],
      },
    ],
  },
  {
    title: "マイクロサービス",
    collapsable: false,
    path: "/micro-service",
    children: ["/micro-service/spring-cloud/"],
  },
  {
    title: "運用",
    collapsable: false,
    path: "/operation",
    children: [
      {
        title: "ソフトウェア導入",
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
    title: "コンテナ",
    collapsable: false,
    path: "/container-platform",
    children: [
      { title: "Docker", collapsable: false, path: "/container-platform/docker/" },
      { title: "Kubernetes", collapsable: false, path: "/container-platform/kubernetes/" },
    ],
  },
  {
    title: "セキュリティ",
    collapsable: false,
    path: "/safety",
    children: ["/safety/cloud-server-virus-solve"],
  },
  {
    title: "ソース解析",
    collapsable: false,
    path: "/source-analysis",
    children: ["/source-analysis/openfeign"],
  },
];

function prefixPath(pathValue, prefix) {
  if (typeof pathValue !== "string") return pathValue;
  if (!pathValue.startsWith("/")) return pathValue;
  if (pathValue === "/") return `/${prefix}/`;
  return `/${prefix}${pathValue}`;
}

function localizeSidebar(items, prefix) {
  return items.map((item) => {
    if (typeof item === "string") return prefixPath(item, prefix);
    const next = { ...item };
    if (next.path) next.path = prefixPath(next.path, prefix);
    if (Array.isArray(next.children)) next.children = localizeSidebar(next.children, prefix);
    return next;
  });
}

module.exports = {
  zhSidebar,
  enSidebar: localizeSidebar(enSidebar, "en"),
  jaSidebar: localizeSidebar(jaSidebar, "ja"),
};
