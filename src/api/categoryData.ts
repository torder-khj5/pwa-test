export const data = [
  {
    resultCode: 200,
    resultMessage: '성공하였습니다.',
    resultData: {
      mainCategoryList: [
        {
          id: 1, // 메인 카테고리 아디
          name: 'ㅋ1', // 메인카테고리 명
          sort: 0, // 순서
          isSortFix: false, // 순서 고정 여부
          isHide: false, // 숨김 처리 여부
          goodsCount: null, // 카테고리 내 상품 개수
          isService: false, // 직원 호출용 서비스 카테고리 여부
          subCategoryList: [
            {
              id: 1, // 서브 카테고리 아이디
              name: 'ㅋ2', // 서브 카테고리 명
              sort: 0, // 서브 카테고리 순서
              isSortFix: false, // 위와 동일
              isHide: false, // 숨김 처리 여부
              goodsList: [
                // 상품 목록
                {
                  id: 6,
                  code: null, // 상품 코드(제거 될수도 있음)
                  name: '치킨', // 상품 명
                  price: 3000, // 가격
                  imageList: [], // 상품 이미지
                  posId: 24, // 상품 포스 아이디
                  posCode: 'C00004', // 상품 포스코드
                  posName: '치킨', // 상품 포스명
                  posPrice: 3000, // 상품 포스가격
                  sort: 0, // 카테고리 내 상품 순서
                  isSale: true, // 판매 여부
                  isSoldOut: false, // 품절 여부
                  isShowOrderSheet: false, // 주문서 표기 여부
                  isKitchenOut: false, // 주방 마감 여부
                  isOptionUse: true, // 옵션 사용 여부
                  isDesc: false, // 상세 설명 사용 여부
                  isStoreSettingUse: false, // 매장 설정 사용 여부
                  orderType: 'default', // 주문 타입(추후 특정 조건을 가진 주문시 사용될것 무한리필, 뷔페 등)
                  optionGroup: [
                    {
                      id: 3, // 옵션 그룹 아이디
                      name: '옵션그룹123', // 옵션 그룹 명
                      isRequired: false, // 필수 여부
                      detailSelectLimit: 0, // 상세 옵션 선택 가능 개수
                      sort: 0, // 정렬
                      isDisplay: false, // 화면 표출 여부
                      optionInfoList: [
                        {
                          id: 1,
                          code: 'TPAY_T03_option_1', // 상세 옵션 코드
                          name: '옵션1', // 상세 옵션 명
                          price: 1000, // 옵션 가격
                          qtyLimit: 0, // 선택 제한 수
                          sort: 0, // 순서
                          isDisplay: true, // 화면 표출 여부
                          posId: 2, // 포스 아이디
                          posCode: 'C00008', // 포스 코드
                          posName: 't->옵션1', // 포스 명
                          posPrice: 1000, // 포스 가격
                          isPosUse: true, // 포스 내 해당 상품 사용 여부
                          isPosMapped: true, // 포스와 매핑 여부
                          isSale: true, // 판매 여부
                          isKitchenOut: false, // 주방 마감 여부
                          isSoldOut: false, // 품절 여부
                          isUse: true, // 사용 여부
                          isOptionGroup: false, // 옵션 그룹 여부(옵션 그룹에는 옵션 그룹이 들어갈 수 있음)
                          isShowOrderSheet: false, // 주문서 표기 여부
                          isExclude: false, // 옵션 제외 여부
                          isStoreSettingUse: false, // 매장 설정 사용 여부
                          isDesc: null, // 상세 설명 사용 여부
                        },
                      ],
                      optionInfoListCount: 1, // 옵션 그룹 내 상세 옵션 개수
                      goodsId: 6, // 옵션그룹이 매핑된 티오더 상품 아이디
                    },
                  ],
                },
                {
                  id: 7,
                  code: null,
                  name: '치즈볼',
                  price: 10000,
                  imageList: [],
                  posId: 26,
                  posCode: 'C00006',
                  posName: '치즈볼',
                  posPrice: 10000,
                  sort: 0,
                  isSale: true,
                  isSoldOut: false,
                  isShowOrderSheet: false,
                  isKitchenOut: false,
                  isOptionUse: true,
                  isDesc: false,
                  isStoreSettingUse: false,
                  orderType: 'default',
                  optionGroup: [],
                },
                {
                  id: 8,
                  code: null,
                  name: '맵꿁닭',
                  price: 15000,
                  imageList: [],
                  posId: 27,
                  posCode: 'C00009',
                  posName: '맵꿀닭 뉴뉴',
                  posPrice: 15000,
                  sort: 0,
                  isSale: true,
                  isSoldOut: false,
                  isShowOrderSheet: false,
                  isKitchenOut: false,
                  isOptionUse: true,
                  isDesc: false,
                  isStoreSettingUse: false,
                  orderType: 'default',
                  optionGroup: [],
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
