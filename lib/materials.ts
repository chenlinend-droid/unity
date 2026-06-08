export type Material = {
  index: string
  name: string
  nameEn: string
  category: string
  categoryEn: string
  origin: string
  originEn: string
  description: string
  descriptionEn: string
  image: string
}

export const materials: Material[] = [
  {
    index: "01",
    name: "卡拉拉白大理石",
    nameEn: "Calacatta Marble",
    category: "天然石材",
    categoryEn: "Natural Stone",
    origin: "意大利 · 托斯卡纳",
    originEn: "Tuscany, Italy",
    description:
      "纯净的乳白底色之上流淌着金灰色脉络，每一块都是不可复制的天然画卷，为空间注入雕塑般的庄重与光泽。",
    descriptionEn:
      "Pristine ivory ground threaded with golden-grey veins. Each slab is an irreproducible natural canvas, lending sculptural gravity and luminosity.",
    image: "/materials/marble.png",
  },
  {
    index: "02",
    name: "黑胡桃木饰面",
    nameEn: "American Walnut",
    category: "实木饰面",
    categoryEn: "Wood Veneer",
    origin: "美国 · 阿巴拉契亚",
    originEn: "Appalachia, USA",
    description:
      "深邃温润的木纹层层叠叠，在暖光下呈现丝绒般的质感，是定制家具与墙板的隽永之选。",
    descriptionEn:
      "Deep, warm grain layered like silk under soft light. A timeless choice for bespoke joinery and wall paneling.",
    image: "/materials/walnut.png",
  },
  {
    index: "03",
    name: "罗马洞石",
    nameEn: "Roman Travertine",
    category: "天然石材",
    categoryEn: "Natural Stone",
    origin: "意大利 · 蒂沃利",
    originEn: "Tivoli, Italy",
    description:
      "细密的孔隙与柔和的米色调，承载着千年建筑的历史厚度，赋予立面静谧而恒久的气质。",
    descriptionEn:
      "Fine porosity and a soft beige tone carry millennia of architectural history, giving facades a quiet, enduring presence.",
    image: "/materials/travertine.png",
  },
  {
    index: "04",
    name: "古铜金属板",
    nameEn: "Antique Brass",
    category: "金属",
    categoryEn: "Metal",
    origin: "法国 · 巴黎",
    originEn: "Paris, France",
    description:
      "手工拉丝的暖金色表面随时间形成独特包浆，于细节处彰显低调而考究的奢华态度。",
    descriptionEn:
      "Hand-brushed warm gold develops a unique patina over time, expressing understated, considered luxury in every detail.",
    image: "/materials/brass.png",
  },
  {
    index: "05",
    name: "微水泥",
    nameEn: "Microcement",
    category: "矿物涂层",
    categoryEn: "Mineral Coating",
    origin: "西班牙 · 巴塞罗那",
    originEn: "Barcelona, Spain",
    description:
      "无缝一体的柔灰肌理，将极简主义推向极致，于光影流转间呈现建筑的纯粹本质。",
    descriptionEn:
      "Seamless greige texture pushes minimalism to its limit, revealing the pure essence of architecture as light shifts.",
    image: "/materials/concrete.png",
  },
  {
    index: "06",
    name: "烟熏橡木",
    nameEn: "Smoked Oak",
    category: "实木饰面",
    categoryEn: "Wood Veneer",
    origin: "丹麦 · 哥本哈根",
    originEn: "Copenhagen, Denmark",
    description:
      "经过烟熏处理的淡雅木色与笔直纹理，传递北欧的克制美学，温暖而不张扬。",
    descriptionEn:
      "Pale smoked tones and straight grain convey Nordic restraint — warm, refined, and never ostentatious.",
    image: "/materials/oak.png",
  },
]
