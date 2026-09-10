import type { Dict } from "./en"

export const zh: Dict = {
  nav: {
    features: "特性",
    demo: "演示",
    skills: "技能包",
    enterprise: "企业服务",
    news: "动态",
    about: "关于",
    github: "GitHub",
    install: "安装",
  },
  newsStrip: {
    label: "动态",
  },
  hero: {
    kicker: "Vesti · 智能体工作记忆",
    title: "面向专有场景 Agent 的工作记忆引擎",
    subtitle:
      "Vesti 捕获每一次 Agent 对话，整理为结构化的本地记忆，并在任何 Agent 需要时把上下文喂回去。",
    install: "立即安装",
    watchDemo: "观看演示",
    libraryTitle: "Vesti 记忆库",
    libraryHint: "搜索并重开",
    screenshotAlt: "Vesti 侧栏:以可检索的时间线展示已保存的 AI 对话。",
  },
  enterpriseBand: {
    kicker: "企业服务 · FDE",
    title: "企业知识 Agent,FDE 式交付",
    description:
      "我们的工程师进驻你的团队,用 4–20 周把一个真实场景变成跑得起来、测得出数、可一键复测的 Agent 系统——私有化部署、证据链输出、人工做最终关卡。",
    cta: "了解企业服务",
    stats: [
      { value: "4", label: "个 FDE 交付项目" },
      { value: "1", label: "个国企标杆已交付" },
      { value: "60→2", label: "分钟完成一次合规咨询" },
    ],
  },
  teamBand: {
    kicker: "团队",
    title: "七个学科,一套记忆栈",
    description:
      "来自南京大学、复旦大学、上海交通大学的跨学科团队——AI Hackathon Tour 全国总决赛金奖、GOSIM Paris 2026 Frontier Creators 入选团队。63 天、463 次提交,从零到上线。",
    cta: "认识团队",
    photoAlt: "Vesti 团队在南京。",
  },
  features: {
    kicker: "特性",
    title: "不尚形式,强于回想",
    items: [
      {
        title: "自动捕获",
        description: "对话完成后自动保存,无需手动导出。",
      },
      {
        title: "极速检索",
        description: "秒级找回过去的提示词、笔记与决策。",
      },
      {
        title: "本地优先",
        description: "对话历史只保存在你自己的设备上。",
      },
      {
        title: "清晰复现",
        description: "重开当时的完整会话,而不是从头再来。",
      },
    ],
  },
  demo: {
    kicker: "演示",
    title: "一次看完记忆闭环",
    subtitle: "捕获会话,事后检索,快速找回上下文",
  },
  skills: {
    kicker: "技能包",
    title: "为编码 Agent 准备的开源技能",
    subtitle:
      "VESTI Skills(MIT 开源)让你的 AI 编程 Agent 记得你做过的一切,并把工作完整交给下一个 Agent。",
    cards: [
      {
        name: "vesti-memory",
        tagline: "为任意 Agent 会话提供记忆召回。",
        description:
          "渐进披露:会话开始自动拉取项目上下文包,再从会话索引逐层下钻到文件定位与具体轮次原文。",
        bullets: [
          "会话开始自动加载上下文包——状态卡、活跃文件、未决问题。",
          "通过 vesti_search、vesti_search_files、vesti_timeline、vesti_get_turns 逐层下钻。",
          "换 Agent 不必重新交代背景,/compact 之后决策理由不再丢失。",
        ],
        requirement: "依赖本机运行 VESTI 桌面端并注册 vesti-mcp。",
      },
      {
        name: "vesti-handoff",
        tagline: "Agent 之间的结构化交接。",
        description:
          "生成 schema 化交接包——goal、state、files、failedPaths、verification、nextSteps,让下一个 Agent 从证据出发,而不是从信任出发。",
        bullets: [
          "核心规则只有一条:接手先验证——先复跑 verification.lastCommand。",
          "独立可用,不依赖 VESTI。",
          "与 VESTI 桌面端 Relay Pack schema 对齐。",
        ],
        requirement: "独立可用——无需 VESTI。",
      },
    ],
    install: {
      kicker: "安装",
      title: "把技能装进你的 Agent",
      description:
        "在 Kimi Code 或 Claude Code 里一条命令搞定,也可以手动拷贝到任意 Agent 的 skills 目录。",
      githubCta: "GitHub — VESTI-SKILLS",
      justTell: {
        label: "直接告诉你的 Agent",
        prompt:
          "从 GitHub 安装 VESTI 技能包:把 https://github.com/firefly-hefeng/VESTI-SKILLS clone 到临时目录,将 skills/vesti-memory 和 skills/vesti-handoff 拷贝到你的用户级 skills 目录(Kimi Code 为 ~/.kimi-code/skills/,Claude Code 为 ~/.claude/skills/,或其他工具的等价目录),然后列出已安装的内容,并告诉我是否需要重启或开启新会话。",
        note: "把这段话发给 Kimi Code、Claude Code、Codex 或任何有 shell 能力的 Agent——它会自己完成 clone、拷贝与验证。技能在新会话中生效。",
      },
      oneCommand: {
        label: "一条命令安装",
        recommended: "推荐",
        kimiNote: "安装后运行 /reload 生效。",
      },
      manual: {
        label: "手动安装",
        headers: ["Agent", "用户级", "项目级"],
        rows: [
          {
            agent: "kimi-code",
            userLevel: "cp -r skills/<name> ~/.kimi-code/skills/",
            projectLevel: ".kimi-code/skills/",
          },
          {
            agent: "Claude Code",
            userLevel: "cp -r skills/<name> ~/.claude/skills/",
            projectLevel: ".claude/skills/",
          },
          {
            agent: "Codex / Cursor 等",
            userLevel: "按该工具的 skills/prompt 约定引入 SKILL.md 全文",
            projectLevel: "同用户级",
          },
        ],
      },
      deps: "vesti-handoff 独立可用;vesti-memory 需要 VESTI 桌面端(或 @vesti/mcp)提供 MCP 工具。",
    },
  },
  download: {
    kicker: "下载",
    title: "两款产品,一个记忆闭环",
    subtitle: "在 Agent 真正工作的地方捕获——浏览器里,以及本机的 CLI 编程 Agent 里",
    extension: {
      meta: "浏览器扩展",
      title: "心迹 Vesti 浏览器扩展",
      description:
        "自动捕获 ChatGPT、Claude、Gemini、DeepSeek、通义、豆包、Kimi、元宝八大平台的网页对话——结构化、可检索、本地优先。",
      store: "Chrome 应用商店",
      installNow: "立即安装",
      manualZip: "手动安装包",
      manualSteps: "手动安装步骤",
      steps: [
        "下载并解压安装包。",
        "打开 chrome://extensions。",
        "开启开发者模式。",
        "选择“加载已解压的扩展程序”并选中该文件夹。",
      ],
    },
    desktop: {
      meta: "桌面应用 · Windows",
      title: "面向编程 Agent 的 Vesti 桌面端",
      description:
        "捕获 Claude Code、Cursor、Kimi Code、Codex 的本机会话,沉淀为 L0–L3 分层记忆系统,内置 MCP server,任何 Agent 均可挂载。",
      downloadWindows: "下载 Windows 版",
      github: "GitHub",
    },
  },
  footer: {
    copyright: "© 2026 心迹群岛(南京)智能科技有限公司",
    skills: "技能包",
    enterprise: "企业服务",
    news: "动态",
    about: "关于",
    github: "GitHub",
    install: "安装",
  },
  enterprise: {
    hero: {
      kicker: "企业服务",
      title: "本地优先的企业知识 Agent,FDE 式交付",
      subtitle:
        "我们的工程师进驻你的团队,用 4–20 周把一个真实场景变成跑得起来、测得出数、可一键复测的 Agent 系统。",
      ctaPrimary: "在 GitHub 上联系",
      ctaSecondary: "交付案例",
      stats: [
        { value: "4", label: "个 FDE 交付项目" },
        { value: "4–20", label: "周交付到生产" },
        { value: "60→2", label: "分钟完成合规咨询" },
        { value: "20/20", label: "国企标杆真实案例评测" },
      ],
    },
    paradigm: {
      kicker: "交付主线",
      steps: [
        {
          title: "采集与解析",
          description: "真实业务数据,合规采集。",
        },
        {
          title: "结构化知识库",
          description: "条款级、可编辑、归你所有。",
        },
        {
          title: "Agent 输出",
          description: "每条结论都带证据链。",
        },
        {
          title: "人工复核",
          description: "最终关卡永远是人。",
        },
      ],
    },
    differentiators: {
      kicker: "为什么是 Vesti",
      title: "三条写进交付标准的承诺",
      items: [
        {
          title: "数据不出边界",
          description:
            "本地化/私有化部署,纯内网可跑,SHA-256 审计留痕;满足国企合规与等保 2.0 要求。",
        },
        {
          title: "AI 绝不越权",
          description:
            "证据分级、无据拒答、分歧上交人工。AI 提建议,人来做决定——我们敢把这条写进交付标准。",
        },
        {
          title: "效果可量化",
          description:
            "每次交付附带回归测试集与量化 KPI;验收是现场一键复测,不是看演示。",
        },
      ],
    },
    cases: {
      kicker: "交付案例",
      title: "已交付、可量化、可复测",
      labels: {
        client: "客户",
        what: "我们怎么做",
        stack: "技术栈",
        outcomes: "量化成果",
      },
      items: [
        {
          tag: "国企合规",
          status: "已交付",
          client: "南京保利大剧院(保利集团)",
          title: "为国有演艺集团打造的合规 Agent",
          challenge: "把整套规章制度体系变成条款级可追溯的合规 Agent。",
          what: "结构化 135 份制度文件、8,148 个条款并建立语义向量;条款级可追溯的合规问答、文件审查、写作辅助与制度比对。现场落地四个业务 Agent:采购七步法、采购副驾、合同深度审查、专家评审团。",
          stack:
            "Flask + SQLite 私有化单机部署;FTS5 关键词 + MiniLM 向量混合召回(RRF 融合、查询改写、证据分级、无据拒答);DeepSeek 主用 + qwen-plus 内网网关 failover,全离线可跑;SHA-256 审计链;Docker。",
          outcomes:
            "123 条回归测试全部通过,真实案例评测 20/20。合规咨询 60 分钟 → 2 分钟,合同审查 3 小时 → 3 分钟。被客户选送参加保利集团首届 AI 创新大赛。",
        },
        {
          tag: "营销内容",
          status: "合同 ZYZD-VESTI-0001-02",
          client: "自由地(旅行品牌)",
          title: "为旅行品牌打造的社媒内容工作台",
          challenge: "为三个企业账号生产日常内容,同时保住每个账号的调性。",
          what: "3 个企业账号(2 个小红书 + 1 个抖音):真实浏览器自动化合规采集公开数据(无 cookie、不绕验证码);可编辑的树状知识库;跨平台热点聚类(可跟/观望/避雷);按各账号调性日产脚本与图文,支持交互式改稿。",
          stack:
            "Next.js 16 + Fastify 5(Zod/OpenAPI)+ BullMQ workers + Chrome 扩展采集器 + Node SQLite;Kimi k3 推理模型;多 Agent 审校管线(提取/风格/4 评审/仲裁,≥85 分通过)。",
          outcomes:
            "语料条目 141 条,知识库质量分 94.4;成稿编辑评审得分 86–92;端到端 pnpm verify:flow 验证通过。",
        },
        {
          tag: "工业文档",
          status: "已交付 v2 终版",
          client: "某轮胎制造商(出口认证)",
          title: "工业标准 OCR Agent",
          challenge: "把 78 页扫描版国家标准结构化,一个数字都不许编。",
          what: "全自动结构化 78 页扫描版菲律宾国家标准 PNS 25:1994:48 个参数(26 轿车胎 + 14 T 型 + 8 TWI),每项附条款号、英文原文证据(≤220 字符)、页码与置信度;与人值不一致的一律标记“需人工复核”——不做任何编造。",
          stack:
            "PyMuPDF 160 DPI 渲染 + RapidOCR 本地识别,坐标聚类重建表格;DeepSeek 推理模型全上下文抽取;确定性校验 + LLM 复核 + 重抽取闭环。",
          outcomes: "已交付 v2 终版;22 个解析参数中 21 个高置信。",
        },
        {
          tag: "自用工具 · 可产品化",
          status: "v2 已日常使用",
          client: "蜂觅 BeeMi(KOL 发现,自用)",
          title: "KOL 发现 Agent",
          challenge: "一句话进去,一份打分好的达人名单出来——支撑我们自己的 GEO 推广业务。",
          what: "一句自然语言(“找 30 个情侣博主,5 万以上粉丝,报价 2 万以内”)→ 结构化检索条件 → 合规采集 → 打分、跟进与导出。",
          stack:
            "零依赖 Python + SQLite 本地应用;规则解析为主、Kimi AI 兜底;S–D 互动评级并附 CPM 估算。",
          outcomes: "v2 已日常使用,池内 25 位真实达人。重点是跑通的工作闭环,而非数据规模。",
        },
      ],
    },
    fde: {
      kicker: "交付模式",
      title: "驻场工程师交付,不是 PPT",
      subtitle: "4–20 周驻场节奏——交接不绑定我们",
      steps: [
        {
          title: "驻场调研",
          description: "工程师进驻你的团队,先砍掉伪需求,再谈开发。",
        },
        {
          title: "私有化构建",
          description: "系统为你的场景而建,在你的边界之内。",
        },
        {
          title: "带回归测试集交付",
          description: "每次交付附带回归测试集与量化 KPI。",
        },
        {
          title: "一键复测验收",
          description:
            "验收是现场一键复测。合同可约定验收指标与复测方式;交接包含完整代码、运行库与文档,不绑定我们。",
        },
      ],
    },
    verticals: {
      kicker: "主攻方向",
      title: "三个垂域",
      items: [
        {
          title: "国企/事业单位制度合规",
          description: "主攻方向——一个标杆,到集团体系,到国资市场。",
        },
        {
          title: "营销内容生产与达人投放",
          description: "现金流业务——内容工作台与达人工具。",
        },
        {
          title: "工业标准文档结构化",
          description: "技术名片——工业级文档结构化。",
        },
      ],
    },
    platform: {
      kicker: "平台层",
      title: "每次交付背后的记忆栈",
      items: [
        {
          name: "@vesti/memory-core",
          title: "记忆内核授权",
          description:
            "Vesti 记忆内核以可嵌入包的形式授权——无 Electron、无网络依赖。LLM 与 embedding 均为注入式接口,可跑在你自己的模型上,嵌入任何企业 Agent 系统。",
        },
        {
          name: "vesti-mcp",
          title: "MCP 集成",
          description:
            "生产级 MCP server,让组织内每个 Agent 挂载统一记忆层。任何 MCP 兼容的 Agent 均可接入,跨工具、跨团队共享召回。",
        },
        {
          name: "vesti-gate + 认证服务端",
          title: "私有化部署",
          description:
            "vesti-gate 是把 key 藏在服务端的流式 LLM 网关,逐请求计量、按 IP 限流、多上游 failover——已在生产环境运行。配套会员/认证服务端规格:PostgreSQL 16、Ed25519 JWT、微信/QQ OAuth,支持完全私有化部署。",
        },
        {
          name: "RL 数据管线",
          title: "数据合作",
          description:
            "建立在用户显式同意之上的会话数据采集管线,PII 双端过滤,境内服务器存储,面向 RL 训练场景。",
        },
      ],
    },
    contact: {
      title: "在做需要记忆的 Agent?",
      subtitle: "通过 GitHub 联系我们——开个 issue 或发起讨论,我们会回复",
      cta: "通过 GitHub 联系",
      teamNote:
        "由南京大学、复旦大学、上海交通大学团队打造——AI Hackathon Tour 全国总决赛金奖、GOSIM Paris 2026 Frontier Creators 入选团队。",
      teamNoteLink: "认识团队",
    },
  },
  about: {
    hero: {
      kicker: "关于",
      title: "一支真把东西做出来的团队",
      subtitle:
        "Vesti 是本地优先的 AI 记忆基础设施,由一支来自南京大学、复旦大学、上海交通大学的跨学科团队在南京打造。",
    },
    teamIntro: {
      kicker: "团队",
      title: "七个学科,一套记忆栈",
      description:
        "7 名核心成员、6 人全职,覆盖计算生物学、软件工程、人工智能、金融、社会学、哲学、信息技术 7 个学科。团队共事 2–3 年以上,63 天、463 次提交,从零到上线。",
      photoAlt: "Vesti 团队在南京。",
    },
    company: {
      kicker: "公司",
      facts: [
        { label: "公司", value: "心迹群岛(南京)智能科技有限公司" },
        {
          label: "成立",
          value: "2026 年 4 月 28 日 · 注册于南京市建邺区科技企业孵化器",
        },
        {
          label: "定位",
          value: "本地优先的 AI 记忆基础设施与下游 Agent 服务",
        },
        { label: "开源", value: "核心代码 MIT 开源 · GitHub 388 stars" },
        { label: "知识产权", value: "2 项软件著作权申请中 · 1 项专利" },
        {
          label: "商业化",
          value: "Freemium 订阅制,2026 年 7 月启动付费——首月付费用户 100+,留存率 52%",
        },
      ],
    },
    members: {
      kicker: "核心成员",
      items: [
        {
          name: "He Feng · 何锋",
          role: "创始人 & CEO",
          school: "南京大学 计算生物学",
          highlight:
            "iGEM 国际大赛金牌 + AI 赛道单项最佳(学生队长);负责系统架构与 Agent 流水线;持有专利 1 项。",
          photoAlt: "何锋个人照片",
        },
        {
          name: "Cao Zheng · 曹政",
          role: "CTO · 系统架构",
          school: "南京大学 软件工程",
          highlight:
            "美团跨端框架开发实习,覆盖 iOS/Android/鸿蒙三端;南京大学 OpenHarmony 俱乐部主席。",
        },
        {
          name: "Su Yicheng · 苏祎成",
          role: "产品架构 · Agent",
          school: "复旦大学 哲学 + 统计",
          highlight:
            "设计 Agent 决策链与分类置信度体系;建立 Prompt-as-Code 版本化管理机制。",
        },
        {
          name: "Gong Zihan · 龚子涵",
          role: "AI 工程 · RAG",
          school: "复旦大学 金融 + AI",
          highlight: "负责本地 RAG 检索管线——Recall@5 = 1.000,万条向量扫描 < 40ms。",
        },
        {
          name: "Huang Chenxi · 黄晨熙",
          role: "设计 · UX",
          school: "南京大学 社会学",
          highlight: "负责用户研究与产品视觉;建立 800+ 种子用户反馈机制。",
        },
        {
          name: "Fan Sizhe · 范思哲",
          role: "运营 · 增长",
          school: "南京大学 信息技术",
          highlight:
            "科大讯飞校园大使;腾讯青科实训营产品经理;AI Hackathon Tour 全国联赛队长。",
        },
        {
          name: "Wang Xinyu · 王馨雨",
          role: "研发",
          school: "上海交通大学 直博(计算生物学)",
          highlight:
            "中国国际大学生创新大赛国家级铜奖 ×2;全国大学生生命科学竞赛国家二等奖 ×2。",
        },
      ],
    },
    milestones: {
      kicker: "里程碑",
      items: [
        {
          date: "2026.02",
          title: "项目启动",
          description: "跨学科团队组建,63 天完成核心开发。",
        },
        {
          date: "2026.04",
          title: "上架与金奖",
          description:
            "产品上架 Chrome Web Store;AI Hackathon Tour 全国总决赛金奖(赛道最佳),周志华院士等出席颁奖;公司注册成立,落地建邺区孵化器。",
        },
        {
          date: "2026.05",
          title: "GOSIM 巴黎",
          description:
            "入选 GOSIM Paris 2026 Frontier Creators Spotlight,赴巴黎 Station F 展出,获 Audience Favorite Award。",
        },
        {
          date: "2026.06",
          title: "奖项与种子资金",
          description:
            "南客松 S2 赛道金奖(阶跃星辰特别金奖);建邺创业大赛一等奖(参赛项目第一,奖金 2 万元);获 Delta X 种子期资助。",
        },
        {
          date: "2026.07",
          title: "产品矩阵与付费",
          description:
            "扩展 + 桌面应用 + Skill + MCP 产品矩阵上线;启动付费运营,首月付费用户 100+,留存率 52%。",
        },
      ],
      mediaKicker: "媒体与社区",
      media: [
        "《人民日报》《南京发布》等媒体报道。",
        "中科院他山青年系列专题分享。",
        "受邀入驻南京大学科创实验室。",
      ],
    },
    gallery: {
      kicker: "瞬间",
      items: [
        { caption: "Vesti 团队在南京。" },
        { caption: "AI Hackathon Tour 全国总决赛金奖颁奖。" },
        { caption: "与 AI Hackathon Tour 决赛选手合影。" },
        { caption: "GOSIM 2026,巴黎 Station F 的 Vesti 展台。" },
        { caption: "GOSIM Paris 2026 Frontier Creators Spotlight 证书。" },
        { caption: "GOSIM Paris 2026 Audience Favorite Award 颁奖。" },
        { caption: "南客松 S2 金奖。" },
      ],
    },
    contact: {
      kicker: "联系方式",
      title: "与我们合作",
      person: "何锋,创始人 & CEO",
      address: "南京市建邺区永初路 8 号 T4 栋 12 层 1205-78",
    },
  },
  news: {
    kicker: "动态",
    title: "发布与动态",
    backHome: "← 返回首页",
  },
}
