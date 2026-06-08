export const company = {
  nameEn: "UNITEX",
  nameZh: "宇泰",
  founded: "2012",
  tagline: "墙纸 · 布艺 · 皮革 · 地毯",
  taglineEn: "Wallcovering · Upholstery · Leather · Carpet",
  intro:
    "专注于室内设计与装修中的墙纸、布艺、皮革、地毯等材料的选材与应用落地方案，提供一站式服务。",
}

export const milestones = [
  { year: "2012", textZh: "宇泰成立", textEn: "Unitex founded" },
  { year: "2019", textZh: "Unitex × GaNache 合作", textEn: "Unitex × GaNache" },
  { year: "2020", textZh: "Unitex H 系列发布", textEn: "Unitex H Series launched" },
]

export type Product = {
  nameZh: string
  nameEn: string
  desc: string
  image: string
}

export const products: Product[] = [
  {
    nameZh: "墙纸",
    nameEn: "Wallcovering",
    desc: "从经典织纹到幻彩印刷，为空间赋予质感与气韵。",
    image: "/unitex/wallcovering.png",
  },
  {
    nameZh: "布艺 & 皮革",
    nameEn: "Upholstery & Leather",
    desc: "天然面料与合成皮革，兼顾触感、耐用与设计美学。",
    image: "/unitex/upholstery.png",
  },
  {
    nameZh: "地毯",
    nameEn: "Carpet",
    desc: "定制手工簇绒地毯，柔软脚感与图案细节并存。",
    image: "/unitex/carpet.png",
  },
]

export type Project = {
  nameZh: string
  nameEn: string
  location: string
  desc: string
  image: string
}

export const projects: Project[] = [
  {
    nameZh: "青岛钓鱼台国宾馆酒店",
    nameEn: "Diaoyutai State Guesthouse Hotel, Qingdao",
    location: "青岛 · Qingdao",
    desc: "由加拿大著名室内设计大师 Alessandro Munge 操刀，宇泰供应全部客房及走廊墙纸、一楼艺术玻璃屏风，以及御苑中餐厅、芳菲苑所有手绘刺绣画。",
    image: "/unitex/project-diaoyutai.png",
  },
  {
    nameZh: "深圳前海嘉里 JEN 酒店",
    nameEn: "Hotel JEN Qianhai, Shenzhen",
    location: "深圳 · Shenzhen",
    desc: "重新定义商旅酒店的先驱者，采用宇泰 U 系列幻彩印刷墙画，为现代商旅空间注入鲜明个性。",
    image: "/unitex/project-jen.png",
  },
  {
    nameZh: "三亚海棠湾长岛 JW 万豪",
    nameEn: "JW Marriott, Haitang Bay, Sanya",
    location: "三亚 · Sanya",
    desc: "为客房提供定制化装饰材料，满足高端酒店对品质与风格的双重需求。",
    image: "/unitex/project-jw.png",
  },
]

export const otherProjects = [
  "江门皇冠假日酒店",
  "海口罗牛山玖樾台",
  "武汉嘉里江城府",
  "长沙华润瑞府",
  "科伦坡香格里拉酒店",
  "澳门上葡京酒店",
  "澳门伦敦人酒店",
]

export const contact = {
  name: "DK CHEN",
  phone: "+86 136 0009 5299",
  email: "190984061@qq.com",
}
