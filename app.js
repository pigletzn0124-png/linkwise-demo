const roleMeta = {
  service: "服务",
  sales: "销售/销支",
  solution: "解决方案",
  delivery: "交付项目经理",
  planning: "企划业管",
  pmo: "研发 PMO",
  product: "产品",
  finance: "财务",
};

const events = [
  {
    id: "technova-renewal",
    category: "收入风险",
    status: "候选待服务确认",
    priority: "高",
    title: "TechNova｜2026续约窗口风险",
    subtitle: "续约剩 42 天，直播回放问题叠加核心班主任活跃下降。",
    customer: "TechNova 集团",
    node: "续约窗口 T-42",
    amount: "风险金额 ¥420万",
    owner: "服务负责人 张岚",
    due: "48 小时内完成首轮干预",
    primaryRole: "service",
    summary: "续约剩 42 天 · 风险金额 ¥420万 · 待服务确认",
    steps: [
      "读取服务工单、客户群反馈、培训使用率、CRM 续约窗口和合同金额。",
      "形成候选事件：体验问题、使用下降和续约窗口同时出现，可能影响本年度续约。",
      "服务先确认客户健康状态，销售/销支确认续约推进，研发 PMO 确认修复窗口。",
      "系统生成跨部门动作，并按责任人、截止时间和输出物进入闭环追踪。",
      "回写客户复盘结果、修复承诺和续约推进状态，沉淀为后续战略客户经营样本。",
    ],
    roles: {
      service: {
        scenario: "客户健康干预",
        question: "TechNova 是否需要今天主动干预？服务侧要先解释什么？",
        status: "主演示视角",
        confidence: "证据充分度 86%",
        sources: [
          "服务工单：近 7 天 4 条直播回放卡顿反馈",
          "客户群：培训负责人两次提到“影响复训安排”",
          "使用数据：核心班主任活跃下降 22%",
          "CRM：续约窗口剩 42 天",
        ],
        contextSummary: "客户处在续约窗口，负面反馈已经影响复训安排。",
        contextDetail: "服务侧需要确认影响范围、客户情绪和可对外说明的修复安排。",
        judgement: "建议确认为续约风险候选事件，并在 48 小时内完成客户干预。",
        reason: "单个工单不是经营事件；但它与续约时间、合同金额和使用下降叠加后，已经具备经营影响。",
        metrics: [
          ["续约窗口", "42 天"],
          ["风险金额", "¥420万"],
          ["使用下降", "22%"],
        ],
        evidence: [
          ["客户证据", "客户明确反馈复训安排受影响"],
          ["使用证据", "核心班主任活跃连续两周下降"],
          ["经营证据", "该客户本年度续约金额约 ¥420万"],
          ["协同证据", "需要研发 PMO 给出修复窗口，销售/销支同步续约节奏"],
        ],
      },
      sales: {
        scenario: "续约推进确认",
        question: "这个风险会影响哪笔续约？关键人和预算状态是否需要调整？",
        status: "待销售/销支确认",
        confidence: "证据充分度 82%",
        sources: [
          "CRM：续约商机处于方案确认阶段",
          "合同：上一年度合同金额 ¥420万",
          "服务：客户健康状态转黄",
          "客户群：关键人开始追问复训影响",
        ],
        contextSummary: "续约仍在推进，但客户关键人已把产品体验纳入续约评估。",
        contextDetail: "销售/销支需要确认关键人、预算、续约推进节点和需要服务补充的材料。",
        judgement: "建议将 TechNova 续约推进优先级上调，并补充客户沟通证据。",
        reason: "风险已经影响关键人判断，如果只在服务侧处理，销售可能错过续约窗口。",
        metrics: [
          ["商机阶段", "方案确认"],
          ["关键人", "2 位"],
          ["待补材料", "客户沟通记录"],
        ],
        evidence: [
          ["经营证据", "续约金额较高且窗口临近"],
          ["客户证据", "客户关键人多次追问复训安排"],
          ["服务证据", "客户健康状态由绿转黄"],
          ["流程证据", "需要同步更新续约推进计划"],
        ],
      },
      solution: {
        scenario: "续约价值证明",
        question: "续约沟通需要哪些方案、案例和价值证明材料？",
        status: "待方案补充",
        confidence: "证据充分度 74%",
        sources: [
          "历史方案：TechNova 复训场景方案",
          "案例库：同类战略客户续约案例",
          "服务纪要：客户关注稳定性和复训效率",
          "销售记录：续约会议预计 1 周内举行",
        ],
        contextSummary: "客户不是只要故障解释，还需要看到复训保障和长期价值。",
        contextDetail: "解决方案需要输出销售可直接使用的一页式价值证明。",
        judgement: "建议准备复训保障方案、同类案例和续约价值证明。",
        reason: "只有技术修复说明不足以支撑续约，客户还会评估后续培训运营收益。",
        metrics: [
          ["可复用案例", "3 个"],
          ["交付物", "1 页方案"],
          ["准备窗口", "3 天"],
        ],
        evidence: [
          ["方案证据", "已有同类复训保障模板"],
          ["客户证据", "客户关注复训安排稳定性"],
          ["销售证据", "续约会议临近"],
          ["协同证据", "销售/销支需要方案弹药支撑"],
        ],
      },
      pmo: {
        scenario: "经营优先排期",
        question: "直播回放问题是否需要从技术优先级升级为经营优先级？",
        status: "待 PMO 确认",
        confidence: "证据充分度 78%",
        sources: [
          "缺陷系统：近 7 天同类错误 126 次",
          "服务工单：TechNova 明确反馈影响复训",
          "CRM：客户续约窗口剩 42 天",
          "研发排期：下个修复窗口在本周四",
        ],
        contextSummary: "错误次数不是最高，但关联战略客户续约金额和客户复盘时间。",
        contextDetail: "研发 PMO 需要判断是否上调优先级，并给出可对客户说明的修复窗口。",
        judgement: "建议将该缺陷标记为经营优先处理，并同步客户可感知的修复计划。",
        reason: "经营优先级不是只看技术频次，还要看客户价值、续约窗口和对外承诺。",
        metrics: [
          ["错误次数", "126 次"],
          ["修复窗口", "本周四"],
          ["关联金额", "¥420万"],
        ],
        evidence: [
          ["技术证据", "缺陷集中在直播回放模块"],
          ["客户证据", "战略客户已明确感知影响"],
          ["经营证据", "续约窗口内风险放大"],
          ["排期证据", "本周具备修复窗口"],
        ],
      },
      planning: {
        scenario: "经营风险追踪",
        question: "TechNova 是否进入本周经营风险池？闭环结果看什么？",
        status: "待业管确认",
        confidence: "证据充分度 88%",
        sources: [
          "CRM：续约金额和窗口",
          "服务：客户健康状态",
          "研发 PMO：修复窗口",
          "销售/销支：续约推进计划",
        ],
        contextSummary: "该事件有明确金额、时间窗口、责任角色和可追踪动作。",
        contextDetail: "企划业管需要追踪客户健康恢复、修复承诺和续约推进状态。",
        judgement: "建议纳入本周经营风险池，按续约结果和动作闭环率跟踪。",
        reason: "它不是产品故障汇总，而是一条具体客户续约风险事件。",
        metrics: [
          ["风险等级", "高"],
          ["闭环动作", "4 项"],
          ["主责角色", "服务"],
        ],
        evidence: [
          ["经营证据", "风险金额 ¥420万"],
          ["客户证据", "关键人负面反馈清晰"],
          ["协同证据", "服务、销售/销支、研发 PMO 均有动作"],
          ["结果证据", "可追踪客户复盘和续约推进状态"],
        ],
      },
    },
    actions: [
      {
        ownerRole: "服务",
        owner: "张岚",
        title: "输出 TechNova 客户健康说明并约复盘会",
        due: "今日 18:00",
        output: "客户健康说明、影响范围、复盘会时间",
        status: "进行中",
      },
      {
        ownerRole: "研发 PMO",
        owner: "陈序",
        title: "确认直播回放修复窗口和对外说明口径",
        due: "明日 12:00",
        output: "修复计划、风险说明、可对客户承诺时间",
        status: "待确认",
      },
      {
        ownerRole: "销售/销支",
        owner: "林珊",
        title: "更新 TechNova 续约推进计划",
        due: "明日 18:00",
        output: "关键人状态、预算状态、下一次续约沟通安排",
        status: "待处理",
      },
      {
        ownerRole: "解决方案",
        owner: "何越",
        title: "补充复训保障方案和同类案例",
        due: "3 天内",
        output: "一页式续约价值证明",
        status: "待处理",
      },
      {
        ownerRole: "企划业管",
        owner: "马骁",
        title: "将 TechNova 纳入本周经营风险池并跟踪闭环",
        due: "本周经营例会前",
        output: "风险池记录、动作闭环率、续约推进状态",
        status: "待跟踪",
      },
    ],
  },
  {
    id: "mingde-handoff",
    category: "交付风险",
    status: "待销售/销支补齐",
    priority: "中",
    title: "明德教育｜合同签署后交接资料缺口",
    subtitle: "合同已签，销服交接表缺客户联系人和课程清单确认记录。",
    customer: "明德教育",
    node: "合同签署后 T+1 / 项目交接",
    amount: "合同金额 ¥210万",
    owner: "销售/销支负责人 林珊",
    due: "1 个工作日内补齐资料",
    primaryRole: "sales",
    summary: "合同已签 · 资料缺口 2 项 · 服务分配待处理",
    steps: [
      "读取合同归档、销服交接表、服务申请邮件、课程清单和服务分配状态。",
      "形成候选事件：合同已签但交接资料缺口可能影响交付启动。",
      "销售/销支补齐交接资料，解决方案补充售前承诺，服务确认接收条件。",
      "系统生成资料补齐、服务分配和首次沟通准备动作。",
      "回写交接完成状态和服务分配结果，避免后续交付启动返工。",
    ],
    roles: {
      sales: {
        scenario: "合同交接资料补齐",
        question: "服务分配前，哪些交接资料还缺？谁负责补？",
        status: "主演示视角",
        confidence: "证据充分度 87%",
        sources: [
          "合同系统：双方用印已完成",
          "销服交接表：客户联系人缺失",
          "课程清单：客户确认记录未上传",
          "服务申请邮件：已发起但待补附件",
        ],
        contextSummary: "合同已经完成，但服务侧无法凭不完整资料启动交付准备。",
        contextDetail: "销售/销支需要补齐客户联系人、课程清单确认记录和服务申请附件。",
        judgement: "建议确认为项目交接信息衔接风险，先由销售/销支补齐资料。",
        reason: "这不是普通资料待办；它已经影响服务分配和客户首次交付体验。",
        metrics: [
          ["待补资料", "2 项"],
          ["处理窗口", "1 天"],
          ["影响节点", "服务分配"],
        ],
        evidence: [
          ["流程证据", "合同签署后应进入项目交接"],
          ["材料证据", "销服交接表缺客户联系人"],
          ["客户证据", "课程清单仍需客户确认记录"],
          ["协同证据", "服务分配依赖完整资料"],
        ],
      },
      solution: {
        scenario: "售前承诺交接",
        question: "售前承诺是否已经完整同步给服务和交付？",
        status: "待方案补充",
        confidence: "证据充分度 72%",
        sources: [
          "售前方案：包含定制培训路径",
          "演示纪要：客户关注上线节奏",
          "合同条款：课程服务项已写入",
          "交接表：未附一页式方案摘要",
        ],
        contextSummary: "客户购买理由和关键承诺还没有被服务侧完整看到。",
        contextDetail: "解决方案需要补充客户关注点、不可遗漏承诺和价值目标。",
        judgement: "建议补充售前承诺摘要，作为项目交接附件。",
        reason: "交接资料不是只交字段，还要把客户为什么买、最关心什么交出去。",
        metrics: [
          ["承诺摘要", "1 份"],
          ["客户关注点", "4 条"],
          ["影响角色", "服务/交付"],
        ],
        evidence: [
          ["方案证据", "售前阶段已有定制培训路径"],
          ["客户证据", "客户关注快速上线和课程清单"],
          ["材料证据", "交接表未附方案摘要"],
          ["协同证据", "服务首次沟通需要承接售前承诺"],
        ],
      },
      service: {
        scenario: "服务接收条件确认",
        question: "服务侧现在能不能接？首次客户沟通还缺什么？",
        status: "待服务确认",
        confidence: "证据充分度 80%",
        sources: [
          "服务分配邮件：待处理",
          "合同条款：平台开通和课程服务项已签",
          "销服交接表：客户联系人缺失",
          "课程清单：待客户确认",
        ],
        contextSummary: "服务项已签，但首次服务沟通的信息准备不完整。",
        contextDetail: "服务侧需要先确认接收条件，避免客户首次沟通时反复追问基础信息。",
        judgement: "建议暂缓正式分配，待关键交接资料补齐后启动首次沟通。",
        reason: "资料缺口会造成服务准备不足，影响客户对交付启动的第一印象。",
        metrics: [
          ["服务项", "3 类"],
          ["资料缺口", "2 项"],
          ["启动风险", "中"],
        ],
        evidence: [
          ["合同证据", "服务项已写入合同"],
          ["材料证据", "联系人和课程清单确认缺失"],
          ["流程证据", "服务分配仍待处理"],
          ["客户证据", "客户要求尽快确认上线节奏"],
        ],
      },
      delivery: {
        scenario: "交付启动检查",
        question: "项目经理启动前，需要确认哪些范围、资源和承诺？",
        status: "待交付确认",
        confidence: "证据充分度 69%",
        sources: [
          "合同条款：交付范围已写入",
          "售前纪要：定制培训路径待交接",
          "项目计划：交付经理待分配",
          "服务申请：附件不完整",
        ],
        contextSummary: "项目范围有合同依据，但客户承诺和实施资源还没有完整落位。",
        contextDetail: "交付项目经理需要拿到范围、资源、承诺摘要后再启动项目计划。",
        judgement: "建议先关闭交接资料缺口，再正式启动项目。",
        reason: "交付启动不能只看合同已签，还要看客户承诺和资源是否可执行。",
        metrics: [
          ["资源状态", "待分配"],
          ["范围缺口", "1 项"],
          ["启动建议", "暂缓"],
        ],
        evidence: [
          ["合同证据", "交付范围已明确"],
          ["方案证据", "定制培训路径未交接完整"],
          ["流程证据", "交付经理未正式分配"],
          ["协同证据", "销售/销支与解决方案均需补资料"],
        ],
      },
      planning: {
        scenario: "交接节点追踪",
        question: "这个资料缺口是否会造成项目启动延迟？需要谁兜底？",
        status: "待业管确认",
        confidence: "证据充分度 83%",
        sources: [
          "业管系统：合同 KPI 认定待完成",
          "合同系统：归档完成",
          "服务分配：待处理",
          "销服交接表：附件缺口",
        ],
        contextSummary: "该事件影响项目从合同到交付的衔接效率。",
        contextDetail: "企划业管需要追踪资料补齐、KPI 认定和服务分配完成状态。",
        judgement: "建议纳入交付启动风险提醒，避免合同签署后卡在交接节点。",
        reason: "它不是流程本身错误，而是上下游信息没有被完整带到下一环。",
        metrics: [
          ["风险等级", "中"],
          ["待补资料", "2 项"],
          ["责任角色", "3 个"],
        ],
        evidence: [
          ["流程证据", "合同已签但服务分配未完成"],
          ["材料证据", "交接附件缺失"],
          ["时效证据", "服务分配要求 1 个工作日内处理"],
          ["协同证据", "需要销售/销支、方案、服务共同闭环"],
        ],
      },
    },
    actions: [
      {
        ownerRole: "销售/销支",
        owner: "林珊",
        title: "补齐销服交接表和课程清单确认记录",
        due: "今日 17:00",
        output: "完整交接表、客户联系人、课程清单确认记录",
        status: "待处理",
      },
      {
        ownerRole: "解决方案",
        owner: "何越",
        title: "补充售前承诺摘要",
        due: "今日 18:00",
        output: "客户关注点、不可遗漏承诺、方案摘要",
        status: "待确认",
      },
      {
        ownerRole: "服务",
        owner: "张岚",
        title: "确认服务接收条件并安排首次沟通",
        due: "明日 12:00",
        output: "接收确认、首次沟通议程",
        status: "待处理",
      },
      {
        ownerRole: "交付项目经理",
        owner: "周澈",
        title: "确认项目启动条件和资源准备状态",
        due: "明日 15:00",
        output: "启动检查结论、资源安排、风险提示",
        status: "待确认",
      },
      {
        ownerRole: "企划业管",
        owner: "马骁",
        title: "跟踪交接资料补齐和服务分配完成状态",
        due: "明日 18:00",
        output: "交接闭环记录、超时风险提醒",
        status: "待跟踪",
      },
    ],
  },
  {
    id: "huaqi-recognition",
    category: "营收风险",
    status: "待财务复核",
    priority: "高",
    title: "华启课堂｜初验后确收材料缺口",
    subtitle: "项目初验已完成，但验收邮件、培训记录和开通截图未进入材料包。",
    customer: "华启课堂",
    node: "初验后 / 本期确收",
    amount: "确收金额 ¥350万",
    owner: "交付项目经理 周澈",
    due: "本周五前完成材料包",
    primaryRole: "delivery",
    summary: "初验完成 · 材料缺口 3 项 · 影响本期确收",
    steps: [
      "读取合同、交付里程碑、验收邮件、培训记录、开通截图、回款和确收规则。",
      "形成候选事件：里程碑已达成但确收材料缺口可能影响本期收入确认。",
      "交付补齐证明材料，销售/销支推动客户确认，财务复核确收口径。",
      "系统生成材料清单、责任分派和截止时间，并追踪每项材料归档状态。",
      "回写确收结果、材料缺口原因和后续同类项目防呆规则。",
    ],
    roles: {
      delivery: {
        scenario: "确收材料包补齐",
        question: "哪些材料缺口会阻碍本期确收？交付侧今天补什么？",
        status: "主演示视角",
        confidence: "证据充分度 85%",
        sources: [
          "项目计划：初验里程碑已完成",
          "验收材料：客户验收邮件缺失",
          "培训记录：签到和照片未归档",
          "平台开通：截图已生成但未入材料包",
        ],
        contextSummary: "交付成果已经发生，但证明材料没有形成完整材料包。",
        contextDetail: "交付项目经理需要逐项补齐材料，并同步财务可接受的证明口径。",
        judgement: "建议确认为确收材料缺口事件，按材料项进入闭环。",
        reason: "它不是单纯文档整理问题，而是会影响本期收入确认的经营事件。",
        metrics: [
          ["材料缺口", "3 项"],
          ["确收金额", "¥350万"],
          ["截止时间", "本周五"],
        ],
        evidence: [
          ["交付证据", "初验里程碑已完成"],
          ["材料证据", "验收邮件、签到照片、开通截图缺失"],
          ["经营证据", "影响本期确收 ¥350万"],
          ["协同证据", "需销售/销支、财务和产品共同确认"],
        ],
      },
      finance: {
        scenario: "收入确认口径复核",
        question: "现有材料是否满足确收要求？哪些必须客户侧确认？",
        status: "待财务复核",
        confidence: "证据充分度 89%",
        sources: [
          "合同条款：收入确认条件已匹配",
          "回款记录：阶段款已到账",
          "客户主体：待财务复核",
          "验收材料：客户确认邮件缺失",
        ],
        contextSummary: "合同和回款条件基本满足，但客户侧确认材料仍不足。",
        contextDetail: "财务需要明确哪些材料可替代、哪些必须客户补发。",
        judgement: "建议暂不确收，待客户验收邮件和主体复核完成后再确认。",
        reason: "财务不能只凭交付说明确认收入，必须有合同约定或客户侧证明支撑。",
        metrics: [
          ["回款状态", "阶段款到账"],
          ["主体复核", "待确认"],
          ["必补材料", "1 项"],
        ],
        evidence: [
          ["财务证据", "合同编码已匹配"],
          ["回款证据", "阶段款已到账"],
          ["材料证据", "客户验收邮件缺失"],
          ["合规证据", "客户主体仍需复核"],
        ],
      },
      sales: {
        scenario: "客户确认推动",
        question: "客户侧谁能补发验收确认？销售/销支需要跟进什么？",
        status: "待销售/销支确认",
        confidence: "证据充分度 81%",
        sources: [
          "客户联系人：验收负责人已识别",
          "合同编码：已匹配",
          "财务清单：客户确认邮件为必补项",
          "交付记录：初验已完成",
        ],
        contextSummary: "客户侧确认是当前确收关键卡点。",
        contextDetail: "销售/销支需要推动客户补发验收确认，并同步客户主体复核信息。",
        judgement: "建议由销售/销支当天联系客户验收负责人补发确认邮件。",
        reason: "交付侧可以补内部材料，但客户确认需要销售/销支推动。",
        metrics: [
          ["客户确认", "待补发"],
          ["客户负责人", "1 位"],
          ["处理窗口", "2 天"],
        ],
        evidence: [
          ["客户证据", "验收负责人已识别"],
          ["交付证据", "初验已完成"],
          ["财务证据", "验收邮件为必补项"],
          ["经营证据", "影响本期确收"],
        ],
      },
      product: {
        scenario: "平台开通证明",
        question: "平台开通和使用记录能否作为确收支撑材料？",
        status: "待产品确认",
        confidence: "证据充分度 70%",
        sources: [
          "平台记录：账号已开通",
          "使用日志：课程访问正常",
          "产品后台：开通截图已生成",
          "确收清单：需平台开通证明",
        ],
        contextSummary: "平台开通事实已存在，但截图和使用摘要没有归档。",
        contextDetail: "产品侧需要提交平台开通截图和使用记录摘要。",
        judgement: "建议补充平台开通截图，作为确收材料包的一部分。",
        reason: "系统里有事实不等于财务可用材料，必须形成可归档证明。",
        metrics: [
          ["开通截图", "待提交"],
          ["使用记录", "正常"],
          ["归档状态", "未入包"],
        ],
        evidence: [
          ["产品证据", "账号已开通"],
          ["使用证据", "课程访问正常"],
          ["材料证据", "截图未归档"],
          ["财务证据", "确收清单要求开通证明"],
        ],
      },
      planning: {
        scenario: "本期营收风险追踪",
        question: "这笔确收风险是否影响本期目标？闭环责任如何拆？",
        status: "待业管确认",
        confidence: "证据充分度 90%",
        sources: [
          "财务：确收材料清单",
          "交付：里程碑完成状态",
          "销售/销支：客户确认状态",
          "产品：开通证明状态",
        ],
        contextSummary: "确收金额较高，缺口材料涉及多个责任方。",
        contextDetail: "企划业管需要按材料项追踪责任人、截止时间和最终确收结果。",
        judgement: "建议纳入本期营收确认风险池，并按材料项闭环。",
        reason: "该事件已经影响经营目标确认，不应散落在交付、财务和销售各自待办里。",
        metrics: [
          ["确收金额", "¥350万"],
          ["责任方", "4 个"],
          ["风险等级", "高"],
        ],
        evidence: [
          ["经营证据", "影响本期收入确认"],
          ["材料证据", "缺口材料 3 项"],
          ["协同证据", "交付、财务、销售/销支、产品均有动作"],
          ["结果证据", "确收状态可回写跟踪"],
        ],
      },
    },
    actions: [
      {
        ownerRole: "交付项目经理",
        owner: "周澈",
        title: "补齐培训签到、照片和阶段成果说明",
        due: "今日 18:00",
        output: "交付证明材料包",
        status: "进行中",
      },
      {
        ownerRole: "销售/销支",
        owner: "林珊",
        title: "推动客户补发验收确认邮件",
        due: "明日 12:00",
        output: "客户验收确认邮件",
        status: "待处理",
      },
      {
        ownerRole: "财务",
        owner: "赵敏",
        title: "复核客户主体与收入确认口径",
        due: "明日 18:00",
        output: "确收口径复核结论",
        status: "待复核",
      },
      {
        ownerRole: "产品",
        owner: "许宁",
        title: "提交平台开通截图和使用记录摘要",
        due: "今日 17:00",
        output: "开通截图、使用记录摘要",
        status: "待处理",
      },
      {
        ownerRole: "企划业管",
        owner: "马骁",
        title: "按材料项追踪确收风险闭环",
        due: "本周五 18:00",
        output: "材料补齐状态、确收结果、风险关闭记录",
        status: "待跟踪",
      },
    ],
  },
  {
    id: "yuanhang-poc-custom",
    category: "商机转化",
    status: "待方案确认",
    priority: "高",
    title: "远航保险｜付费 POC 定制需求转化判断",
    subtitle: "客户在付费 POC 中提出管理看板诉求，需要判断是否值得投入方案、产品和研发资源支撑签约转化。",
    customer: "远航保险",
    node: "付费 POC 第 3 周 / 签约评审前",
    amount: "预计合同 ¥600万",
    owner: "解决方案负责人 丁妃玲",
    due: "2 个工作日内给出转化策略",
    primaryRole: "solution",
    summary: "POC ¥18万 · 预计合同 ¥600万 · 待方案确认",
    steps: [
      "读取商务邮件、商机台账、POC 合同、试用反馈、需求评估和研发排期。",
      "形成候选事件：客户定制诉求正在影响签约转化，需要判断支持强度和承诺边界。",
      "解决方案确认价值验证路径，销售/销支确认签约影响，产品和研发 PMO 评估标准化价值与工作量。",
      "系统生成转化策略、替代方案、投入评估、客户期望管理和研发排期建议。",
      "回写 POC 转化结果、方案承诺边界、定制决策和复用样本。",
    ],
    roles: {
      product: {
        scenario: "定制边界与产品化判断",
        question: "这个客户诉求是否值得进入标准能力规划，还是只支撑本次转化？",
        status: "待产品评估",
        confidence: "证据充分度 84%",
        sources: [
          "需求评估邮件：客户要求按分支机构查看培训完成率和预警",
          "需求池：已有 4 家金融客户提出类似管理看板诉求",
          "CRM：正式合同预计 ¥600万，签约评审剩 12 天",
          "研发排期：当前看板能力需新增 2 个统计维度",
        ],
        contextSummary: "该诉求同时影响签约转化、产品边界和研发资源投入。",
        contextDetail: "产品需要判断是否进入标准能力规划，还是通过方案/配置先满足 POC 验证。",
        judgement: "建议支撑解决方案给出转化策略，同时确认该诉求是否进入标准能力规划。",
        reason: "它不是普通需求收集；客户已付费验证，诉求影响签约，并且具备多客户复用迹象。",
        metrics: [
          ["预计合同", "¥600万"],
          ["复用线索", "4 家"],
          ["评估窗口", "3 天"],
        ],
        evidence: [
          ["客户证据", "客户明确把分支机构看板作为签约评审关注项"],
          ["经营证据", "正式合同预计 ¥600万，POC 已付费"],
          ["产品证据", "同类金融客户已有重复诉求"],
          ["资源证据", "需研发新增统计维度和权限口径"],
        ],
      },
      solution: {
        scenario: "商机转化策略判断",
        question: "这个商机是否值得投入深度方案、POC 支持和产研评估？转化策略怎么走？",
        status: "主演示视角",
        confidence: "证据充分度 86%",
        sources: [
          "商务邮件：发起远航保险 POC 支持，客户两周内完成签约评审",
          "商机台账：该客户已连续 3 次评估管理看板需求",
          "POC 试用反馈：客户希望管理层看到红黄灯预警",
          "现有能力：已有组织维度筛选和导出能力",
          "案例库：两家保险客户用周报替代实时看板完成价值验证",
        ],
        contextSummary: "客户要的是管理可视化结果，当前关键不是马上定制，而是支撑签约转化。",
        contextDetail: "解决方案需要判断投入强度、价值验证路径和对客户可承诺的方案边界。",
        judgement: "建议投入深度方案支持，用现有筛选、导出和周报模板完成 POC 价值验证，并同步产品评估后续标准化可能。",
        reason: "商机金额较高、客户已付费验证且需求反复出现，值得投入方案支持；但 POC 阶段不宜直接承诺完整研发定制。",
        metrics: [
          ["预计合同", "¥600万"],
          ["反复需求", "3 次"],
          ["准备窗口", "2 天"],
        ],
        evidence: [
          ["商机证据", "商务邮件已明确签约评审时间和客户诉求"],
          ["台账证据", "同一客户多次评估管理看板相关需求"],
          ["方案证据", "客户核心目标是过程管控，不是指定技术实现"],
          ["能力证据", "现有组织筛选可覆盖部分需求"],
          ["协同证据", "需要销售、产品、研发 PMO 共同确认承诺边界"],
        ],
      },
      sales: {
        scenario: "签约转化影响确认",
        question: "这个定制诉求是不是签约必要条件？会影响合同金额和决策节奏吗？",
        status: "待销售/销支确认",
        confidence: "证据充分度 82%",
        sources: [
          "CRM：商机处于 POC 复盘阶段",
          "客户决策链：培训部和数科部共同参与评审",
          "销售邮件：客户询问是否能写入正式合同交付范围",
          "POC 合同：已付费 ¥18万，剩 9 天到期",
        ],
        contextSummary: "客户已把定制看板放进签约评审议题，但是否为硬性条件仍需确认。",
        contextDetail: "销售/销支需要判断客户真实门槛、合同范围和可接受承诺方式。",
        judgement: "建议销售/销支确认该诉求是否为签约前置条件，并同步合同承诺边界。",
        reason: "如果直接承诺定制，可能放大交付风险；如果不回应，可能影响 POC 转正式合同。",
        metrics: [
          ["POC 到期", "9 天"],
          ["签约评审", "12 天"],
          ["预计合同", "¥600万"],
        ],
        evidence: [
          ["经营证据", "POC 已付费且正式合同金额较高"],
          ["客户证据", "客户询问是否写入交付范围"],
          ["流程证据", "商机进入 POC 复盘阶段"],
          ["协同证据", "需要产品和研发 PMO 给出可承诺范围"],
        ],
      },
      pmo: {
        scenario: "研发投入与排期评估",
        question: "如果要做，这个定制需要多少研发投入？会挤占哪些排期？",
        status: "待 PMO 评估",
        confidence: "证据充分度 76%",
        sources: [
          "研发评估：新增机构维度统计和数据权限约 8 人日",
          "技术约束：历史数据口径需要补齐组织映射",
          "版本计划：下个小版本已冻结",
          "产品判断：需确认是否进入标准能力",
        ],
        contextSummary: "研发投入不算巨大，但涉及数据口径和权限边界，不能按简单页面改动承诺。",
        contextDetail: "研发 PMO 需要给出最小实现、正式版本和风险说明。",
        judgement: "建议先评估最小可验证版本，不直接承诺完整定制上线时间。",
        reason: "POC 支持既要服务签约，也要避免未确认产品边界前挤占研发排期。",
        metrics: [
          ["初估工作量", "8 人日"],
          ["版本状态", "已冻结"],
          ["技术风险", "中"],
        ],
        evidence: [
          ["技术证据", "需新增机构维度统计和权限口径"],
          ["排期证据", "当前小版本已冻结"],
          ["经营证据", "关联 ¥600万 商机转化"],
          ["产品证据", "需先确认是否产品化"],
        ],
      },
      planning: {
        scenario: "投入产出与资源优先级",
        question: "这个 POC 定制判断是否值得进入本周经营机会池？资源优先级如何定？",
        status: "待业管确认",
        confidence: "证据充分度 86%",
        sources: [
          "CRM：预计合同 ¥600万",
          "POC 成本：已投入售前和方案支持 5 人日",
          "研发评估：最小版本约 8 人日",
          "商机台账：远航保险已连续 3 次提出管理看板相关诉求",
        ],
        contextSummary: "该事件兼具签约转化价值和产品复用价值，需要经营层面判断投入优先级。",
        contextDetail: "企划业管需要追踪投入、转化结果和是否形成标准能力。",
        judgement: "建议纳入商机转化机会池，按投入产出和复用价值跟踪。",
        reason: "这不是单客户需求响应，而是销售转化、研发资源和产品路线共同决策。",
        metrics: [
          ["投入评估", "8 人日"],
          ["预计合同", "¥600万"],
          ["复用客户", "4 家"],
        ],
        evidence: [
          ["经营证据", "正式合同金额明确"],
          ["资源证据", "售前、方案、研发均已产生投入"],
          ["台账证据", "同一客户需求反复出现，值得纳入经营机会跟踪"],
          ["结果证据", "可追踪 POC 转化和产品化结论"],
        ],
      },
      delivery: {
        scenario: "后续交付复杂度评估",
        question: "如果这个能力写入合同，后续交付复杂度和客户预期如何管理？",
        status: "待交付评估",
        confidence: "证据充分度 69%",
        sources: [
          "交付经验：金融客户组织层级通常需要多轮口径确认",
          "客户要求：分支机构维度要支持月度复盘",
          "方案边界：POC 阶段尚未确认全部组织映射",
          "合同风险：若写入范围需明确验收口径",
        ],
        contextSummary: "该诉求如果进入合同范围，交付侧需要提前锁定口径和验收标准。",
        contextDetail: "交付项目经理需要评估实施复杂度，避免 POC 阶段承诺过度。",
        judgement: "建议在合同承诺前明确数据口径、验收标准和客户配合条件。",
        reason: "定制能力不是做完页面就结束，后续交付会受数据口径、组织映射和验收标准影响。",
        metrics: [
          ["口径待确认", "3 项"],
          ["验收风险", "中"],
          ["客户配合", "需数科部"],
        ],
        evidence: [
          ["交付证据", "金融客户组织层级复杂"],
          ["客户证据", "月度复盘依赖稳定口径"],
          ["合同证据", "若写入范围需明确验收标准"],
          ["协同证据", "销售、方案、产品需共同管理预期"],
        ],
      },
    },
    actions: [
      {
        ownerRole: "解决方案",
        owner: "丁妃玲",
        title: "确认 POC 转化策略和价值验证路径",
        due: "明日 18:00",
        output: "投入强度、替代方案、客户演示材料、承诺边界",
        status: "待处理",
      },
      {
        ownerRole: "产品",
        owner: "许宁",
        title: "判断管理看板诉求是否进入标准能力规划",
        due: "3 个工作日内",
        output: "做/不做结论、标准化价值、版本建议",
        status: "待评估",
      },
      {
        ownerRole: "销售/销支",
        owner: "林珊",
        title: "确认定制诉求是否为签约前置条件",
        due: "明日 12:00",
        output: "签约影响判断、合同承诺边界",
        status: "待确认",
      },
      {
        ownerRole: "研发 PMO",
        owner: "陈序",
        title: "评估最小可验证版本的研发投入",
        due: "2 天内",
        output: "工作量、技术风险、排期影响",
        status: "待评估",
      },
      {
        ownerRole: "企划业管",
        owner: "马骁",
        title: "跟踪 POC 投入产出和转化结果",
        due: "本周经营例会前",
        output: "机会池记录、资源优先级、转化状态",
        status: "待跟踪",
      },
      {
        ownerRole: "交付项目经理",
        owner: "周澈",
        title: "评估写入合同后的交付复杂度",
        due: "2 天内",
        output: "数据口径、验收标准、客户配合条件",
        status: "待评估",
      },
    ],
  },
];

let activeEvent = events[0];
let activeRoleId = activeEvent.primaryRole;
let activeStep = 0;
let activeCategory = "全部";

const categoryTabs = document.querySelector("#categoryTabs");
const eventList = document.querySelector("#eventList");
const roleSwitcher = document.querySelector("#roleSwitcher");
const terminologyModal = document.querySelector("#terminologyModal");
const openTerminologyButton = document.querySelector("#openTerminologyButton");
const mechanismModal = document.querySelector("#mechanismModal");
const openMechanismButton = document.querySelector("#openMechanismButton");
const rawDataModal = document.querySelector("#rawDataModal");
const sufficiencyModal = document.querySelector("#sufficiencyModal");
const evidenceSufficiencyButton = document.querySelector("#evidenceSufficiencyButton");
const toast = document.querySelector("#toast");

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function activeRoleData() {
  return activeEvent.roles[activeRoleId] || activeEvent.roles[activeEvent.primaryRole];
}

function activeRoleName() {
  return roleMeta[activeRoleId] || "当前角色";
}

function actionsForRole(roleName) {
  return activeEvent.actions.filter((action) => action.ownerRole === roleName);
}

function roleStepOutputs() {
  const role = activeRoleData();
  const roleName = activeRoleName();
  const myActions = actionsForRole(roleName);
  const otherRoles = [...new Set(activeEvent.actions.filter((action) => action.ownerRole !== roleName).map((action) => action.ownerRole))];
  const myActionText = myActions.length
    ? myActions.map((action) => `${action.title}（${action.due}）`).join("；")
    : "当前角色没有主责动作，需要完成判断确认，并关注上下游进展。";
  const outputText = myActions.length
    ? myActions.map((action) => action.output).join("；")
    : "确认意见、补充证据或驳回原因。";

  return [
    `读取${roleName}相关信号：${role.sources.slice(0, 2).join("；")}。`,
    `${roleName}当前判断：${role.judgement}`,
    `${roleName}待处理：${myActionText}`,
    `需要同步的上下游角色：${otherRoles.join("、") || "暂无"}。`,
    `${roleName}回写结果：${outputText}`,
  ];
}

function sourceSystemName(source) {
  const [prefix] = source.split("：");
  if (source.includes("CRM")) return "CRM";
  if (source.includes("神策") || source.includes("使用数据") || source.includes("使用日志") || source.includes("平台记录")) return "神策 / 产品行为数据";
  if (source.includes("生产") || source.includes("Bug") || source.includes("缺陷") || source.includes("错误")) return "生产 Bug 工单系统";
  if (source.includes("需求池") || source.includes("神兵") || source.includes("产品判断")) return "神兵需求管理系统";
  if (source.includes("邮件") || source.includes("快评")) return "邮件 / 快评";
  if (source.includes("商机台账") || source.includes("台账")) return "神兵云商机台账";
  if (source.includes("工时") || source.includes("POC 成本") || source.includes("研发评估")) return "工时 / 研发评估";
  if (source.includes("合同") || source.includes("回款") || source.includes("确收") || source.includes("财务")) return "业管 / 财务系统";
  if (source.includes("项目") || source.includes("交付") || source.includes("验收")) return "项目管理系统";
  if (source.includes("服务") || source.includes("工单")) return "服务工单系统";
  if (source.includes("客户群") || source.includes("客户")) return "客户沟通 / 意见反馈";
  if (source.includes("方案") || source.includes("案例") || source.includes("演示") || source.includes("售前")) return "方案知识库 / 售前记录";
  return prefix || "业务系统";
}

function rawSignalData(source) {
  const system = sourceSystemName(source);
  const sourceDetail = source.includes("：") ? source.split("：").slice(1).join("：") : source;
  const eventCode = activeEvent.id.toUpperCase().replaceAll("-", "_");
  const roleName = activeRoleName();
  const baseMeta = [
    ["事件对象", activeEvent.customer],
    ["业务节点", activeEvent.node],
    ["当前视角", roleName],
    ["同步状态", "只读同步 · 已脱敏"],
  ];

  if (system === "CRM") {
    return {
      system,
      reason: "用于确认客户分层、商机阶段、金额、时间窗口和签约/续约推进状态。",
      meta: [...baseMeta, ["对象 ID", `CRM-${eventCode}`], ["最近同步", "今日 09:32"]],
      records: [
        ["客户名称", activeEvent.customer],
        ["商机/合同节点", sourceDetail],
        ["预计/风险金额", activeEvent.amount],
        ["关键时间", activeEvent.due],
        ["负责人", activeEvent.owner],
      ],
    };
  }

  if (system === "神策 / 产品行为数据") {
    return {
      system,
      reason: "用于判断客户是否真的出现使用下降、功能阻塞或关键行为异常。",
      meta: [...baseMeta, ["数据周期", "近 14 天"], ["最近同步", "今日 08:10"]],
      records: [
        ["行为指标", sourceDetail],
        ["对比基线", "较前 14 天下降 18%-24%"],
        ["影响人群", "核心管理员 / 班主任 / 项目负责人"],
        ["关键路径", "登录 - 进入培训任务 - 查看明细 - 导出报表"],
        ["异常说明", "下降集中在当前事件关联客户和业务节点"],
      ],
    };
  }

  if (system === "生产 Bug 工单系统") {
    return {
      system,
      reason: "用于判断技术异常是否已经影响具体客户、模块、业务节点和修复承诺。",
      meta: [...baseMeta, ["工单编号", `BUG-${eventCode}-042`], ["最近同步", "今日 10:05"]],
      records: [
        ["问题摘要", sourceDetail],
        ["影响模块", "直播回放 / 数据看板 / 权限统计"],
        ["当前等级", "P2 · 待经营影响确认"],
        ["修复状态", "研发定位中，需 PMO 确认排期"],
        ["客户影响", `已关联 ${activeEvent.customer} 的经营事件判断`],
      ],
    };
  }

  if (system === "神兵需求管理系统") {
    return {
      system,
      reason: "用于判断客户诉求是一次性定制、可配置能力，还是值得进入标准产品路线。",
      meta: [...baseMeta, ["需求编号", `REQ-${eventCode}-018`], ["最近同步", "今日 11:20"]],
      records: [
        ["需求摘要", sourceDetail],
        ["需求类型", "客户定制诉求 / 标准能力候选"],
        ["复用线索", "已发现 3-4 个同类客户或场景"],
        ["当前状态", "待产品评估"],
        ["关联风险", "若承诺不清，可能影响合同范围和研发排期"],
      ],
    };
  }

  if (system === "邮件 / 快评") {
    return {
      system,
      reason: "用于在不增加业务录入负担的前提下，识别售前支持、POC 申请、需求评估和资源协调信号。",
      meta: [...baseMeta, ["邮件编号", `MAIL-${eventCode}-026`], ["最近同步", "今日 10:48"]],
      records: [
        ["邮件主题", sourceDetail],
        ["发起角色", "商务 / 销售 / 解决方案"],
        ["客户背景", `${activeEvent.customer} 处于 ${activeEvent.node}`],
        ["截止时间", activeEvent.due],
        ["识别结果", "已抽取客户、商机、诉求、金额、时间窗口和协同角色"],
      ],
    };
  }

  if (system === "神兵云商机台账") {
    return {
      system,
      reason: "用于识别商机持续跟进、输出物、难点、转化状态和客户反复关注点。",
      meta: [...baseMeta, ["台账行 ID", `OPP-${eventCode}-118`], ["最近同步", "今日 09:40"]],
      records: [
        ["台账摘要", sourceDetail],
        ["商机状态", "POC 复盘 / 签约评审前"],
        ["跟进事项", "方案演示、客户反馈、需求评估、承诺边界确认"],
        ["历史记录", "同类诉求已出现多次，需归纳客户真实关注点"],
        ["转化判断", "建议进入商机转化经营事件，由解决方案牵头确认策略"],
      ],
    };
  }

  if (system === "工时 / 研发评估") {
    return {
      system,
      reason: "用于判断售前、方案、研发和交付投入是否已经形成经营层面的投入产出问题。",
      meta: [...baseMeta, ["投入对象", `${activeEvent.customer} / ${roleName}`], ["最近同步", "今日 17:30"]],
      records: [
        ["投入摘要", sourceDetail],
        ["已投入", "售前/方案 5 人日，研发初评 8 人日"],
        ["后续风险", "若写入合同范围，需补充验收口径和排期承诺"],
        ["资源判断", "需业管确认是否进入经营机会池"],
        ["回写要求", "记录投入决策、转化结果和复用结论"],
      ],
    };
  }

  if (system === "业管 / 财务系统") {
    return {
      system,
      reason: "用于确认合同、审批、回款、确收、主体复核等经营口径是否满足闭环条件。",
      meta: [...baseMeta, ["流程编号", `OPS-${eventCode}`], ["最近同步", "今日 14:45"]],
      records: [
        ["流程/材料状态", sourceDetail],
        ["合同/确收金额", activeEvent.amount],
        ["当前节点", activeEvent.node],
        ["待补条件", "客户确认、主体复核、材料归档或审批节点"],
        ["经营影响", "可能影响签约、确收、回款或经营目标确认"],
      ],
    };
  }

  if (system === "项目管理系统") {
    return {
      system,
      reason: "用于确认项目计划、里程碑、交付范围、验收状态和项目风险。",
      meta: [...baseMeta, ["项目编号", `PRJ-${eventCode}`], ["最近同步", "今日 13:18"]],
      records: [
        ["项目状态", sourceDetail],
        ["当前里程碑", activeEvent.node],
        ["交付负责人", activeEvent.owner],
        ["风险项", "范围、资源、客户配合或验收材料待确认"],
        ["下一步", "补充项目风险说明并回写闭环状态"],
      ],
    };
  }

  if (system === "服务工单系统") {
    return {
      system,
      reason: "用于确认客户问题、服务响应、客户情绪和是否需要主动干预。",
      meta: [...baseMeta, ["工单编号", `SRV-${eventCode}-009`], ["最近同步", "今日 09:58"]],
      records: [
        ["工单摘要", sourceDetail],
        ["客户反馈", "影响复训安排 / 首次交付体验 / 验收确认"],
        ["响应状态", "服务已接收，待业务口径和后续动作"],
        ["情绪标签", "焦虑 / 催办 / 需要解释"],
        ["关联动作", "生成客户沟通、复盘或材料补齐任务"],
      ],
    };
  }

  return {
    system,
    reason: "用于补充当前事件判断所需的业务背景和证据。",
    meta: [...baseMeta, ["记录编号", `SRC-${eventCode}`], ["最近同步", "今日 12:00"]],
    records: [
      ["原始信号", sourceDetail],
      ["关联对象", activeEvent.customer],
      ["关联节点", activeEvent.node],
      ["证据用途", "支撑候选经营事件判断"],
      ["处理建议", "由当前角色确认是否纳入闭环"],
    ],
  };
}

function renderRawSignal(source) {
  const detail = rawSignalData(source);
  setText("#rawDataTitle", `${detail.system} · 原始记录`);
  setText("#rawDataSystem", detail.system);
  setText("#rawDataSignal", source);
  setText("#rawDataReason", detail.reason);
  document.querySelector("#rawMetaGrid").innerHTML = detail.meta
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
  document.querySelector("#rawRecordList").innerHTML = detail.records
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
  rawDataModal.hidden = false;
}

function sufficiencyValue() {
  const value = activeRoleData().confidence.match(/\d+/);
  return value ? Number(value[0]) : 70;
}

function sufficiencyBreakdown() {
  const target = sufficiencyValue();
  const role = activeRoleData();
  const sourceCount = role.sources.length;
  const evidenceCount = role.evidence.length;
  const hasAmount = /¥|金额|合同|确收|签约|续约|POC|投标/.test(`${activeEvent.amount} ${role.judgement} ${role.sources.join(" ")}`);
  const hasTime = /天|今日|明日|本周|到期|窗口|截止|评审/.test(`${activeEvent.due} ${activeEvent.node} ${role.sources.join(" ")}`);
  const hasRoleAction = actionsForRole(activeRoleName()).length > 0;

  const sourceScore = Math.max(45, Math.min(100, target + (sourceCount - 3) * 3));
  const impactScore = Math.max(45, Math.min(100, target + (hasAmount ? 2 : -12)));
  const urgencyScore = Math.max(45, Math.min(100, target + (hasTime ? 0 : -10)));
  const qualityScore = Math.max(45, Math.min(100, target + (evidenceCount - 4) * 2));
  const firstFourWeighted = sourceScore * 30 + impactScore * 25 + urgencyScore * 15 + qualityScore * 20;
  const roleScore = Math.max(45, Math.min(100, Math.round((target * 100 - firstFourWeighted) / 10)));

  return [
    {
      label: "多源一致性",
      weight: 30,
      score: sourceScore,
      reason: `${sourceCount} 条输入信号来自多个业务系统，并指向 ${activeEvent.customer} 的同一业务节点。`,
    },
    {
      label: "经营影响强度",
      weight: 25,
      score: impactScore,
      reason: `已关联 ${activeEvent.amount}，并影响 ${activeEvent.node}。`,
    },
    {
      label: "时间紧迫性",
      weight: 15,
      score: urgencyScore,
      reason: `当前处理窗口为 ${activeEvent.due}。`,
    },
    {
      label: "证据质量",
      weight: 20,
      score: qualityScore,
      reason: `${evidenceCount} 类证据可解释判断，输入信号可点开查看模拟原始数据。`,
    },
    {
      label: "角色确认状态",
      weight: 10,
      score: roleScore,
      reason: `${activeRoleName()}当前状态为“${role.status}”，并${hasRoleAction ? "已有主责待办" : "需要补充确认动作"}。`,
    },
  ];
}

function renderSufficiency() {
  const breakdown = sufficiencyBreakdown();
  const total = sufficiencyValue();

  setText("#sufficiencyEvent", `${activeEvent.title} · ${activeRoleName()}视角`);
  setText("#sufficiencyScore", `证据充分度 ${total}%`);
  document.querySelector("#scoreBreakdown").innerHTML = breakdown
    .map(
      (item) => `
        <article class="score-row">
          <div class="score-row-head">
            <strong>${item.label}</strong>
            <span>${item.score}% × ${item.weight}%</span>
          </div>
          <div class="score-bar"><i style="width: ${item.score}%"></i></div>
          <p>${item.reason}</p>
        </article>
      `
    )
    .join("");
}

function categories() {
  return ["全部", ...new Set(events.map((event) => event.category))];
}

function filteredEvents() {
  if (activeCategory === "全部") return events;
  return events.filter((event) => event.category === activeCategory);
}

function renderSummary() {
  const totalAmount = "¥1,580万";
  const pendingActions = events.reduce((sum, event) => sum + event.actions.filter((action) => action.status !== "已完成").length, 0);
  const cards = [
    ["候选经营事件", `${events.length} 件`, "均为具体客户 / 业务节点实例"],
    ["高优先级", `${events.filter((event) => event.priority === "高").length} 件`, "进入本周经营关注"],
    ["涉及金额", totalAmount, "由事件实例汇总，不替代单个事件"],
    ["待闭环动作", `${pendingActions} 项`, "含责任人、期限和输出物"],
  ];

  document.querySelector("#summaryCards").innerHTML = cards
    .map(
      ([label, value, note]) => `
        <article class="ant-card summary-card">
          <span>${label}</span>
          <strong>${value}</strong>
          <p>${note}</p>
        </article>
      `
    )
    .join("");
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = categories()
    .map(
      (category) => `
        <button class="category-tab ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");
}

function renderEventList() {
  eventList.innerHTML = filteredEvents()
    .map(
      (event) => `
        <button class="event-item ${event.id === activeEvent.id ? "active" : ""}" type="button" data-event="${event.id}">
          <div>
            <span class="ant-tag ant-tag-orange">${event.category}</span>
            <span class="ant-tag">${event.status}</span>
          </div>
          <strong>${event.title}</strong>
          <small>${event.summary}</small>
        </button>
      `
    )
    .join("");
}

function renderEventDetail() {
  setText("#eventCategory", activeEvent.category);
  setText("#eventStatus", activeEvent.status);
  setText("#eventTitle", activeEvent.title);
  setText("#eventSubtitle", activeEvent.subtitle);
  setText("#customerName", activeEvent.customer);
  setText("#eventNode", activeEvent.node);
  setText("#eventAmount", activeEvent.amount);
  setText("#eventOwner", activeEvent.owner);
}

function renderRoleSwitcher() {
  roleSwitcher.innerHTML = Object.keys(activeEvent.roles)
    .map(
      (roleId) => `
        <button class="role-chip ${roleId === activeRoleId ? "active" : ""}" type="button" data-role="${roleId}">
          ${roleMeta[roleId]}
        </button>
      `
    )
    .join("");
}

function renderRole() {
  const role = activeRoleData();
  activeStep = 0;

  setText("#scenarioEyebrow", `${activeRoleName()}视角`);
  setText("#scenarioTitle", role.scenario);
  setText("#scenarioStatus", role.status);
  setText("#businessQuestion", role.question);
  setText("#contextSummary", role.contextSummary);
  setText("#contextDetail", role.contextDetail);
  setText("#aiJudgement", role.judgement);
  setText("#aiReason", role.reason);
  setText("#confidence", role.confidence);
  setText("#closureTitle", `${activeRoleName()}待办与协同进展`);
  setText("#closureSubtitle", `优先展示${activeRoleName()}在该事件中的判断、动作和回写结果；其他角色作为上下游协同背景。`);
  setText("#stepOutput", roleStepOutputs()[0]);

  document.querySelector("#dataSources").innerHTML = role.sources
    .map((source, index) => `<li><button class="source-link" type="button" data-source-index="${index}">${source}</button></li>`)
    .join("");
  document.querySelector("#roleMetrics").innerHTML = role.metrics
    .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
  document.querySelector("#evidenceLedger").innerHTML = role.evidence
    .map(([label, detail]) => `<article><span>${label}</span><strong>${detail}</strong></article>`)
    .join("");

  renderRoleSwitcher();
  renderSteps();
  renderActions();
}

function renderSteps() {
  const stepNames = ["读取我的信号", "确认我的判断", "处理我的动作", "同步上下游", "回写结果"];
  document.querySelector("#runSteps").innerHTML = stepNames
    .map(
      (name, index) => `
        <li class="${index === activeStep ? "active" : ""} ${index < activeStep ? "done" : ""}">
          <button type="button" data-step="${index}">
            <span>${index + 1}</span>
            <strong>${name}</strong>
          </button>
        </li>
      `
    )
    .join("");
}

function renderActionCard(action, isMine) {
  return `
    <article class="action-card ${isMine ? "current-role" : "peer-action"}">
      <div class="action-head">
        <span class="ant-tag ${isMine ? "ant-tag-orange" : ""}">${action.ownerRole}</span>
        <span class="action-status">${action.status}</span>
      </div>
      <h3>${action.title}</h3>
      <dl>
        <div><dt>责任人</dt><dd>${action.owner}</dd></div>
        <div><dt>截止</dt><dd>${action.due}</dd></div>
        <div><dt>输出物</dt><dd>${action.output}</dd></div>
      </dl>
      <button class="ant-btn" type="button" data-complete>标记完成</button>
    </article>
  `;
}

function renderActions() {
  const roleName = activeRoleName();
  const myActions = actionsForRole(roleName);
  const peerActions = activeEvent.actions.filter((action) => action.ownerRole !== roleName);
  const mineHtml = myActions.length
    ? myActions.map((action) => renderActionCard(action, true)).join("")
    : `<article class="action-empty">当前角色暂无主责动作，需完成判断确认，并关注上下游协同结果。</article>`;

  document.querySelector("#actionTimeline").innerHTML = `
    <section class="action-section">
      <h3 class="action-section-title">我的待办</h3>
      ${mineHtml}
    </section>
    <section class="action-section secondary">
      <h3 class="action-section-title">上下游协同</h3>
      ${peerActions.map((action) => renderActionCard(action, false)).join("")}
    </section>
  `;
}

function renderEvent() {
  if (!activeEvent.roles[activeRoleId]) {
    activeRoleId = activeEvent.primaryRole;
  }
  renderSummary();
  renderCategoryTabs();
  renderEventList();
  renderEventDetail();
  renderRole();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function openTerminology() {
  terminologyModal.hidden = false;
}

function closeTerminology() {
  terminologyModal.hidden = true;
}

function openMechanism() {
  mechanismModal.hidden = false;
}

function closeMechanism() {
  mechanismModal.hidden = true;
}

function closeRawData() {
  rawDataModal.hidden = true;
}

function openSufficiency() {
  renderSufficiency();
  sufficiencyModal.hidden = false;
}

function closeSufficiency() {
  sufficiencyModal.hidden = true;
}

renderEvent();

evidenceSufficiencyButton.addEventListener("click", () => {
  openSufficiency();
});

openMechanismButton.addEventListener("click", () => {
  openMechanism();
});

openTerminologyButton.addEventListener("click", () => {
  openTerminology();
});

mechanismModal.addEventListener("click", (event) => {
  if (!event.target.closest("[data-close-mechanism]")) return;
  closeMechanism();
});

terminologyModal.addEventListener("click", (event) => {
  if (!event.target.closest("[data-close-terminology]")) return;
  closeTerminology();
});

rawDataModal.addEventListener("click", (event) => {
  if (!event.target.closest("[data-close-raw-data]")) return;
  closeRawData();
});

sufficiencyModal.addEventListener("click", (event) => {
  if (!event.target.closest("[data-close-sufficiency]")) return;
  closeSufficiency();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !terminologyModal.hidden) {
    closeTerminology();
  }
  if (event.key === "Escape" && !mechanismModal.hidden) {
    closeMechanism();
  }
  if (event.key === "Escape" && !rawDataModal.hidden) {
    closeRawData();
  }
  if (event.key === "Escape" && !sufficiencyModal.hidden) {
    closeSufficiency();
  }
});

document.querySelector("#dataSources").addEventListener("click", (event) => {
  const button = event.target.closest("[data-source-index]");
  if (!button) return;
  const source = activeRoleData().sources[Number(button.dataset.sourceIndex)];
  if (!source) return;
  renderRawSignal(source);
});

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  const nextVisible = filteredEvents();
  if (!nextVisible.some((item) => item.id === activeEvent.id)) {
    activeEvent = nextVisible[0] || events[0];
    activeRoleId = activeEvent.primaryRole;
  }
  renderEvent();
});

eventList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-event]");
  if (!button) return;
  const nextEvent = events.find((item) => item.id === button.dataset.event);
  if (!nextEvent) return;
  activeEvent = nextEvent;
  activeRoleId = nextEvent.primaryRole;
  renderEvent();
  showToast(`已切换经营事件：${nextEvent.title}`);
});

roleSwitcher.addEventListener("click", (event) => {
  const button = event.target.closest("[data-role]");
  if (!button) return;
  activeRoleId = button.dataset.role;
  renderRole();
  showToast(`已切换为${activeRoleName()}视角`);
});

document.querySelector("#runSteps").addEventListener("click", (event) => {
  const button = event.target.closest("[data-step]");
  if (!button) return;
  activeStep = Number(button.dataset.step);
  setText("#stepOutput", roleStepOutputs()[activeStep]);
  renderSteps();
});

document.querySelector("#runDemoButton").addEventListener("click", () => {
  activeStep = 3;
  setText("#stepOutput", roleStepOutputs()[3]);
  renderSteps();
  showToast(`${activeEvent.title} 已生成跨角色闭环动作`);
});

document.querySelector("#actionTimeline").addEventListener("click", (event) => {
  const button = event.target.closest("[data-complete]");
  if (!button) return;
  const card = button.closest(".action-card");
  card.classList.toggle("done");
  button.textContent = card.classList.contains("done") ? "已完成" : "标记完成";
});
