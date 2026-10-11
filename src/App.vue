<script setup>
import { computed, ref } from 'vue'

const activeSection = ref('home')
const menuOpen = ref(false)
const showAllProjects = ref(false)

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'experience', label: '工作经历' },
  { id: 'projects', label: '项目经验' },
  { id: 'contact', label: '联系我' },
]

const skills = [
  { name: 'Vue 生态', percent: 94, detail: '主要技术栈 · Vue 2 / Vue 3 · Pinia' },
  { name: 'React 生态', percent: 65, detail: 'React 全家桶 · 有项目开发经验，使用频率较低' },
  { name: '工程化与构建', percent: 88, detail: 'Vite · 项目脚手架 · 规范化 · 模块化' },
  { name: 'JavaScript / TS', percent: 90, detail: 'ES6+ · TypeScript · 异步与数据处理' },
  { name: '跨端开发', percent: 86, detail: 'uni-app · 微信小程序 · H5 · App' },
  { name: 'Node.js / Java', percent: 55, detail: '基础语法与常见开发概念 · 可阅读和编写基础代码' },
]

const experiences = [
  {
    period: '2024.05 — 至今',
    company: '陕西壹祖源有限公司',
    role: '前端开发工程师',
    current: true,
    points: [
      '参与新项目从 0 到 1 的前端架构搭建、核心模块开发与持续优化。',
      '负责新人指导与代码规范落地，推动团队建立更清晰的工程化协作方式。',
      '针对团队技术难点组织讨论，评估方案并推动合理解决方案落地。',
    ],
  },
  {
    period: '2020.02 — 2024.03',
    company: '众行则（北京）科技有限公司',
    role: '前端开发工程师',
    points: [
      '独立负责多个业务项目的前端研发，覆盖后台管理、C 端、小程序与 H5。',
      '持续维护、迭代和升级新老项目，关注产品体验、稳定性与开发效率。',
      '主动提出产品改进和性能优化方案，协助团队解决复杂业务问题。',
    ],
  },
]

const projects = [
  {
    name: '神农大脑',
    type: '智能医疗 · 核心项目',
    period: '2024.04 — 至今',
    featured: true,
    color: 'mint',
    icon: '✦',
    stack: ['Vue 3', 'Hooks', 'Vite', 'Pinia'],
    description: '面向智能问诊场景的业务平台，围绕用户就诊流程提供智能化导诊和问诊服务。',
    contribution: '负责问诊模块与导诊模块的设计与开发，参与项目代码优化及业务体验打磨。',
  },
  {
    name: '大后台系统',
    type: '企业内部 · 管理平台',
    period: '2025.03 — 至今',
    featured: true,
    color: 'blue',
    icon: '⌘',
    stack: ['Vue 3', 'Hooks', 'Vite', 'Pinia'],
    description: '与神农大脑配套的内部管理系统，涵盖模块配置、商户管理、系统管理和异常管理。',
    contribution: '负责模块配置与系统管理模块，推进复杂后台业务的模块化实现。',
  },
  {
    name: '商户管理系统',
    type: '企业服务 · 管理平台',
    period: '2025.05 — 至今',
    featured: true,
    color: 'orange',
    icon: '◈',
    stack: ['Vue 3', 'Hooks', 'Vite', 'Pinia'],
    description: '服务商户运营的管理平台，提供报告查询、设备管理等核心业务能力。',
    contribution: '负责设备管理模块，完成核心业务流程和管理功能的前端实现。',
  },
  {
    name: '办鹿 · 微信小程序',
    type: '电商 · C 端产品',
    period: '2023.10 — 2024.03',
    featured: true,
    color: 'pink',
    icon: '↗',
    stack: ['uni-app', 'Vue 2', '微信小程序'],
    description: '面向年轻用户的正版潮玩电商小程序，支持商品分享、交易与履约全流程。',
    contribution: '独立完成从 0 到 1 的搭建，实现微信登录、下单支付、分享、订单、物流和客服等功能；针对首页大量数据加载进行性能优化。',
  },
  {
    name: '办鹿后台管理系统',
    type: '电商 · 运营后台',
    period: '2023.03 — 2023.09',
    featured: true,
    color: 'purple',
    icon: '▦',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia'],
    description: '配套电商运营后台，覆盖商城、财务、订单、系统管理及数据运营。',
    contribution: '独立完成项目搭建、权限体系、按钮级权限控制、数据可视化和 CSV 导入导出；针对 10 万量级数据导出进行优化。',
  },
  {
    name: '校宝系统 · C 端',
    type: '教育 SaaS · 用户端',
    period: '2022.07 — 2023.02',
    featured: true,
    color: 'cyan',
    icon: '◎',
    stack: ['Vue 2', 'Nuxt.js', 'SSR'],
    description: '面向教培行业的课程服务平台，为付费学生提供录播课程及账户服务。',
    contribution: '针对客户 SEO 需求引入 Nuxt 服务端渲染；完成课程浏览、账户体系及视频播放防盗链等功能。',
  },
  {
    name: '校宝 SaaS · 后台管理系统',
    type: '教育 SaaS · CRM',
    period: '2022.02 — 2022.07',
    featured: false,
    color: 'blue',
    icon: '▣',
    stack: ['Vue 2', 'Vue Router', 'ECharts'],
    description: '覆盖销售、学生、教学、财务等业务中心的综合 CRM 管理系统。',
    contribution: '独立完成项目搭建、权限分配、按钮级权限控制、数据可视化及大量 CSV 数据导入导出。',
  },
  {
    name: '惠普金融 / 金融超市',
    type: '金融 · H5',
    period: '2021.02 — 2022.01',
    featured: false,
    color: 'orange',
    icon: '＋',
    stack: ['uni-app', 'Vue 2', 'H5'],
    description: '金融产品和经营性贷款业务的移动端产品，提供产品浏览、详情、工具和数据展示。',
    contribution: '负责项目搭建、核心业务页面、数据可视化和基础方法封装。',
  },
  {
    name: '时光影院 / 舒草购物',
    type: '小程序 · C 端产品',
    period: '2020.04 — 2021.01',
    featured: false,
    color: 'pink',
    icon: '☆',
    stack: ['uni-app', '微信小程序'],
    description: '覆盖电影资讯、影院导航和线上购物的 C 端小程序项目。',
    contribution: '负责微信登录、电影详情动态加载、分页加载、首页、分类页和商品详情页等功能。',
  },
]

const visibleProjects = computed(() => showAllProjects.value ? projects : projects.filter((project) => project.featured))

function scrollTo(id) {
  activeSection.value = id
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function downloadResume() {
  window.print()
}
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#home" @click.prevent="scrollTo('home')">
        <span class="brand-mark">M</span>
        <span>MA.CHAO<span class="brand-dot">_</span></span>
      </a>

      <button class="menu-toggle" type="button" aria-label="打开菜单" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>

      <nav class="nav" :class="{ 'is-open': menuOpen }">
        <a
          v-for="item in navItems"
          :key="item.id"
          :class="{ active: activeSection === item.id }"
          :href="`#${item.id}`"
          @click.prevent="scrollTo(item.id)"
        >{{ item.label }}</a>
        <button class="nav-cta" type="button" @click="scrollTo('contact')">和我聊聊 <span>↗</span></button>
      </nav>
    </header>

    <main>
      <section id="home" class="hero section-wrap">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span> OPEN TO OPPORTUNITIES</div>
          <h1>把复杂的业务，<br /><em>做成简单的体验。</em></h1>
          <p class="hero-desc">你好，我是<strong>马超</strong>，一名专注于 Vue 生态的 Web 前端开发工程师，也具备 React 全家桶开发经验。<br />擅长从 0 到 1 搭建项目，也享受把每一个细节做到更好的过程。</p>
          <div class="hero-actions">
            <button class="primary-btn" type="button" @click="scrollTo('projects')">查看我的项目 <span>↓</span></button>
            <button class="text-btn" type="button" @click="downloadResume()">打印 / 保存简历 <span>↗</span></button>
          </div>
          <div class="hero-meta">
            <span><i>⌁</i> 西安 · 沣西新城</span>
            <span><i>◷</i> 5 年+ 前端经验</span>
          </div>
        </div>

        <div class="hero-art" aria-label="个人信息卡片">
          <div class="art-glow"></div>
          <div class="code-card">
            <div class="code-top"><span></span><span></span><span></span><label>profile.vue</label></div>
            <div class="code-lines">
              <p><b>01</b><span class="violet">const</span> developer = {</p>
              <p><b>02</b>&nbsp;&nbsp;name: <span class="green">'马超'</span>,</p>
              <p><b>03</b>&nbsp;&nbsp;role: <span class="green">'Frontend Engineer'</span>,</p>
              <p><b>04</b>&nbsp;&nbsp;focus: <span class="green">'Vue Ecosystem'</span>,</p>
              <p><b>05</b>&nbsp;&nbsp;experience: <span class="orange-text">5+</span>,</p>
              <p><b>06</b>&nbsp;&nbsp;status: <span class="green">'building'</span>,</p>
              <p><b>07</b>};</p>
            </div>
            <div class="code-cursor">▌</div>
          </div>
          <div class="float-badge badge-top"><span>✦</span><strong>Vue</strong><small>CRAFT</small></div>
          <div class="float-badge badge-bottom"><span>↗</span><strong>0 → 1</strong><small>PRODUCT BUILD</small></div>
          <div class="circle-stamp">FRONT<br />END<br /><small>MMXXV</small></div>
        </div>
      </section>

      <section id="about" class="about section-wrap section-block">
        <div class="section-heading">
          <span class="section-number">01 /</span>
          <div><h2>关于我</h2><p>不仅写代码，也理解产品。</p></div>
        </div>
        <div class="about-grid">
          <div class="about-intro">
            <p class="large-copy">从业务出发，<br /><span>让技术真正产生价值。</span></p>
            <p>我有 5 年以上前端开发经验，主要深耕 Vue 生态，也具备 React 全家桶开发经验（React 项目实践相对较少）。此外，我掌握 Node.js 和 Java 的基础语法与常见开发概念。工作中既能独立完成复杂业务，也重视团队协作、代码质量和用户体验。</p>
            <p>从电商、教育 SaaS、金融到智能医疗，我参与过多种业务形态，积累了从项目搭建、功能开发到上线维护和性能优化的完整经验。</p>
          </div>
          <div class="numbers-grid">
            <div class="number-item"><strong>5<span>+</span></strong><label>年开发经验</label></div>
            <div class="number-item"><strong>8<span>人</span></strong><label>团队带教经验</label></div>
            <div class="number-item"><strong>10<span>万</span></strong><label>级数据处理经验</label></div>
            <div class="number-item"><strong>3<span>端</span></strong><label>Web · H5 · 小程序</label></div>
          </div>
        </div>
        <div class="skill-row">
          <div v-for="skill in skills" :key="skill.name" class="skill-card">
            <div class="skill-card-head"><span>{{ skill.name }}</span><b>{{ skill.percent }}%</b></div>
            <div class="progress"><span :style="{ width: `${skill.percent}%` }"></span></div>
            <p>{{ skill.detail }}</p>
          </div>
        </div>
        <div class="certificates">
          <span class="cert-label">证书与认证</span>
          <span class="cert"><i>✓</i> 工信部 · WEB 高级开发工程师</span>
          <span class="cert"><i>✓</i> MTA · 前端开发工程师（中级）</span>
          <span class="cert"><i>✓</i> 鸿蒙相关学习经历</span>
        </div>
      </section>

      <section id="experience" class="experience section-wrap section-block">
        <div class="section-heading">
          <span class="section-number">02 /</span>
          <div><h2>工作经历</h2><p>在真实业务中持续成长。</p></div>
        </div>
        <div class="timeline">
          <article v-for="item in experiences" :key="item.company" class="timeline-item">
            <div class="timeline-marker"><span></span></div>
            <div class="timeline-period">{{ item.period }}<span v-if="item.current">CURRENT</span></div>
            <div class="timeline-content">
              <h3>{{ item.company }}</h3>
              <h4>{{ item.role }}</h4>
              <ul><li v-for="point in item.points" :key="point">{{ point }}</li></ul>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="projects section-wrap section-block">
        <div class="section-heading projects-heading">
          <div><span class="section-number">03 / SELECTED WORK</span><h2>项目经验</h2><p>每一个项目，都是一次解决问题的实践。</p></div>
          <span class="project-count">{{ projects.length }} <small>PROJECTS</small></span>
        </div>
        <div class="project-grid">
          <article v-for="(project, index) in visibleProjects" :key="project.name" class="project-card" :class="`theme-${project.color}`">
            <div class="project-card-top"><span class="project-index">0{{ index + 1 }}</span><span class="project-icon">{{ project.icon }}</span></div>
            <div class="project-card-body">
              <div class="project-type">{{ project.type }} <span>· {{ project.period }}</span></div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="contribution"><b>我的职责</b><span>{{ project.contribution }}</span></div>
              <div class="stack-list"><span v-for="tag in project.stack" :key="tag">{{ tag }}</span></div>
            </div>
          </article>
        </div>
        <button class="outline-btn" type="button" @click="showAllProjects = !showAllProjects">{{ showAllProjects ? '收起项目' : '查看全部项目' }} <span>{{ showAllProjects ? '↑' : '↓' }}</span></button>
      </section>

      <section id="contact" class="contact section-wrap section-block">
        <div class="contact-panel">
          <div class="contact-copy">
            <span class="section-number">04 / GET IN TOUCH</span>
            <h2>有好项目，<br /><em>一起做出来。</em></h2>
            <p>如果你正在寻找一位能快速理解业务、重视交付质量的前端工程师，欢迎联系我。</p>
          </div>
          <div class="contact-info">
            <a href="tel:18710327430"><span>PHONE</span><strong>187-1032-7430</strong><i>↗</i></a>
            <a href="mailto:chaoma0228@163.com"><span>EMAIL</span><strong>chaoma0228@163.com</strong><i>↗</i></a>
            <div class="contact-location"><span>LOCATION</span><strong>西安 · 沣西新城</strong></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer section-wrap"><span>© 2025 MA.CHAO</span><span>DESIGNED & BUILT WITH VUE</span><a href="#home" @click.prevent="scrollTo('home')">BACK TO TOP ↑</a></footer>
  </div>
</template>
