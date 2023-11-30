import { type ProductType } from '@type/categoryType.ts';

export const PRODUCT_LIST: { data: ProductType[] } = {
  data: [
    {
      name: '시저 샐러드',
      languageName: {
        ko: '시저 샐러드',
        en: 'Caesar Salad',
        jp: 'シーザーサラダ',
        zh_hans: '凯撒沙拉',
        zh_hant: '凱薩沙律',
      },
      code: 'CJUGH-240053024',
      html: '바삭하게 구운 햄 및 브레드, 신선한 로메인 상추가 홈메이드 시저 드레싱과 어우러진 건강식 샐러드입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240053024/1676349655item_700X700.png',
      price: 30000,
      countryOfOrigin: '(베이컨:미국산)',
    },
    {
      name: '치킨 시저 샐러드',
      languageName: {
        ko: '치킨 시저 샐러드',
        en: 'Chicken Caesar Salad',
        jp: '鶏胸肉のグリル追加',
        zh_hans: '烤鸡胸',
        zh_hant: '烤雞胸肉',
      },
      html: '바삭하게 구운 햄 및 브레드, 신선한 로메인 상추가 홈메이드 시저 드레싱과 어우러진 건강식 샐러드입니다. 샐러드 위에 얇게 썰은 이탈리안 고급 치즈가 토핑되어 고소한 맛을 더합니다.  \n추가로 그릴 새우, 연어, 닭가슴살 중 선택해 드실 수 있습니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240053024/1676349655item_700X700.png',
      price: 30000,
      code: 'CJUGH-240053036',
      countryOfOrigin: '(베이컨:미국산,닭고기:국내산)',
    },
    {
      name: '새우 시저 샐러드',
      languageName: {
        ko: '새우 시저 샐러드',
        en: 'Prawn Caesar Salad',
        jp: 'エビのグリル追加',
        zh_hans: '烤大虾',
        zh_hant: '烤蝦',
      },
      countryOfOrigin: '(베이컨:미국산)',
      html: '바삭하게 구운 햄 및 브레드, 신선한 로메인 상추가 홈메이드 시저 드레싱과 어우러진 건강식 샐러드입니다. 샐러드 위에 얇게 썰은 이탈리안 고급 치즈가 토핑되어 고소한 맛을 더합니다.  \n추가로 그릴 새우, 연어, 닭가슴살 중 선택해 드실 수 있습니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240053038/1676349675item_700X700.png',
      price: 36000,
      code: 'CJUGH-240053037',
    },
    {
      name: '버섯 크림 수프',
      languageName: {
        ko: '버섯 크림 수프',
        en: 'Cream Of Mushroom',
        jp: 'クリームマッシュルーム',
        zh_hans: '奶油蘑菇汤',
        zh_hant: '蘑菇忌廉濃湯',
      },
      html: '신선한 포르치니 버섯을 넣고 끓인 스프로 부드러운 맛과 풍부한 버섯향이 일품인 크림 수프입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240051007/1676349839item_700X700.png',
      price: 14000,
      countryOfOrigin: '',
      code: 'CJUGH-240051007',
    },
    {
      name: '클램 챠우더',
      languageName: {
        ko: '클램 챠우더',
        en: 'Clam Chowder Soup',
        jp: 'クラムチャウダー',
        zh_hans: '蛤蜊浓汤',
        zh_hant: '蛤蜊濃湯',
      },
      html: '신선한 조개살과 감자, 당근 등을 넣고 끓인 부드러운 크림 수프입니다. 쫄깃한 조개살과 바삭하게 구운 베이컨 토핑이 맛을 더합니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240051010/1676349842item_700X700.png',
      price: 16000,
      countryOfOrigin: '(베이컨:미국산)',
      code: 'CJUGH-240051010',
    },
    {
      name: '랍스터 & 딱새우 수프',
      languageName: {
        ko: '랍스터 & 딱새우 수프',
        en: 'Lobster & Scampi Soup',
        jp: 'ロブスタースープ',
        zh_hans: '济州鳌虾龙虾汤',
        zh_hant: '济州鳌虾龙虾汤',
      },
      countryOfOrigin: '',
      html: '활 바닷가재와 제주산 딱새우를 사용하여 저온에서 오랜시간 끓여 만든 비스큐와 토마토 소스를 사용한 크리미한 스프입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240051012/1695011491_700.png',
      price: 18000,
      code: 'CJUGH-240051012',
    },
    {
      name: '클럽 샌드위치',
      languageName: {
        ko: '클럽 샌드위치',
        en: 'Club Sandwich',
        jp: 'クラブサンドイッチ',
        zh_hans: '总汇三明治',
        zh_hant: '總匯三明治',
      },
      code: 'CJUGH-240042005',
      html: '바삭한 토스트빵 안에 닭가슴살, 계란, 베이컨, 토마토, 양상추와 수제 홀그레인즈 소스를 넣은 가장 대표적인 인기 샌드위치입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240042005/1676349948item_700X700.png',
      price: 23000,
      countryOfOrigin: '(닭고기:국내산, 베이컨:미국산)',
    },
    {
      name: '햄 & 치즈 샌드위치',
      languageName: {
        ko: '햄 & 치즈 샌드위치',
        en: 'Ham & Cheese Sandwich',
        jp: 'ハム&チーズサンドイッチ',
        zh_hans: '火腿和芝士三明治',
        zh_hant: '火腿和芝士三明治',
      },
      code: 'CJUGH-240041001',
      html: '고소하고 쫄깃한 프로슈토 햄과 진한 향의 딸레지오 이탈리안 치즈를 넣은 샌드위치로 깊은 풍미를 자랑합니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240041001/1676349950item_700X700.png',
      price: 28000,
      countryOfOrigin: '(프로슈토 꼬또:이탈리아산)',
    },
    {
      name: '알리오 올리오',
      languageName: {
        ko: '알리오 올리오',
        en: 'Spaghetti Aglio Olio',
        jp: 'スパゲティアーリオオーリオ',
        zh_hans: '香蒜意大利面',
        zh_hant: '香蒜橄欖油意粉',
      },
      code: 'CJUGH-240071017',
      html: '마늘을 최상급 엑스트라 버진 올리브 오일에 볶아, 풍미와 향이 가득한 오일 파스타입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240071017/1676349875item_700X700.png',
      price: 22000,
      countryOfOrigin: '',
    },
    {
      name: '라자냐',
      languageName: {
        ko: '라자냐',
        en: 'Baked Lasagna',
        jp: 'ラザニア',
        zh_hans: '经典烤千层面',
        zh_hant: '經典烤千層麵',
      },
      code: 'CJUGH-240071023',
      html: '풍미가득한 볼로네제소스와 부드러운 베샤멜 소스, 고소한 그라나파다노 치즈까지 한겹한겹 쌓아올린 홈메이드 라자냐입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240071023/1695011438_700.png',
      price: 26000,
      countryOfOrigin: '(소고기:미국산, 돼지고기:국내산)',
    },
    {
      name: '버섯 크림 파스타',
      languageName: {
        ko: '버섯 크림 파스타',
        en: 'Mushroom Penne',
        jp: 'キノコのガルガネリ',
        zh_hans: '蘑菇酱意大利面',
        zh_hant: '白汁蘑菇意粉',
      },
      code: 'CJUGH-240071019',
      html: '신선한 포르치니 버섯을 메인 재료로 다양한 버섯과 햄을 볶아 요리한 크림 파스타로 부드럽고 고소한 맛이 일품입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240071019/1689510315_700.png',
      price: 30000,
      countryOfOrigin: '판체타(이탈리아산)',
    },
    {
      name: '코카콜라',
      languageName: { ko: '코카콜라', en: 'Coca Cola', jp: 'コカコーラ', zh_hans: '可乐', zh_hant: '可樂' },
      code: 'CJUGH-000155001',
      html: '',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-000155001/1676354498item_700X700.png',
      price: 5500,
      countryOfOrigin: '',
    },
    {
      name: '코카콜라 라이트',
      languageName: {
        ko: '코카콜라 라이트',
        en: 'Coca Cola Light',
        jp: 'コカコーラ ライト',
        zh_hans: '健怡可乐',
        zh_hant: '健怡可樂',
      },
      code: 'CJUGH-000155002',
      html: '',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-000155002/1676354501item_700X700.png',
      price: 5500,
      countryOfOrigin: '',
    },
    {
      name: '당근 주스',
      languageName: {
        ko: '당근 주스',
        en: 'Carrot Juice',
        jp: 'キャロット',
        zh_hans: '胡萝卜汁',
        zh_hant: '甘筍汁',
      },
      code: 'CJUGH-240152007',
      html: '제주 당근을 첨가물 없이 그대로 착즙한 건강 주스입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240152007/1676354577item_700X700.png',
      price: 13000,
      countryOfOrigin: '',
    },
    {
      name: '자몽 주스',
      languageName: {
        ko: '자몽 주스',
        en: 'Grapefruit Juice',
        jp: 'グレープフルーツ',
        zh_hans: '西柚汁',
        zh_hant: '西柚汁',
      },
      code: 'CJUGH-240152004',
      html: '잘 익은 자몽을 그대로 착즙해 만든 100% 자몽 생과일 주스입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-240152004/1676354572item_700X700.png',
      price: 13000,
      countryOfOrigin: '',
    },
    {
      name: '바닐라 소프트 아이스크림',
      languageName: {
        ko: '바닐라 소프트 아이스크림',
        en: 'Vanilla Soft Serve Ice Cream',
        jp: 'バニラソフトクリーム',
        zh_hans: '香草软冰淇淋',
        zh_hant: '香草软冰淇淋',
      },
      code: 'CJUGH-24010513',
      html: '부드러운 바닐라 맛의 소프트 아이스크림 위에 달콤한 초코볼이 올라가 있어 더욱 맛있게 드실 수 있습니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-24010513/1682234020item_700X700.png',
      price: 9000,
      countryOfOrigin: '',
    },
    {
      name: '초콜릿 소프트 아이스크림',
      languageName: {
        ko: '초콜릿 소프트 아이스크림',
        en: 'Chocolate Soft Serve Ice Cream',
        jp: 'チョコレートソフトクリーム',
        zh_hans: '巧克力软冰淇淋',
        zh_hant: '巧克力软冰淇淋',
      },
      code: 'CJUGH-24010514',
      html: '진한 초콜릿 맛의 소프트 아이스크림 위에 달콤한 초코볼이 올라가 있어 더욱 맛있게 드실 수 있습니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-24010514/1682335972item_700X700.png',
      price: 9000,
      countryOfOrigin: '',
    },
    {
      name: '바닐라 초콜릿 소프트 아이스크림',
      languageName: {
        ko: '바닐라 초콜릿 소프트 아이스크림',
        en: 'Vanilla & Chocolate Twist Soft Serve Ice Cream',
        jp: 'ミックス ソフトクリーム',
        zh_hans: '',
        zh_hant: '',
      },
      code: 'CJUGH-24010515',
      html: '부드러운 바닐라와 진한 초콜릿이 섞인 소프트 아이스크림이 위에 달콤한 초코볼이 올라가 있어 더욱 맛있게 드실 수 있습니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-24010515/1682336025item_700X700.png',
      price: 9000,
      countryOfOrigin: '',
    },
    {
      name: '레몬 소르베',
      languageName: {
        ko: '레몬 소르베',
        en: 'Lemon Sorbet',
        jp: 'レモンソルベ',
        zh_hans: '柠檬冰淇淋',
        zh_hant: '檸檬雪糕',
      },
      code: 'CJUGH-24010509',
      html: '레몬으로 만든 상큼한 홈메이드 소르베입니다.',
      image: 'https://hyatt.static.torder.co.kr/INFRA_CAFE8002/goods/CJUGH-24010509/1676350336item_700X700.png',
      price: 9000,
      countryOfOrigin: '',
    },
  ],
};
