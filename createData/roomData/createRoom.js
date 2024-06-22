import connect from "../../connect/connect.js"
import Room from "../../models/roomSchema.js"
import User from "../../models/userSchema.js"

connect();
const user1 = await User.findOne({userId : "example1"})
const user2 = await User.findOne({userId : "hyeona023"})
const room_Insert = await Room.create(
    // coolpool
    {
        userId : user1,
        cate : "coolPool",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-962166410706461229/original/241a9728-36b6-4c6b-9277-e6d05745cea6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/0907271d-a709-4059-8c0a-e5323882db77.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-962166410706461229/original/97ac86c6-2d7f-4c8a-b05e-6d8547e11c5a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-962166410706461229/original/51901198-8621-426a-8e2a-282b0a24a816.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-962166410706461229/original/2a5f33ef-0a32-4209-b042-e10d0c48b42c.jpeg?im_w=720"
        ],
        title : "위드독 독채 풀빌라",
        address : "충남 태안군",
        dayPrice : 150000,
        roomData : {
            maxUser : 6,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        },
        description : `안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 ONDA입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내기를 바랍니다.\n
[숙소 소개]
반려견 동반이 가능하며 프라이빗한 나만의 공간에서 다양한 부대시설을 즐기실 수 있습니다.
깨끗한 시설과 최고의 서비스가 준비되어 있는 애견 스파 풀빌라에서 사랑하는 사람들과 반려견과 함께 행복한 추억을 만들어 가세요.

[객실 유형]
복층형 :
- 1층: 침대룸2(퀸 3, 슈퍼싱글1) + 화장실1 + 거실 +주방
- 2층: 테라스 + 화장실1(샤워실, 스파시설 및 애견 씻길 수 있는 공간) + 거실 + 주방
* 침구는 예약하신 인원에 맞게 제공됩니다.

숙소
[ 공지사항 ]
※ 반려견과 동반하지 않는 분들도 이용 가능합니다.
※ 화기류 객실 반입 금지입니다.
※ 마킹하는 반려견은 실내에서 매너벨트(기저귀) 착용 필수입니다.
* 반려견 마킹으로 인한 객실 비품 손상 및 오염 시 비용이 청구될 수 있습니다.
※ 반려견에 의한 침구류 세탁이 필요한 경우, 세탁 비용이 청구될 수 있어 유의 부탁드립니다.
※ 반려견만 객실에 두고 외출 불가하여 외출 시 반려견과 동반 부탁드립니다.
※ 반려견의 실외 대변 및 객실 내 대,소변은 견주님께서 처리하셔야합니다.
(배변패드, 매너밸트 구비되어있음)
※ 부주의로 인한 사고 발생 시 책임지지 않습니다.

[입/퇴실안내]
입실시간:16시
퇴실시간:12시

[인원 추가 요금]
(1박기준)
- 1인 30,000원 (중학생 이상부터 ~ 성인까지)
※ 노키즈존으로 운영하는 펜션으로 중학생 이상부터 입실 가능
※ 기준 인원을 초과한 인원은 추가요금이 발생되며, 미결제 인원에 대한 추가요금은 현장결제입니다.
# 야외수영장(무료)
- 운영 기간 : 5월 초 ~ 10월 31일까지
- 이용 시간 : 입실 후 ~ 22시
- 이용 복장 : 수영복, 래쉬가드, 면티, 반바지
※ 면티,반바지 착용 가능하나 물빠짐 없는 밝은 색 옷으로 착용 부탁드립니다.
※ 애견도 사용 가능합니다.
※ 애견 튜브 2개 준비되어 있습니다.
※ 이불셋팅은 인원수에 맞춰 셋팅됩니다.
- 침구 추가시 침구 1셋트당 2만원`,
        convenience : [
            {
                icon : "tv",
                con : "계곡 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "tv",
                con : "45인치 HDTV + 프리미엄 케이블 TV"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간 : 오후 3:00 ~ 오후 9:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간 : 오후 3:00 ~ 오후 9:00"
                },
                {
                    icon : "check",
                    content : "셀프 체크인 : 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 : 6명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 ~ 오전 7:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "memo",
                    content : "추가 이용규칙 : \n겨울철에는 온수풀로 운영되는 곳입니다. 수영하실때만 덮개를 열어두시고 수영장 미 이용시 수영장 덮개를 반드시 덮어주세요. 특히 주무시기 전 수영장덮개를 덮어놓았는지 꼭!! 확인해주시기 바랍니다.\n양평은 특히 추운 곳이라 밤 사이에 덮개를 덮어놓지 않으면 물이 다 식어버려서 다시 데우는데 1박 2일이 꼬박 걸려 다음 이용자들이 수영장을 이용하지 못하는 불상사가 발생할 수 있습니다"
                },
            ]
        ],
        cleanVat : 50000,
    },
    {
        userId : user1,
        cate : "coolPool",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-934412654542381136/original/6708f866-9b0e-4331-87d6-13bd9b42758e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934412654542381136/original/ea06f221-8ebe-4b5f-80c5-f2f554f248de.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934412654542381136/original/a996ff1d-f921-433e-b01f-321ad8b33871.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934412654542381136/original/5e58bbc6-f692-4ba3-ad40-c0562f4368d0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934412654542381136/original/2987ac37-71d8-4b15-b05b-d0e7f4b3e17b.jpeg?im_w=720",
        ],
        title : "강화도 럭셔리 대형 풀빌라",
        address : "인천 강화도",
        dayPrice : 250000,
        roomData : {
            maxUser : 16,
            bedroom : 4,
            bed : 2,
            bathroom : 3
        },
        description : `석양이 아름다운 언덕 위, 마니산의 포근함을 담고 있는 럭셔리 초대형 저택입니다.
별장을 목적으로 지어져 고급 자재와 모던한
실내디자인을 자랑하며 복층으로 구성된 단독별장형으로 100평 이상의 대형 규모가 선사하는 여유로움을 즐기실 수 있습니다.
숙소
1층:대형침실1, 소형온돌방1, 메인홀, 주방 및 식당, 화장실
2층:대형침실1, 단독 화장실2, 소형온돌방1, 간이홀, 전망 발코니, 데크 베란다

야외데크: 자동개폐수영장(냉수풀장&온수폭포,선베드)
텐트 3동 바베큐장
탁구대&배드민턴
게스트 이용 가능 공간/시설
[자동개폐수영장]
대형 냉수 풀장 & 온수 폭포의 콜라보
전망이 아름다운 데크아래 숨겨진 비밀스러운 프라이빗 수영장입니다.
3mx10m, 수심 1.5로 대가족도 넉넉하고 안전하게 즐기기 충분합니다.
온수폭포와 선베드, 튜브, 아이스박스 구비되어 있습니다.

24년도 오픈기간: 5월17일 ~ 9월21일 (날씨에따라 기간 변동될 수 있습니다.)
이용복장: 래쉬가드, 수영복


[빔프로젝터]
1층 거실에 설치된 초대형 스크린과 프로젝터, 최고급 음향설비로 프레젠테이션 발표 및 회의까지 가능합니다.

[노래방기기&오락시설]
1층 노래방기기 이용 가능하시며
2층 간이거실 오락시설 마련되어 있습니다
별도 이용료 발생되지 않습니다

[바베큐 파티]
1인 5천원 비용 발생되며
야외 데크 텐트동에 대형 그릴로 바베큐 파티 가능하십니다
드실 음식과 재료는 별도 준비입니다! (현장결제)

[야외 전망대]
2층 발코니에서 강화도를 한 눈에 내려다 볼 수 있는
전망대가 있습니다.

[주차장]
무료 주차입니다.
숙소 앞 2대 주차하시고 주변 도로변에 넉넉히 주차 가능하세요.

[서비스]
비상약, 커피머신, 와인잔 등
여러 서비스 시설 이용 가능하십니다!
기타 주의사항
기준인원 20명/ 최대인원 20명
추가요금 발생되지 않습니다.

최대인원 초과 불가합니다.`,
        convenience : [
            {
                icon : "picture",
                con : "계곡 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "욕실"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 2:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 30000,
    },
    {
        userId : user2,
        cate : "coolPool",
        roomImg : [
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-842470660285049495/original/85ca260c-0cdc-430c-9fd7-6038fa4263c6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-842470660285049495/original/150630c9-52b4-491e-a64d-efc214c18baa.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-842470660285049495/original/f027027a-fe70-4bab-adf5-d2bc65cf99f2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-842470660285049495/original/25d35097-3e35-4158-befd-a2918c7fbb97.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-842470660285049495/original/accf2203-d4d6-4c95-8e18-dae8b78033b5.jpeg?im_w=720",
        ],
        title : "다온빌(스파/개별풀)",
        address : "강원도 양양군 서면",
        dayPrice : 480000,
        roomData : {
            maxUser : 10,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        },
        description : `안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 Onda입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내시길 바랍니다.

[숙소 소개]
자연이 살아 숨쉬는 곳 양양의 푸르름 위에 그리스 산토리니의 맑음 깨끗함 시원함을 모티브로 지은 숙소입니다.

[객실유형]
1층 : 거실+주방+침실A(더블1)+ 욕실1+테라스+풀장
2층 : 침실B(더블1)+욕실1+테라스+바베큐장
* 침구는 예약하신 인원에 맞게 제공됩니다.
숙소
[인원추가요금]
ㅁ 기준인원 초과시 추가비용 : 1인 1박당 30,000원 (24개월 이상부터 /현장결제)
ㅁ 24개월 미만 무료 / 24개월 이상 ~ 성인 추가비용 발생
ㅁ 각 객실마다 정해진 최대수용인원(영유아포함) 초과를 엄격히 금하며, 예약된 인원외에는 펜션에 입실 할 수 없습니다

[바베큐장 이용안내]
ㅁ 개별바베큐
숯+그릴 이용 : 2-4인 기준 30,000원 / 4-8인 기준 50,000원
최대 12명까지 이용가능 / 현장결제 / 현장문의
- 11월~4월(저녁7시30분까지)
- 5월~10월(저녁8시까지)
※ 개인적으로 준비해 오는 취사도구(그릴, 숯, 휴대용 버너 등)은 반입이 금지되어 있습니다.

[사계절 온수수영장]
전 객실 개별수영장 구비(온수 이용 시 추가요금 발생)
- 누리빌,라온빌,아라빌 미온수 이용 시 1회 150,000원
- 이든빌,아띠빌,모아빌,다온빌 미온수 이용 시 1회 100,000원

이용시간 : 입실 후~ 오후 22:00 까지 이용가능
미온수 이용비용 현장결제 / 객실 타입 참고
미리 신청 필수
* 온수 유지 4-5시간

[수영장 사이즈]
누리빌, 라온빌 : 560 * 450 / 깊이 100
아라빌 : 550 * 400 / 깊이 100
이든빌,아띠빌, 모아빌, 다온빌 : 470 * 360 / 깊이 100

[무료조식 제공안내]
-조식제공
이용시간 : 08:30~10:00
1층 카페에서 제공
(토스트+컵라면+쥬스+우유 등)
자세한 내용은 펜션으로 문의주세요.

[주차 및 Wifi 안내]
주차 및 Wifi 가능합니다.

부대시설은 날씨 및 현장 상황에 따라서 이용 가능여부가 달라질 수 있습니다. 부대시설 이용 불가는 환불 사유에 해당이 되지 않으니 예약 전 꼭 이용 가능여부를 사전 확인해주세요!
기타 주의사항
주의사항을 읽지 않아 발생하는 모든 문제는 호스트가 책임질 수 없으니 예약 전 반드시 숙지해 주세요.

[추가인원 요금 및 유아 입실 인원 포함 안내]
- 2세 미만 유아는 현장에 도착해서 추가 결제를 해야 입실 가능합니다.
- 2세 미만 유아를 포함한 입실 인원이 객실의 최대인원을 초과할 경우 이용 및 환불이 불가합니다.

[숙소와의 연락]
- '호스트에게 연락하기'를 통해선 연락이 어렵습니다. 호스트와의 연락은 아래 방법을 확인해주세요.
1. Airbnb 메시지 기능을 통해 메시지로 문의해주세요. (Onda 답변 가능 시간: 매주 평일 10:00~18:00)
2. 예약 확정 고객은 문자 메시지를 확인해주세요. 예약 확정 즉시 숙소 연락처가 문자로 발송됩니다.
3. 만약 예약 확정 후 문자를 받지 못하셨다면 Airbnb 메시지 기능을 통해 알려주세요.
4. 예약시 한국 내에서 수신받을 수 있는 연락처를 필히 기재해주세요.
5. 연락처를 기재하지 않아 발생하는 불이익은 호스트가 책임질 수 없습니다.

[숙소 및 부대시설 이용 수칙]
- 오후 7시 이후 체크인 예정이라면 예약 완료시 발송되는 숙소 연락처로 전화해서 알려주세요.
- 숙박 외 부대시설은 날씨나 현장 여건에 따라 이용이 어려울 수 있습니다.
- 예약 전 부대시설 이용 가능 여부를 에어비앤비 메시지 기능을 통해 확인해 주세요.
- 부대시설은 숙소에서 부가적으로 제공하는 시설입니다. 따라서 부대시설 이용는 환불 사유에 해당되지 않습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "계곡 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "욕실"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 안내 직원"
                }
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 10명"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙 
- 기준인원 및 최대인원을 확인해주세요. 기준인원을 초과한 인원은 나이와 무관하게 추가비용이 발생하며 최대인원을 초과한 인원은 입실이 제한됩니다.
- 예약시 한국 내에서 수신 받을 수 있는 연락처를 Airbnb 계정 정보에 기입 부탁드립니다.
- 숙소 이용 안내는 문자로 발송됩니다. 문자를 받지 못했다면 Airbnb 메시지 기능을 통해 알려주세요.
- 19시 이후 체크인 예정일 경우 체크인 당일 오전까지 숙소로 알려주세요`
                }
            ],
            
        ],
        cleanVat : 50000,
    },
    {
        userId : user2,
        cate : "coolPool",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1148498601171443731/original/0e82bb73-d2f1-46fb-a815-b7d3f6525d85.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1148498601171443731/original/fe0d9e09-33fc-428a-b430-916096afc2c0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1148498601171443731/original/fcb15ef0-cde9-4720-be91-a9ec184a1f2f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1148498601171443731/original/f4b910cb-7d28-4854-b6bc-a91804e4015f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1148498601171443731/original/8276c116-ef73-4f9a-a5fa-fc17be6b9aba.jpeg?im_w=720",
        ],
        title : "별담하늘담",
        address : "경기도 양평",
        dayPrice : 380000,
        roomData : {
            maxUser : 12,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        },
        description : `양평 별담하늘담은 독채 객실 2개를 운영 중이며
에어비앤비에서는 별담, 하늘담 독채 객실 2개를 모두 호스트 합니다.

각 15평의 원룸타입의 객실입니다.
두 개의 객실은 동일한 크기와 구조를 가지고 있고 위치에 따라 보이는 풍경에서 다른 감성을 느낄 수 있습니다.

두 개의 객실과 수영장을 이용하실 수 있습니다.

가장 최적화된 인원은 각각 객실 2명씩 4명이지만
인원 추가(상의 후 최대 12명)의 경우
온돌형 타입의 침구 세트를 제공해 드립니다.

바베큐 이용 시 웨버 원형 그릴 제공 및 집기를 제공하며
최대 인원 이용시에도 바베큐 비용은 동일합니다.

인원 추가 시 추가 비용이 있습니다.

중원계곡 라인에 위치하고 있어서 계곡을 바로 접할 수 있습니다.

그 외 도보로 5분 거리 편의점이 있고 주변은 매우 조용합니다.
숙소
별담, 하늘담 두개 객실 건물을 모두 이용할 수 있습니다.
게스트 이용 가능 공간/시설
야외 작은 수영장이 있으며 객실 이용 시 별도 비용은 없습니다.
이용시간은 유연하게 이용 가능합니다.

그리고 최근 수영장의 경우 루프탑이 설치 되어있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "대형욕조"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 12명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 40000,
    },
    {
        userId : user2,
        cate : "coolPool",
        roomImg : [
            "https://a0.muscache.com/im/pictures/ff86ea07-d2f2-4f2d-a07a-ac7f7427f9b5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c56bb64-4c6f-48cc-bd11-6cecbab28536.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDE2OTE3ODM%3D/original/e59f82d5-0643-4f6d-a805-72c1a3423cd6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/4e4cba04-2ca3-43e3-9808-42976cecdac6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDE2OTE3ODM%3D/original/e3300add-d9ba-44b1-b065-43742d04fd93.jpeg?im_w=720",
        ],
        title : "통창이 있는 다이닝 공간 독채풀빌라 채이네",
        address : "경기도 남양주시 수동면",
        dayPrice : 430000,
        roomData : {
            maxUser : 8,
            bedroom : 2,
            bed : 1,
            bathroom : 2
        },
        description : `24시간 온수수영장, 200평의 넓은 마당, 22평 독채건물까지 오로지 한 팀만 사용하는 숙소입니다.

가을 단풍보기 좋은 산인 축령산 자연휴양림이 차로 5분거리에 있습니다.
단풍구경하기 정말 좋은 산입니다.
산책로가 상당히 잘 되어 있어 어린아이들 데리고 가볍게 걷기도 좋고,
등산로가 여러가지 길로 되어 있어 등산하기도 좋습니다.

사실 채이네에서 보는 단풍으로도 충분합니다.
채이네는 앞산, 뒷산으로 단풍이 예쁘게 물들어 있어서 가을정취를 흠뻑 느끼실 수 있습니다.

채이네에 단풍구경오세요 ^^
숙소
채이네 인스타에 최신사진과 동영상 많이 올라와 있습니다. 참고해주세요.
@_cheine_

* 4, 5, 9, 10, 11월 수영장 이용료는 별도로 5만원입니다. 날씨에 맞게 물온도 조절해드립니다. (현장결제)
* 6, 7, 8월은 객실가격에 수영장이용료가 포함되어 있습니다.
* 채이네 수영장은 동절기에 운영하지 않습니다. (12월~3월말까지 수영장 이용불가)
* 저희 채이네는 안전을 위해 주차장쪽에 cctv를 설치했습니다. 참고해주세요.
* 바베큐 그릴은 무료 사용이십니다. 사용후 그릴 설거지 부탁드립니다. (자세한 안내는 체크인 전날 문자보내드립니다. )


[ 마당 ]

앞마당에는 멋진 조경과 테라스, 온수수영장이 있습니다.
밤에 테라스 의자에 앉아서 별봐보세요. 별이 정말 많이 보일거에요.
뒷마당에는 넓은 평상과 농구대, 탁구대, 텃밭, 야외화장실, 어린이미끄럼틀과 자동차등이 있습니다. 인조잔디가 깔려있어서 아이들 킥보드 타기 편하게 되어 있습니다.


[ 수영장 ]

24시간 운영되는 온수수영장입니다.
날씨에 맞게 온도 조절해드립니다.
수영장 이용료는 별도로 5만원입니다. (예약하실 때 사용여부 알려주세요.)


[ 실내공간 ]

1. 거실
넓은 통창과 안락한 쇼파, 넷플릭스 지원되는 TV 준비되어 있습니다.

2. 안방
안방에는 작은 욕실이 딸려있고 화장대, 붙박이장, 퀸사이즈 침대가 마련되어 있습니다.
채이네는 침구류를 매일 세탁하고 있습니다. 보송보송한 침구에서 편안하게 쉬다가세요.

3. 작은방
작은방에도 퀸사이즈 토퍼가 준비되어 있습니다.
작은방은 퀸사이즈 요 두개 깔면 꽉차는 방입니다.
(채이네는 인원수에 맞게 요와 이불이 준비됩니다. 인원수 맞게 예약해주세요.)

4. 주방
6인용 식탁과 화이트 싱크대가 있는 주방입니다.
넓은 통창으로 사계절 풍경을 감상할 수 있는 시그니처 공간입니다.
정수기, 냉장고, 전자레인지, 인덕션, 각종양념과 다양한 식기류가 준비되어 있습니다.

5. 화장실
실내에는 거실화장실과 안방화장실이 있습니다.
샴푸, 린스, 바디워시, 키즈워시, 치약, 수건등이 준비되어 있습니다.


[ 바베큐장 ]

웨버가스그릴이 있어 편한 장소에서 맛있게 고기 구워 드실수 있어요.
고기 이외에도 장어, 생선구이, 전복구이, 양고기 등 다양한 요리를 해드실 수 있습니다.
(장어 사오셔서 장어 구워드셔보세요. 정말 맛있습니다. )
캠핑용 가스를 이용해 직화구이를 하는 방식이라 숯보다 훨씬 안전하고 맛있게 구워집니다. 저희가 캠핑용 가스를 준비해드리며 무료로 이용가능합니다.
다만 사용후에 그릴 꼭 설거지부탁드립니다.


[ 주의사항 ]

1. 화재예방을 위해 마당에서 숯사용을 금지합니다.
2. 늦은밤 야외에서 소음 주의부탁드립니다. (실내는 괜찮습니다.)
3. 반려동물은 출입이 어렵습니다.
4. 수영장에서 안전사고 나지 않도록 보호자께서 각별히 신경써주세요.


[ 주변 관광지 ]

1. 축령산 자연휴양림 1.7km(4분)
2. 수동계곡(수동국민관광지) 5km(8분)
3. 물맑음 수목원 5.9km(12분)
4. 대성리국민관광지(북한강)15km(24분)
5. 아침고요수목원 24km(37분)
6. 남이섬 35km(45분)

더 궁금하신 사항은 연락주세요!

(채이네는 사업자등록을 낸 정식민박업체입니다.)
게스트 이용 가능 공간/시설
각 공간별 준비되어 있는 물품 목록입니다.
여행 준비하실 때 참고해주세요.

[ 거실 ]
쇼파, 쇼파테이블, 티비, 에어컨

[ 안방 ]
퀸사이즈침대, 에어컨, 화장대, 붙박이장, 옷걸이, 어린이장난감, 가습기, 드라이기, 빗

[ 작은방 ]
퀸사이즈요와 이불, 선풍기

[ 거실화장실 ]
샴푸, 린스, 바디워시, 핸드워시, 치약, 코웨이비데, 수건, 휴지, 아기발판, 아기변기시트

[ 안방화장실 ]
핸드워시, 수건, 휴지, 아기욕조, 코웨이비데

[ 주방 ]
냉장고, 에어컨, 스피커, 인덕션, 밥솥, 코웨이정수기, 전기포트기, 커피머신(네스프레소), 전자레인지, 접의식아기의자, 식기류, 수저, 각종조리도구, 인덕션용냄비, 인덕선용후라이팬, 아기식기류, 아기수저, 쓰레기봉투, 행주, 수세미, 주방세제, 키친타올, 일회용봉투, 각종조미료(고추가루, 소금, 설탕, 다시다, 통깨, 후추, 식용유, 간장, 식초, 참기름, 참치액), 비상약, 에프킬라, 파리채, 청소기

[ 다용도실 ]
세탁기, 건조기, 빨래바구니, 쓰레기통, 세탁세제, 건조기용 섬유유연제

[ 야외 ]
가스그릴, 미끄럼틀, 어린이자동차, 평상, 파라솔과 테이블, 의자, 탁구대, 농구대, 농구공, 다트, 작은축구골대, 축구공, 야외화장실
기타 주의사항
주변에 이웃집이 위치해 있으니 늦은밤 소음에 주의해주세요.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "공용 수영장"
            },
            {
                icon : "tv",
                con : "55인치 HDTV + 프리미엄 케이블 TV, 일반 케이블 TV, 넷플릭스"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 0,
    },
    {
        userId : user2,
        cate : "coolPool",
        roomImg : [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2ODQwOTg2NjY1MTcyMTQ2OA%3D%3D/original/3764456a-a8f1-4f4b-8e97-00b4977a34c9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2ODQwOTg2NjY1MTcyMTQ2OA%3D%3D/original/d85632f0-5630-486e-a93e-61f7286f33d5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2ODQwOTg2NjY1MTcyMTQ2OA%3D%3D/original/0d337608-92f5-4eb3-b587-afbe56ab49fe.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2ODQwOTg2NjY1MTcyMTQ2OA%3D%3D/original/f52fee0d-bcf5-4ebd-afcc-84c5cdce9351.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2ODQwOTg2NjY1MTcyMTQ2OA%3D%3D/original/c2392cf5-34eb-4ee6-9634-410b66a10fd7.jpeg?im_w=720"
        ],
        title : "노을빛을 품은 감성 숙소, 선셋티아",
        address : "제주시 조천읍 선흘리",
        dayPrice : 300000,
        roomData : {
            maxUser : 3,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `찰나의 노을빛을 품은 공간_선셋티아

제주의 자연을 가득 품은 선흘리에 위치한 선셋티아는 1000여평의 대지에 포레스트, 선셋, 선라이즈 단 3개의 객실만 운영되고 있습니다.

프라이빗 수영장과 노을빛을 닮은 붉은 벽체는 주변을 둘러싼 자연과 어우러져 이국적인 분위기를 연출하며 일상이 아닌 특별한 시간 안으로 우리를 안내합니다.

세 개의 공간은 내부는 동일하며 침대 타입만 다릅니다.

* 포레스트만 단독으로 야외 정원이 있어 모닥불을 즐기실 수 있습니다.
숙소
기본 2인, 최대 3인까지 입실 가능하며 추가 1인은 1인용 이불세트를 제공합니다.

침실
- 트윈(싱글/싱글)매트리스와 제작 린넨침구
- 전신거울, 스탠드, 실링팬

거실
- 라운지 체어와 테이블
- 포터블 블루투스 스피커
- 빔프로젝터
- WIFI

주방
- 소형 냉장고와 이동식 인덕션
- 네스프레소 커피머신과 전기포트
- 전자레인지와 오븐토스터기
- 식기세트(3인 기준)와 조리도구
- 와인잔과 오프너 & 소주, 맥주잔

샤워실
- 대형 욕조
- 어메니티(샴푸, 컨디셔너, 바디워시)
- 헤어드라이어

외부공간
- 수영장과 선베드
- 외부 싱크대, 식탁과 의자
- 바베큐 그릴(옵션)
게스트 이용 가능 공간/시설
공용 데크에 앉아 넓은 수공간과 주변 감귤밭을 바라보면서 지친 일상과 멀어져 휴식을 즐겨 보세요.

각 객실마다 외부 수영장과 바베큐장이 있어 연인 혹은 일행끼리 프라이빗하게 시간을 보낼 수 있습니다.

수영장에 물은 항상 채워져 있지만 5월부터 10월까지만 운영되며 미온수(28℃)가 제공됩니다.

*바베큐등 모든 요청사항은 입실전날까지 호스트에게 알려주시고 안내 받으시길 바랍니다. 입실 후 추가는 안됩니다.
기타 주의사항
홈페이지와 에어비앤비를 통한 예약이 가능하며 홈페이지 예약을 우선으로 합니다.

에어비앤비 환불규정을 제외한 모든 안내사항은 홈페이지를 참고해주세요.

* 포털에서 선셋티아를 검색하시면 됩니다.`,
        convenience : [
            
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "bath",
                con : "대형 욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오후 9:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 3명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 9:00 - 오전 9:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
예약 인원 외 방문자 입실은 불가하며 이에 따른 책임은 게스트에게 있습니다.

미성년자는 보호자와 함께 입실하여야 합니다.

애완동물 동반은 금지합니다.

객실의 집기를 훼손 또는 파손하셨을 경우 실구매가로 변상을 요청합니다.

외출시 문단속을 철저히 해주시길 당부드립니다.  도난 사건에 대해서는 책임지지 않습니다.

실내에서 바비큐, 청국장, 생선구이 등 냄새가 심한 음식의 조리를 금지합니다.

화재 예방을 위해 숙소 내/외부 흡연, 캔들 사용, 불꽃놀이 등 화기 사용을 금지합니다.

욕조 사용 시 각종 꽃입, 포푸리, 약초 등은 배수에 문제가 생길 수 있어 사용을 금지합니다.

주변 환경 특성 상 벌레가 유입될 수 있는 점 양해 부탁드립니다. 이로 인한 환불은 불가함을 알려드립니다.`
                },
            ],
        ],
        cleanVat : 0,
    },
    // nearBeach
    {
        userId : user1,
        cate : "nearBeach",
        roomImg : [
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-597438576075232636/original/4a7c1d42-72c1-401b-aa38-b09f6b232e6e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-597438576075232636/original/2a475796-0d95-4f1f-ac2c-2893d22f687f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-597438576075232636/original/1b7e2bbe-08c2-4378-8434-abcb698b0b81.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-597438576075232636/original/cb7e4c47-6185-466d-addf-6172a4d45a2f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-597438576075232636/original/0a28393f-3a72-44b5-b640-93e7eae0b2fc.jpeg?im_w=720",
        ],
        title : "바닷가 바로앞 오션뷰스파 객실, b200",
        address : "강원도 고성군 토성면",
        dayPrice : 272000,
        roomData : {
            maxUser : 6,
            bedroom : 0,
            bed : 2,
            bathroom : 1
        },
        description : `전 객실 스파 보유한 오션뷰 객실로 바닷가 바로 앞에 위치한 펜션입니다
숙소
25 평, 스파시설보유,테라스바베큐가능

[추가인원 관련안내]
최대인원을 초과할 경우 이용 및 환불이 불가합니다.
최대인원을 반드시 확인하시고 예약하시기 바랍니다.
에어비앤비에서는 유아(만 2세미만)는 인원수와 요금에 포함되지 않으나, 우리 숙소는 유아(만 2세미만)도 숙박인원에 포함되니 유아(만2세 미만)의 요금은 현장에서 지불하셔야 합니다.
예약 후에는 숙박일자 변경, 예약인원수 변경이 불가하니 반드시 환불정책을 확인하시고 예약 취소 후 다시 예약을 해주세요.
환불정책에 따라 위약금이 발생할 수 있습니다.
게스트 이용 가능 공간/시설
[바베큐]
전기그릴 바베큐 : 1회 15,000원
전 객실 개별 테라스바베큐 가능
(우천시에는 실내 스파 옆에서 바베큐 이용 가능)
현장결제

[객실정보]
[스파]
전 객실 스파 구비 / 무료
안 녹는 성질이 들어있는 입욕제(예: 금,은가루플라스틱) 제외 사용 가능
기타 주의사항
[입실/퇴실]
입실 : 15:00
퇴실 : 11:00
22시 이후 체크인 시 사전 문의 필수

[픽업안내]
픽업 불가

[유아기준]
영유아 기준인원 포함 / 최대인원 초과 불가
라른 객실 : 1박기준 1인당 30,000원(36개월 이상)
그외 객실 : 1박기준 1인당 20,000원(36개월 이상)
36개월 미만 : 무료`,
        convenience : [
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "공용 수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 6명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
보호자 동반없는 미성년자는 예약 및 입실 불가합니다.
유아(만 2세미만)도 숙박인원에 포함되며 추가요금 발생할 수 있습니다.
예약시 신청하신 인원이외에 추가인원은 입실이 거부될 수 있습니다
예약인원 초과로 인한 입실 거부시 환불 불가하오니 유의하시기 바랍니다.
예약 후 숙소, 이용일 변경은 기존 예약 취소 후 다시 예약하셔야 합니다`
                },
            ],
            
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "nearBeach",
        roomImg : [
            "https://a0.muscache.com/im/pictures/0f52b46a-16fe-472f-a04b-eec52680f162.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4989a398-da46-4a20-bcbb-51c3ab4dd62f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/95e9277d-eae8-4c4c-bbdf-4c308241bda0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/691a8ccd-7774-4354-a725-629ccd93ab7b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7f175a36-c6d2-4145-8779-b912f5af8824.jpg?im_w=720",
        ],
        title : "E°SO 이소하우스 60평 독채",
        address : "인천 강화군 양사면",
        dayPrice : 310000,
        roomData : {
            maxUser : 15,
            bedroom : 3,
            bed : 4,
            bathroom : 2
        },
        description : `10명~15명 이용 가능 숙소
대가족 또는 여러 팀 동반여행, 회사 워크샵등에 적합한 넓은 공간의 독채 펜션입니다.
바다 바로 앞에 위치.
파노라마처럼 펼쳐진 바다와 저녁에 멋진 석양, 교동대교기 보이는 전망은 강화도 최고 입니다.
바베큐장은 독립된 공간으로 주변 환경의 제약없이 편안함을 제공합니다.
숙소
독채펜션, 독립된 숙소, 평화전망대, 교동시장, 교동화개사, 교동도, 외포리,석모도
게스트 이용 가능 공간/시설
야외 바베큐 공간.
그릴과 접이식테이블, 의자 12개.
숯2개, 석쇠2개 착화제 총 2만원 받고있어요~
날씨 상황보고 이용 후 결재해 주세요.
불멍자리는 준비되어 있으니
장작은 사가지고 오셔야 되요.
토치로 직접 불붙여서 사용하시면 됩니다.`,
        convenience : [
            {
                icon : "picture",
                con : "해변 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "85인치 TV"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 15명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "photo",
                    content : "상업적 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 50000,
    },
    {
        userId : user1,
        cate : "nearBeach",
        roomImg : [
            "https://a0.muscache.com/im/pictures/12d9d1ec-f964-4676-a666-e4ecb73c99e3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9cf1544a-f4fa-4355-afec-4bc69d6e58ff.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9685d664-6308-4caf-bad4-1f8e01e13f1d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d11475c0-5a35-4838-9ac3-5245dc30a580.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bbd2307b-ed28-42db-87a9-ed3ed340228e.jpg?im_w=720",
        ],
        title : "청초淸楚 _ 위드 오션",
        address : "강원도 속초시 조양동",
        dayPrice : 310000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `속초해수욕장, 고속버스터미널, 이마트, 외옹치항과 가까운 신축호텔 속초 더 블루테라입니다. 최고급 침대와 침구를 사용하여 여행 후 피곤한 여행객에게 편안한 잠자리를 제공합니다. 저희 숙소는 매일매일 세탁된 침구로 교체하고 있습니다. 숙소에서 오션뷰, 씨티뷰, 레이크뷰, 마운틴 뷰 모두 감상 가능하며 테라스는 잠시 차 한잔의 여유를 할 수 있게 마련해놓았습니다.

22년도 여름대비 에어컨 청소업체이용 에어컨 청소 완료
숙소
속초해수욕장 도보7분 거리에 있으며,
바다뷰 호수뷰 도시뷰 설악산뷰 까지 뷰맛집입니다.
게스트 이용 가능 공간/시설
세탁기, 드라이기, 고데기, 티비, 식기류, 냄비, 인덕션,테라스,
29층 인피니티풀 24년도 운영
5~6월 운영 이용가능
정식오픈 7/1(오픈)~9/30
(종료예정일은 23년도 기준이라 변동 될수있습니다.)유료 30,000 , 28층헬스장, 28층 스카이라운지/카페, 1층 편의점, 베이커리

*에어컨청소
(24년도 하절기 에어컨 전문 청소업체이용 에어컨 청소완료)

* 주차관련
차량유무와 차량번호를 꼭 알려주셔야 주차등록이 가능하오니 앱상 메시지로 미리 꼭 알려주시길 부탁드립니다
주차등록이 안될경우 주차요금이 부과되오니 꼭 사전에등록할수있게 차량이 없으시면 없다. 차량가지고오시는거면 차량번호좀 꼭부탁드려요.

* 엘리베이터 관련
다른 숙소 들도 퇴실 시간이 거의 다 비슷하기때문에 퇴실 시간(11시~12시)에 맞춰 나가시면 엘리베이터를 너무 오래 기다리시게 되는경우가 생깁니다. 관리팀에도 여러번 문의해보았으나,
엘리베이터 자체가 장애인 겸용이라 4개 전부다 속도가 느리다고 합니다. 시간 계획을 잘 세우셔서 이용 부탁드립니다.
기타 주의사항
환불규정에 따라 환불 불가 시점에 날짜 관련 변경요청을 불가하오니 이점은 양해부탁드립니다.`,
        convenience : [
            {
                icon : "picture",
                con : "도시 스카이라인 전망"
            },
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "pool",
                con : "공용 수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "nearBeach",
        roomImg : [
            "https://a0.muscache.com/im/pictures/0c23c691-4e3c-4f14-b607-06aa07277814.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32617a48-a826-42f5-b677-2b658200d6ed.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8ed12a45-4dbc-44ff-a3b4-7dc68c559da5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/33d2f0cf-b4aa-4570-a28c-953b852a4095.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ac7abad5-9fb9-4370-8a11-81266aed273c.jpg?im_w=720",
        ],
        title : "Panorama-Full오션뷰",
        address : "강원도 속초시 영랑동",
        dayPrice : 95000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `삶에 쉼표가 필요할때… 속초…
손을 뻗으면 바로 닿을듯한 바다!
눈앞에 펼쳐진 그림같은 수평선~
침대에서 바라보는 황금빛 에메랄드 윤슬과 평화로이 떠다니는 고깃배들, 그와 어우러진 푸른하늘과 구름… 한폭의 그림같은 감동을 눈에 가득 담아 보세요.
듣기만해도 힐링되는 파도소리와 가슴벅차게 불타 오르는 일출을 테라스에서 바로 즐기실수 있습니다.
이름다운 자연이 주는 위로와 시원한 바다에 마음까지 새로워 질 수 있는 곳 입니다.

설레이는 마음으로 찾아오시는 길.
발걸음과 짐은 가볍게~ 머무시는 동안 온전한 힐링과 쉼을 누리실수 있도록!
혹, 여분의 옷이나 화장품때문에 마음과 손이 무거워 지실까 싶어… 클렌징오일과 폼클렌저, 기초화장품, 바디로션, 고데기, 세탁기와 건조기도 세제와 함께 비치해 두었습니다^^

로비에서 나가면 바로 해수욕장이 있고, 근처에 포장마차 거리와 펍등이 형성되어 있어 저녁엔 감성과 추억을 즐기실수가 있고, 카페와 각종 편의시설이 근거리에 위치해 있습니다
숙소
✔ 셀프체크인 (비대면 입실)
- 방점검 일찍 끝나면 얼리체크인 가능하십니다.

✔ 넷플릭스와 디즈니 플러스, 유투브 지원가능한 스마트 TV (개인개정사용)

✔ 게스트 이용공간/ 시설
*객실- 무선 충전기 (핸드폰및 무선이어폰등 3대기기까지 동시충전가능). 여분의 베개와 담요/얇은이불(여름). 면패드.

* 화장실- 샴푸. 바디워시. 컨디셔너. 수건. 칫솔. 치약. 비누. 샤워타월. 토너. 로션. 클렌징오일. 폼클렌저. 쉐이빙폼. 헤어에센스. 바디로션. 면봉. 화장솜. 드라이기. 고데기.빗. 롤빗. 브러쉬.핸드워시

* 키친- 냄비. 후라이팬. 일리커피머신. 커피포트. 전자렌지.전기밥솥. 간단한 조리도구. 기본 식기류. 접시. 머그잔. 와인잔. 맥주잔. 소주잔. 수세미. 주방세제. 음식물쓰레기 봉투. 키친타올. 간단한 조미료. 캐모마일. 캡슐커피. 커피믹스. 물. 간단한 간식.

* 세탁기와 건조기-세탁세제. 섬유유연제.

* 그 외- 크리넥스. 물티슈. 전기모기채. 에프킬라. 투명비닐봉투. 남&녀 슬리퍼 두켤레. 폴딩체어.
게스트 이용 가능 공간/시설
✔ 본건물은 손님께서 도착하셔서 주차의 수고로움 없이 가볍고~ 편하게 입실 하실 수 있도록, 발렛주차서비스를(출차 무제한) 제공하고 있습니다. 사전에 저에게 차량을 가져오신다고 말씀해 주시면 무료로 발렛주차서비스를 받으시도록 안내해 드리고 있습니다.

* 화재경보기가 예민하여 연기가 나는 음식(고기나 생선류)조리는 불가 합니다.

*퇴실시, 에어컨과 보일러를 꺼주시기 바랍니다. (겨울엔 보일러는 외출로 부탁드립니다)
기타 주의사항
* 엘리베이터는 홀수/짝수로 운행되어지며 화물용 엘리베이터가 한대 더 있습니다
* 분리수거장은 1층 건물 뒤편에 있습니다
* 1층에 편의점과 로비가 있습니다`,
        convenience : [
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "pool",
                con : "공용 해변과 인접"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 2:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    // design
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-732834254442991130/original/a78ae8f7-2cae-41d2-943d-da7b4feb081d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-732834254442991130/original/53f7c4f1-7e74-4d2d-bf99-4a4dc133b888.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-732834254442991130/original/ffa033c4-2d10-4055-8321-1a711a6e7f5d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-732834254442991130/original/4e291ef5-fd81-4de8-a2fa-9a1291be9648.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-732834254442991130/original/4b6a5045-d267-432a-baa8-e39bca941be7.jpeg?im_w=720",
        ],
        title : "ilsanghosa A + B: Architect's Luxury Beach House",
        address : "제주시 구좌읍 월정리",
        dayPrice : 700000,
        roomData : {
            maxUser : 12,
            bedroom : 4,
            bed : 6,
            bathroom : 4
        },
        description : `일상을 벗어난 제주에서의 특별한 하루

초록빛 맑은 바다 위로 풍력바람개비가 어우러진 제주 동쪽의 작은 해안마을 월정리

골목길 사이를 걷다 보면 제주의 정취를 느낄 수 있고, 한 걸음 나가면 아름다운 해변과 번화한 커페거리가 있는 곳입니다.

마을 안 돌담으로 둘러싸인 옛집이 있던 자리에 현대적인 건축디자인의 새로운 공간을 만날 수 있습니다.

내부는 넓고 높게 탁 트이고 사선으로 열린 창 어디로든 하늘을 볼 수 있습니다. 그리고 시선이 머무는 곳에 제주의 돌담과 식물이 있는 곳입니다.

여행 중의 특별한 공간에서 호사로운 하루를 경험하기를 바라며, 그리고 다시 돌아간 일상에서 쉼과 여유로 오래 기억되기를 바랍니다.
숙소
*숙소 주변 설명*
✔︎ 숙소는 해안 마을 안에 위치해 있어, 해변까지 걸어서 3분거리로 가깝습니다.
✔︎ 주변에 옛 건물과 신 건물들이 섞여 있으며, 제주의 정취를 느낄 수 있습니다.
✔︎ 월정리 해수욕장에서 해수욕을 할 수 있으며, 서핑을 즐길 수 있습니다.
✔︎ 해수욕을 하고 숙소로 걸어와 샤워를 할 수 있습니다.
✔︎ 해변 앞에 카페거리가 있어 카페에서 바다를 보며 차를 마실 수 있습니다.
✔︎ 일찍 도착했을 때 짐을 맡기고 해변에 나가보셔도 됩니다.
✔︎ 제주에서 가장 멋진 김녕부터 세화까지 해안도로를 드라이브해보세요.
✔︎ 주변에 카페와 맛집, 기념품가게들이 있습니다.

*공간 설명*
✔︎ 일상호사는 두 동의 독채로 이루어져 있습니다.
✔︎ 각 동은 2층으로 이루어져 있는 독립된 공간입니다.
✔︎ A동과 B동은 마당을 중심으로 서로 마주보고 있습니다.
✔︎ A+B동은 두 가족 또는 대가족, 단체가 사용하기 좋습니다.
게스트 이용 가능 공간/시설
제주의 정취를 느낄 수 있는 독특하고 호사로운 공간에서 가족과 친구와 함께 지내기에 더 없이 좋습니다. 두 동을 동시에 사용하면 여러 가족, 대가족, 단체가 오기에 좋습니다.

A동은 침대가 3개로 최대 7인까지 사용할 수 있습니다.
✔︎ 4~7 인 가족 또는 단체에게 추천
✔︎ 패밀리침대(1층), 킹침대 2개 (2층), 쇼파베드(거실), 욕실2개
✔︎ 온 가족이 모일 수 있는 대형 쇼파
✔︎ 120인치 프로젝터TV (OTT서비스 이용가능)
✔︎ 요리 가능한 아일랜드 주방과 8인 식탁
✔︎ 두 개의 세면대와 커다란 욕조가 있는 욕실
✔︎ 개별 바베큐 데크

B동은 침대가 2개로 최대 5인까지 사용할 수 있습니다.
✔︎ 2~4 인 연인, 가족에게 추천
✔︎ 라지킹 침대(1층), 킹침대(2층), 욕실2개
✔︎ 모두 모여 앉을 수 있는 중정형 테이블
✔︎ 천창이 있는 다운형 욕조
✔︎ 75인치 TV (OTT서비스 이용가능)
✔︎ 요리 가능한 야외형 주방과 6인 식탁
✔︎ 아일랜드 식탁
✔︎ 개별 바베큐 데크


*추가인원*
✔︎ 추가 인원인 경우 바닥매트(7cm 메모리폼)와 싱글이불을 드립니다. 쇼파에 두거나 원하는 곳에 두고 잘 수 있습니다.
✔︎ 추가 이불이 필요한 경우 미리 말씀해주셔야 합니다. 저희는 퇴근을 하기 때문에 불시에 가져다 드릴 수 없는 점 양해바랍니다.
기타 주의사항
✔︎ 실내는 신발을 벗고 들어와야 합니다.
✔︎ 바닥은 매우 깨끗하여 맨발로 이용해도 됩니다. 물론 실내화가 준비되어 있습니다.
✔︎ 바다에 다녀오고 난 후에는 마당에 있는 외부 수도에서 모래를 씻고 집에 들어가야합니다.
✔︎ 바베큐는 셀프로 해야하며 반드시 메시지로 연락을 주고, 바베큐 가이드를 보고 시작해야 합니다. 바베큐사용 후 4만원의 요금이 있습니다.
✔︎ 3박 이상 숙박하는 경우, 3일째 되는 날 중간청소(수건교체와 쓰레기 분리수거)를 해드립니다. 외출하셨을 때 해드리며 당일 오전에 시간을 청소해도 되는지 물어봅니다.
✔︎ 2층은 복층으로 천정이 낮아 불편할 수 있는 점 참고해주세요.
✔︎ 마당 잔디밭에 길고양이들이 낮잠을 자거나 지나 다닐 수 있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "공용 해변과 인접"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 진입로 무료 주차 8대 주차 가능"
            },
            {
                icon : "tv",
                con : "120인치 HDTV + 디즈니+, 넷플릭스, 일반 케이블 TV"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 2:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 12명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 7:00"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
* 등록되지 않은 게스트나 방문객은 허용되지 않습니다.
* 숙소 안에서는 신발이 금지됩니다.
* * 건물 B의 주방에서만 신발을 신을 수 있습니다.
* 침실 내 음식물이나 음료는 금합니다.
* 그에 따라 쓰레기 분리수거 부탁드립니다.`
                },
            ],
        ],
        cleanVat : 50000,
    },
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-743248154763618246/original/19b60c1a-0080-44f0-877d-40c8073f6ffc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-743248154763618246/original/ea4bd15f-fdd2-4d38-adbc-dfe25cf010f7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/bdc700b8-832b-47cc-b9f7-d073a8328162.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-743248154763618246/original/5bd7ea49-4138-4633-96c3-2357b9af53b7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-743248154763618246/original/cd8e2895-e3f3-4314-93d3-9600cc74d84b.jpeg?im_w=720",
        ],
        title : "뜨레시옷송당 제주키즈 풀빌라",
        address : "제주시 구좌읍 송당리",
        dayPrice : 590000,
        roomData : {
            maxUser : 7,
            bedroom : 2,
            bed : 3,
            bathroom : 1
        },
        description : `제주의 푸르름을 아이들에게 선물할 수 있는 행복한 공간, 오름의 마을 송당에 안착하여 ,
제주스러움을 한껏 만날 수 있는 곳입니다.

해맑은 아이들의 웃음소리가 마음껏 뛰어놀 수 있는 푸른 잔디밭 위에 가득하고,
아이의 행복한 미소를 바라보며 함께 제주를 온전히 담아갈 수 있는 곳,
동화 속 그림같은 반짝반짝 빛나는 별을 보며, 하나둘 우리들만의 이야기가 완성됩니다.

제주의 하늘, 바람, 들판의 아름다움을 만날 수 있는 가장 제주스러운 곳에서 행복한 시간을 선물해 드립니다.`,
        convenience : [
            {
                icon : "picture",
                con : "공용 해변과 인접"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
            {
                icon : "pool",
                con : "전용 수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 4:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 7명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 30000,
    },
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-604085417257137623/original/d0164915-22ae-4000-bd37-27853e410d37.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-604085417257137623/original/8f57480f-fb64-4d0f-a6cc-d424b665e814.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-604085417257137623/original/960b75cb-8bf3-4b36-9e9b-0d7dcceb43a3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-604085417257137623/original/dd878e6d-6cb2-4beb-b9cc-c80957dd91a3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-604085417257137623/original/91ffd1b2-1cd1-4de1-8e41-667f252dfd04.jpeg?im_w=720",
        ],
        title : "스테이 재",
        address : "제주시 조천읍 신흥리",
        dayPrice : 268000,
        roomData : {
            maxUser : 3,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `무이재 검색하시면 무이재 공식 홈페이지에서 더 많은 정보를 얻을 수 있습니다. 인스타 에서는 jeju_muize 로 찾으시면 됩니다.

각종 편의 시설과 가까운 위치에 있는 함덕해변, 대중교통 이용에 편리하고 전용 주차 공간으로 편의성이 준비되어있고 정원과 잘 어우러진 야외 욕조가 있는 스테이 재 입니다.
스테이 재에는 풀장이 없습니다. 다른 숙소와 혼동이 없으시길 바랍니다.

본 숙소 는 1층 과는 완전히 분리되어있는
2층 에있는 개별 숙소입니다^^

숙소 이용의 불편을 줄이기 위해 입실 시에 입구에 걸려있는
실내 안내 책자를 꼭 읽어주세요!

영유아 포함 기준 2인 정원이 3명입니다. 인원추가 시 영유아도는 어린이로 추가 해주셔야합니다~^^

야외욕조의 온수는 1일 1회 사용가능하고
추가 이용시 꼭 사전에 문의를 주셔야하며
추가요금이 발생할수 있습니다.
숙소
야외욕조의 온수는 1일 1회 사용가능하고
추가 이용시 꼭 사전에 문의를 주셔야하며
추가요금이 발생할수 있습니다.

숙소 이용의 불편을 줄이기 위해 입실 시에 입구에 걸려있는
실내 안내 책자를 꼭 읽어주세요!
게스트 이용 가능 공간/시설
야외욕조의 온수는 1일 1회 사용가능하고
추가 이용시 꼭 사전에 문의를 주셔야하며
추가요금이 발생할수 있습니다.
기타 주의사항
야외욕조의 온수는 1일 1회 사용가능하고
추가 이용시 꼭 사전에 문의를 주셔야하며
추가요금이 발생할수 있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "picture",
                con : "해변과 인접"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "43인치 HDTV + 일반 케이블 TV, 넷플릭스"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 3명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 7:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-883987854703734080/original/3d892581-272d-4371-ad83-05e56e70fdcc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-883987854703734080/original/2c760ed6-0110-4e68-97ef-25bf8d641619.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-883987854703734080/original/29688335-7cc8-40ca-ae4b-38a01eb5e3cf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-883987854703734080/original/876ba0f1-6f72-4751-95f7-a52d11c560e7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-883987854703734080/original/cf0ac71e-1ee3-4304-911a-c99397f93f34.jpeg?im_w=720",
        ],
        title : "전주에 위치한 전통 한옥을 재해석한 숙소 테오리아",
        address : "전라북도 전주시 완산구",
        dayPrice : 328000,
        roomData : {
            maxUser : 3,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 Onda입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내기를 바랍니다.

[숙소 소개]
'사색을 위한 공간'
전통한옥을 재해석하여 지친 현대인들이 전통 기와와 나무 서까래,
풍경음 그리고 작고 소담한 이끼 정원을 통해 지친 심신을 치유하고, 차분한 색감의 실내공간에서 나 자신을 관조하고 가다듬는 공간과 시간이 되기를 바라는 호스트의 마음을 담았습니다.

[객실 유형]
독채형 : 침실A(더블1)+거실+주방+화장실1
* 침구는 예약하신 인원에 맞게 제공됩니다.
숙소
[인원추가요금]
ㅁ 기준 인원 초과 시 1인당 추가 비용 : 25,000원 / 현장결제
ㅁ 기준 인원을 초과하는 경우, 사전에 숙소로 전화 문의 부탁드립니다.
ㅁ 각 객실마다 정해진 최대 수용 인원(영유아포함) 초과를 엄격히 금하며, 예약된 인원 외에는 입실이 불가합니다.

[주방시설]
커피포트 구비

[주차 및 Wifi 이용 안내]
주차 및 Wifi 가능합니다.

부대시설은 날씨 및 현장 상황에 따라서 이용 가능여부가 달라질 수 있습니다. 부대시설 이용 불가는 환불 사유에 해당이 되지 않으니 예약 전 꼭 이용 가능여부를 사전 확인해주세요!
기타 주의사항
주의사항을 읽지 않아 발생하는 모든 문제는 호스트가 책임질 수 없으니 예약 전 반드시 숙지해 주세요.

객실내외 시설 사용은 객실상황에 따라 이용이 어려울수 있습니다. 에어비앤비 메시지 기능을 통해 확인해주세요

추가인원 요금 및 유아 입실 인원 포함 안내
- 2세 미만 유아는 현장에 도착해서 추가 결제를 해야 입실 가능합니다.
- 2세 미만 유아를 포함한 입실 인원이 객실의 최대인원을 초과할 경우 이용 및 환불이 불가합니다.

숙소와의 연락
- '호스트에게 연락하기'를 통해선 연락이 어렵습니다. 호스트와의 연락은 아래 방법을 확인해주세요.
1. Airbnb 메시지 기능을 통해 메시지로 문의해주세요. (Onda 답변 가능 시간: 매주 평일 10:00~18:00)
2. 예약 확정 고객은 문자 메시지를 확인해주세요. 예약 확정 즉시 숙소 연락처가 문자로 발송됩니다.
3. 만약 예약 확정 후 문자를 받지 못하셨다면 Airbnb 메시지 기능을 통해 알려주세요.
4. 예약시 한국 내에서 수신받을 수 있는 연락처를 필히 기재해주세요.
5. 연락처를 기재하지 않아 발생하는 불이익은 호스트가 책임질 수 없습니다.

숙소 및 부대시설 이용 수칙
- 오후 7시 이후 체크인 예정이라면 예약 완료시 발송되는 숙소 연락처로 전화해서 알려주세요.
- 숙박 외 부대시설은 날씨나 현장 여건에 따라 이용이 어려울 수 있습니다.
- 예약 전 부대시설 이용 가능 여부를 에어비앤비 메시지 기능을 통해 확인해 주세요.
- 부대시설은 숙소에서 부가적으로 제공하는 시설입니다. 따라서 부대시설 이용은 환불 사유에 해당되지 않습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "뒷마당"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오후 12:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 안내 직원"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 3명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
- 기준인원 및 최대인원을 확인해주세요. 기준인원을 초과한 인원은 나이와 무관하게 추가비용이 발생하며 최대인원을 초과한 인원은 입실이 제한됩니다.
- 예약시 한국 내에서 수신 받을 수 있는 연락처를 Airbnb 계정 정보에 기입 부탁드립니다.
- 숙소 이용 안내는 문자로 발송됩니다. 문자를 받지 못했다면 Airbnb 메시지 기능을 통해 알려주세요.
- 19시 이후 체크인 예정일 경우 체크인 당일 오전까지 숙소로 알려주세요.`
                }
            ],
            
        ],
        cleanVat : 30000,
    },
    // country
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-765077774951409695/original/3d50066e-1769-42e1-a31d-5eaba2698cce.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-765077774951409695/original/99e6f12a-ed88-4173-8749-019df6724d18.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-765077774951409695/original/38a14efd-39f0-4c29-ba1c-39c766b87164.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-765077774951409695/original/7c81ba95-1ad6-41bb-9e95-41412e9c135a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-765077774951409695/original/78d152ef-3d66-4a53-aa6e-4ad08e14a673.jpeg?im_w=720",
        ],
        title : "SOLMARu 다래",
        address : "강원도 영월군 무릉도원면",
        dayPrice : 165000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `다래 2층 (한 객실에 두커플 예약금지X)
층고가 높고 채광이 가장 잘드는 깔끔한 객실입니다
숲 뷰가 좋은 개인테라스가 있습니다

*주소 : 영월군 무릉도원면 아래골길204 솔마루펜션

숲 속 별장에 놀러 온 느낌, 마당 앞 계곡, 바베큐, 불멍까지!
시골감성 가득한 이 곳에서 가족, 친구들과 함께 즐거운 추억 만들어보세요
직접 만든 꽃차가 준비되어있으니 식후나 아침에 티를 즐겨보세요^^
아기자기한 시골 마을길이 산책하기 좋아요

차로 10분거리에 편의점, 마트, 식당 등이있습니다

★예약 인원 외 방문 및 숙박금지
★반려견 동반 불가 (몰래 들여 놓을 시 퇴실 조치!)
.
.
.
게스트 이용 가능 공간/시설
* 숯+그릴 : 20,000원
-계곡 옆 바베큐장이 마련되어있어요

* 불멍(장작+대왕마시멜로) : 20,000원 *선착순2팀*
- 이용시간: 밤 11:30까지
- 기후 상황에 따라 이용이 불가능 할 수 있어요.

* 레이트체크아웃 : 20,000원(시간당)
-다음손님이 없을경우 3시간까지 가능합니다.

현장결제항목으로 본인 숯,장작 가져오셔도 기본금액으로 받습니다
*사용시간 미리 말씀해주시면 준비해드려요^^
.
.
기타 주의사항
♥이것만은 꼭! 지켜주세요♥

1. 예약인원 외 방문 및 숙박금지

2. 반려견 동반 불가 (몰래들여 놓을시 퇴실조치)

3. 개인버너, 후라이팬사용(육류, 생선, 기름요리 등) 꼭 바베큐장 이용해주세요.
바베큐장에 식기가 모두 구비되어있습니다

4. 불멍 시, 10시 이후에 주민들에게 피해가 가지않도록
음악, 이야기 작은소리로 부탁드립니다. 밤에는 소리가 크게 울려요.

5. 흡연은 건물 밖에서 해주시고,
담배꽁초는 불씨를 잘끄셔서 쓰레기통에 버려주세요
자연환경을 지키는 당신이 바로 지구영웅!! :)♥♥`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "pool",
                con : "공용 수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 10:00 - 오전 8:00"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
★이것만은 꼭! ★지켜주세요★

1.  객실안에서 버너사용 절대금지!  화재위험이 있습니다
(육류, 생선, 기름요리 등 후라이팬 사용하는 요리는 바베큐장 이용해주세요)

2. 불멍시, 10시 이후에 작은소리로 대화 부탁드려요. 밤에는 소리가 크게 울립니다

3. 흡연은 밖에서 해주시고, 담배꽁초는 불씨를 잘끄셔서 쓰레기통에 버려주세요
    자연환경을 지키는 당신이 바로 지구영웅!! :)♥♥`
                }
            ],
            
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/175794e8-792b-4719-bdff-341ae1adf7d1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c8ca0ff7-b162-4d96-8ae1-43bde3116c64.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2405441f-4489-4a1d-ad0c-24eab2c7f7b1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-38906505/original/9ab0bbe7-7beb-4414-8881-80a69762712b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-38906505/original/470c54ba-0264-499b-99d8-a8f3b5dd39c7.jpeg?im_w=720",
        ],
        title : "아이엠포레스트",
        address : "경기도 양평군 용문면",
        dayPrice : 230000,
        roomData : {
            maxUser : 4,
            bedroom : 3,
            bed : 2,
            bathroom : 2
        },
        description : `아이엠포레스트는
경기도 용문사 & 중원계곡(차로 5분이내의 거리)과
가까운 곳에 위치해 있는 전원주택입니다.

​이곳은 바쁘고 지친 삶에서 잠시 벗어나,
마음의 여유를 누릴 수 있는 공간이 있습니다.
이곳의 느낌은 입니다.

하루 한 팀만을 위한 곳에서
나만의 평온한 시간을 보내며,

#모닥불 #별멍 #산림욕을 통해
스트레스를 해소하고,
재충전해보시길 바랍니다.

#인스타그램 주소 : iamforest_airbnb
#블로그 주소 : 네이버-아이엠포레스트 검색`,
        convenience : [
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/56b74c47-1dda-4dea-8d86-ac909c1d6961.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/cca153d6-555c-4846-be7e-eddf233ad076.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/19253af6-f8ca-4bbd-99f5-b2882e0111f6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/b299e13f-95a1-41f3-b74d-ea3f91544ea2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/b400c5d0-907a-40bf-ace4-6188b4e2b96b.jpeg?im_w=720",
        ],
        title : "나인하우스",
        address : "경기도 가평군 가평읍 금대리",
        dayPrice : 800000,
        roomData : {
            maxUser : 8,
            bedroom : 3,
            bed : 3,
            bathroom : 3
        },
        description : `가족여행시 모두가 만족 할 숙소입니다.
건물 뒤로는 산, 앞으로는 1,200평의 넓은 정원과 계곡이 자리하고 있으며 특색있는 외형의 건물에서 자연과 어울어지는 세련됨을 만끽 하실 수 있습니다.
#경기도건축대상수상 #방송에소개된그집 #서울엔우리집이없다 #스몰웨딩

체크인: 오후 3시, 체크아웃: 오전 11시

*기본인원 4인, 최대 인원 8인 (인원 추가시 별도 문의)
- 이용인원 4인까지는 1인으로 설정하여 결제.
- 추가 인원은 입실1일전 별도 결제 (1인 30,000원)
- 사전 협의 없이 인원 초과 입실 시 즉시 퇴실 요청.
*반려동물 동반 불가
*상업촬영 별도문의
*게스트안전 및 보안을 위한 cctv상시 작동
*일부공간 사용 불가
기타 주의사항
전체 공간 중 일부 공간의 사용이 제한됩니다.
설치물 및 작품 훼손시 손해배상 청구가 진행 됩니다.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "강 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
            {
                icon : "tv",
                con : "50인치 TV + 넷플릭스, 일반 케이블 TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
기준 인원 외 사전 협의 없이 입실 시 즉시 퇴실이 요청 될 수 있습니다.`
                },
            ],
            
        ],
        cleanVat : 40000,
    },
    {
        userId : user1,
        cate : "design",
        roomImg : [
            "https://a0.muscache.com/im/pictures/7fa197a3-abfe-4c5a-8558-0d2208c2011e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-558818377788738307/original/ade40aa0-ea7c-4d1a-8c42-436cccb4f5ac.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/0ce30d84-5929-406f-909f-d29faa16e0e7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-558818377788738307/original/db0633d3-7e5f-4088-8a1e-8ba782dc8d19.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-558818377788738307/original/dee52010-933b-47c3-a04b-58c7a50f0f40.jpeg?im_w=720",
        ],
        title : "앙성온천 근처 일출 아름다운 독채",
        address : "충청북도 충주시 앙성면",
        dayPrice : 470000,
        roomData : {
            maxUser : 10,
            bedroom : 2,
            bed : 1,
            bathroom : 2
        },
        description : `서울근교 한강비내섬과 앙성온천 근처입니다. 해발고도가 높아 거실에 앉아서 열두굽이 능선과 아름다운 일출을 볼수 있습니다. 집 뒷길은 벚꽃 산책길이고 근처 계곡과 낚시가능한 저수지가 있습니다. 2층 독채로 한적한 휴식을 원하는 한두 가족들의 모임에 적합합니다.
1. 개인 별장으로 주말 한,두가족만 받으려 합니다
2. 2박시 1박은 50% 반값 할인 해 드립니다
3. 할인은 문의주시면 특별가제안이나 예약변경으로 진행해 드립니다
4. 3박 이상이나 평일 숙박은 문의 부탁드립니다
5. 성수기 7월말에서 8월초는 할인이 적용되지 않습니다
6. 야채들과 앵두나 대추, 포도 등은 편하게 드셔도 됩니다
7. 바베큐 숯과 그릴은 무료로 세팅해드립니다
8. 여름엔 수영장을 설치해 바베큐하며 아이들 물놀이 가능합니다.
9. 알러지있는 아이들때문에 반려동물 동반은 불가합니다
9. 한적한 산골이라 저녁이후는 고성이나 노래는 삼가해 주시기 바랍니다.
10. 마지막으로 행복한 휴식이 되시길 바랍니다`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "강 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "50인치 HDTV + 프리미엄 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 10명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 8:00 - 오전 10:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
1. 퇴실시 보일러와 이층 전기판넬은 꺼주시기 바랍니다. 
2. 한적한 동네라 저녁에는 노래나 고성은 자제해 주시기 바랍니다.`
                },
            ],
            
        ],
        cleanVat : 50000,
    },
    // coolView
    {
        userId : user1,
        cate : "coolView",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/ff037c2c-2d78-4625-a8e7-34efbf241544.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/d2cb9e14-50e5-481a-87d0-23b72bb0964b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/490e3dc9-06e6-47a4-8f89-b7f7f34d44d6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/9fa50c96-e9c8-44c1-885b-92daa6773417.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/8a1ecf86-eb1b-4723-a685-51bebef5a276.jpeg?im_w=720",
        ],
        title : "남산타워를 조망하며 누리는 휴식",
        address : "서울시 용산구 용산1가동",
        dayPrice : 160000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `안녕하세요 우즈 스튜디오(@studio_ooze)입니다.

이불, 베개, 세면용품은 제공되지 않습니다.

촬영 목적으로 이용하는 게스트 분들을 위해 다락방 컨셉의 퀸사이즈 토퍼2개, 담요, 쿠션을 제공해드리고 있습니다.
숙소
복층 구조로 5m 층고의 개방감을 즐길수 있습니다.
게스트 이용 가능 공간/시설
* 에어컨, 선풍기, 와이파이, 냉장고, 전자레인지, 2구 가스레인지, 에어프라이어, 기본식기 및 잔, 와인오프너 구비`,
        convenience : [
            {
                icon : "picture",
                con : "도시 스카이라인 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 9:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 10:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 10:00 - 오전 7:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
<주의사항>

o 고성방가로 인한 민원 발생시 즉시 퇴실 조치합니다. 
    많은 사람들이 거주하는 다세대 건물이니  고객님들의 배려 부탁드립니다.
o 스튜디오 전체(화장실 포함) 절대 금연입니다. 흡연 흔적 발견시 30만원 패널티 부과됩니다.`
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "coolView",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1031343655346987111/original/e26bf0e7-62cf-4f6a-95a2-53a1ca6638aa.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1031343655346987111/original/bb877434-c79c-4851-878a-de058e7afade.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1031343655346987111/original/21840585-503c-49e8-9792-79fe085d772c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1031343655346987111/original/07175a2c-49df-4058-9985-72e7d6ec4545.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1031343655346987111/original/5ebb3ba7-f873-4818-956a-ef1288694ab9.jpeg?im_w=720",
        ],
        title : "최고의 야경뷰/ 테라스 룸/ On Cloud",
        address : "경기도 안산시 단원구 고잔동",
        dayPrice : 126000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `객실 [On_Cloud]는 안산 만남의 장소인 중앙역과 로데오거리 바로 옆에 위치해 있어 입지적 편리함과 세련된 스타일을 모두 갖춘 공간입니다.

단순 분위기 연출을 넘어 홈시어터라는 타이틀에 부합 할 수 있도록 고급 빔프로젝터 갖추었으며 기분에 따라 다양한 색의 조명 연출이 가능하도록 공간 마련 하였습니다.

On Cloud 에서 특별한 투숙경험 해보시기 바랍니다.`,
        convenience : [
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "bath",
                con : "대형 욕조"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "coolView",
        roomImg : [
            "https://a0.muscache.com/im/pictures/e01e839c-6047-4736-a432-10bd39aacdfd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a8d56ef5-5b05-4b25-b314-05c0220e074f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1017726104961258466/original/8a56b33d-62f7-4365-a4f9-8b53a095ce07.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1017726104961258466/original/8292d870-1e16-4f24-9a94-44e87acd3c56.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/f27e2fa4-032e-47f4-a1fc-6b4808738700.jpg?im_w=720",
        ],
        title : "퀸_초고층 오션뷰 감성숙소",
        address : "인천 중구 중산동",
        dayPrice : 290000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `바다 앞 고층에 위치한 감성숙소 컨셉의 호텔입니다.
모든 객실에서 바다를 조망할 수 있는 오션뷰 호텔(테라스 보유)이며, 호텔에서 도보 1분 거리에는 영종도 구읍뱃터 중심가에 위치한 유명한 카페와 레스토랑, 횟집 등 바가지 요금없는 해외 느낌의 신축 인프라가 형성 되어있는 만족도와 재방문률이 매우 높은 곳 입니다.`,
        convenience : [
            {
                icon : "picture",
                con : "리조트 전망"
            },
            {
                icon : "picture",
                con : "마리나 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "bath",
                con : "대형 욕조"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "pool",
                con : "수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 4:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "coolView",
        roomImg : [
            "https://a0.muscache.com/im/pictures/e13ac058-ce69-4c48-9a05-f2f71667af93.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7f8b4131-0fc7-40a6-b78b-3a2400745f0f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9c2c37b3-1ffa-4a1f-8e7f-e59d6189dae8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/65ea3569-c1fc-4995-88ed-d2ee315a8f83.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/764df828-2c59-482c-87de-2cf923de407e.jpg?im_w=720",
        ],
        title : "한강뷰, 용산역 , BTS 하이브 옆건물",
        address : "서울 용산구 이촌동",
        dayPrice : 150000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `안녕하세요 제가 이집에서 살다가
갑자기 제주도로 이사를 가게 되어서..
세컨하우스로 사용하려고 둔 집입니다
뷰도 너무 좋고 위치도 너무 좋다보니
머무르시기에 좋은 조건이 되실꺼예요
용산역 5분거리 이마트 아이파크 BTs하이브건물등이
모두 숙소 근처에 있습니다
이번에 제가 이사하면서 모든 가구와 전자제품등
다 새것의 제품으로 셋팅되어있습니다
심플하고 간결합니다
침구는 최고급호텔침구와 구스솜
편안한 매트리스로 꿀 잠자리를 하실수 있도록
신경 많이 썼습니다
드라이기 다리미 다리미판
전자렌지 그릇들 밥솥 냄비등 모든게 다 구비되어
있으며 빨래세제 섬유유연제 등 모두 준비해두었습니다
1층에 바로 편의점, 세탁방이 별도로 있으며
무료주차도 가능합니다
건물 3층엔 헬스장 샤워장 실내골프연습장이 있으며
2층에서 횡단보도만 건너면 한강산책로 입니다
인터넷, 와이파이, TV 다 설치되어있습니다.
더 궁금하신 부분은 문의 주시구요
예약은 5일이상부터 가능합니다
감사합니다`,
        convenience : [
            {
                icon : "picture",
                con : "강 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "coolView",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1072618490897528476/original/59c8828d-65f8-4d07-93f0-c0c98fc716e9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1072618490897528476/original/ceb60d65-ab7e-4b80-874c-de234ec1c001.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1072618490897528476/original/d0e3dd33-7753-49d6-a6fd-b6c11b37c16d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1072618490897528476/original/59f28c7a-ddb4-460e-a05e-a4448808980e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1072618490897528476/original/19333c56-ea48-4a81-9151-3ba444e347c6.jpeg?im_w=1200"
        ],
        title : "벨37 리버스테이 A",
        address : "경기도 연천군 장남면 원당리",
        dayPrice : 480000,
        roomData : {
            maxUser : 3,
            bedroom : 1,
            bed : 1,
            bathroom : 2
        },
        description : `벨37은 독채수영장 풀빌라펜션으로 복층을 독채로 이용 가능합니다. 서울 근교 1시간대 신축 풀빌라입니다.

사계절 실내 온수수영장을 독채로 이용 가능하며 프라이빗 한 수영장에서 물놀이를 하면서 시원하게 펼쳐지는 임진강뷰를 감상할 수 있는 개방감 있는 힐링의 장소입니다.

벨37은 프라이빗 해서 가족 단위뿐만 아니라 커플들이 즐겨찾는 5성급 럭셔리 풀빌라 펜션 입니다.

개별 바비큐와 불멍이 가능한 깔끔한 신축 풀빌라이며 전객실 어느곳에서나 시원하게 펼쳐지는 임진강 뷰를 감상하실 수 있는 프라이빗 하면서도 개방감 있는 고급형 풀빌라입니다.

벨37 풀빌라는 리버스테이 A동과 리버스테이 B동 2개동을 운영중이며 사계절 실내 온수 수영장은 크리스탈 여제와 고가의 UV 살균기가 설치된 인피니티풀로 더욱 깨끗한 물에서 안전하게 물놀이를 즐기실 수 있습니다.
숙소
1층 실내 수영장에는 넓은 홀과 화장실, 세면실, 샤워실이 별도로 구비되어 있어 더욱 편리하고 감성이 물씬 풍기는 넓은 야외 정원과 연결되어 있어 물놀이 후에 캠핑분위기의 바비큐 파티는 물론 식사나 차를 마시면서 시원하게 펼쳐지는 임진강 뷰를 감상하실 수 있습니다.

2층은 침실과 키친, 홀, 화장실, 세면실, 샤워실, 자쿠지, 테라스가 있으며 물놀이 후에 프라이빗 한 자쿠지에서 따뜻한 물에 몸을 담그고 일상에 쌓였던 스트레스를 풀며 편안한 휴식을 취할 수 있습니다.

또한 리버스테이 A동과 B동 사이 수공간은 벨37 방문객들만이 누릴 수 있는 프라이빗 한 포토죤을 선사합니다.
게스트 이용 가능 공간/시설
1층 실내수영장은 사계절 물놀이가 가능한 대형 온수풀로 객실 사용기간동안 24시간 이용이 가능하며 실내수영장과 연결되어 있는 야외 정원에서 캠핑분위기의 개별바비큐와 불멍을 즐기실 수 있습니다.
기타 주의사항
[예약인원]
기본인원 3인 (최대 6인가능)

*3인 이상 인원 추가시 : 1인당 50,000원

[바비큐]
바비큐(바비큐그릴+숯1봉+착화제) : 10,000원

* 바비큐 숯 추가 : 1봉당 * 5,000원

[불멍]
불멍(불멍화로+장작1자루+착화제) : 20,000원

* 불멍 장작 추가 : 1자루당 * 10,000원

[온수추가]
기본 온도 29~30도 셋팅되어 있습니다
필요할 경우 온수추가(32~34) 가능하며
온수 추가는 예약시 미리 신청하셔야 합니다.

*온도추가
32도 : 50,000원
34도 : 100,000원


[결재방법]
추가 결재는 무통장입금이나 현장 결재 하시면 됩니다.

*추가사항은 예약시 별도 문의 바랍니다.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "강 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "전용 수영장 - 연중 언제든 예약 가능"
            },
            {
                icon : "bath",
                con : "대형 욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 스마트 도어록"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 3명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 10:00 - 오전 12:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    // koreanHouse
    {
        userId : user1,
        cate : "koreanHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-20466989/original/d0ec6f40-0a67-4374-afb9-ffa6e649db31.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-20466989/original/da8994ea-ccd3-49e2-a31c-563be43dd1c7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-20466989/original/03fbfb12-3e88-4c00-b146-49e74f813994.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-20466989/original/cac5b229-89a3-4f30-84d5-27e8d4b2e6ce.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-20466989/original/e56f4099-62df-4ef0-9e40-d049784f1c24.jpeg?im_w=720",
        ],
        title : "하회마을 지산고택 사랑방",
        address : "경상북도 안동시 풍천면",
        dayPrice : 155000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 0,
            bathroom : 1
        },
        description : `지산고택은 하회마을 안에 있으며 경상북도 민속자료 140호로 지정되어있으며, 고택의 역사는 약 200년 가까이 되었습니다.

넓고 푸른 잔디가 있는 정원과 함께하는 옛조상의 숨결으 느끼실수 있을것 입니다.

지산고택을 방문해주시는 분들께 한옥의 멋과 혼을 직접 체험하며 좋은 추억이 남을 수 있도록 노력하고 있습니다.
숙소
새로 수리를 하여 방안에 화장실이 구비되어 있습니다.

사랑방의 경우 단독으로 쓰는 마루가 있습니다.
게스트 이용 가능 공간/시설
단독마루 화장실은 방안에 있습니다.

시골이다보니 여름철 벌레들이 많이 있습니다 최대한 신경쓰지만 시골집이란 특성 염두해주세요
기타 주의사항
조식은 떡구이와 커피가 제공됩니다.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
지산고택은 11시 퇴실을 원칙으로합니다 퇴실이후 짐보관과 주차는 가능합니다

오전 7~10시에 간단한 커피와떡구이를 드립니다 원하는 시간을 말씀해주세요

방안에서는 취식이 불가합니다 한옥특성상 음식냄새가 심하게 뱁니다 양해부탁드립니다`
                },
            ],
            
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "koreanHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-35355190/original/c5563058-cb83-42d7-9eee-63b49bbee6cf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-35355190/original/be67d194-b510-49c1-9c22-31b9affae3e2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/920af4b4-a7c6-4ca2-b9a6-684931b30144.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-35355190/original/49abdc60-722d-44e9-8f13-5165aa90a00d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-35355190/original/a19e5dcf-ff90-4962-909a-4457c085c607.jpeg?im_w=720",
        ],
        title : "전통기와 한옥_산들아_ 본채",
        address : "경기도 양평군 옥천면 용천리",
        dayPrice : 360000,
        roomData : {
            maxUser : 15,
            bedroom : 3,
            bed : 0,
            bathroom : 2
        },
        description : `용문산 서쪽 유명산 옆 어비계곡 상류인 해발 500m 에 위치하고 있으며 정남향 전통 한옥집 으로 앞쪽에는 물이4계절 마르지않는 계곡이 있고, 집뒤에는 소나무 고송이 있어 운치를 더해주고 있으며, 건강과 휴식 을 즐기기 위한 최적의 장소 입니다
숙소
전통 팔작지붕 2018년신축 한옥 으로 3중창호와 단열 등 친환경자재를 사용 하였음
게스트 이용 가능 공간/시설
외부의 전용 공간에 탁자1개와 의자8개가 있고 바베큐 설비는그릴,석쇠, 집게 있음(장작 이나 참숫사용은 별도로 그릴당 30,000원.현장지불)
기타 주의사항
=동네에는 마트가없어 음식등 은 외부에서 준비하여야함
=주변에 비포장 도로에서 ATV 이용할 수 있음
=근처 청평 호반까지 40분 20km
=인근에 있는골프장 : 아난티클럽,마이다스벨리,프린스턴벨리
= 전기밥솥 있슴`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
            {
                icon : "bath",
                con : "욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 15명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 10:00 - 오전 8:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
- 침구류는 2인당 1 set 입니다.(추가로 필요하시면 요청하십시요)
-실내화 착용 금지
-온동방(침대없슴)
-바베규 숫불피워드리고 그릴1개당4만원(현장지급)
-불멍 2만원(현장지급)`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "koreanHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/1b542199-76d9-477c-beb7-35e44e82efaa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0a7d9b72-4b12-4a49-a31d-49d396ca99f3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-574389658286422805/original/dfc546ad-1c6c-47a0-ac91-58f4e55361e8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/4f09fb44-6257-4de6-99e2-553a36a88b22.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/200d75de-4e1c-483e-91cd-ccf9718128f2.jpg?im_w=720",
        ],
        title : "스테이 루",
        address : "경상북도 안동시 풍산읍",
        dayPrice : 260000,
        roomData : {
            maxUser : 4,
            bedroom : 2,
            bed : 2,
            bathroom : 1
        },
        description : `하회마을에서 10분거리에 있는 커플 및 가족여행에 적합한 넓은 공간과 홈카페 다락 자쿠지 이용이 가능한 세련됨과 편안함을 모두 갖춘 숙소입니다.
숙소
본채와 별채로 나뉘어져 있으며 별채에서 요리 및 카페로 사용가능합니다.
마당에 있는 화로에서 불멍이 가능하며 조식(샌드위치 및 쥬스)이 제공됩니다.
불멍이용시 추가금 2만원이 있습니다.
게스트 이용 가능 공간/시설
침실, 거실, 주방, 족욕실, 다락, 다도실, 홈카페`,
        convenience : [
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 10:00 - 오전 6:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
실내 슬리퍼 사용
쓰레기분리수거 요청
본채 요리(고기찌게) 불가
별채 요리 가능
개인취사도구 사용불가`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "koreanHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-829373903157961134/original/5a4bb6e3-4e53-4232-b1a6-240de57d34a0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-829373903157961134/original/bfe5851c-8e29-4630-8258-b0793470c75f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/900daf55-6a50-4c96-9478-321fea8f0f23.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-829373903157961134/original/29dfa629-25d7-40e7-9650-183b80233b6e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-829373903157961134/original/ae2d8228-bd04-40cd-9972-d7dc720d14be.jpeg?im_w=720",
        ],
        title : "제민천의 따스함과 예술을 품은 홍시 아트 하우스",
        address : "충청남도 공주시 교동",
        dayPrice : 218000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 0,
            bathroom : 2
        },
        description : `@hongsi_arthouse

홍시 아트 하우스는 예술 애호가들을 위한 한옥으로, (故)이창섭 교수의 시 '홍시'에서 영감을 받아 지어졌습니다. 사랑하는 이와 예술과 문화를 나누며 고요하고 맑은 시간 보내실 수 있기를 소망합니다. 유네스코 세계 문화 유산인 공산성과 제민천 옆에 위치하고 있습니다.

유네스코 세계문화유산인 공주시의 중심에 위치한 현대적 편안함을 즐기면서 한국 전통 문화와 건축에 푹 빠져보고 싶은 예술 마니아를 위해 설계된 독특한 한옥인 홍시 아트 하우스에 오신 것을 환영합니다. 고대의 아름다움과 현대적 편리함의 완벽한 조화를 경험해보세요.`,
        convenience : [
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "picture",
                con : "강 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `숙소를 예약하기 위해서는 아래의 규칙에 대한 동의가 필요합니다. 만약 동의가 어려우신 경우 예약시간으로부터 15분 이내 무료 취소가 가능하며, 규칙을 어기는 경우 강제 퇴실 혹은 페널티가 부과될 수 있습니다.

- 13세 미만의 미성년자는 숙박이 불가합니다. 
- 허가 받지 않은 상업 촬영 및 이벤트는 불가합니다.
- 실내외 모든 구역은 금연입니다.
- 소음, 고성방가 등은 금지됩니다.
- 예약 인원 외 출입은 불가합니다.
- 출입구에 CCTV가 설치되어 있습니다.
- 보조견을 제외한 반려동물 동반은 불가합니다.
- 장애인 고객님께서 예약하는 경우 저희에게 말씀주시면 도움을 드리겠습니다.`
                },
            ],
        ],
        cleanVat : 20000,
    },
    // farm
    {
        userId : user1,
        cate : "farm",
        roomImg : [
            "https://a0.muscache.com/im/pictures/5874cae5-198f-4301-91af-d3eb137dd6c4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d9fe2f64-3b11-4225-9a3c-ed218c5fb62c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/699345d1-aeb2-4869-a24e-bce278a51e08.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/77122651-6798-49aa-9741-fe3c759372a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2c48e708-31b9-4c4d-af0f-c9cce604fbc5.jpg?im_w=720",
        ],
        title : "Family Suite - Jimi stay",
        address : "제주시 구좌읍 하도리",
        dayPrice : 211000,
        roomData : {
            maxUser : 4,
            bedroom : 2,
            bed : 2,
            bathroom : 1
        },
        description : `하도 바다와 지미 오름 그리고 철새도래지로 이어지는 파노라마 뷰, 여기에 더해지는 일출과 일몰의 광경. 시시각각 변하는 제주의 하늘과 바람을 그대로 느낄 수 있는 곳, 지미스테이는 '자연 속의 평온한 휴식'을 위한 공간입니다.

[바투모루] AM 10:00 ~ PM 06:00
투숙객 혜택: 음료메뉴 30% 할인적용
숙소
-Family Suite(Natural Stay)
청고벽돌과 모노타일로 마감하여 다채로운 질감을 느낄 수 있고, 천연 목재의 아름다움이 빛을 발하며 자연 채광으로 아늑한 공간에 놓여 있는 레트로한 디자인의 가구들은 하나의 오브제가 됩니다. 2층으로 올라가는 계단에는 액자 같은 창이 나 있고, 탁 트인 전망을 가진 복층 구조는 여유로운 휴식이 가능합니다.`,
        convenience : [
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 2:00~오후 8:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
다 드시고 난 후의 식기는 직접 설거지 부탁드립니다. :)`
                },
            ],
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "farm",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-45320584/original/5cfa4cb6-42c3-415a-8cd9-6a67ca0e3c1c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/1b43b258-bf91-4be0-adb0-1dc9b22b9404.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0b058dec-6453-4802-a9e7-316130e6d2aa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4b8cc297-9d01-426e-a5a0-c89c01b8e0f1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f642c5d6-7b78-4a45-ad3f-da2c50d4dc1c.jpg?im_w=720",
        ],
        title : "평사리의 그 집",
        address : "경상남도 하동군 악양면 봉대리",
        dayPrice : 150000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `드넓은 악양 평사리 들판이 한 눈에 내려다보이고 근처에는 최참판댁, 동정호등이 도보 5분거리에 있으며 버스정류소가 바로 아래에 있어 대중교통 이용도 편리합니다.
또한 스타웨이하동과 한산사, 매암제다원, 섬진강 모래사장, 맛집이나 까페들도 차량 5분거리에 있습니다.
황토와 편백으로 마감된 작은 별채는 툇마루가 있어 차를 마시며 담소를 나누기 더없이 좋습니다.
전원생활을 즐기면서 운영하는 작은 게스트하우스라 조용하고 마을과 떨어져있어 저녁에는 풀벌레 소리 들으며 호젓하고 편안하게 쉬어갈 수 있는 곳입니다.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 넷플릭스"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
            
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "farm",
        roomImg : [
            "https://a0.muscache.com/im/pictures/e52d3f01-43f5-4e31-92f9-ac5d6cb8153e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e6ff6eb2-0cea-4952-b0b5-6f20735af972.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7c950a4d-b88e-4d06-8c12-33ed977d8a92.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0a115fa4-bdd3-44ed-a038-36f5d760fc1c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a9ea8656-8ab1-40be-8fcf-0ebd6de66c7a.jpg?im_w=720",
        ],
        title : "동물들과 보내는 별이 빛나는 밤",
        address : "경기도 포천시 일동면 사직리",
        dayPrice : 168000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `우리 부부는 서울에서 슈퍼마켓 운영을 오랫동안 했습니다. 숨 가쁘게 살아온 도시생활을 뒤로하고, 생명력이 가득한 이 곳 포천에 정착하였습니다.
-
이 곳은 동물과 함께 자연을 느껴볼 수 있는 정원입니다. 골프카를 타고 나무정원을 드라이브하고, 밤하늘 수놓은 별을 감상할 수 있습니다. 다양한 예술적 낭만을 만끽할 수 있는 곳입니다.
_
01.
'샘물농장'은 자연과 동물을 사랑합니다. 사계절 언제나 나무, 동물들과 교화될 수 있도록, 열심히 가꿔나가고 있습니다.
(동물친구들 : 양, 토끼, 칠면조, 강아지, 고양이, 거위 등)
02.
고요히 머물다 가실 수 있도록, 3개의 독채를 운영합니다. 각 소나무/회화나무/라일락입니다. 따스한 아궁이 온기가 가득한 황토방입니다. 독채마다의 기준인원 2인이며, 최대 4인까지 수용 가능합니다.
03.
'샘물농장'을 베이스캠프로 포천의 아트밸리, 평강랜드, 광릉수목원, 어메이징 파크, 명성산, 한탄강 지질공원 등 여행지를 둘러볼 수 있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 2:00~오후 8:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
            ],
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "farm",
        roomImg : [
            "https://a0.muscache.com/im/pictures/c333a815-db30-4aba-83c7-f93480d9314a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-45678557/original/3f5469b6-503c-4253-b7b5-65d7040030ed.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-45678557/original/57d9d1df-fa69-4a39-bdc8-c0ad3ec199c9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/2783207b-8421-4661-b99b-4bc37aa0e7c1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-45678557/original/5f43a70c-6434-4c2d-9267-3130e296af1a.jpeg?im_w=720",
        ],
        title : "바라던바다_놀동",
        address : "제주시 구좌읍 월정리",
        dayPrice : 153000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `제주도 동쪽,
아름답고 고즈넉한 바닷가 근처,
한폭의 수채화같은 뷰를 품고 있는 "바라던바다" 입니다.

바라던바다는
총 3동으로 이루어져 있으며
쉼동, 놀동, 큰동 중 현재 보시고 계신 곳은 "놀" 동입니다.
(놀동은 하얀집 바로 뒷편 집입니다.)

바라던바다_놀동에서는
거실에서도, 방 안에서도, 테라스에서도
탁 트인 예쁜 뷰를 감상하실 수 있으십니다.

김녕성세기해변까지 2분,
월정리해수욕장까지 4분이 걸리는
김녕과 월정 중간즈음에 위치하고 있습니다.

아름다운 풍경을 바라보시며
편안하게 쉬어 가실 수 있으셨으면 좋겠습니다^^!`,
        convenience : [
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "bath",
                con : "대형 욕조"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오전 12:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
반려견 동반시 반려견이 다른 반려견에 공격적인 성향을 보이면 안됩니다.
숙소안에서는 금연 입니다.
숙소안에서 바베큐, 냄새 많이 나는 요리는 안되십니다.(다른분들을 위해 양해 부탁드리겠습니다.)
휴가 마당은 공용공간입니다. 다른 손님과 반려견을 위해 용변 처리 꼭 부탁드리겠습니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    // nearLake
    {
        userId : user1,
        cate : "nearLake",
        roomImg : [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-954245313573933335/original/13de9bbc-7bb7-4a08-adb3-d0d631172336.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-954245313573933335/original/ad8edcf8-65ef-46c6-bfed-4ca795c920ca.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-954245313573933335/original/8a76a2b0-2074-4ee0-8361-fdd2116e4cf4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-954245313573933335/original/16f1bdbd-a71a-4f93-b808-5f303d2f8ef8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-954245313573933335/original/748b7ab9-03b8-4ab0-9bec-fda2e7104db5.jpeg?im_w=720",
        ],
        title : "레이크사이드 코티지",
        address : "충청북도 충주시 동량면 지동리",
        dayPrice : 650000,
        roomData : {
            maxUser : 8,
            bedroom : 5,
            bed : 2,
            bathroom : 2
        },
        description : `충주호 호수에 접해있는 이 아름다운 2층집은 모든 각도에서 호수를 감상할 수 있습니다. 500평의 넓은 야외 공간과 1층 테라스 데크, 2층 발코니에서 완벽한 호수뷰를 즐길 수 있으며, 자연과 함께하는 압도적인 평온감을 느낄 수 있습니다. 최고의 힐링 장소로 여러분을 초대합니다.

♥ 오픈이벤트 ♥️: 숙소에서 바베큐 하실 수 있게 참숯을 무료로 제공해드립니다.`,
        convenience : [
            {
                icon : "picture",
                con : "호수로 연결"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오후 3:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "nearLake",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-49548623/original/075b4f6d-9a14-4d38-93d8-ddd2a62f57b4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49548623/original/c037abd2-93e8-495a-970f-c391e36add97.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/90834e36-a1a0-4219-8d36-10d91cbc657d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e04d60e4-b02f-4bf8-a51d-592fb2b91e0b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8867ceb7-997e-4859-8b35-404defe0a840.jpg?im_w=720",
        ],
        title : "가족전용독채별장",
        address : "충청북도 제천시 청풍면 대류리",
        dayPrice : 850000,
        roomData : {
            maxUser : 10,
            bedroom : 4,
            bed : 2,
            bathroom : 3
        },
        description : `※ 5인 이하 예약시 사전에 문의 바랍니다.(별도 할인)

청풍호를 품은 작품 같은 아름다운 건축물, 넓은 잔디마당, 예쁜 정원,고급 인테리어, 내집 같은 머물고 싶은 家에서 가족의 아름다운 추억과 행복을 담아 갈 수 있는 곳으로 대형 수영장(무료)과 사계절 이용 가능한 초대형 월풀 냉온수 스파 5만원, 야외 바베큐장 3만원(겨울철 5만원), 불멍장 셋팅은 각 3만원이며, 대형 테이블 등 모든 편의시설이 갖추어져 있습니다.

★ 2연 이상시 바베큐장,불멍장 1회 무료 셋팅
★ 준성수기 및 성수기 바베큐장 1회 무료 셋팅
★ 수영장 무료

또한, 청풍호반케이블카, 모노레일, 유람선, 문화재단지가 모두 10분이내 거리에 있으며, 의림지와 단양관광특구를 30분에 갈 수 있습니다.

게스트 기준 인원은 10명이며, 추가 1명당 3만원이며, 최대 15명 까지 이용 가능하며,기준 인원 초과시 반드시 사전 문의 후 예약하시고, 예약 인원 초과시 입실 불가 및 취소 될 수 있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "호수 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "전용 수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오후 3:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "nearLake",
        roomImg : [
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-826343324194120511/original/96a5085b-b464-4d64-9473-a9af85bf7964.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-826343324194120511/original/7645e878-dba7-4ce8-8e2f-5d0e280adebd.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-826343324194120511/original/7d5695c0-2400-43d1-935b-967bab6b55a0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-826343324194120511/original/9c416c32-988f-4bdb-bcf5-9e0686c20478.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-826343324194120511/original/a1ac0935-3eaa-49dd-b745-5dbafc1ff176.jpeg?im_w=720",
        ],
        title : "탁트인 전망의 오션뷰 객실, 502",
        address : "강원도 속초시 영랑동",
        dayPrice : 293000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `펜션이 바다 앞에 위치해 있습니다
숙소
25 평, 스파시설보유,바다전망

[추가인원 관련안내]
최대인원을 초과할 경우 이용 및 환불이 불가합니다.
최대인원을 반드시 확인하시고 예약하시기 바랍니다.
에어비앤비에서는 유아(만 2세미만)는 인원수와 요금에 포함되지 않으나, 우리 숙소는 유아(만 2세미만)도 숙박인원에 포함되니 유아(만2세 미만)의 요금은 현장에서 지불하셔야 합니다.
예약 후에는 숙박일자 변경, 예약인원수 변경이 불가하니 반드시 환불정책을 확인하시고 예약 취소 후 다시 예약을 해주세요.
환불정책에 따라 위약금이 발생할 수 있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
보호자 동반없는 미성년자는 예약 및 입실 불가합니다.
유아(만 2세미만)도 숙박인원에 포함되며 추가요금 발생할 수 있습니다.
예약시 신청하신 인원이외에 추가인원은 입실이 거부될 수 있습니다
예약인원 초과로 인한 입실 거부시 환불 불가하오니 유의하시기 바랍니다.
예약 후 숙소, 이용일 변경은 기존 예약 취소 후 다시 예약하셔야 합니다`
                }
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "nearLake",
        roomImg : [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1127825869394966833/original/c6b2d680-675e-4c3e-850a-a750749b5fac.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1139773690292983303/original/12b316d4-9a58-4c73-a1b5-1ad141c730a7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1127825869394966833/original/34c2c935-2192-4acb-831b-3141fa30292b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNzgyNTg2OTM5NDk2NjgzMw%3D%3D/original/3922e2d4-efb9-4f94-9d51-e97eb403c986.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1139773690292983303/original/21473be3-073e-44e7-8ce8-30b9b63903aa.jpeg?im_w=720",
        ],
        title : "호수에 둘러싸인 프라이빗 독채2층별장",
        address : "충청북도 제천시 청풍면 양평리",
        dayPrice : 568000,
        roomData : {
            maxUser : 12,
            bedroom : 4,
            bed : 4,
            bathroom : 2
        },
        description : `도보1분 청풍호 호숫가 바로 앞에 홀로 자리한 단독2층 [실로암]은 주변에 다른 집이 없어 프라이빗하며, 넓고 아름다운 정원 내 편백나무의 피톤치드향이 가득히 어우러진 곳입니다. 자연 속에서 평온한 휴식을 원하는 분들을 위한 최상의 휴양지로 푸른 잔디 위에서 맑은 호수를 바라보며 자연의 아름다움을 만끽할 수 있습니다. 대한민국 최고의 호수경관은 마치 그림처럼 아름답습니다. 무엇보다도, 호수 바로 앞에서 캠핑을 즐기며 밤하늘의 가득찬 별들을 바라보는 경험은 이곳에서만 느낄 수 있는 특별한 순간입니다. 호수로 내려가 발을 담그거나 물놀이와 낚시를 즐길 수 있습니다! 호수 배낚시 체험을 위해 환상의 뱃터(보트 계류장)를 이용하시면 됩니다. 단, 체험 장비일체는 게스트 지참해야 합니다. 뿐만 아니라, 차량5분거리 관광모노레일, 호수전망 케이블카 경험과 산책하기에도 안성맞춤입니다. 편백나무향 가득 담은 치유의 집 [실로암]에서 가족 모두 편안한 휴식과 아름다운 자연을 누리시길 바랍니다.`,
        convenience : [
            {
                icon : "picture",
                con : "호수 전망"
            },
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "욕조"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 12명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                }
            ],
        ],
        cleanVat : 40000,
    },
    // logHouse
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/32e8b4a0-83ff-4dba-8253-5340d8d05215.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/09c2ac0e-6fea-4bb0-8724-1544f5bbe75c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/97a6907d-478e-43fa-b49e-52cd8580bccc.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fc57f7a1-a19c-474c-b860-2041dc3fc39d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1ef51337-ad95-4227-9fc3-6bb0bd4fe48a.jpg?im_w=720",
        ],
        title : "서나와 할아버지 통나무집 - 산님",
        address : "강원도 홍천군 화촌면",
        dayPrice : 137000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 2
        },
        description : `서나와 할아버지 통나무집_산님에 오신 걸 환영합니다.

산님은 머무시는 분들의 몸과 마음이 편안히 숨, 쉼 하시길 바라는 마음으로 지어서 가꿔가고 있어요.

산님으로 들어서시면,
울창한 벚나무랑 짝을 이룬 넉넉한 데크와 핀란드산 편백 통나무 향으로 가득한 실내가 반겨드릴 거에요.

산님의 매력덩이인 벚나무는 봄에는 꽃구름으로, 여름에는 시원하게 반짝이는 그늘로, 가을에는 팔랑팔랑 떨어지는 금빛 나뭇잎으로, 겨울에는 하얀 눈을 얹은 나뭇가지로 산님을 감싸준답니다.

산님은 다락방이 있는 16평 독채예요.
산님의 침실, 마루, 데크에 편안히 자리잡으시면 공작산과 그 위 하늘에서 펼쳐지는 구름과 바람의 춤을 즐기실 수 있을 거에요.
새랑 풀벌레의 조잘거림과 가만히 귀 기울이면 들리는 길 건너 냇물 소리도 맘을 편하게 해드릴 거구요.

네분까지 머무실 수 있는 산님은 배변 훈련이 잘된 모든 반려동물과의 동반 투숙을 환영합니다!`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "초고속 와이파이 - 72Mbps"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "55인치 HDTV + 넷플릭스, 프리미엄 케이블 TV"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 9:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
다음 게스트를 위해 깨끗이 써 주세요^^
식기에 기름기가 남아 있지 않도록 부탁드려요.
쓰레기통도 꼭 비워 주시면 고맙겠습니다.
땅별을 위해 분리수거도 잘 부탁드려요.
분리수거 하실 때 병에 붙어 있는 비닐을 꼭 떼어주세요!
산님 옆 벽돌집 뒤에 일반 쓰레기통, 음실물 쓰레기통, 분리수거구역이 있습니다.`
                }
            ],
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-44201292/original/f473cb11-2877-4ef7-afb1-725ad64c558d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/f7be5b9a-a0d8-4f87-9087-7ef10a896efc.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cbc0e868-1b09-4f50-b234-6105630606f3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/98549f6a-badc-47bb-ab73-6ea67462a473.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/46a3ee2b-f24b-4525-8aed-81cf4ba43107.jpg?im_w=720",
        ],
        title : "서나와 할아버지 통나무집 - 별님",
        address : "강원도 홍천군 화촌면",
        dayPrice : 137000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `서나와 할아버지 통나무집_별님에 오신걸 환영합니다.

별님은 머무시는 분들의 몸과 마음이 편안히 숨, 쉼 하실 수 있길 바라는 마음으로 지어서 가꾸어가고 있어요.

별님에 들어서시면,
울창한 벚나무랑 짝을 이룬 넉넉한 데크와 핀란드산 편백 통나무 향이 가득한 실내가 여러분을 반겨드릴 거에요.

별님의 매력덩이인 벚나무는 봄에는 꽃구름으로, 여름에는 시원하게 반짝이는 그늘로, 가을에는 팔랑팔랑 떨어지는 금빛 나뭇잎으로, 겨울에는 하얀 눈을 얹은 나뭇가지로 별님을 감싸준답니다.

별님은 서나 아빠와 엄마가 사는 벽돌집 위에 자리한 한칸방 10평 독채에요.
별님의 자랑인 전망창 앞에 편안히 자리잡으시면 공작산과 그 위 하늘에서 펼쳐지는 구름과 바람의 춤을 즐기실 수 있을 거에요.
새들과 풀벌레가 조잘 거리는 소리와 가만히 귀 기울이면 들리는 길 건너 냇물 소리도 맘을 편하게 해드릴 거구요.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "와이파이 - 46Mbps"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "32인치 HDTV + 넷플릭스, 프리미엄 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 9:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
다음 게스트를 위해 깨끗이 써 주세요^^
식기에 기름기가 남아 있지 않도록 부탁드려요.
쓰레기통도 꼭 비워 주시면 고맙겠습니다.
땅별을 위해 분리수거도 잘 부탁드려요.
분리수거 하실 때 병에 붙어 있는 비닐을 꼭 떼어주세요!
산님 옆 벽돌집 뒤에 일반 쓰레기통, 음실물 쓰레기통, 분리수거구역이 있습니다.`
                }
            ],
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/11120eb8-9c87-459b-b102-8c3acf279728.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a8310008-0659-4a68-864e-653c4dfc9069.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e55e0c1e-7326-494d-aa95-8af3cd3dfdd4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/da637179-37a8-46ed-be84-e475ed399f5e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c71e1844-9129-4af9-89b0-095c8d84dbd4.jpg?im_w=720",
        ],
        title : "대관령 양떼목장 근처 M&H 캠핑하우스",
        address : "강원도 평창군 대관령면",
        dayPrice : 250000,
        roomData : {
            maxUser : 6,
            bedroom : 3,
            bed : 3,
            bathroom : 3
        },
        description : `🎙 아이들 (아기)포함 최대인원 6명까지 예약 가능합니다~저희 M&H 하우스는 캠핑/모던으로 두 개의 펜션 27평 독채를 운영하고 있으며 이번에 18평 독채 m&h캐빈하우스(2인,3인추천)도 추가 오픈하게 되었습니다~
원하시는 날짜가 예약 완료라면
프로필 사진을 눌러주시구 확인해보세요 ! 😄 m&h캐빈하우스는 따로 검색해 주세요~노래방이용은 밤10시까지만 허용되며 이용시 모든 문은 닫고 이용하셔야 합니다~

🏡 기존 M&H 캠핑하우스와는 컨셉이 조금은 다른
M&H 모던하우스를 새로 오픈하게 되었습니다. 800고지의 맑은 공기와 여름에도 시원한 바람을 느낄 수 있는 아름다운 대관령에서 맘껏 힐링하세요~`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "65인치 HDTV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 6명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 30000,
    },
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-782254841334941669/original/cead1946-52ef-4f96-bc99-e62788f79d57.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-782254841334941669/original/723418ba-a4d9-415a-9d3b-35ce83aeb8db.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-782254841334941669/original/33740b0e-4d59-4f5f-8c25-58c23c80addb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-782254841334941669/original/a499e062-d90d-422a-a50d-cffb9a7627d7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-782254841334941669/original/52598c08-a230-4db7-a0b5-ea0d8a71c1a7.jpeg?im_w=720",
        ],
        title : "감성민박 '1765삽교 STAY part 1'",
        address : "강원도 횡성군 둔내면 삽교1리",
        dayPrice : 285000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `자연과 더불어 여유로움을 만끽할 수 있는 감성 시골 민박 '1765삽교 STAY part 1'

사랑하는 가족, 연인과 함께
자연 속에서 휴식을 취해보는 거 어떨까요?`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 20000,
    },
    // camp
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-54133461/original/66cf062b-3a57-497a-a20b-e809f22150a1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-54133461/original/c2a041e2-b1e8-49de-ad26-d97a7721ee60.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-54133461/original/f3b63e36-b7c9-41fa-a7ad-82ebfda6a5af.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-54133461/original/8b222154-8063-48ae-8510-8d27d01ea53f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-54133461/original/d5482ffd-e685-4420-aa1d-e9c67b788f7d.jpeg?im_w=720",
        ],
        title : "글램핑일반6",
        address : "경기도 포천시 이동면",
        dayPrice : 84000,
        roomData : {
            maxUser : 8,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 Onda입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내시길 바랍니다.

[숙소 소개]
포천에 위치한 넓고 심플한 공간입니다.
자연 속에서 여유롭게 힐링 할 수 있는 여행을 준비해 보세요.

[객실 유형]
원룸형(더블침대1)+화장실1+주방
* 입실하시는 인원을 정확히 설정하여 예약하셨다면 인원에 맞게 침구류를 제공해드립니다.`,
        convenience : [
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 0,
    },
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/10c1ac4c-acf3-4551-b58c-e58090bef34e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/73f94c4f-a627-4b4b-8e9b-cea52091c5d9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/5098a320-a3cc-45a2-b85a-c3596036c364.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/eb6336b7-c813-4693-9538-c69660cb5c47.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/364aceb3-c9df-423f-b314-be983bcda30f.jpeg?im_w=720",
        ],
        title : "아웃오브파크_아메리칸드림",
        address : "강원도 춘천시 남면 관천리",
        dayPrice : 230000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `American Dream
(1990년대 미국 주택느낌을 연상케하는 아날로 감성 카라반)

보낸 사람: 미국, 에어스트림
연도: 1990
Sleeping : 4
Merit : 3축 롱베이스 바디, 오리지널 미국 원목 가구, 실내 고벽돌 Bar
실내 모던 빈티지 인테리어, 미니풀 등`,
        convenience : [
            {
                icon : "picture",
                con : "호수로 연결"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 9:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 3:00 - 오후 10:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTIzMDA3MjU5NDUxMTEyOTU0/original/22744756-3c4a-4ae3-beee-90fb907e96e9.png?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTIzMDA3MjU5NDUxMTEyOTU0/original/8f8fcb58-815a-4b5a-bbae-6ac072808ee9.png?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTIzMDA3MjU5NDUxMTEyOTU0/original/f1f89cee-c256-4d4a-9ad7-38e2d694aac9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTIzMDA3MjU5NDUxMTEyOTU0/original/b3290c47-0e0d-4c26-a1e1-2fdac563f46c.png?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTIzMDA3MjU5NDUxMTEyOTU0/original/b2b924e8-5241-40a8-88e7-abfa1b2ed1eb.png?im_w=720",
        ],
        title : "캬라반 리즈",
        address : "강원도 영월군 무릉도원면 무릉리",
        dayPrice : 156000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `더블침대1+개벽욕실,주방,바베큐,불멍용 화로대
숙박객 숯가마찜질방 무료이용 동절기 숯가마 찜질방은 금.토요일만 운영합니다.
객실당 전기장판1+전기히터 기본제공,침낭 있으신분들은 가지고 오시면 좋아요.
숙소
개별주방,개별욕실,바베큐공간있으며 불멍은 데크 아래 파쇄석에서 해주세요.
구내매점에서 잡화류 음료류 판매하고 상주직원이 있습니다.
숯가마찜질복은 1회 무료제공
게스트 이용 가능 공간/시설
캬라반바로옆에 게스트 혼자 사용할 수 있는 주방,욕실,개별테라스 있습니다.
기타 주의사항
반려동물 동반불가, 보호자없이 미성년자만 예약불가
체크인은 수영장옆 구내매점에서 도와드립니다.
동절기 숯가마찜질방은 금.토요일 운영되며
찜질복은 1회 무료제공`,
        convenience : [
            {
                icon : "picture",
                con : "호수로 연결"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 9:00"
                },
                {
                    icon : "cautions",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "logHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1051630299358628403/original/2805d94c-4e8f-45d4-b9c2-3b2e9aeec5b0.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1051630299358628403/original/bfd9984e-4536-441e-97da-79b85279baa0.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1051630299358628403/original/7244f1bd-d947-4f0f-aa4d-8093b92723e6.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1051630299358628403/original/d5d828a8-bad2-4518-b882-602281fab975.png?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1MTYzMDI5OTM1ODYyODQwMw%3D%3D/original/b680443e-272e-4caf-b442-2d1caf02b33b.png?im_w=720",
        ],
        title : "티볼리빌 큰누나",
        address : "경기도 포천시 내촌면 음현리",
        dayPrice : 400000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `평온한 숙소에서 온 가족이 함께 휴식 시간을 가져보세요.

인근의 광릉수목원과 아이들이좋아할만한 허브아일랜드가 있어 사계절이 다채롭습니다

아침에 콩나물해장국! 서비스로 준비해드려 숙취걱정없으시구요
저녁엔 요청하시면 바베큐세팅도 준비해드립니다
산속에 맑은 공기가 몸 마음 안으로 스며드는것같구요 물이 너무 맑고깊어 가져가시는분도 계십니다^^
단지안에 카페 수피가 있어 캠핑과 모닥불을 즐기실수 있으며
수영장이 집안에 준비되어 있는데 일부는 옆면이 유리로되어 있어 수중촬영컷을 찍으실 수 있습니다

오시는분들 행복하다고 하시는 이야기들 살짝 엿듯기는 합니다

바쁜 일상에 특별하고 편안하고 아름다운 추억만드세요`,
        convenience : [
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "bath",
                con : "대형 욕조"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
            ],
        ],
        cleanVat : 20000,
    },
    // minimalHouse
    {
        userId : user1,
        cate : "minimalHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/ecdf8378-0c60-4aa4-a28b-50961b48534b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f85a40c3-57ef-45e0-b4e5-464fe5a43a4f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e1980a8e-e20b-4130-8405-205b34f3744c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c38ca921-5411-401f-8738-3c1f28ba6c3d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a4b56574-15b8-4da2-a358-abe09e13dccc.jpg?im_w=720",
        ],
        title : "[Lazy House] 우드감성의 독채 감성 숙소",
        address : "경상북도 경주시 마동",
        dayPrice : 184000,
        roomData : {
            maxUser : 3,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `보문 관광단지와 불국사의 길목에 위치한 저희 숙소는 자차로 보문단지에서7분 불국사에서 5분, 경주의 시내권 관광지 및 양남,감포(바다권역)로 20분정도로 여행하기 좋은 지역에 위치하고 있답니다.

레이지 하우스는 따뜻한 우드감성의 독채로 커플들이 이용하시기에 좋은 공간이에요. 감성 가득한 객실 내부에서 토함산을 보실수 있어요 :)

마당을 바라보고있는 단독 테라스에서 바베큐와 여유를 즐겨 보세요 :)

영유아 포함 2인기준(최대 3인)의 숙소로 퀸사이즈 침대 1개와 인원추가시 1인용 매트가 제공됩니다. (영,유아 모두 어린이로 선택하여 인원추가 해주셔야합니다)

* 수영장은 여름철에만 운영하는 공용 야외수영장으로 온수풀이 아닙니다.
* 매일 침구류 교체하고 있습니다.
* 2인기준 20000원에 숯과 그릴 준비해드리니 개별 테라스에서 바베큐 가능합니다.
* 마당에 고양이들이 있습니다. 사람을 좋아하는 아이들이라 알러지나 동물을 무서워하시는 분들은 신중한 예약을 부탁드리겠습니다.`,
        convenience : [
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "공용 수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 안내 직원"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 3명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "minimalHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/27a83900-8292-43a5-98ee-1d10bec9e6fe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/846dbdf5-9f3e-4ba2-8a41-b18e1338289c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1024323709080069677/original/45d59b45-3200-4fea-b2e3-be65fad72072.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/21bc331e-6691-4230-9432-4af45f51aac7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAyNDMyMzcwOTA4MDA2OTY3Nw%3D%3D/original/94ea8af2-bfda-4902-b6fb-febd45ca2dc0.jpeg?im_w=720",
        ],
        title : "안다미로 브라운",
        address : "경기도 가평군 상면 임초리",
        dayPrice : 160000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `안다미로 는
"그릇에 넘치도록 많이" 라는 순 우리나라 말입니다.

뉴욕출신 젊은 건축가의 건축설계 디자인으로
젊은 감성에 전원생활의 여유를
독채의 프라이빗 함으로 느껴볼수 있는곳

도시생활 의 지친 일상에서 벗어나
힐링과 재충전이 되는 그런 공간입니다.

퇴근하고 매일 TV앞에 앉아 TV보다 잠이드는 일상을
반복하다보니 문득 가족간의 대화가 너무 없어진것 같은
느낌이 들었어요....

그래서 우리가족 힐링을 위한
세컨하우스에서는 가족들과 대화하는 시간을
만들어 보고자 TV를 과감하게 놓지 않았습니다.

TV대신 대형 120인치 빔프로젝터 로
온가족이 영화감상후
청정자연을 가까이서 느끼며
평소 가족들과 부족했던 대화와 소통이 많이지는공간
사랑이 넘치도록 가득한 안다미로 가평 에서
매일의 지겨운 일상을 벗어나 재충전과 휴식을 가져보세요~

호스트를 클릭 하시면

3개동의 안다미로가평

올리브/브라운/화이트

의 예약상황을 실시간으로 확인 하실수 있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
건물 내부에서 흡연은 엄격히 제한됩니다~

외부 바베큐 및 불멍화로 이용시

화재에 주의해 주시고

일산화탄소노출 등 의 위험이 있으니

외부와 공기가 차단 되어있는 실내 바베큐장 에서의

불멍화로 사용 또한 추천하지 않습니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "minimalHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/b3ffdc55-1be1-46d2-a86f-025d41d3276e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/11572876-3080-447d-b8c4-94ddd937db9d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b3b79925-df6a-43ae-ac2d-4125787599fe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4cd13f3e-c91e-4e76-8ad9-48f3b588dba1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/838fd74b-41b4-4843-9196-d42135e2ee9e.jpg?im_w=720",
        ],
        title : "[COZYHOUSE B] 감성가득한 복층 숙소, 독채",
        address : "경상북도 경주시 시래동",
        dayPrice : 130000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `천년고도 경주의 보문 관광단지와 불국사의 길목에 위치한 저희 숙소는 자차로 보문단지에서7분 불국사에서 5분, 경주의 시내권 관광지 및 양남,감포(바다권역)로 20분정도로 여행하기 좋은 지역에 위치하고 있답니다.

코지 하우스는 모던스타일의 복층형 독채로 커플들이 이용하시기에 좋은 공간이에요. 감성 가득한 객실 내부와, 단독 테라스 에서 토함산을 바라보며 여유를 즐겨 보세요 :)

영유아 포함 2인 숙소로 인원추가는 불가합니다.

* 수영장은 여름철에만 운영하는 공용 야외수영장으로 온수풀이 아닙니다.
* 매일 매일 침구류(이불커버, 베개커버)교체하고 있습니다.
* 2인기준 20000원에 야외용전기그릴 준비해드리니 개별 테라스에서 바베큐 가능합니다.
* 한가지 더 전달드릴 사항은 마당에 고양이들이 있습니다. 사람을 좋아하는 아이들이라 알러지나 동물을 무서워하시는 분들은 신중한 예약을 부탁드리겠습니다.`,
        convenience : [
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "공용 수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
객실 내 바베큐 및 튀김 등 구이류는 취사가 불가합니다 ( 다음날 투숙객을 받을수 없기 때문에 위반시 다음날 숙박비 청구)`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "minimalHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-927274792460642378/original/dcf0471b-320b-4239-9520-ad9109c4a43b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-927274792460642378/original/1c2ef7fb-397f-46f0-a99d-280ed6a69616.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-927274792460642378/original/c77e4b55-0ff0-4528-90bd-4a60e6c7dd62.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-927274792460642378/original/d5e1672a-b420-4f89-8b4b-d8db3c526cac.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-927274792460642378/original/23478a6a-2f46-4525-88d3-0aec8d1f2f69.jpeg?im_w=720",
        ],
        title : "숲 속의 아늑한 휴식처 가을",
        address : "경기도 양평군 서종면 수능리",
        dayPrice : 212000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 Onda입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내기를 바랍니다.

[숙소 소개]
안녕하세요. 양평 수능리에 위치한 펜션입니다.
저희 펜션은 봄(독채), 여름, 가을 겨울 동 글램핑7개동 이루어져 있습니다.
바베큐와 수영장도 함께 운영중입니다.
정통 텍사스바베큐 12~14시간 만들어진 스모그 바베큐!!!
바베큐와 어울리는 각종 주류들도 항시 구비중입니다.

[객실 유형]
원룸형 (더블1)
* 침구는 예약하신 인원에 맞게 제공됩니다.`,
        convenience : [
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 안내 직원"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    // symbolicCity
    {
        userId : user1,
        cate : "symbolicCity",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-54039869/original/5328829d-fd55-4702-a558-99d513440b21.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-54039869/original/92b5377e-b395-4269-aecb-9a5009994496.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-54039869/original/daf75d96-82cc-4311-97b7-e7c2ace4b389.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-54039869/original/b243782d-efd4-42f0-b060-c7097a9754cf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-54039869/original/e0eefb76-c3a3-473d-aedd-f4e5fc61a8c3.jpeg?im_w=720",
        ],
        title : "효창동 타이체 스테이 A",
        address : "서울특별시 용산구 효창동",
        dayPrice : 198000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `서울 중심부 용산에 자리하여 입지적 편리함과 세련된 스타일을 모두 갖춘 공간입니다. 에어비앤와 파티를 위해 리모델링을한 공간이기에 어떠한 공간보다 깔끔하고 호텔수준의 공간을 체험하실수 있습니다 . 통창에서 나오는 시원함과 플라타너스나무가 주는 도심속의 힐링공간입니다.주차 가능하고 가전옵션도 전부 들어가있어 가족단위나 서울출장 오신 분들도 편하게 이용하실수 있습니다 .여러 명이 함께 머물기 적합하고 중심부에 위치한 숙소입니다.`,
        convenience : [
            {
                icon : "wifi",
                con : "초고속 와이파이 - 78Mbps"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "6인치 HDTV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 10:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
게스트룸을 비롯한 공용공간내 흡연은 적발시 취실조치됩니다`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "symbolicCity",
        roomImg : [
            "https://a0.muscache.com/im/pictures/34ba6457-ed0c-4e93-a795-4ae8d1099074.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-842458938331176391/original/d1a76618-fa7b-4f49-82ed-28e62ae64345.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-842458938331176391/original/46b3b2af-cd03-490d-b54d-f8d77cb9b6a4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-842458938331176391/original/157fd663-4e39-45ea-82a0-37a94570a440.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/dbd99d69-6687-405d-a831-3dbf6a10c645.jpg?im_w=720",
        ],
        title : "능놀스테이: 오롯",
        address : "부산 수영구",
        dayPrice : 820000,
        roomData : {
            maxUser : 12,
            bedroom : 3,
            bed : 4,
            bathroom : 2
        },
        description : `부산 광안리 해변가에 바다가 보이는 넓은 공간으로 여러 명이 함께 머물기 적합하고 중심부에 위치한 감성숙소입니다.`,
        convenience : [
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "bath",
                con : "공용 대형 욕조"
            },
            {
                icon : "tv",
                con : "100인치 HDTV + 프리미엄 케이블 TV, 넷플릭스"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 4:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오후 12:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 12명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 30000,
    },
    {
        userId : user1,
        cate : "symbolicCity",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1063323188302249084/original/2fd438c9-3765-4bf9-9586-393e62ceaf4c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1063323188302249084/original/df171263-ed9d-4ddf-b3ab-f174a4ce2173.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1063323188302249084/original/67c91604-1556-4c50-93ba-97651e6bfb54.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1063323188302249084/original/ea4c2d7a-96a4-433f-8e5d-2ba492cdbf29.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1063323188302249084/original/0aa3da4c-4095-423d-93f8-34e5a1f593ef.jpeg?im_w=720",
        ],
        title : "넓은 마당과 탁 트인 전망을 가진 홍연루",
        address : "경기도 김포시 월곶면 갈산리",
        dayPrice : 438000,
        roomData : {
            maxUser : 12,
            bedroom : 3,
            bed : 6,
            bathroom : 2
        },
        description : `홍연루에 오신 것을 환영합니다. 새로 신축된 한국의 멋이 가득 담긴 한옥에서 특별한 하루를 경험해 보세요.

비대면 서비스(셀프체크인)로 운영되고 있으며 입실 당일 메시지로 비밀번호를 포함한 입실 정보가 전달됩니다.

에어비앤비 프로필을 클릭하여 버틀러리가 운영 중인 다양한 한옥을 둘러보실 수 있습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 진입로 무료 주차 - 3대 주차 가능"
            },
            {
                icon : "tv",
                con : "50인치 HDTV + 넷플릭스"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 12명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 10:00 - 오전 6:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 20000,
    },
    {
        userId : user1,
        cate : "symbolicCity",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-867931984557035658/original/ce81e992-3263-4c9f-ae3a-d278b41d014e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-867931984557035658/original/77f9da9b-a4d8-478e-a1d7-fc3fc46b3454.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-867931984557035658/original/2a506d12-6c4b-4cf1-8fa0-86776e787828.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-867931984557035658/original/84cfca14-a4d9-4c0d-b521-264457180f3d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-867931984557035658/original/8d773b45-9783-4ad8-afcd-a061751637f4.jpeg?im_w=720",
        ],
        title : "한강변 유럽 복층 고급 호텔 레지던스",
        address : "서울시 마포구 마포동",
        dayPrice : 234000,
        roomData : {
            maxUser : 5,
            bedroom : 1,
            bed : 1,
            bathroom : 2
        },
        description : `둘러보고 싶은 모든 장소가 바로 근처에 있는 고급스러운 숙소에 머물러 보세요.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "도시 스카이라인 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "bath",
                con : "대형 욕조"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 5명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 7:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
파티룸으로 사용하거나
촬영공간으로 이용시 추가 요금이 발생하며
사전 고지가 필요합니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    // containerHouse
    {
        userId : user1,
        cate : "containerHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/cbb95154-03ba-4a95-a14d-06b882d9d297.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4db1f5dc-69de-45ad-81a2-33151c604681.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ac6f60e0-d4be-4ebc-9804-9695f202ea32.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1131b465-0211-4c74-bb8e-f4979479072c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-987587543014172275/original/e6e98fd6-ebd2-4f6e-b214-7e50e0408656.jpeg?im_w=720",
        ],
        title : "B&W HOUSE 2 in 영종",
        address : "인천시 중구 중산동",
        dayPrice : 200000,
        roomData : {
            maxUser : 7,
            bedroom : 2,
            bed : 2,
            bathroom : 1
        },
        description : `도시속에 산과 바다를 를 만날수 있는곳에서
힐링하세요 독체 하우스에 당신만의 휴가를 보네 실수 있습니다. 바다가 보이는 탁트인 전망의 야외 바베큐장에서 연인과 친구 가족과 즐거운 추억을 만들어보세요. 불멍을 할수있는 곳도 준비되어 있습니다.
숙소
1층 실내에는 4~7인으로 변형 가능하는 테이블이 준비된 주방겸 침실 2인이 잘수있는 더블베드와 추가 메트리스가 준비 되어 있습니다.

2층 거실과 이색적은 숙박 체험을 할수있는 2개의 이층침대와 추가 매트리스가 준비되어 있습니다.
당신의 스마트폰 tv로 볼수있는 미러링도 가능합니다.`,
        convenience : [
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "picture",
                con : "도시 스카이라인 전망"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차 차고 - 3대 주차 가능"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 스마트 도어록"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 7명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 12:00 - 오전 7:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "containerHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-635761660943901240/original/f8fe63d9-dd63-4a8f-a2b8-f7aac1ce22bf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-635761660943901240/original/4931d16c-27b4-4495-ba42-d78ba4758cf3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-635761660943901240/original/cbf4be61-8c9c-4f29-9521-e36370f05435.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-635735094449371996/original/3767ad3d-a0ca-440c-9794-31c55618be2c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-635735094449371996/original/c0ccf1d3-6e3c-4762-9382-a98ac2666be7.jpeg?im_w=720",
        ],
        title : "* 신축 * 가평 루프바 루프탑BBQ 하우스",
        address : "경기도 가평군 가평읍 두밀리",
        dayPrice : 207000,
        roomData : {
            maxUser : 4,
            bedroom : 2,
            bed : 1,
            bathroom : 2
        },
        description : `* 호스트는 유창한 영어를 구사합니다.
* 가평역에서 픽업 가능합니다.
도시에서 벗어나 가족이나 친구와 함께 즐거운 휴가를 보내실 수 있는 곳을 찾고 계신가요? 집에 돌아왔을 때 즐기던 바비큐 파티를 놓치셨나요? RooBar에 오셔서 모든 고층 건물에서 한국의 자연을 만끽해 보시는 건 어떨까요? RooBar에는 분리된 3개의 유닛이 있으며, 각 유닛에는 자연 풍경을 감상할 수 있는 옥상이 있으며 옥상에는 야외 주방, 적절한 바비큐 그릴, 실내 좌석 공간, 작은 화덕이 있습니다.
게스트 이용 가능 공간/시설
* 1층에 2개의 객실이 있으며, 하나는 퀸사이즈 침대가 있고 다른 하나는 한국 스타일의 이불이 있습니다.
* 바비큐 그릴 (3만원) 과 파이어피트 (2만원) 이용시 추가요금이 발생합니다.
기타 주의사항
수영장은 다른 숙소와 함께 사용합니다.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차 차고 - 3대 주차 가능"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
            {
                icon : "pool",
                con : "공용 야외 수영장"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 안내 직원"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
* 실내 신발 착용 금지
* 기물파손 금지, 싸움 금지
* 다른 숙소에 영향을 줄 수 있는 고성방가 금지
* 흡연은 지정된 흡연장소에서만 가능합니다.
* 불장난 금지
* 안전상의 이유로 펜스, 특히 옥상 펜스에 매달리지 마세요.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "containerHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1MzExNjg4ODIxMzA4Mjg3Mg%3D%3D/original/b4bedcab-3f34-48e5-a82b-a407edea4e15.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1MzExNjg4ODIxMzA4Mjg3Mg%3D%3D/original/0464965f-73cc-479e-a782-e4d1d3ac164c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1MzExNjg4ODIxMzA4Mjg3Mg%3D%3D/original/475f2136-97a5-418f-8748-ed5855fe881f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1MzExNjg4ODIxMzA4Mjg3Mg%3D%3D/original/adaa33c8-8510-489e-b638-1b8680a1686d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1MzExNjg4ODIxMzA4Mjg3Mg%3D%3D/original/c110685f-ec1a-4fb4-974a-f96d346a5263.jpeg?im_w=720",
        ],
        title : "더컨테이너 - 자연과 함께 힐링하는 숙소 (3호실)",
        address : "제주도 서귀포시 남원읍 남원리",
        dayPrice : 80000,
        roomData : {
            maxUser : 3,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `2층 공용공간에는 세탁기,냉장고,빨래건조대,싱크대,간단조리 용품과 의자와 테이블이 있습니다.

1층 레스토랑에서는 숙박객들에게만 특별히 20%할인된 가격으로 식음료를 제공합니다.


* 바베큐 이용안내
제주산 삼겹살 300g 단위 판매 / 20,000원
쌈 / 찌게 / 밥(인당 즉석밥1개) / 쌈장 / 김치 / 버섯 / 일회용품 제공 (그외 필요한 부분은 직접 가지고 오셔도 됩니다)
술,음료 별도 (외부주류 반입금지) - 진로/한라산/켈리/제주맥주/망고맥주
이용시간 18:00~22:00까지
이용후 간단히 정리필수(분리수거) - 공용공간내에 분리수거함
최소 2일전 예약필수(인원,고기수량 확인필요)
날씨나 상황에 따라 실내 or 실외 이용
사전예약이 있는 날에는 이용이 불가할수도 있습니다.

주변 금호리조트는 더컨테이너와 제휴가 맺어져 있어서 사우나&수영장을 도민 할인가로 이용하실수 있습니다.`,
        convenience : [
            {
                icon : "lock",
                con : "침실문 잠금장치"
            },
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 8:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 안내 직원"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 3명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 7:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "containerHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/53ec1310-39ad-41fb-a728-467e42ad332e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/765b05cb-6340-40cc-a64d-baa2972b234a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2683cb8f-c504-4876-a2d7-577058e2fd17.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8d6e7a74-bfdd-4e08-b379-4ebf4a8d13af.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3d16138d-9cee-4b2b-a47c-99425fe4948b.jpg?im_w=720",
        ],
        title : "판포포구/꼬닥꼬닥게스트하우스 [204]",
        address : "제주도 제주시 한경면 판포리",
        dayPrice : 38000,
        roomData : {
            maxUser : 1,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `판포리 꼬닥꼬닥 게스트하우스는 제주어로 천천히 느리게란 뜻으로
제주도 서쪽 판포포구근처 판포리 조용한 마을안에 있습니다~
해뜰때와 해질녘에 돌담길을 꼬닥꼬닥 걸으며 조용한 제주를 느껴 보시는 것도 좋아요^^
예약시 미리 픽업요청하시면 가까운 버스정류장 또는 신창환승버스정류장
픽업가능합니다~`,
        convenience : [
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 9:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 10:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 1명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 6:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
사용하신 식기는 씻어서 제자리에 놓아 주시고 실내에선 슬리퍼가 준비 되어 있습니다`
                },
            ],
        ],
        cleanVat : 0,
    },
    // grandPiano
    {
        userId : user1,
        cate : "grandPiano",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-50334860/original/0a2b5e3e-f429-4f46-8154-f6c4b89e44e1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50334860/original/218a8c37-72a9-4f39-adaf-f35a7321e3c5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50334860/original/98aae9fd-8348-418f-93dd-11d9780c2478.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50334860/original/a273c36b-c8ad-4c57-91c7-a3546f5301fb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/398bd830-d83f-4720-9227-a2dcc9057507.jpg?im_w=720",
        ],
        title : "바다가 보이는 별이 쏟아지는 힐링 전원주택 웨스트하우스",
        address : "경기도 화성시 서신면 송교리",
        dayPrice : 115000,
        roomData : {
            maxUser : 6,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `제부도, 전곡항과 가까운 조용한 전원주택입니다
느긋하고 여유로운 힐링을 체험해보세요
홈파티, 피아노 콘서트, 마당에서 캠핑이 가능합니다

#게스트 이용 가능 공간/시설
1층 전체와 마당을 이용하실 수 있습니다
2층은 호스트가 지내는 곳이에요. 출입구가 따로 분리되어 있어 부담없이 1층을 이용하실 수 있어요
거실에는 온가족이 도란도란 이야기하는 넓은 코너소파
연인에게 그리고 소중한 사람에게 이벤트를 해주고 싶은 세련된 그랜드 피아노가 있어요
5분 거리의 가까운 제부도에서 관광을, 전곡항에서 감성 터지는 요트정박장과 야경을 감상해보세요
밤이면 별이 쏟아지는 전원주택에서 조용한 힐링을 체험해보세요

#기타 확인사항
-그랜드피아노를 섬세하게 다뤄주세요
-인원확인 및 방범을 위해 숙소 외부에 CCTV가 있어요
-정원에 흙과 풀, 나무가 많아 벌레가 안으로 들어올 수 있어요 방충망을 꼭 닫아주세요
-실내, 실외 금연 및 반려동물 동반 불가입니다`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 진입로 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 6명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 6:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
침실의 보일러 컨트롤러를 만지지 말아주세요

그랜드 피아노를 섬세하게 다뤄주세요`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "grandPiano",
        roomImg : [
            "https://a0.muscache.com/im/pictures/9e848f35-8e37-4fb9-9ee7-3c4b3ca99dd3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f5c331e6-94e3-4833-8db0-0bdbb2618319.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1263a430-1c94-4865-978e-822e77e16832.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/700006cd-c9e8-4feb-b287-7e32b720a698.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b0f39b29-a4d3-4d2b-a8d2-8beed3c534cf.jpg?im_w=720",
        ],
        title : "행복하우스 '행복동 1가'",
        address : "전라남도 목포시 행복동1가",
        dayPrice : 200000,
        roomData : {
            maxUser : 6,
            bedroom : 2,
            bed : 2,
            bathroom : 1
        },
        description : `안녕하세요. ‘행복동1가’는 빨간 벽돌의 레트로함과 모던한 실내로 꾸며진 주택입니다.
바다 앞에 위치해 있고, 아침에는 시원한 바닷바람과 저녁에는 옥탑에서 아름다운 야경을 즐길 수 있습니다. 공기좋은 곳에서 내집처럼 편안하고 아늑하게 머무실수 있는 예쁜 주택입니다.
친구들 가족 지인들과 함께 좋은 추억 만들어보세요^^

- 신규 인테리어, 모던하고 깔끔한 환경
- 다도해의 오션뷰
- 65인치TV와 무료 와이파이 제공 (유튜브/넷플릭스 제공)
- 그랜드피아노 (사용시 조심히 다뤄주세요)
- 드라이기, 수건, 샴푸, 치약, 천연비누 사용가능
- 주방시설 사용가능(사용후 반드시 세척)
- 옥탑 이용시 금연 & 실내 금연
- 반려동물 동반 불가

●시설●
- 방2, 욕실1, 거실, 주방, 옥상`,
        convenience : [
            {
                icon : "picture",
                con : "항구 전망"
            },
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "도로 주차(무료)"
            },
            {
                icon : "tv",
                con : "65인치 HDTV + 넷플릭스, 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오전 12:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 6명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "grandPiano",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1151223507745749186/original/e328f7eb-21e0-4fc5-934e-61481acfd7e8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1151223507745749186/original/d3dad9d2-6657-40f9-b4b2-068f785983db.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1151223507745749186/original/a6d8deb9-b6b5-4aa5-a36f-f80eff982948.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1151223507745749186/original/f597af71-b667-4220-b591-5db128a1ab5d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1151223507745749186/original/b0706e68-10d9-419c-9411-4387e38cbf41.jpeg?im_w=720",
        ],
        title : "도심속 70평 파노라마 바다뷰 독채",
        address : "경상남도 통영시 광도면 죽림리",
        dayPrice : 156000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `70평이 뻥 뚫린 원룸으로 엄청난 개방감에서
나 혼자 단독으로 누리는 파노라마 바다뷰를 느껴보세요

통영 스타벅스 옆 건물로 그 옆 건물은 수산시장이지만
시내 중심부에 자리하여 입지적 편리함과 요트투어 선착장 등
세련된 여행의 스타일을 모두 갖춘 감각적인 공간입니다.`,
        convenience : [
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "grandPiano",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-36545992/original/77e6fe1a-cbb8-4391-8355-f36fef175ea8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/8c9f4dd9-d879-45ca-996c-505dacebc31e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9b2ca156-bf76-474c-8d30-72c190bc5dd9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/69b617e3-7dee-42fc-9f07-515b094d9c76.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5c23abd5-3b90-4d22-aba6-26a6c081249f.jpg?im_w=720",
        ],
        title : "예뜰 사과의정원 미국식목조주택독채",
        address : "충청북도 충주시 살미면 용천리",
        dayPrice : 269000,
        roomData : {
            maxUser : 16,
            bedroom : 3,
            bed : 3,
            bathroom : 4
        },
        description : `반려견가능숙소! 삼면이 활짝 열린 미국식 목조주택(2층 60평)과 350 여평 잔디밭. 맑은 공기와 조용함이 있는 곳입니다. 방셋. 화장실4. 그랜드피아노거실이 있습니다.
너른 잔디와 조용한 시골. 그리고 트인 조망권과 잔디밭에서 바베큐파티(준비비20,000)를 즐길수 있습니다. 코로나19 현정책 12명 숙박이 가능합니다. 감사합니다.
숙소
2층 조망권이 너무 예쁜 미국식 목조주택.
2층 올라가는길. 그리고 피아노. 무엇보다 이 예쁜 건물을 독채로 사용할수 있습니다.
게스트 이용 가능 공간/시설
8평정도의 방 두개와 15평 엄청 큰 거실같은 방이 각종 가족과 단체들이 모임과 소규모 캠프를 하실수 있습니다.
잔디정원350평정도됩니다.
기타 주의사항
실내에서는 절대 금연이며, 삼겹살굽기요리는 절대불가능입니다.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
            {
                icon : "pool",
                con : "전용 수영장"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "65인치 HDTV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    // shapeAHouse
    {
        userId : user1,
        cate : "shapeAHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-43198019/original/b778e21e-6906-4676-b02e-e203a8a95495.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDMxOTgwMTk%3D/original/eda85dc2-4895-4449-bed4-dd4e12dd9b68.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/07d87ec9-a8c0-48a0-b98a-55790ebce3ac.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/870c577b-68c7-43ce-a860-17b9d4cefd63.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1ec1191c-1e78-4f35-9ffe-dc137f5071f2.jpg?im_w=720",
        ],
        title : "양떼마을 3동",
        address : "강원도 평창군 대관령면 횡계리",
        dayPrice : 239000,
        roomData : {
            maxUser : 10,
            bedroom : 3,
            bed : 3,
            bathroom : 3
        },
        description : `독채 복층 가족/단체펜션
더블침대방2, 싱글침대방1, 화장실3, 거실1
쇼파, 식탁, 에어컨, 전자렌지, 핫플레이트, 전기압력밥솥, 취사도구 일체
샴푸, 비누, 타올, 8인용 침구류 비치
객실앞 데크에서 개별 바베큐
​바베큐 비용은
2-4인용 2만원 5-8인용 3만원
현장결제 하시면 됩니다.

기준인원 6인 최대인원 8인`,
        convenience : [
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 10명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
펜션 사정에 따라 동일한 레벨의 다른 객실로 변경될 수 있습니다.
밤 10시 이후 정숙, 노래 및 파티금지
모닥불 장작불 불멍 금지
숙소에 비치되지 않은 가스버너 등 지참 및 사용금지
애완동물 동반 절대 금지`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "shapeAHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53564495/original/01320d61-67fe-444e-9b34-2d808957c589.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM1NjQ0OTU%3D/original/51cb5799-d046-49e1-97b6-bde938294d95.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53564495/original/df685549-9096-4bb7-b2de-30e4274a1ecc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53564495/original/3863e5e7-b324-4d42-a3c6-3f10c81b4aa3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53564495/original/429928f4-eb04-47ba-afab-c3e7ed66beb6.jpeg?im_w=720",
        ],
        title : "休(휴)ㆍ800펜션",
        address : "강원도 평창군 대관령면 횡계리",
        dayPrice : 232000,
        roomData : {
            maxUser : 6,
            bedroom : 3,
            bed : 3,
            bathroom : 3
        },
        description : `최대 6인까지만 예약 받습니다.
이곳은 대관령 양떼목장이 도보로 10분 거리에 있으며 펜션앞이 바로 대한민국 제일의 트레킹코스 국민의 숲이 있어요~ 겨울엔 눈이 많이 내려 눈 내린 멋진 모습을 볼 수 있어요~ 용평스키장까지는 차타고 8분정도 걸려요. 펜션에서 차타고 7분거리에 횡계하나로마트가 있고 차타고 3분 거리에 편의점이 있습니다~ 강릉까지는 25분정도 걸립니다~평온한 숙소에서 온 가족이 함께 휴식 시간을 가져보세요.
게스트 이용 가능 공간/시설
야외 바베큐룸`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 넷플릭스, 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 6명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "shapeAHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/7e98cc98-a9fb-4e71-884d-d57fa9e294e7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3fbfe545-7d39-4a4f-897d-ae42e1547ab7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ece9afe0-f58e-4285-8db5-fce62e6b1dae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/58f63513-64d8-4b3d-a34f-c61da34c04e0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6d62f265-0ede-4b4c-998f-d0c245d88745.jpg?im_w=720",
        ],
        title : "대관령 양떼목장 근처 M&H 캐빈하우스",
        address : "강원도 평창군 대관령면 횡계리",
        dayPrice : 185000,
        roomData : {
            maxUser : 4,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        },
        description : `🎙 독채개별바베큐장(사계절), 기가지니 tj코인노래방 무료이용, 각 방 에어컨, 넓은 테라스에서 멋진뷰를 볼 수 있으며 밤하늘에 별도 잘 보여요.
기존 M&H 캠핑하우스(28평)와 모던하우스(27평)를 운영하고 있으며 이번에 컨셉이 다른 최고의 뷰를 자랑하는 18평
M&H 캐빈하우스를 22년 8월에 새로 오픈하게 되었습니다. 800고지의 맑은 공기와 여름에도 시원한 바람을 느낄 수 있는 아름다운 대관령에서 맘껏 힐링하세요~`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 4:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "shapeAHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/a9c45e05-6f90-488f-b30b-dcedda02bdbb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794586017059711680/original/e33731c0-973d-4de0-85bd-fcb4d7a86190.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-794586017059711680/original/f569b4a0-f763-4c91-8a26-c86a594969a9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/01ab60ec-6388-4c56-a893-0600660ad506.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/51cde40d-05ec-4ce0-a589-eacaa111fcb2.jpg?im_w=720",
        ],
        title : "북유럽 감성 미드가르드 독채풀빌라",
        address : "경기도 양평군 서종면 수입리",
        dayPrice : 260000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 4,
            bathroom : 1
        },
        description : `세상에서 하나밖에 없는 특별함을 드립니다…
북유럽 감성 그대로….
물놀이를 즐길수 있는 계곡을 접하고 있으며 개별 수영장, 바베큐장, 공중해먹 등 다양한 즐길 거리와 함께 바베큐장 이용은 기본으로 제공되며 실내에서도 불멍을 즐길수 있는 펠릿난로도 설치되어 있습니다
서울에서 30분 거리에 위치해 있는 서종의 명소 입니다`,
        convenience : [
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "초고속 와이파이 - 51Mbps"
            },
            {
                icon : "car",
                con : "건물 진입로 무료 주차 - 2대 주차 가능"
            },
            {
                icon : "tv",
                con : "55인치 HDTV + 프리미엄 케이블 TV, 넷플릭스"
            },
            {
                icon : "pool",
                con : "전용 야외 수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 7:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    // domHouse
    {
        userId : user1,
        cate : "domHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-26690381/original/8fd4f5f0-9e2a-4880-97eb-a0612b6aed8d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/5549bf36-c56f-4c4b-9956-ae16b0dc35b6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d8a0d264-98e6-4e05-a6ae-2099a55e3bc6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e7d23dbd-ea29-4b86-9a70-3f33ba28d497.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e30c8a97-3530-44cb-ac30-f39f821eb169.jpg?im_w=720",
        ],
        title : "가족과 함께하기 좋은 주희네버섯집",
        address : "경기도 양평군 단월면 명성리",
        dayPrice : 210000,
        roomData : {
            maxUser : 5,
            bedroom : 1,
            bed : 1,
            bathroom : 2
        },
        description : `대명비발디파크/오션월드/양평/홍천/ 차로 10분 거리 / 에어컨 설치 완료 / 벽난로 / 쾌속 Wi-Fi

야외또는 작은 가든장에서
바베큐해드실수 있도록 추가요금을 받고 제공해 드리고 있습니다.

- 사진 참조
** 바베큐 철판 및 숯세트 - 30,000
** 불멍 세트 - 30,000
에 제공해 드리고 있어요, 문의 주세요 😃

도심에서 벗어나 자연으로!!! 🌲🌳

마을 안쪽에 위치하여 자동차나 다른 공기오염이 전혀없는 청정지역, 바쁜 현대사회에 지친 몸과 마음을 리프레시 하고 좋은 추억 쌓아가세요.
새소리 강아지소리 외엔 다른 소음이 없는 힐링하기에 좋은 집입니다
.
비발디 파크가 자동차로 7분 거리에 있으며 용문산 20분 거리에위치해 있습니다.

좋은추억만들어가시길 바랍니다
🐇🐕🐮🐔🐥🍄🍄
게스트 이용 가능 공간/시설
밭 빼고 모두 사용 가능합니다. 사용 후 깨끗한 정리 부탁드립니다.
***벌레가들어올수 있으니 일층 이층 대문 모두 방충망 잘 관리해 주세요!!
기타 주의사항
시골집이다 보니 온수 용량에 한계가 있습니다.
샤워나 설거지 등 온수 사용이 많은 경우 데워질 시간이 필요하니 온수가 끊기는 경우 10분 정도 대기해주시면 바로 사용가능하오니 양해 주시면 감사하겠습니다.
(온수는 30리터 전기온수기로 보일러와 별개로 운영됩니다. )`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "55인치 HDTV + 일반 케이블 TV"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 2:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 5명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 7:00"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
설거지 해주셔야 합니다. 내부에서 신발은 안됩니다. 음식물쓰레기는 우리집 밭옆 전봇대 앞 노랑바구니에 넣어주시면 됩니다. 재활용 및 일반쓰레기는 창고에 놓아주세요.
겨울에는 퇴실시 보일러 꺼주세요.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "domHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-952793426721335129/original/affd3c01-34ee-40d8-ba89-00af6e3e8966.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-952793426721335129/original/573954b0-d716-4444-8dff-84d115a6a10a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-952793426721335129/original/1433cf08-91f7-4001-aed5-47fc148df434.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-952793426721335129/original/1c786b75-1c6a-4f77-bd17-13aabd496324.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-952793426721335129/original/58f9c898-c515-4cf6-8e36-b3864b2959d6.jpeg?im_w=720",
        ],
        title : "나홀로 돔 독채",
        address : "강원도 춘천시 남면 박암리",
        dayPrice : 145000,
        roomData : {
            maxUser : 6,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `자연 속의 여유, 편안한 휴식, 아름다운 전경, 독특한 외관, 평화로운 이곳에서 행복을 즐기세요.

*프라이빗한 독채펜션

*넓은 마당과 개인 바베큐장

*홍천강과 산뷰의 조화

*객실가 기준2인요금
- 최대 6인까지 숙박 가능
- 초과인원은 현장결제
숙소
* 구조&넓이 : 복층 전용 20평
- 개인 테라스 및 전용바베큐
- 1층 : 거실+주방+화장실+안방
- 2층 : 다락방+다락거실

* 구비시설 : 호텔처럼 왠만한 용품은 모두 구비시켜놓았으며, 음식거리와 개인용품만 챙기시어 편안하게 오시면 됩니다.

침대,에어컨,TV,와이파이,냉장고,전기밥솥,전기포트,전자레인지,냄비(4종세트),식탁,수건,비누,샴푸,린스,바디워시,치약,칫솔,드라이기 등
기타 주의사항
객실가 기준2인요금
*최대 6인까지 숙박 가능
*추가 인원은 현장결제

- 1인 25,000원 / 영,유아 10,000원(영유아 기준인원 포함)
* 25개월 이상부터 추가요금 발생
* 방문객도 추가요금 발생

[바베큐] * 현장결제
객실별 전용 그릴 숯불 개별 바베큐장 보유
숯+그릴 이용 : 2인기준 20,000원 (이후 추가 1인당 5,000원)
* 아동부터는 바베큐 요금 추가 대상입니다.
이용시간 : 입실시 ~ 21시 마감`,
        convenience : [
            {
                icon : "picture",
                con : "호수로 연결"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "bath",
                con : "공용 수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 4:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 5명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 5:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "domHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50471092/original/38bcb728-e133-43f2-b4dc-5f423a4dc9c6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50471092/original/f7f4bcd1-efa1-44fe-9bf2-ccdf6332be8a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50471092/original/138dcb93-a9c5-4609-b92b-2d4ec7734206.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50471092/original/166acbb6-12f4-44b5-afbb-7c05911273df.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-50471092/original/e77b8608-9324-42bf-8fc5-593c0fb57f0e.jpeg?im_w=720",
        ],
        title : "자연과 감성을 동시에 느낄 수 있는 돔1",
        address : "강원도 고성군 토성면 금화정리",
        dayPrice : 80000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 Onda입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내시길 바랍니다.

[숙소 소개]
푸른 바다와 맑은 공기와 함께 편안하고 낭만적인 여행을 즐길 수 있는 조용하고 깔끔한 숙소입니다.


[객실 유형]
원룸형(더블침대1)+화장실1
* 입실하시는 인원을 정확히 설정하여 예약하셨다면 인원에 맞게 침구류를 제공해드립니다.
숙소
[바베큐]
개별데크바베큐 / 공동바베큐장 (50명 수용)
비용 : 4인기준 20.000원
신청시간 : 입실시 - 저녁9시까지
이용시간 : 입실시 - 저녁9시까지

*숯, 그릴 등 개인지참 가능
(자리세 1만원)

[수영장]
- 메인수영장
가로3M * 세로8M * 높이1M50
운영기간 : 23년 6월 23일 오픈 ~ 8월 31일 종료 (*날씨에 따라 폐장 일정이 변경될 수 있습니다.)
이용시간 : 15시 - 20시
이용복장 : 수영복 , 면티 , 면바지
수영장과 가까운 객실 : 돔객실 , 카라반객실(7.8동)
에어펌프 1개 있음
우천시 사용가능

-유아수영장
카라반데크마다 있음
* 날씨, 고장 등 당일 현장 상황에 따라 이용 가능 여부 및 운영 날짜는 변동될 수 있으니 확인후 예약 부탁드립니다. 미확인후 예약시, 이용 불가로 인한 취소 및 환불은 어려운 점 참고 부탁드립니다.

[부대시설]
#족구장 (사전예약 필수)
네트, 공(3개) 구비되어 있습니다.

#농장 (사전예약 필수)
농작물 무료 수확체험
품목 : 상추, 고추, 고구마, 가지, 파프리카

#카라반 노래방 (사전예약 필수)
이용 요금 : 1시간당 20,000원 (현장결제)
이용 시간 : 오후 11시까지

* 모든 부대시설은 이용을 원하실 경우 체크인 1일 전 숙소를 통한 사전 예약이 필요합니다.

[주차]
주차 가능합니다.

*부가서비스/부대시설은 가격 변동 및 구성 변경이 발생하거나, 날씨/계절/고장 등의 당일 현장 상황에 따라 이용이 제한될 수 있으니 확인후 예약 부탁드립니다. 미확인후 예약시, 가격 변동/구성 변경 및 부가서비스/부대시설 이용 불가로 인한 취소 및 환불은 어려운 점 참고 부탁드립니다.*
기타 주의사항
주의사항을 읽지 않아 발생하는 모든 문제는 호스트가 책임질 수 없으니 예약 전 반드시 숙지해 주세요.

[추가인원 요금 및 유아 입실 인원 포함 안내]
- 2세 미만 유아는 현장에 도착해서 추가 결제를 해야 입실 가능합니다.
- 2세 미만 유아를 포함한 입실 인원이 객실의 최대인원을 초과할 경우 이용 및 환불이 불가합니다.

[숙소와의 연락]
- '호스트에게 연락하기'를 통해선 연락이 어렵습니다. 호스트와의 연락은 아래 방법을 확인해주세요.
1. Airbnb 메시지 기능을 통해 메시지로 문의해주세요. (Onda 답변 가능 시간: 매주 평일 10:00~18:00)
2. 예약 확정 고객은 문자 메시지를 확인해주세요. 예약 확정 즉시 숙소 연락처가 문자로 발송됩니다.
3. 만약 예약 확정 후 문자를 받지 못하셨다면 Airbnb 메시지 기능을 통해 알려주세요.
4. 예약시 한국 내에서 수신받을 수 있는 연락처를 필히 기재해주세요.
5. 연락처를 기재하지 않아 발생하는 불이익은 호스트가 책임질 수 없습니다.

[숙소 및 부대시설 이용 수칙]
- 오후 7시 이후 체크인 예정이라면 예약 완료시 발송되는 숙소 연락처로 전화해서 알려주세요.
- 숙박 외 부대시설은 날씨나 현장 여건에 따라 이용이 어려울 수 있습니다.
- 예약 전 부대시설 이용 가능 여부를 에어비앤비 메시지 기능을 통해 확인해 주세요.
- 부대시설은 숙소에서 부가적으로 제공하는 시설입니다. 따라서 부대시설 이용는 환불 사유에 해당되지 않습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 10:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
- 기준인원 및 최대인원을 확인해주세요. 기준인원을 초과한 인원은 나이와 무관하게 추가비용이 발생하며 최대인원을 초과한 인원은 입실이 제한됩니다.
- 예약시 한국 내에서 수신 받을 수 있는 연락처를 Airbnb 계정 정보에 기입 부탁드립니다.
- 숙소 이용 안내는 문자로 발송됩니다. 문자를 받지 못했다면 Airbnb 메시지 기능을 통해 알려주세요.
- 19시 이후 체크인 예정일 경우 체크인 당일 오전까지 숙소로 알려주세요.
- 숙소에서 제공하는 모든 부대시설은 날씨 및 현장 상황에 따라 이용이 불가할 수 있습니다. 예약전 이용 가능 여부를 확인해 주세요. 미확인 상태로 예약을 요청할 경우 '부대시설 이용 불가'는 환불 사유가 될 수 없습니다.
- 체크인/체크아웃 시간은 조정이 어렵습니다.
- 미성년자는 보호자의 동행 없이는 입실이 불가합니다.
- 소중한 개인소지품을 잘 보관해주세요. 개인소지품 분실시 숙소측에서는 책임지지 않습니다.
- 취사가 허용된 객실의 경우 간단한 음식 취사만 가능합니다. 냄새가 많이 나는 육류 및 생선 조리는 금지됩니다.
- 고성방가 및 타인에게 불편을 끼칠 수 있는 행위시 퇴실 조치가 있을 수 있으며 환불 불가합니다.
- 숙소에서는 금연입니다.
- 집기파손 시 변상의 책임이 있습니다.
- 퇴실시 객실정리 및 음식물을 비롯한 모든 쓰레기는 꼭 분리수거 부탁드립니다.
- 개별 화기 용품 및 바베큐 용품 등은 화재 위험이 있어 반입을 금지합니다.
- 숙소에 감시 또는 녹화 장치 시설은 객실 내 설치가 아닌 복도나 부대시설 등 숙소 공용 시설 내 설치를 의미합니다.`
                },
            ],
        ],
        cleanVat : 0,
    },
    {
        userId : user1,
        cate : "domHouse",
        roomImg : [
            "https://a0.muscache.com/im/pictures/ad0ea9fe-01a1-427d-87a5-b9ded6c813d4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/61bc844f-8619-4aa7-8d4f-c4e1791baaef.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4d3760cb-6a75-4de3-a0f0-9f7ad2912c16.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cd8d88f9-d1b5-4553-9b26-98c853a40492.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/97994eb6-b25d-4c4a-9b59-2aa04eff582f.jpg?im_w=720",
        ],
        title : "지붕 오픈 제주유일의 이색숙소",
        address : "제주도 제주시 구좌읍 동복리",
        dayPrice : 98000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `이글루를 닮은 이색돔하우스,제주관광공사 웹진추천 굿스테이 ,JIBS제주방송,NOW제주TV 강력추천 인증 소개. 네이버나 유투브에 [제주이글루]
검색.사람과 사람들의 따뜻한 만남이 있는 제주여행의 플랫폼,제주이글루로 초대합니다.
숙소
우주선 닮은 천장이 열리는 제주유일의 이색숙소라 색다른 추억이 될 거예요.
근처 함덕서우봉해변과 김녕성세기해변,천년의 숲비자림,만장굴,다랑쉬오름,용눈이오름,섭지코지,성산일출봉 등 제주관광9선 선정 제주동부 대표여행명소가 5분~30분거리에 있고,취사도구가 갖춰져 있어 간편조리가 가능해요.
게스트 이용 가능 공간/시설
바베큐나 전자렌지와 취사도구,그릇 비치 취사 조리가능.
세탁기 비치 세탁가능`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 4:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
            ],
        ],
        cleanVat : 0,
    },
    // golf
    {
        userId : user1,
        cate : "golf",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-815635635387222817/original/97fa5736-7945-4067-9af2-147dfede4895.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-815635635387222817/original/7d896a8c-ee91-4f18-9f03-bdd5635770b8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-815635635387222817/original/4782c7a7-6dec-4014-b539-d29c9f428413.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-815635635387222817/original/2074b599-a441-42e2-8020-ba5e8d91e2e8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-815635635387222817/original/b4fa4d7d-d356-49c6-9950-81805bca5b74.jpeg?im_w=720",
        ],
        title : "람경화현",
        address : "인천시 연수구 송도동",
        dayPrice : 79000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `중심부에 위치하면서도 조용한 숙소에서 🌈숙소 설명 및 안내문🌈

해당객실은 송도의 낭만적인 시티뷰 야경을 즐길 수 있는 초고층 스튜디오입니다.

객실은 1개의 방과 1개의 화장실로 이루어져 있으며 최대 2인의 게스트가 사용 가능하십니다.

거실에는 및 넷플릭스와 유튜브 등의 시청이 가능한 고가의 빔프로젝터 가 구비되어 있습니다.

건물 주변에는 많은 상가시설 등 편의시설이 다양하며 캠퍼스타운역 바로 앞에 위치해있습니다.

초고층의 송도의 야경과 함께 즐거운시간 되셨으면 합니다.

※ 해당건물의 주차비용은 1박 기준으로 5천원이 발생하며 주차방법 및 결제방법은 투숙당일날에 안내드립니다.

감사합니다.편안한 시간을 보내세요.`,
        convenience : [
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 부지 내 유료 주차"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오전 2:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
            ],
        ],
        cleanVat : 0,
    },
    {
        userId : user1,
        cate : "golf",
        roomImg : [
            "https://a0.muscache.com/im/pictures/ee61b6f0-72f3-40d1-9ebb-a5a4cd2c11df.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50258491/original/5dc1185e-16a1-49ff-a203-2cff9c2b6ddd.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50258491/original/cd3fde58-c3c6-4581-8920-0a72a7319cdf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50258491/original/8ede0eee-b862-4d97-a880-2c4f16f9ff76.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-50258491/original/a3cf2758-4c54-40af-a414-eeb51696477e.jpeg?im_w=720",
        ],
        title : "베리더힐 송도 berry the hill",
        address : "인천시 연수구 송도동",
        dayPrice : 94000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `베리더힐은 인천 연수구 송도국제도시에 위치한 2021년 완공된 신축레지던스 건물입니다. 다양한 커뮤니티 시설이 구비되어 있어, 건물안에서 편안하게 휴식을 즐기실 수 있는 공간입니다.
숙소
✔ 숙박 정원은 2명 입니다.
✔ 실내, 화장실 모든 공간 금연 입니다.
✔ 반려동물은 입실이 불가합니다.
게스트 이용 가능 공간/시설
✔ 인천1호선 달빛축제공원역
✔ 건물 내 지하주차장 무료 이용
기타 주의사항
✔ 건조기능 세탁기 세제,섬유유연제
✔ 욕실용품은 샴푸,린스,바디워시,치약,핸드워시,드라이기,수건 있습니다.

✔ ▶️야외수영장 오픈
야외수영장 이용가능하며, 객실이용객은 할인된금액으로 입장권 구매가능합니다!

월요일,화요일 수영장은 휴무이며, 자세한 안내는 문의부탁드립니다😁

✔현재 헬스장 이전으로 이용이 불가합니다. 건물에 외부 헬스장있어 일일이용으로 이용은 가능합니다! 참고부탁드립니다.

✔ 넷플릭스 시청가능합니다!(본인 계정 필요!)
✔ 상가 1층 편의점(CU, GS25시) 그 외 음식점 입점

✔ 화재 주의 Keep Fire Safety
✔ 절대 흡연 금지! No Smoking in this Area ✘
✔ 고기류, 생선류 실내 조리 금지 ✘
✔ 객실물품은 가져가시면 안됩니다~ ✘
✉ 문의사항은 연락주시면 답변 드리겠습니다~`,
        convenience : [
            {
                icon : "picture",
                con : "도시 스카이라인 전망"
            },
            {
                icon : "picture",
                con : "호수 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "초고속 와이파이 - 89Mbps"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차 차고 - 1대 주차 가능"
            },
            {
                icon : "bath",
                con : "공용 대형 욕조"
            },
            {
                icon : "pool",
                con : "공용 야외 수영장"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오전 2:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
절대 실내, 화장실 흡연 금지
고기류 생선류 실내 조리 금지
화재주의
외출 및 퇴실 시 일괄소등 및 에어컨 끄기`
                },
            ],
        ],
        cleanVat : 0,
    },
    {
        userId : user1,
        cate : "golf",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-836653790073696089/original/193d44b6-2e80-4e9d-b37c-b9edbef0ab37.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-836653790073696089/original/77e68398-2bab-42ed-8dba-ec23dfc75151.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-836653790073696089/original/78629316-9dbb-4ca0-b30b-e9a2f1341b38.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-836653790073696089/original/32123ce3-3ac4-49de-8974-7331abea5969.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-836653790073696089/original/6df720dc-2d79-44c1-9433-605712552f17.jpeg?im_w=720",
        ],
        title : "The pent at songdo 3bd 2ba",
        address : "인천시 연수구 송도동",
        dayPrice : 550000,
        roomData : {
            maxUser : 8,
            bedroom : 3,
            bed : 3,
            bathroom : 2
        },
        description : `청결도와 위생을 최우선으로 고려합니다.
모든 수건과 침구 세트를 철저히 소독합니다. 호스트 전에 세탁됩니다.

경이로운 전망 (공원, 바다, 도시)

단체 또는 가족 여행자에게 이상적입니다.
최대
8명 (6명 이상 예약시 여분의 매트리스와 침구세트가 준비되어 있습니다)

///무료 주차와 와이파이 이용 가능///

우수한 퀄리티의 인테리어와 전자제품 준비 완료
프리미엄 퀄리티 침구 세트

모든 일일 소모품이 준비되어 있습니다.
숙소
중요한 전자제품 설명

거실
86인치 LG 나노셀 스마트 TV 애플 TV + 100개 이상의 현지 채널 이용 가능
하이파이 스테레오 시스템

주방
오븐, 전자레인지, 식기 세척기, 에어프라이어, 밥솥, 냉장고, 에스프레소 머신 (원두 미포함), 정수기
식기류, 접시, 조리도구 냄비와 후라이팬 세제가 모두 준비되어 있습니다.

안방 1
49inch LG 4k 스마트 TV (스마트 TV만 작동함 (유튜브 넷플릭스 등)

세탁실
대용량 삼성 세탁기 및 건조기
세탁세제, 섬유유연제 준비완료

욕실샴푸,
샤워젤, 린스, 치약

장기 숙박 게스트 (7일 이상))
작업 환경에 대한 추가 책상과 모니터를 준비할 수 있습니다.
기타 주의사항
궁금한 점이나 특별 요청이 있으면 언제든지 메세지 주세요. 최선을 다해 도와드리겠습니다.`,
        convenience : [
            {
                icon : "picture",
                con : "공원 전망"
            },
            {
                icon : "picture",
                con : "바다 전망"
            },
            {
                icon : "picture",
                con : "호수로 연결"
            },
            {
                icon : "wifi",
                con : "초고속 와이파이 - 89Mbps"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "86인치 HDTV + Apple TV, 크롬캐스트, 넷플릭스"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 5:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 9:00 - 오전 9:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 0,
    },
    {
        userId : user1,
        cate : "golf",
        roomImg : [
            "https://a0.muscache.com/im/pictures/57a37604-b3fc-468c-9561-bf2b65c9555a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/beff15b9-22e4-47a1-ab57-71fe700f6f55.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7c587ae6-f0a2-4d74-ba57-d17e8c755d79.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c45beb06-6e6a-4d08-aebd-b8e34d848835.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/933e0f90-698f-43e4-99c5-80421f0d3fa4.jpg?im_w=720",
        ],
        title : "송도에서의 최소한의 삶",
        address : "인천시 연수구 송도동",
        dayPrice : 55000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `☆송도 시내의 전망이 아주 잘보이는 곳에 위치한 깔끔한 느낌의 인테리어로 준비한 단독으로 사용하는 레지던스 입니다. 고층에 위치하여 야경을 감상하시기에 전혀 부족함이 없으시리라 자부합니다.또한 청결에 가장 중점을 두고있어 지내시는 기간동안 쾌적한 환경에서 지내실수 있도록 최선을 다하고 있으니 좋은추억 만드실수 있도록 게스트의 입장에서 바라보며 최선을 다하도록 하겠습니다☆
숙소
블랙&화이트의 깔끔한 느낌을 좋아하시는분들을 위하여 인테리어를 준비해봤습니다. 또한 취사가 가능하여 각종 음식을 해드실수 있도록 각종 조리도구와 양념들을 구비해 두었으니 음식재료만 준비하시면 될것같습니다.건물내에는 각종 편의시설들이 있어서 멀리 나가지 않더라도 모든생활이 가능할정도로 준비가 잘되어있으니 이용하시는 기간동안 불편함없이 지내실수 있습니다.
게스트 이용 가능 공간/시설
게스트 단독으로 사용하는 공간으로 침실과 욕실,주방시설,건물내의 각종 편의시설을 이용할수가 있습니다.
기타 주의사항
셀프체크인 시스템이라 24시간 아무때나 편하게 체크인,체크아웃 하시면 됩니다.`,
        convenience : [
            {
                icon : "picture",
                con : "해변과 인접 - 해변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 11:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오후 1:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 0,
    },
    // skiEntry
    {
        userId : user1,
        cate : "skiEntry",
        roomImg : [
            "https://a0.muscache.com/im/pictures/3ae64232-4838-4aba-81a1-300b4b001cb2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/695eabbd-d7f3-493b-a2a8-509fd63f2af4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4a89e879-2919-4ba9-b160-98228e59ef68.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f5cab5c4-34ff-496e-9957-c004332a11c8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-653102525759411521/original/347c66a7-6b89-4ea4-8e04-2598a2dc5b3e.jpeg?im_w=720",
        ],
        title : "서나와 할아버지 통나무집_햇님",
        address : "강원도 홍천군 화촌면 군업리",
        dayPrice : 211000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `서나와 할아버지 통나무집_햇님에 오신걸 환영합니다.

햇님의 주제는 두가지에요.
첫째는 "공작산 바라기"랍니다. 한국 백대 명산의 하나라는 공작산과 그 위의 하늘을 방안에서 마주 보고 싶어서 벽을 사선으로 깍아 만들었어요.
둘째는 "숨, 쉼"이에요. 머무시는 분들의 몸과 마음이 편안히 숨, 쉼 하실 수 있길 바라는 마음으로 방안을 아무런 칠을 안하고 편백나무로 마감했어요. 또 막지 않을 수 있는 곳은 최대한 막지 않아서 최대한 넓은 느낌, 어디든 다 통하는 느낌을 자아내고자 했어요.

햇님은 이런 주제로 씽크대 하부장과 탁자 세트를 빼고는 모두 서나 아빠가 직접 만든 집이랍니다.

햇님의 자랑인 전망창이나 데크에 편안히 자리잡으시면 공작산과 그 위 하늘에서 펼쳐지는 구름과 바람의 춤을 즐기실 수 있을 거에요.
새들과 풀벌레가 조잘 거리는 소리와 가만히 귀 기울이면 들리는 길 건너 냇물 소리도 맘을 편하게 해드릴 거구요.`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "초고속 와이파이 - 95Mbps"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "42인치 HDTV + 넷플릭스, 프리미엄 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 4:00~오전 2:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 키패드"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 9:00"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
추가 규칙
다음 게스트를 위해 깨끗이 써 주세요^^
식기에 기름기가 남아 있지 않도록 부탁드려요.
쓰레기통도 꼭 비워 주시면 고맙겠습니다.
땅별을 위해 분리수거도 잘 부탁드려요.
분리수거 하실 때 병에 붙어 있는 비닐을 꼭 떼어주세요!
햇님 맞은편 창고 목책 안에 일반 쓰레기통, 음실물 쓰레기통, 분리수거구역이 있습니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "skiEntry",
        roomImg : [
            "https://a0.muscache.com/im/pictures/8316e447-f714-41b2-868d-24e052c4322b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/82672bff-4911-45c3-9841-978efa43b6e1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ece9afe0-f58e-4285-8db5-fce62e6b1dae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/58f63513-64d8-4b3d-a34f-c61da34c04e0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6d62f265-0ede-4b4c-998f-d0c245d88745.jpg?im_w=720",
        ],
        title : "대관령 양떼목장 근처 M&H 캐빈하우스",
        address : "강원도 평창군 대관령면 횡계리",
        dayPrice : 185000,
        roomData : {
            maxUser : 4,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        },
        description : `🎙 독채개별바베큐장(사계절), 기가지니 tj코인노래방 무료이용, 각 방 에어컨, 넓은 테라스에서 멋진뷰를 볼 수 있으며 밤하늘에 별도 잘 보여요.
기존 M&H 캠핑하우스(28평)와 모던하우스(27평)를 운영하고 있으며 이번에 컨셉이 다른 최고의 뷰를 자랑하는 18평
M&H 캐빈하우스를 22년 8월에 새로 오픈하게 되었습니다. 800고지의 맑은 공기와 여름에도 시원한 바람을 느낄 수 있는 아름다운 대관령에서 맘껏 힐링하세요~
숙소
저희 숙소는 대관령 스위스마을 안에 위치해 있으며 숙소에는 아주 넓은 테라스가 있어 여름에는 멋진 뷰를 보며 바베큐 가능합니다 ~독립 바베큐장이 있어 사계절 바베큐 가능^^캐빈하우스 (18평)4명까지 예약가능 하지만 침대가 퀸사이즈 한개랑 싱글한개라 두커플은 힘들고 성인 네분일 경우 요와이불 추가 준비해드려요~미리 연락주세요 두커플 이상일 경우 캠핑하우스(28평)와 모던하우스(27평)로 예약 가능합니다~
*네/이/버와유튜브에 대관령m&h캐빈하우스를 검색하시면 겨울영상과 더 많은 정보를 확인 할 수 있어요~`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 4:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "skiEntry",
        roomImg : [
            "https://a0.muscache.com/im/pictures/610f0ff4-d15a-45e1-ad56-41ffa563eda4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/95c410ea-7f46-4a2c-a67c-8ac01467d332.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/51c814d0-35cf-4df3-8553-1b92fe2c2865.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/28630bc9-3165-4fe8-96d6-48e40a0cc7a7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ea059df4-9209-4682-8e19-e7db88c16d9a.jpg?im_w=720",
        ],
        title : "BirchHillCondo 버치힐",
        address : "강원도 평창군 대관령면 용산리",
        dayPrice : 230000,
        roomData : {
            maxUser : 5,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        },
        description : `인체의 생체리듬에 가장 좋다는 해발 700m에 위치한 클래식한 산장스타일의 별장형 콘도미니엄으로서 미국 콜로라도주의 비버크릭을 모델로 개발되었습니다.용평리조트 내의 자작나무숲에 위치한 버치힐콘도는 여러 골프코스들과 다양한 스키슬로프,워터파크 등의 시설들을 이용하며 사계절 편안한 휴식을 취할수 있는 국내 유일의 곳입니다.

Birch Hill Condominium was established as the Korea’s luxurious villa-style condominium in the birch forest.
Especially, guests can see the views of Golf Courses and Gold Ski Slope adjacent to Birch Hill Condominium, at a glance, and enjoy various entertainments, other than ski and golf, in the ancillary facilities.`,
        convenience : [
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "공용 수영장"
            },
            {
                icon : "tv",
                con : "HDTV + 넷플릭스, 일반 케이블 TV"
            },
            {
                icon : "bath",
                con : "전용 대형 욕조"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 안내 직원"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 5명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
퇴실시
사용하신 식기류는 간단히 설겆이를 해 놓아 주시고
일반 쓰레기와 재활용 쓰레기는 분리하여 주차장 입구 안쪽 공용쓰레기통에 버려주시면 감사하겠습니다
다음 게스트의 쾌적한 투숙을 위해 숙소내에서 고기 생선 등을 튀기거나 굽는 방법으로 조리하지마십시오. 
벽난로는 안전과 사후 청소 등의 이유로 사용을 자제해 주시면 감사하겠습니다. 
부득이하게 사용하실 경우 콘도 이용규칙상 게스트께서 직접 재와 여타 내부를 깨끗이 청소해 주셔야 합니다.
숙소 내외부에서는 절대금연입니다. 특히 절대로 테라스에서 담배를 피시고 꽁초를 외부에 던지거나 하시면 안됩니다. 퇴실조치 당하실 수 있습니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "skiEntry",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-4270921/original/c94f5a95-677e-415d-9efd-0f2f9b7323bc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-4270921/original/8f467b0c-36d2-4f08-a8be-b2316ce2b5a2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-4270921/original/4eaa2819-09f1-4cfe-902d-a9e355fc88c8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-4270921/original/47a6894a-bbe8-4a99-9b2d-769ca981c0f1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-4270921/original/1da0d410-ff05-47f6-80aa-d7cb4113cf32.jpeg?im_w=720",
        ],
        title : "양떼목장 근처 복층펜션 #4",
        address : "강원도 평창군 대관령면 횡계리",
        dayPrice : 168000,
        roomData : {
            maxUser : 5,
            bedroom : 1,
            bed : 2,
            bathroom : 1
        },
        description : `인체의 생체리듬에 가장 좋다는 해발 700m에 위치한 클래식한 산장스타일의 별장형 콘도미니엄으로서 미국 콜로라도주의 비버크릭을 모델로 개발되었습니다.용평리조트 내의 자작나무숲에 위치한 버치힐콘도는 여러 골프코스들과 다양한 스키슬로프,워터파크 등의 시설들을 이용하며 사계절 편안한 휴식을 취할수 있는 국내 유일의 곳입니다.

Birch Hill Condominium was established as the Korea’s luxurious villa-style condominium in the birch forest.
Especially, guests can see the views of Golf Courses and Gold Ski Slope adjacent to Birch Hill Condominium, at a glance, and enjoy various entertainments, other than ski and golf, in the ancillary facilities.`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 5명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
• 체크인 시간은 오후 3시입니다 
• 체크아웃은 11시입니다.
• 객실 내에서는 신발을 벗어야 합니다. 
• 반려동물 동반 불가 (죄송합니다 ^ ^;), 늦은 밤 파티 불가. 
• 금연, 금연 건물입니다. 정부에서 약 100달러의 벌금을 부과할 수 있습니다. 
• 침대에서 음식을 먹지 말고 메이크업과 함께 누워있지 마세요. 
• 에어비앤비의 컨셉으로 숙소를 공유하고자 합니다. 체크아웃할 때와 마찬가지로 방을 깨끗하게 유지하시기 바랍니다. 
• 퇴실 전 모든 주방 도구와 식기는 세척해 주세요. 
• 쓰레기는 유리병, 플라스틱, 종이로 분리해주세요.
전기요금이 더 많이 사용할수록 더 빠른 속도로 인상되므로 외출 시 모든 조명과 가전제품을 꺼주세요. 
• 체크아웃 전에 파손되거나 분실된 물품을 신고하여 다음번에 수리 또는 교체할 수 있도록 해주세요.
• 12개월 미만의 유아는 무료입니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    // campingCar
    {
        userId : user1,
        cate : "campingCar",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-787424147943562635/original/b805c4ba-d98b-4b43-9be6-73bcbd7fccb8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-787424147943562635/original/38a95a35-adf8-46f1-8b2f-a0493abb2d2d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-787424147943562635/original/16c11cae-b3ef-4fd9-b51e-8beb9dce6db0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-787424147943562635/original/9f3e1a4f-dbde-4696-9503-e29b0ddc7a43.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-787424147943562635/original/4e9a5df2-6d12-4c89-8669-122d3de32c8d.jpeg?im_w=720",
        ],
        title : "멋진추억을카라반에서",
        address : "경기도 가평군 가평읍",
        dayPrice : 124000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 3,
            bathroom : 1
        },
        description : `계곡물소리를 들으면서 바베큐와 모닥불 불멍을하며 힐링할수있는공간이있습니다
펜션바로옆 청정계곡 용추계곡물이 흐르고있으며
독특하면서도 평화로운 이곳에서 편안한 휴식을 즐기세요.
숙소
바베큐비용2인기준20000원
여름 (선풍기 )
겨울 (난방기) 제공해드립니다
모닥불 불멍( 캠핑의자 개인화로 랜턴 테이블 오로라가루 마시멜로+꼬지 쫀드기+추억의먹거리 제공) 30000원
모닥불장 이용 마감 23:00
게스트 이용 가능 공간/시설
★수영장첫오픈입니다
1.사용시간 입실부터19:30분까지입니다
2.식음료반입금지
3.튜브바람넣는기계있습니다
★넷플릭스무료시청가능.(빔프로젝터랑은연결불가합니다)
★보드게임 무료대여
★무선와이파이가능
★지영수상레저vip이용권 무료제공해드립니다
(레져상품20~50%할인권 숙소이용하실때 지영수상레저팀에서 왕복픽업서비스를제공해드리고있습니다)`,
        convenience : [
            {
                icon : "picture",
                con : "호수로 연결"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "공용 야외 수영장"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "campingCar",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/10c1ac4c-acf3-4551-b58c-e58090bef34e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/73f94c4f-a627-4b4b-8e9b-cea52091c5d9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/5098a320-a3cc-45a2-b85a-c3596036c364.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/eb6336b7-c813-4693-9538-c69660cb5c47.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-1160453437723716253/original/364aceb3-c9df-423f-b314-be983bcda30f.jpeg?im_w=720",
        ],
        title : "아웃오브파크_아메리칸드림",
        address : "강원도 춘천시 남면 관천리",
        dayPrice : 230000,
        roomData : {
            maxUser : 4,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `American Dream
(1990년대 미국 주택느낌을 연상케하는 아날로 감성 카라반)

보낸 사람: 미국, 에어스트림
연도: 1990
Sleeping : 4
Merit : 3축 롱베이스 바디, 오리지널 미국 원목 가구, 실내 고벽돌 Bar
실내 모던 빈티지 인테리어, 미니풀 등`,
        convenience : [
            {
                icon : "picture",
                con : "호수로 연결"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pool",
                con : "수영장"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
            {
                icon : "tv",
                con : "TV"
            },
            {
                icon : "eye",
                con : "숙소 내 실외 보안 카메라"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 시간: 오후 3:00~오후 9:00"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 3:00 - 오후 10:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
카라반 내부에는 전자제품, 취사도구, 침구류, 드라이기, 수건, 샴푸, 린스, 바디워시가 준비되어 있으며 칫솔, 치약, 면도기는 준비하셔야합니다.

카라반 내부에서는 고기나 생선굽기, 부침개, 해산물 요리 등 냄새가 많이 나는 요리의 조리가 불가합니다.

흡연부스를 제외한 곳에서 흡연은 불가합니다.

퇴실 시 음식물을 비롯한 모든 쓰레기는 분리수거해 주시고, 사용하신 주방집기는 세척해 주시기 바랍니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "campingCar",
        roomImg : [
            "https://a0.muscache.com/im/pictures/393a60b3-c2db-424f-b87c-5545637c2d7a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-36078549/original/faa30034-99fb-46e4-a0eb-c70eed4e7142.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-36078549/original/1707cde3-3f01-4b0e-9380-57719e83a947.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-36078549/original/f24d56f5-8565-4745-927d-4e4e5b1a1fcb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/8a82b02b-f494-4131-a95f-51e7d8f42b18.jpg?im_w=720",
        ],
        title : "Won’s caravan stay",
        address : "충청남도 논산시 채운면",
        dayPrice : 130000,
        roomData : {
            maxUser : 4,
            bedroom : 2,
            bed : 2,
            bathroom : 1
        },
        description : `Won’s 카라반 스테이✨
본 숙소는 가족, 친구, 지인들과 한적한 숲속으로
카라반 여행을 온 것 같은 색다른 경험을 할 수 있습니다.
캠핑 감성을 보다 편안하게 느끼고 싶으신 분들을 위해 화장실, 주방시설, 온수, 냉난방이 다 되어 있는
카라반 숙소입니다.

야외 바베큐 시설이 되어 있어서
사전에 미리 예약신청시 이용 가능합니다.

불멍 화롯대 비치되어 있습니다.(장작판매)

*기본 식기류 비치
*무료 와이파이 가능
*TV시청 가능
*예약인원 수건 제공
*유아(36개월 이상)는 이용인원에 포함됩니다.
(36개월 미만은 무료)
숙소
더블침대 방 1개
벙커 더블침대 1개
화장실 1개
거실공간/쇼파
주방공간/식탁4인`,
        convenience : [
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "bath",
                con : "욕조"
            },
            {
                icon : "tv",
                con : "TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 4명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 11:00 - 오전 7:00"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 가능"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
입실 전 호스트에게 유선통화 부탁드립니다`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "campingCar",
        roomImg : [
            "https://a0.muscache.com/im/pictures/1767bb64-a461-4319-bf27-48e11e999058.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2f01d099-fb6a-4f10-83b7-6b1543439ee9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/705d3e56-f346-4186-a6f6-fa39939fb447.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/865c2acd-096c-4f30-8996-33f7e46775fc.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/15892b58-0372-474f-98d9-a9e545a93cec.jpg?im_w=720",
        ],
        title : "어비계곡을 가장 가깝게 즐길 수 있는 단독 카라반",
        address : "경기도 가평군 설악면",
        dayPrice : 154000,
        roomData : {
            maxUser : 5,
            bedroom : 1,
            bed : 3,
            bathroom : 1
        },
        description : `단독카라반에서 시원한 계곡을 즐기세요!
숙소
저희 카라반은요~바로 앞에 어비계곡이 있어 물놀이하기 정말 좋은 위치입니다.
마당이 넓어 마당에 텐트(게스트가 직접 준비)설치도 가능합니다. -추가비용 있으니 따로 문의주세요

바베큐통은 무료로 대여해 드리고 있으나 그릴판과 숯은 직접 사오셔야해요.

최근 바로 옆에 산책길이 조성되어 계곡길을 따라 산책도 할 수 있고, 근처에 어비산이 있어 등산도 할 수 있어요~

주인부부가 카라반 앞에 있는 집에서 생활하여 도움이 필요하면 바로 도움을 줄 수 있습니다.

다만, 주의사항이 있어요..강아지 2마리(대형견1,중형견1)가 마당에서 생활해요. 게스트가 오면 묶어두지만(묶어두면 카라반에서는 안보여요) , 개를 많이 무서워하시는 분들은 참고해주세요ㅠ

※애견동반은 불가능합니다!`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "계곡 전망"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
                {
                    icon : "check",
                    content : "셀프 체크인: 열쇠 보관함"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 5명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 10000,
    },
    // ski
    {
        userId : user1,
        cate : "ski",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-795180926065955947/original/69e1b0eb-6c6f-45c0-b7cf-57bc0ab44d27.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795180926065955947/original/cdccf814-981b-405c-b5ee-0d57af62d91c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795180926065955947/original/df9a14ee-ca06-4063-a135-ed41358d83ec.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795180926065955947/original/4a3fae57-0158-4d8c-982d-67f899f5f319.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-795180926065955947/original/92e4f113-33b2-4c2a-8750-8e2c9e5f5788.png?im_w=720",
        ],
        title : "나무사이에자연속으로-포레스트",
        address : "강원도 춘천시 남산면",
        dayPrice : 179000,
        roomData : {
            maxUser : 2,
            bedroom : 1,
            bed : 1,
            bathroom : 1
        },
        description : `자연의 아름다움을 느낄 수 있는 숲속의 감성스테이
남이섬이 보이는 북한강 근처에 위치하여 있습니다.
숙소앞 숲을 바라보며 있으며 계곡이 있어서 새소리가 많이 들립니다.
목조로 직접 시공을 하였으며 함께 운영하는 가구공방(나무사이에)에서
제작한 가구로 채워져 있어 나무향 가득한 공간입니다.

포레스트, 디어, 클라우드, 버드하우스 4동과 카라반으로 이루어져 있습니다.
카라반은 동계에 운영되지 않습니다.

포레스트하우스는 단층방으로 프로젝트로 넷플리스를 시청하실수 있습니다.
옥상에서의 숲뷰도 좋습니다.

**기본 인원 2명이며, 2인이실때 인원 추가하실 필요가 없습니다.**
(아동1명까지 최대인원 3명, 1인 추가금액 2만원)

대중교통으로 오시려면 경춘선을 타고 가평역에서 내리시면 됩니다. 가평역 앞에서 버스를 타고 가평 시외버스터미널에서 내리면(2정거장) 조은마트가 있습니다. 조은마트에서 일정금액 장을 보시면 숙소까지 왕복픽업을 해주니 이용하시는게 편하십니다.`,
        convenience : [
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "32인치 HDTV + 크롬캐스트, 넷플릭스"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 2명"
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "ski",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-922809891353245915/original/3554cf67-4cb6-4540-b38c-ad31837a1800.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922809891353245915/original/22afd2a9-52d0-4b6e-94c4-41bb32f66765.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922809891353245915/original/4c9fe01b-f7f4-4ab0-9836-d80a53f737b6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922809891353245915/original/e94dd8a3-0b5a-45d9-8c65-6671bdbceea8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922809891353245915/original/98c439cb-9237-4dcf-9ffa-00d642df4af1.jpeg?im_w=720",
        ],
        title : "The R Story_청정 지역 산 속에서 힐링",
        address : "강원도 춘천시 남산면 방하리",
        dayPrice : 490000,
        roomData : {
            maxUser : 8,
            bedroom : 2,
            bed : 1,
            bathroom : 2
        },
        description : `숙소비용은 제가 청년부 때부터 10여년간 섬겨오고있는 복지관의 고아 아가들과 독거노인분들과 노숙자분들께 게스트분 이름으로 기부되어 집니다♡

자연 속에서 말씀 묵상하고 기도하며 영혼을 소생시키는 집♡
숲 속에 작은 필그림 하우스♡
아름답게 회복시키는 치유의 공간♡

지난 15년 간 매일 새벽 예배로 하루의 첫시간을 말씀과 기도로 아빵하나님과 친밀히 교제하며 시작했습니다.
어느덧 소리없이 쌓인 눈이 나뭇가지를 부러트리듯이 희귀난치병도 완치되었고 모든 인간 관계도 건강히 회복되며 모든 것이 감사의 제목이 된 호스트입니다^^

새벽 기도 중에 아빵하나님이 감동을 주신 부분이 있어 저의 집을 아름다운 치유의 공간으로 활용하시길 바라는 이들에게 공유합니다^^

매일 새벽 기도가 쌓여져 있는 집입니다♡
정결하고 깨끗하게 자연을 누리고 가실 분들만 예약해주시면 감사하겠습니다.

주변에 필그림하우스(기도원, 천로역정), 제이드 가든, 자라섬, 남이섬, 수상 레져, 빠지 등도 즐겁습니다^^`,
        convenience : [
            {
                icon : "picture",
                con : "산 전망"
            },
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "pet",
                con : "반려동물 입실 가능"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 10:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 가능"
                },
                {
                    icon : "moon",
                    content : "소음 제한 시간대 : 오후 10:00 - 오전 7:00"
                },
                {
                    icon : "coution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "photo",
                    content : "상업적 사진 촬영 금지"
                },
                {
                    icon : "coution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
물품 파손시 배상하셔야 합니다^^`
                },
            ],
        ],
        cleanVat : 30000,
    },
    {
        userId : user1,
        cate : "ski",
        roomImg : [
            "https://a0.muscache.com/im/pictures/miso/Hosting-51175196/original/7f4496e2-1c48-4aaa-b707-adb6b104ccea.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51175196/original/e2097d51-b572-43fa-9d29-d25a8407238f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/4805f068-47c0-41f1-807f-8d42beb5cfff.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51175196/original/67744eed-edf9-4875-8b8c-41ffa775cd12.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51175196/original/69e759c3-1a53-4b97-8c35-bda4080b2dfe.jpeg?im_w=720",
        ],
        title : "[운악산 뜰아래] 전망좋은 펜션 단독 별채",
        address : "경기도 포천시 화현면",
        dayPrice : 250000,
        roomData : {
            maxUser : 8,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        },
        description : `황토로 리모델링 별채입니다. 조용한 환경속에서 자연을 느끼며 쉬어가고 싶으신 분들 어서오세요~

#FAQ
*바베큐비용 2만원(숯 + 일회용 그릴 포함) 현장결제

*마당에서 불멍 가능합니다. 다만, 불멍용 장작은 별도 구비해오셔야 합니다.

*식기류 집기류 모두 숙소 내 비치되어 있습니다.
- 빌려 사용하신 후 설거지 부탁드립니다 :)

*정수기 비치되어 있습니다.

*동절기 00:00~08:00 새벽시간에는 온수가 잘 안나올 수 있으니 해당시간을 피해서 사용하시길 권장드립니다.

*체크인 14:00~, 체크아웃 ~11:00

*쓰레기 봉투 비치되어있습니다.
- 퇴실전 분리수거 및 쓰레기 정리 부탁드립니다 :)

*사진에 보이는 숙소 단독으로 사용하시는 것 맞습니다.
(옆집에 부모님이 계실건데, 지내시는동안 도움필요하시면 언제든 전화주세요.)

*참기름, 식용유, 소금있습니다. 추가로 필요하시면 말씀주세요.`,
        convenience : [
            {
                icon : "picture",
                con : "안뜰 전망"
            },
            {
                icon : "picture",
                con : "정원 전망"
            },
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "무선 인터넷"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "TV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 2:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오전 11:00 전까지"
                },
            ],
            [
                {
                    icon : "users",
                    content : "게스트 정원 8명"
                },
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "coution",
                    content : "흡연 금지"
                },
                {
                    icon : "memo",
                    content : `추가 이용규칙
1. 코로나로 인한 개인 위생을 위해서, 세면도구 개인구비 권장 드립니다 :)

2. 실내 흡연 금지입니다. (마당 및 외부에서 가능)

3. 분리수거 가능하도록 준비되어 있습니다. 퇴실 전 기본적인 정돈 부탁드립니다 :)

4. 반려동물 실내 입실 불가능합니다.

5. 바베큐 이용시 숯, 그릴 비용 20,000원 입니다.`
                },
            ],
        ],
        cleanVat : 10000,
    },
    {
        userId : user1,
        cate : "ski",
        roomImg : [
            "https://a0.muscache.com/im/pictures/9153be53-4bec-420f-8d3a-30a21a893f15.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/046845c5-f806-4e0a-bb8c-ea3f20014725.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/82a44ef0-a30d-42b9-9e96-d8dbe1363f61.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ee631416-45c0-4519-bf56-57156dc75192.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66bb6529-a084-44af-b433-598337aea3cc.jpg?im_w=720",
        ],
        title : "가평 산속에 위치한 깃대봉 교회 입니다",
        address : "경기도 가평군 상면",
        dayPrice : 850000,
        roomData : {
            maxUser : 16,
            bedroom : 4,
            bed : 3,
            bathroom : 3
        },
        description : `가평 산속에 위치한 아름다운 전원 교회 입니다.

자연속에서 하나님을 찬양하며 예배와 모임 수련회 장소로 적합한 곳입니다.

이곳은 교회이기 때문에 교회 모임으로만 가능하며 일반인들은 사용하기에 적합하지 않는 부분 양해 부탁드립니다.

이곳 깃대봉교회를 통해 평생 기억에 남는 좋은 추억이 자리하시길 기원 드립니다.`,
        convenience : [
            {
                icon : "picture",
                con : "수변"
            },
            {
                icon : "wifi",
                con : "와이파이 – 16Mbps"
            },
            {
                icon : "car",
                con : "건물 내 무료 주차"
            },
            {
                icon : "tv",
                con : "52인치 HDTV + 일반 케이블 TV"
            },
        ],
        notice : [
            [
                {
                    icon : "time",
                    content : "체크인 가능 시간: 오후 3:00 이후"
                },
                {
                    icon : "time",
                    content : "체크아웃 시간: 오후 12:00 전까지"
                },
            ],
            [
                {
                    icon : "pet",
                    content : "반려동물 동반 불가"
                },
                {
                    icon : "caution",
                    content : "파티나 이벤트 금지"
                },
                {
                    icon : "coution",
                    content : "흡연 금지"
                },
            ],
        ],
        cleanVat : 40000,
    },
)