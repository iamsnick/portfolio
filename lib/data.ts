export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  techStack: string[];
  heroCommand: string;
  highlights: {
    title: string;
    desc: string;
  }[];
  challenge: string;
  solution: string;
  iterations: {
    date: string;
    action: string;
    impact: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "boss-cli",
    title: "Boss CLI",
    tag: "Stealth Crawling",
    description: "面向 agent 使用的 boss 直聘投递工具。基于 CDP 协议，攻克大厂反爬防御墙， 让 agent 可自行根据简历匹配程度打分、投递、留言、收藏。", //不再修改
    techStack: ["Node.js", "CDP", "TypeScript", "tsx"],
    heroCommand: "boss 'AI 产品经理' -c 深圳 -s 20-50",
    highlights: [
      { title: "协议级隐身", desc: "跳过 WebDriver 直接接管真实 Chrome 进程，绕过 99% 机器人检测。" },
      { title: "自动化投递", desc: "集成 y/n/m/f 交互循环，职位投递决策、留言、收藏。" },
      { title: "薪资反混淆", desc: "实时还原 Unicode 混淆后的薪资文本，精准匹配招聘要求。" }
    ],
    challenge: "Boss 直聘拥有极致的反爬环境监测（WebDriver、行为指纹等）且关键数据高度加密。",
    solution: "通过CDP协议层实现标签接管，并自建映射解析模块。",
    process: [
      { step: "01", title: "环境接管", desc: "一键探测并静默接管已登录的 Chrome 浏览器标签页。" },
      { step: "02", title: "语义过滤", desc: "扫描职位列表，实时反混淆薪资数据并排除企业黑名单。" },
      { step: "03", title: "智能决策", desc: "进入 Agent 交互循环，手动或自动下达 y (投递)、m (留言)、b (屏蔽)。" },
      { step: "04", title: "数据归档", desc: "执行记录与采集的职位详情数据自动归档。" }
    ],
    iterations: [
      { date: "2026.04.01", action: "Tab 生命周期接管重构", impact: "系统稳定性从单次会话扩容至全天候长连接。" },
      { date: "2026.03.31", action: "CDP 直连模式上线", impact: "特征指纹与真实用户 1:1，解决被封号历史难题。" },
      { date: "2026.03.25", action: "薪资反混淆引擎发布", impact: "实现对加密薪资字段的精准捕捉与筛选。" }
    ]
  },
  {
    id: "comic-crawl",
    title: "ComicCrawl",
    tag: "Asset Vault / Full-Stack",
    description: "打造你的个人漫画库，将漫画批量保存到 NAS 。",
    techStack: ["Python", "FastAPI", "Vue 3", "SQLite", "Playwright"],
    heroCommand: "bash start_web_gui.sh",
    highlights: [
      { title: "看见即所得", desc: "无视任何 JS 混淆与 Canvas 切片加密。只要浏览器能渲染出来，系统就能完美保存入库。" },
      { title: "视觉检查", desc: "系统会像真人一样检查每一页。自动识别空白占位图与加载失败的章节并实时补抓，告别残缺。" },
      { title: "NAS归档", desc: "支持增量同步到 NAS。" }
    ],
    challenge: "现代漫画平台采用极端的绘图混淆与占位符欺骗（Loading图），传统 DOM 爬虫抓下来全是空壳。",
    solution: "利用 Playwright 劫持底层渲染管线，通过视觉哈希 (DHash) 审查与自动重试。",
    process: [
      { step: "01", title: "一键抓取", desc: "通过 Web 界面一键下达任务。支持移动端快速粘贴网址下载，随时随地掌控进度。" },
      { step: "02", title: "多路并行", desc: "多线程并发下载，每个任务拥有独立的实时流日志，让每秒的数据交换都清晰可见。" },
      { step: "03", title: "自动补抓", desc: "下载后主动执行视觉扫描，发现“坏图”立即标记并触发补抓，拒绝错漏。" },
      { step: "04", title: "自动归档", desc: "自动同步至 NAS，系统自动完成增量打包入库，释放本地硬盘。" }
    ],
    iterations: [
      { date: "2026.04.05", action: "UI/UX 极简升级", impact: "合并冗余交互，支持 iOS 移动端无感粘贴与全自动任务创建。" },
      { date: "2026-03-26", action: "视觉指纹批量审查", impact: "入库资产完整度达到 100%，彻底终结了“漫画残页”的历史。" },
      { date: "2026.03.13", action: "增量同步", impact: "支持根据更新动态更新 NAS 中的 ZIP 容器。" }
    ]
  },
  {
    id: "feishu-doc",
    title: "Feishu Doc Rebuilder",
    tag: "Static CMS / Site Generator",
    description: "飞书文档自动采集与本地重建，将云端文档转化为可离线的静态网页。",
    techStack: ["Node.js", "Layout Engine", "Puppeteer"],
    heroCommand: "node fsm.js 'url'",
    highlights: [
      { title: "布局还原", desc: "基于坐标感知的渲染再造，1:1 复刻飞书的布局。" },
      { title: "资产本地化", desc: "自动获取 CDN 视频、图片并本地化，构建可离线阅读文档。" },
      { title: "链接修复", desc: "针对 DOM 解析导致的超链接断链，通过上下文感知自动恢复逻辑链接。" }
    ],
    challenge: "飞书文档是复杂的云文档，具有很强的防止复制、保存功能，直接保存会导致排版错乱、图片失效。",
    solution: "建立自动化流水线：采集 -> 清洗 -> 重建，一键生成可离线阅读文档。",
    process: [
      { step: "01", title: "数据收割", desc: "深度遍历文档树，采集所有节点的几何属性与媒体资源真实路径。" },
      { step: "02", title: "语义清洗", desc: "剔除动态 JS 注入，将云端特有的链接模式还原为文件相对路径。" },
      { step: "03", title: "高仿重构", desc: "利用 CSS Grid 重建复杂的栅格布局，确保排版在任何尺寸下均不错乱。" }
    ],
    iterations: [
      { date: "2026.04.16", action: "Nexus 调度中心发布", impact: "实现了千级文档全自动流水线同步与重构。" },
      { date: "2026.04.13", action: "语义化链接算法上线", impact: "解决了 98% 以上的跨文档、跨目录索引失效问题。" }
    ]
  },
  {
    id: "xhs-cli",
    title: "XHS CLI",
    tag: "Social Intelligence / Local AI",
    description: "让 agent 也能玩转小红书，可以让 agent 看见、听见、以及操作小红书。",
    techStack: ["Node.js", "Python", "Local ASR", "Lark OAPI"],
    heroCommand: "xhs '美食' --top 50 --lark-doc",
    highlights: [
      { title: "全能捕获", desc: "无论是搜索关键词还是单一链接，图片、视频、文字，无所不落。一网打尽最热、最受欢迎的内容。" },
      { title: "本地 AI", desc: "内置本地语音转写引擎。自动提取视频音轨并秒级化为文字，无需云端，绝对隐私。" },
      { title: "飞书深度闭环", desc: "带参数直接写入文档或表格。从命令行到组织知识库，中间没有多余的动作。It just works." }
    ],
    challenge: "传统调研需要数百次点击大量时间，且视频内容的文案提取效率低下。",
    solution: "构建了一条从关键词探测、多模态下载到本地 ASR 转写的全自动流水线，并直连飞书。",
    process: [
      { step: "01", title: "瞬间搜索", desc: "输入关键词，指定 20 条、50 条乃至自定义数量，系统自动锁定最热门、最相关的爆款内容。" },
      { step: "02", title: "多维提取", desc: "批量抓取视频、高清原图与笔记元数据，剥离社交媒体的各种干扰。" },
      { step: "03", title: "智能转译", desc: "本地 AI 引擎接管音频流，实现秒级高精度转写，将视频内容资产化。" },
      { step: "04", title: "知识固化", desc: "带参数直接生成飞书文档 (Doc) 或写入多维表格 (Sheet)，实现生产力一键落位。" }
    ],
    iterations: [
      { date: "2026.04.10", action: "XHS CLI 升级", impact: "确立了‘一键抓取至飞书’的极简交互标准。" },
      { date: "2026.02.03", action: "集成本地 ASR 离线转译", impact: "摆脱云端依赖，识别效率与隐私性提升至顶级。" },
      { date: "2026.02.01", action: "关键词批量采集逻辑上线", impact: "实现了从单体采集到规模化调研的飞跃。" }
    ]
  }
];
