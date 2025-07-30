export interface PhotoData {
  url: string;
  alt: string;
}

export interface ServiceMessage {
  text: string;
  emoji: string;
}

export const photoLibrary: PhotoData[] = [
  // 你上傳的個人照片與影片
  {
    url: "/attached_assets/IMG_8097_1753708752274.JPG",
    alt: "Sweet couple moment in winter"
  },
  {
    url: "/attached_assets/IMG_7748_1753708752273.JPEG",
    alt: "Personal photo"
  },
  {
    url: "/attached_assets/IMG_7749_1753708752274.JPEG", 
    alt: "Personal photo"
  },
  {
    url: "/attached_assets/IMG_8329_1753708752274.JPEG",
    alt: "Personal photo"
  },
  {
    url: "/attached_assets/IMG_8711_1753708752275.JPEG",
    alt: "Personal photo"
  },
  {
    url: "/attached_assets/IMG_9227_1753708752275.JPEG",
    alt: "Personal photo"
  },
  {
    url: "/attached_assets/IMG_1789_1753708752272.MOV",
    alt: "Personal video"
  },
  {
    url: "/attached_assets/IMG_7676_1753708752273.MP4",
    alt: "Personal video"
  },
  {
    url: "/attached_assets/IMG_9171_1753708752275.MP4",
    alt: "Personal video"
  },
  {
    url: "/attached_assets/563477489020567991_1753708752275.MP4",
    alt: "Personal video"
  }
];

export const serviceLibrary: ServiceMessage[] = [
  { text: "幫你馬殺雞啦～", emoji: "🛁" },
  { text: "來個溫暖的擁抱吧！", emoji: "🤗" },
  { text: "幫你泡杯熱茶，暖暖心房", emoji: "☕" },
  { text: "陪你聊天說話，聽你心事", emoji: "💭" },
  { text: "幫你整理房間，煥然一新", emoji: "🏠" },
  { text: "為你準備驚喜小禮物", emoji: "🎁" },
  { text: "陪你散步看夕陽", emoji: "🌅" },
  { text: "幫你做最愛的料理", emoji: "🍲" },
  { text: "給你一個安慰的肩膀", emoji: "💪" },
  { text: "陪你看喜歡的電影", emoji: "🎬" },
  { text: "幫你澆花整理小花園", emoji: "🌱" },
  { text: "為你唱首歌，驅散煩惱", emoji: "🎵" }
];

export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
