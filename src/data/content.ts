// Site data that isn't translated text. Edit here to update the site.

export const links = {
  email: 'lowxuan0218@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zheng-xuan-low/',
  whatsapp: 'https://wa.me/6588974632',
  whatsappLabel: '+65 8897 4632',
  // Put your CV in /public (e.g. public/resume.pdf) and set this to 'resume.pdf'.
  // While it's empty, the "Download CV" button stays hidden.
  resume: '',
}

export const AGE_MIN = 4
export const AGE_MAX = 18

export type TeachGroup = 'blocks' | 'code' | 'apps' | 'ai' | 'games' | 'robotics'

export interface TeachTool {
  name: string
  from: number
  to: number
}

// Age ranges are a first draft: adjust them to match what you actually teach.
export const teaching: { group: TeachGroup; tools: TeachTool[] }[] = [
  {
    group: 'blocks',
    tools: [
      { name: 'Scratch', from: 4, to: 12 },
      { name: 'PictoBlox (AI)', from: 8, to: 14 },
    ],
  },
  {
    group: 'code',
    tools: [
      { name: 'Python', from: 10, to: 18 },
      { name: 'Python Data Analytics', from: 14, to: 18 },
      { name: 'PyQt', from: 15, to: 18 },
    ],
  },
  {
    group: 'apps',
    tools: [
      { name: 'MIT App Inventor', from: 9, to: 15 },
      { name: 'Thunkable', from: 10, to: 16 },
      { name: 'Web Development', from: 13, to: 18 },
    ],
  },
  {
    group: 'ai',
    tools: [
      { name: 'Vibe Coding', from: 10, to: 18 },
      { name: 'AI and Machine Learning', from: 13, to: 18 },
      { name: 'Prompt Engineering', from: 13, to: 18 },
    ],
  },
  {
    group: 'games',
    tools: [
      { name: 'Minecraft Education', from: 7, to: 13 },
      { name: 'Roblox Studio', from: 10, to: 16 },
      { name: 'Unity 2D/3D', from: 13, to: 18 },
      { name: 'Tinkercad', from: 8, to: 14 },
      { name: 'Blender', from: 13, to: 18 },
    ],
  },
  {
    group: 'robotics',
    tools: [
      { name: 'KUBO', from: 4, to: 6 },
      { name: 'LEGO Spike Essential', from: 6, to: 9 },
      { name: 'LEGO Spike Prime', from: 9, to: 14 },
      { name: 'micro:bit', from: 8, to: 14 },
      { name: 'Arduino', from: 12, to: 18 },
    ],
  },
]

export const workItems = [
  'dsa',
  'sinda',
  'ooy',
  'pictoblox',
  'parents',
  'aizaikia',
  'minecraft',
  'birthday',
  'competitions',
] as const

export type WorkItem = (typeof workItems)[number]

// Public LinkedIn posts about a project. Items without a link show nothing.
export const workPosts: Partial<Record<WorkItem, string>> = {
  ooy: 'https://www.linkedin.com/feed/update/urn:li:activity:7522859113404571648/',
  aizaikia: 'https://www.linkedin.com/feed/update/urn:li:activity:7501906725957095424/',
  parents: 'https://www.linkedin.com/feed/update/urn:li:activity:7493096207469162496/',
}
