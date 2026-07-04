import type { Article, Product, SiteSettings } from '@/types'

// TEMPORARY: intentional type error to verify CI blocks broken PRs (Phase 0 verification, to be reverted)
const __ciVerificationTypeError: number = 'this should be a number'

export const mockArticles: Article[] = [
  {
    _id: '1',
    title: '台灣節氣與農作物的關係',
    slug: 'taiwan-solar-terms-farming',
    category: 'solar_term',
    publishedAt: '2026-03-10T00:00:00Z',
    excerpt: '二十四節氣是老祖先累積的農業智慧，每個節氣代表著氣候的轉換，也指示著農民何時播種、施肥、收成。了解節氣，就是了解大自然的節奏。',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '二十四節氣是老祖先累積的農業智慧，每個節氣代表著氣候的轉換，也指示著農民何時播種、施肥、收成。了解節氣，就是了解大自然的節奏。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '以春季為例，「雨水」時節（2月中旬）是台灣平地蔬菜種植的好時機，溫度開始回升，雨水逐漸增多，適合播種葉菜類如青江菜、菠菜。「春分」後（3月下旬），日照時間增長，適合移植番茄、辣椒等果菜類幼苗。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '夏季「芒種」（6月初）是稻米一期作收割、準備二期作的關鍵期。此時台灣進入梅雨季尾聲，農民要把握時機趕在強降雨前完成收割，避免稻穀倒伏損失。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '秋季「寒露」（10月初）是台灣最重要的蔬菜播種期。氣溫下降到適合的範圍，高麗菜、白菜、蘿蔔紛紛進入生長旺期。農夫這時候最忙，從早到晚都在田裡。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '青Sung 每年都按著節氣的節奏安排農事，春種夏耕秋收冬藏，這不只是農業技術，也是我們與土地建立的默契。' }],
        style: 'normal',
      },
    ],
  },
  {
    _id: '2',
    title: '在來米 vs 蓬萊米：怎麼挑、怎麼煮',
    slug: 'indica-vs-japonica-rice',
    category: 'farming',
    publishedAt: '2026-03-05T00:00:00Z',
    excerpt: '台灣人每天吃飯，但你知道在來米和蓬萊米的差別嗎？兩者口感、用途大不同，選對米才能煮出最好吃的料理。',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '台灣人每天吃飯，但你知道在來米和蓬萊米的差別嗎？兩者口感、用途大不同，選對米才能煮出最好吃的料理。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '蓬萊米（Japonica）是台灣目前最主流的食用米，米粒圓短，煮熟後黏性高、口感Q彈，就是我們每天吃的白飯用米。台灣的蓬萊米品種改良非常成功，台南11號、台中秈10號都是知名品種。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '在來米（Indica）米粒細長，煮熟後黏性低、口感較鬆散。雖然不適合直接當白飯吃，但它是製作碗粿、蘿蔔糕、米苔目、炒米粉的靈魂原料。沒有在來米，台灣小吃文化會失色不少。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '如何挑選好米？首先看外觀，好米粒型完整均勻，沒有碎米和異色米。其次聞香氣，新鮮的米有淡淡的米香，陳米則有油耗味。最後摸手感，優質的米摸起來光滑，不應該有粉末感。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '青Sung 種的是蓬萊米，選用台南 16 號品種，這是近年台灣農改場培育的優質食味米，飯粒晶瑩剔透，冷掉也不會太硬。歡迎來體驗看看。' }],
        style: 'normal',
      },
    ],
  },
  {
    _id: '3',
    title: '青農返鄉：為什麼我們選擇回來種田',
    slug: 'young-farmer-return-hometown',
    category: 'diary',
    publishedAt: '2026-02-28T00:00:00Z',
    excerpt: '城市裡有穩定的工作、便利的生活，為什麼要回鄉種田？這個問題我們被問過很多次，今天想認真說說我們的答案。',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '城市裡有穩定的工作、便利的生活，為什麼要回鄉種田？這個問題我們被問過很多次，今天想認真說說我們的答案。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '阿爸種田種了一輩子，我從小看著他凌晨三點出門、天黑才回來，卻換來的是波動的價格、辛苦的身體。農業是這塊土地最根本的事，但農民卻往往是最辛苦、最不被重視的人。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '在都市工作幾年後，我開始思考：如果帶著在外面學到的東西回去，用不同的方法幫家人種田，事情會不會有所不同？' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '於是我回來了。不是逃跑，而是帶著目的回來。用植保機減少農藥使用量、用科技記錄農事數據、用網路讓更多人認識我們種的食物。這條路走起來不容易，但每次看到客人說「這個菜好好吃」，就覺得值得了。' }],
        style: 'normal',
      },
    ],
  },
  {
    _id: '4',
    title: '什麼是友善種植？農藥與有機的差別',
    slug: 'eco-friendly-farming-vs-organic',
    category: 'farming',
    publishedAt: '2026-02-20T00:00:00Z',
    excerpt: '「有機」和「友善」常常被混用，但它們其實是不同的概念。了解差別，讓你在選購農產品時更有判斷力。',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '「有機」和「友善」常常被混用，但它們其實是不同的概念。了解差別，讓你在選購農產品時更有判斷力。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '「有機農業」在台灣有法定認證標準，完全不使用化學農藥、化學肥料，並且需要通過第三方驗證機構的定期檢驗。取得有機認證需要轉型期（至少3年），期間成本高、產量低，對小農來說門檻相當高。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '「友善農業」（或稱友善耕作）是一個更廣泛的概念，指減少農藥和化學肥料的使用、維護生態環境、對土地友善的耕作方式。它不需要政府認證，但代表農民對自然環境的態度。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '青Sung 目前採取友善耕作的理念：減量使用農藥（僅在必要時施用、選擇低毒農藥）、使用有機質肥料補充地力、維護田邊的生態環境。我們透明告知每塊田的農事記錄，讓客人吃得放心。' }],
        style: 'normal',
      },
    ],
  },
  {
    _id: '5',
    title: '絲瓜料理三吃：從燙到炒到煮湯',
    slug: 'loofah-three-ways-cooking',
    category: 'recipe',
    publishedAt: '2026-02-15T00:00:00Z',
    excerpt: '夏天盛產的絲瓜，清甜多汁，是最親民的台灣蔬菜之一。教你三種最家常、最好吃的絲瓜料理。',
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '夏天盛產的絲瓜，清甜多汁，是最親民的台灣蔬菜之一。教你三種最家常、最好吃的絲瓜料理。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '第一吃：清燙絲瓜。絲瓜切段，加少許鹽水燙熟，起鍋後淋上蒜末、薑絲和醬油膏。重點是不要燙過頭，4-5分鐘即可，保留絲瓜的清甜和清脆口感。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '第二吃：蛤蜊絲瓜。用薑爆香，下蛤蜊炒至微開，放入絲瓜片，加少許水燜煮，最後用鹽調味。蛤蜊的鮮味完全融入絲瓜，是夏天最鮮甜的湯品。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '第三吃：麵線絲瓜。蒜頭爆香，絲瓜炒軟，加水煮滾，放入泡軟的麵線，快煮2分鐘即可。絲瓜的甜讓整碗麵線都升華了，簡單卻好吃到不行。' }],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [{ _type: 'span', text: '選好絲瓜的秘訣：表皮深綠均勻、稜角明顯、拿起來有重量感，代表水分充足。太輕的絲瓜可能已經老了，炒起來口感差。青Sung 夏季供應的絲瓜，每天早上採收新鮮直送。' }],
        style: 'normal',
      },
    ],
  },
]

export const mockProducts: Product[] = [
  {
    _id: 'p1',
    name: '青Sung 稻米',
    slug: 'ching-sung-rice',
    category: 'rice',
    seasons: ['autumn', 'winter'],
    status: 'available',
    excerpt: '自家栽種台南16號蓬萊米，飯粒晶瑩Q彈，冷飯也好吃。',
    description: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '青Sung 自家種植的台南16號蓬萊米，位於台灣中部平原，日照充足、水質乾淨。採用友善耕作，減量使用農藥，讓每一粒米都吃得安心。' }],
      },
    ],
    orderLink: '#contact',
  },
  {
    _id: 'p2',
    name: '有機絲瓜',
    slug: 'organic-loofah',
    category: 'vegetable',
    seasons: ['summer'],
    status: 'coming_soon',
    excerpt: '夏季限定，清甜多汁。每日早晨採收，新鮮直送。',
    description: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '5月至9月盛產的有機絲瓜，每天早上採收後直接出貨。清甜多汁，適合清炒、燙熟淋醬或煮湯。' }],
      },
    ],
    orderLink: '#contact',
  },
  {
    _id: 'p3',
    name: '當季蔬菜箱',
    slug: 'seasonal-vegetable-box',
    category: 'vegetable',
    seasons: ['spring', 'autumn', 'winter'],
    status: 'available',
    excerpt: '當週田間採收，精選3-5種時令蔬菜，新鮮組合每週不同。',
    description: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: '每週精選當季蔬菜3-5種，依季節不同內容不同。春季有菠菜、青江菜；秋冬有高麗菜、白菜、蘿蔔。每一箱都是田間最新鮮的味道。' }],
      },
    ],
    orderLink: '#contact',
  },
]

export const mockSiteSettings: SiteSettings = {
  instagramUrl: 'https://instagram.com/chingsungfarm',
  phone: '（電話號碼待填入）',
  address: '（農場地址待填入）',
  serviceArea: '（服務區域待填入）',
  slogan: '青年返鄉，友善耕作，從田間到你的餐桌',
}
