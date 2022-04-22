import EI1 from "../../image/jobMbti/question/EI1.png";
import EI2 from "../../image/jobMbti/question/EI2.png";
import EI3 from "../../image/jobMbti/question/EI3.png";
import JP1 from "../../image/jobMbti/question/JP1.png";
import JP2 from "../../image/jobMbti/question/JP2.png";
import JP3 from "../../image/jobMbti/question/JP3.png";
import SN1 from "../../image/jobMbti/question/SN1.png";
import SN2 from "../../image/jobMbti/question/SN2.png";
import SN3 from "../../image/jobMbti/question/SN3.png";
import TF1 from "../../image/jobMbti/question/TF1.png";
import TF2 from "../../image/jobMbti/question/TF2.png";
import TF3 from "../../image/jobMbti/question/TF3.png";

import ENFJ from "../../image/jobMbti/result/ENFJ.png";
import ENFP from "../../image/jobMbti/result/ENFP.png";
import ENTJ from "../../image/jobMbti/result/ENTJ.png";
import ENTP from "../../image/jobMbti/result/ENTP.png";
import ESFJ from "../../image/jobMbti/result/ESFJ.png";
import ESFP from "../../image/jobMbti/result/ESFP.png";
import ESTJ from "../../image/jobMbti/result/ESTJ.png";
import ESTP from "../../image/jobMbti/result/ESTP.png";
import INFJ from "../../image/jobMbti/result/INFJ.png";
import INFP from "../../image/jobMbti/result/INFP.png";
import INTJ from "../../image/jobMbti/result/INTJ.png";
import INTP from "../../image/jobMbti/result/INTP.png";
import ISFJ from "../../image/jobMbti/result/ISFJ.png";
import ISFP from "../../image/jobMbti/result/ISFP.png";
import ISTJ from "../../image/jobMbti/result/ISTJ.png";
import ISTP from "../../image/jobMbti/result/ISTP.png";

export const data = {
  questions: [
    {
      image: EI1,
      content: "힘들게 일한 하루... 오늘은 술 각이다. 술 마시고 싶은 날 나는 ",
      selectList: [
        {
          type: "E",
          content:
            "여럿이 모여서 같이 마셔야 스트레스도 풀리고 더 재밌지. 퇴근하고 함께 술 마실 팀원들을 모집한다.",
        },
        {
          type: "I",
          content:
            "일해서 피곤한데 또 사람들이랑 회식을 한다고? 힘들다. 얼른 퇴근하고 집으로 가서 혼술을 즐긴다.",
        },
      ],
    },
    {
      image: EI2,
      content:
        "이직에 성공한 나!  출근 첫 날 점심시간. 팀원들과 함께 식당에 갈 때 나는",
      selectList: [
        {
          type: "E",
          content:
            "어색한 분위기는 싫다. 팀원들에게 주로 가는 식당은 어딘지. 어제 점심에는 뭘 먹었는지 물어보며 말을 건다.",
        },
        {
          type: "I",
          content: `아직 잘 모르고 낯선 환경과 사람들..!
          어색한 침묵이 흘러도 무슨 말을 해야할지 모르겠다. 우선은 회사에 더 익숙한 팀원들이 먼저 말을 걸어줄 때를 기다린다.`,
        },
      ],
    },
    {
      image: EI3,
      content: "나랑 취미가 비슷한 동료를 발견했다. 이럴 때 나는",
      selectList: [
        { type: "E", content: "저랑 이번 주말에 같이 하실래요 ? " },
        {
          type: "I",
          content: "저랑 정말 취향이 비슷하시네요. 자주 이야기 나눠요 ! ",
        },
      ],
    },
    {
      image: JP1,
      content:
        "갑자기 이번 달에 나한테 산더미 같은 업무가 밀려왔다. 이럴 때 나는? ",
      selectList: [
        {
          type: "J",
          content:
            "어떤 일을 언제 시작해서 언제 마칠지. 계획을 미리 짜두고 계획한대로 업무를 진행해나간다.",
        },
        {
          type: "P",
          content:
            "해야할 일들을 쭉 살펴보고 우선순위가 높고 내가 빠르게 처리할 수 있는 업무 위주로 바로 진행해 나간다.",
        },
      ],
    },
    {
      image: JP2,
      content:
        "어느 날 갑자기 업무 관련한 좋은 아이디어가 번뜩 생각났다 ! 이 때 나는?",
      selectList: [
        {
          type: "J",
          content:
            "아이디어 관련해서 자료를 찾고, 생각을 정리한 뒤 문서화 해서 팀원들에게 공유한다.",
        },
        {
          type: "P",
          content:
            "팀원들에게 바로 아이디어를 말하고 팀원들과 함께 의견을 나누며 피드백을 받는다.",
        },
      ],
    },
    {
      image: JP3,
      content: "나는 어떤 환경에서 나의 업무 능률이 올라가는가 ? ",
      selectList: [
        {
          type: "J",
          content: "합리적으로 정해진 룰이 있고, 그 룰에 맞춰 일하는 환경.",
        },
        {
          type: "P",
          content: "내가 스케쥴과 업무 방식을 자유롭게 조절할 수 있는 환경.",
        },
      ],
    },
    {
      image: SN1,
      content:
        "옆 자리 동료가 음악을 추천해달라고 한다. 내가 좋아하는 음악을 추천해주면서 나는",
      selectList: [
        {
          type: "S",
          content:
            "이 노래 가사가 너무 좋아요. 제가 ~~ 할 때 정말 공감하며 들었던 음악이에요. 추천 !",
        },
        {
          type: "N",
          content:
            "이 노래 중간 중간 나오는 기타 소리가 정말 좋아요. 듣고 있으면 ~~한 느낌 ! 뭔지 아시죠 ?",
        },
      ],
    },
    {
      image: SN2,
      content:
        "이직 시즌을 앞두고 고민하고 있는 나. 나는 어떤 고민을 하고 있는가?",
      selectList: [
        {
          type: "S",
          content:
            "지금 업무랑 다른 업무랑 어떤 걸 해야 더 내 커리어에 도움이 되지? ",
        },
        {
          type: "N",
          content:
            "지금 회사도 좋지만, 다른 회사가 더 전망 있어보이는데.. 하지만 지금 회사도 나쁘지 않고.. 같이 일하는 동료도 좋은데..\n이직하면 새로운 업무도 해보고 더 좋을 것 같기도 하고.. 아니면 하던 업무 계속해서 전문성을 키우는 게 좋을까...",
        },
      ],
    },
    {
      image: SN3,
      content: "회사에서 자기소개를 하는 시간 ! 나를 소개할 때. 나는?",
      selectList: [
        {
          type: "S",
          content:
            "내가 담당하는 업무에 대한 소개와 지금까지 내 커리어 위주로 소개한다.",
        },
        {
          type: "N",
          content:
            "업무에 관한 내용은 간단히 , 내 성격과 내가 좋아하는 것. 나는 어떤 사람인지 위주로 소개한다.",
        },
      ],
    },
    {
      image: TF1,
      content:
        "아침에 출근하니 옆 자리 팀원이 피곤해보인다. 왜 이렇게 피곤하냐고 물으니\n“늦게 잤어, 어제 생각할 게 너무 많아서.. ”라고 대답한 팀원. 이럴 때 나는?",
      selectList: [
        { type: "T", content: "무슨 생각했는데 ?" },
        { type: "F", content: "요새 고민 있어 ?" },
      ],
    },
    {
      image: TF2,
      content:
        "어제 같이 회식한 동료. 오늘 아침 인사했는데. 그냥 지나가버렸다. 이럴 때 나는?",
      selectList: [
        { type: "T", content: "인사를 왜 안 받아주지? 못 봤나 보지. " },
        { type: "F", content: "혹시 내가 어제 뭘 잘못했나 ? 신경 쓰인다." },
      ],
    },
    {
      image: TF3,
      content:
        "친한 동료가 고민 상담을 한다. 들어보니 동료의 잘못이 큰 것 같다. 이 때 나는?",
      selectList: [
        {
          type: "T",
          content:
            "객관적으로 상황을 판단하고. 동료의 잘못을 말해주면서 해결책을 제시해준다.",
        },
        {
          type: "F",
          content:
            "우선 동료의 고민에 깊이 공감해주고, 그 다음에 조심스럽게 내 생각을 전해준다. ",
        },
      ],
    },
  ],
  results: [
    {
      image: ENFJ,
      title: "온화한 리트리버",
      type: "ENFJ",
      resultItems: [
        "힘든 일이 있어도 혼자 끙끙 앓는 타입이에요.",
        "누군가 나를 힘들게 해도 끝까지 참아요.",
        "회사 사람들과 사적으로도 친밀하게 지내요.",
        "다른 사람의 이야기를 들어주는 것을 좋아해요.",
        "공감능력이 너무 높아서 가끔 본인이 힘들어질 때가 있어요.",
        "옳은 일을 하고 싶어해요.",
        "사람들 간의 갈등과 긴장이 없는 환경에서 할 수 있는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "취업 컨설턴트",
          link: "https://www.wanted.co.kr/wdlist/514/609?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "사내 심리 상담가",
          link: "https://www.wanted.co.kr/wdlist/507/10121?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "통역가",
          link: "https://www.wanted.co.kr/wdlist/524/940?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ENFP,
      title: "넘사벽 좋은 성격의 푸들",
      type: "ENFP",
      resultItems: [
        "누군가 시비를 걸어도 웃음으로 대처해요.",
        "싫어하는 일은 잘 못해요. 다만 좋아하는 일을 맡게 되었을 때는 누구보다 열정적으로 해요.",
        "인싸 of 인싸. 친화력이 뛰어나 두루두루 잘 지내요.",
        "신입사원이 오면 누구보다 따뜻하게 맞아줘요. 친해지는 것도 시간문제에요.",
        "새로운 가능성을 찾고 시도하는 것을 좋아해요.",
        "반복적인 일상을 참지 못해요. 새롭고 재미있는 일들에 도전해야 해요.",
        "최소한의 규칙과 규율이 존재하는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "사내강사",
          link: "https://www.wanted.co.kr/wdlist/517/1044?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "PR전문가",
          link: "https://www.wanted.co.kr/wdlist/523/714?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "영업 담당자",
          link: "https://www.wanted.co.kr/wdlist/530?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ENTJ,
      title: "겁 없는 닥스훈트",
      type: "ENTJ",
      resultItems: [
        "무슨 일이든 쉽게 겁먹는 편이 아니에요.",
        "업무에 있어 추진력이 좋아요.",
        "뚝심이 있고 말도 잘해서 논쟁에서 이길 자가 없어요.",
        "자존감이 굉장히 높은 편이에요.",
        "이겨야 직성이 풀리는 성격이에요.",
        "도전하는 것을 즐겨요.",
        "지적인 호기심을 자극하는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "전략 기획자",
          link: "https://www.wanted.co.kr/wdlist/507/563?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "비즈니스 매니저",
          link: "https://www.wanted.co.kr/wdlist/507?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "프로덕트 매니저",
          link: "https://www.wanted.co.kr/wdlist/518/876?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ESFJ,
      title: "완벽한 웰시코기",
      type: "ESFJ",
      resultItems: [
        "업무에 있어 적극적이고 호기심이 많아요. 업무가 주어지면 누구보다 완벽히 해내요.",
        "애사심이 강해요.",
        "가끔은 생각이 너무 많아요.",
        "똑똑한데다 성격까지 좋아서 인기가 식지 않아요.",
        "기억력이 좋아요. 다른 사람의 사소한 특징도 모두 기억해요.",
        "옳고 그름을 구분 잘 해요. 정직한 타입이에요.",
        "스스로 결정할 수 있는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "HR 담당자",
          link: "https://www.wanted.co.kr/wdlist/517?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "오피스 매니저",
          link: "https://www.wanted.co.kr/wdlist/507/557?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "임원 비서",
          link: "https://www.wanted.co.kr/wdlist/507/550?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ENTP,
      title: "낙천적인 비글",
      type: "ENTP",
      resultItems: [
        "뚝심이 있어요. 자신의 주장을 잘 굽히지 않는 편이에요.",
        "먹는 것에 진심이이에요. 점심시간이 가장 좋아요.",
        "멀티태스킹을 잘해요. 동시에 여러가지 일을 할 수 있어요.",
        "문제를 객관적으로 바라보고 이해해요.",
        "머릿속이 다양한 아이디어로 가득 차 있어요. 가끔은 혼잣말도 해요.",
        "말을 잘 하는 편이에요. 사람들과 토론하는 것을 즐겨요.",
        "창조적이고 혁신적인 일을 만들어 내는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "PD",
          link: "https://www.wanted.co.kr/wdlist/524/727?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "마케팅 관리자",
          link: "https://www.wanted.co.kr/wdlist/523?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "스카우터",
          link: "https://www.wanted.co.kr/wdlist/517/1041?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ESFP,
      title: "명랑한 비숑프리제",
      type: "ESFP",
      resultItems: [
        "팀에서 분위기메이커를 담당하고 있어요.",
        "기본적으로 말이 많아요.",
        "거의 매일 사람들과 약속이 있어요. 나를 찾는 사람들이 많아요.",
        "자유로운 영혼이에요.",
        "갈등을 싫어하고 친목을 좋아해요.",
        "인생을 즐겁게 살아가려고 해요.",
        "현장에서 고객들을 직접 상대하는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "마케터",
          link: "https://www.wanted.co.kr/wdlist/523/710?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "고객 서비스 직무",
          link: "https://www.wanted.co.kr/wdlist/510?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "패션 디자이너",
          link: "https://www.wanted.co.kr/wdlist/511/953?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ESTJ,
      title: "똑똑한 보더콜리",
      type: "ESTJ",
      resultItems: [
        "팀에서 브레인을 담당하고 있어요.",
        "학습 능력이 뛰어나 어떤 새로운 기술도 잘 다뤄요.",
        "눈치가 빠르고 민첩한 면이 있어요.",
        "본투비 리더에요. 사람들을 잘 이끌고 지도해요.",
        "변명과 허튼수작을 싫어해요.",
        "감정보다는 책임감이 앞서는 타입이에요.",
        "결정권이 있으며 권한과 책임이 많고 자신의 견해와 경험이 중요하게 생각 되는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "CEO",
          link: "https://www.wanted.co.kr/wdlist/507/791?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "마케팅 전문가",
          link: "https://www.wanted.co.kr/wdlist/523?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "재무 담당자",
          link: "https://www.wanted.co.kr/wdlist/508/1048?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ESTP,
      title: "예민한 포메라니안",
      type: "ESTP",
      resultItems: [
        "업무를 할 때 상당히 예민하고 날카로워요.",
        "솔직하고 강단있는 내 모습을 좋아해주는 사람들이 많아요.",
        "어디서든 잘먹고 잘사는 사람이에요.",
        "아이디어가 많고 다재다능해요.",
        "목표 달성을 위해 노력해요. 그 길에서는 상당히 경쟁적이에요.",
        "자존심이 강해요. 지는 것을 참을 수 없어요.",
        "실질적이고 논리적인 일에 강해요.",
      ],
      linkList: [
        {
          content: "건축 엔지니어",
          link: "https://www.wanted.co.kr/wdlist/509?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "보안전문가",
          link: "https://www.wanted.co.kr/wdlist/518/671?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "경영 컨설턴트",
          link: "https://www.wanted.co.kr/wdlist/507?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: INFJ,
      title: "나긋한 사모예드",
      type: "INFJ",
      resultItems: [
        "상사와 부하 가릴 것 없이 모두와 잘 지내요.",
        "누군가를 가르치는 일을 잘 해요.",
        "평소 당황하는 일이 잘 없어요.",
        "멀티태스킹이 잘 안돼요. 한 번에 하나의 일에만 집중할 수 있어요.",
        "신중하고 생각이 많아요. 가끔은 너무 조심스러워요.",
        "친근하고 긴장감이 없는 환경이 좋아요.",
        "자신을 표현할 수 있고 나타낼 수 있는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "카피라이터",
          link: "https://www.wanted.co.kr/wdlist/523/708?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "콘텐츠 에디터 ",
          link: "https://www.wanted.co.kr/wdlist/524/725?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "교사",
          link: "https://www.wanted.co.kr/wdlist/10101/10108?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: INFP,
      title: "나른한 그레이하운드",
      type: "INFP",
      resultItems: [
        "업무가 생기면 귀찮지만 누구보다 빠르게 끝마치려고 해요.",
        "스스로를 아싸라고 생각해요.",
        "주변 사람들에게 관심이 많은 것 같지만, 실제로는 큰 관심을 갖고 있진 않아요.",
        "임기응변에 능한 편이에요.",
        "혼자 일하는 환경이 좋아요.",
        "공감 능력이 아주 뛰어난 편이에요.",
        "상상 속 세계를 넓혀가며 탐험하는 것에 재미를 느껴요.",
        "일에 있어 직접 결정권을 가질 수 있는 환경이 좋아요.",
      ],
      linkList: [
        {
          content: "영상 편집자",
          link: "https://www.wanted.co.kr/wdlist/524/723?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "패션 디자이너",
          link: "https://www.wanted.co.kr/wdlist/511/953?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "포토그래퍼",
          link: "https://www.wanted.co.kr/wdlist/524/729?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: INTJ,
      title: "논리적인 시베리안 허스키",
      type: "INTJ",
      resultItems: [
        "다른 사람에게 폐 끼치는 것을 극도로 싫어해요. 꼰대 상사를 싫어해요.",
        "영리하고 호기심이 강해요. 궁금한게 생기면 잠도 안자요.",
        "나무보다 숲을 보는 성격이에요. 시야가 넓어요.",
        "모든 것을 이해하려는 경향이 있어요.",
        "자존감이 지붕을 뚫어요.",
        "친구가 많지 않은 편이에요.",
        "세세하고 반복적인 일은 딱 질색이에요.",
      ],
      linkList: [
        {
          content: "시스템 관리자",
          link: "https://www.wanted.co.kr/wdlist/518/665?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "소프트웨어 개발자",
          link: "https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "머신러닝 엔지니어",
          link: "https://www.wanted.co.kr/wdlist/518/1634?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: INTP,
      title: "섬세한 도베르만",
      type: "INTP",
      resultItems: [
        "학습 능력이 굉장히 높은 편이에요.",
        "겉으로는 강해보이지만 섬세한 면이 있어요.",
        "맡은 업무가 없으면 무기력해져요.",
        "모든 것을 알고 싶어 하는 성격이에요.",
        "모든 일에는 나만의 규칙이 있어요.",
        "복잡한 문제를 다룰 수 있는 일에 강해요.",
        "지나친 규칙과 회의가 없는 환경을 선호해요.",
      ],
      linkList: [
        {
          content: "소프트웨어 개발자",
          link: "https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "시스템 관리자",
          link: "https://www.wanted.co.kr/wdlist/518/665?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "게임 디자이너",
          link: "https://www.wanted.co.kr/wdlist/959/881?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ISFJ,
      title: "대담한 차우차우",
      type: "ISFJ",
      resultItems: [
        "속은 아주 예민하고 날카롭지만 겉으로 티내지 않아요.",
        "새로운 팀원이 오면 처음은 경계하는 스타일이에요.",
        "대담한 면이 있어 무엇이든 혼자서도 잘해요.",
        "기억력이 좋아요. 세심한 면이 있어요.",
        "가정적이에요. 우리 가족이 최고에요.",
        "사적인 공간에서 주변의 방해를 받지 않고 일하는 것을 좋아해요.",
        "다른 사람을 실질적으로 도울 수 있는 일을 하고 싶어해요.",
      ],
      linkList: [
        {
          content: "경영 지원",
          link: "https://www.wanted.co.kr/wdlist/507/552?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "개인 비서",
          link: "https://www.wanted.co.kr/wdlist/507/550?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "회계 경리",
          link: "https://www.wanted.co.kr/wdlist/507/1034?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ISFP,
      title: "자존심이 강한 시츄",
      type: "ISFP",
      resultItems: [
        "힘든 일이 있어도 주변 사람에게 잘 터놓지 않아요.",
        "까칠해보이지만 속은 여려요.",
        "현재를 즐기는 사람이에요. 선택을 흐름에 맡기는 편이에요.",
        "프라이버시를 존중받기 원해요.",
        "체계적이고 결단력있게 살고 싶어해요.",
        "인싸들과 함께 있으면 힘들어요. 혼자 일하는 것에 익숙해요.",
        "세심하고 주의력이 필요한 일이 좋아요.",
      ],
      linkList: [
        {
          content: "웹 디자이너",
          link: "https://www.wanted.co.kr/wdlist/511/594?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "음향 디자이너",
          link: "https://www.wanted.co.kr/wdlist/524/957?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "수의사",
          link: "https://www.wanted.co.kr/wdlist/515/634?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ISTJ,
      title: "독립적인 시바견",
      type: "ISTJ",
      resultItems: [
        "굉장히 프로페셔널한 사람이에요.",
        "프리랜서 기질이 다분해요. 혼자 일하는 것이 편해요.",
        "회사 사람들과 사적인 만남은 지양하는 편이에요.",
        "디테일을 중요시해요. 꼼꼼한 타입이에요.",
        "업무를 할 때 강박증이 조금 있어요.",
        "걸어다니는 알쓸신잡. 쓸모없는 지식을 많이 알고 있어요.",
        "결과가 눈에 보이고 측정, 예측이 가능한 일이 좋아요.",
      ],
      linkList: [
        {
          content: "데이터 사이언티스트",
          link: "https://www.wanted.co.kr/wdlist/518/1024?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "애널리스트",
          link: "https://www.wanted.co.kr/wdlist/508/882?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "네트워크 관리자",
          link: "https://www.wanted.co.kr/wdlist/518/665?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
    {
      image: ISTP,
      title: "불같은 치와와",
      type: "ISTP",
      resultItems: [
        "하나에 몰두하면 끝을 보는 성격이에요.",
        "새로운 일에 대한 겁이 없어요. 용감하고 저돌적이에요.",
        "나보다 잘하는 사람에 대해 라이벌 의식을 가지고 열심히 해요.",
        "과묵한 편이에요. 혼자 일하는 것이 편해요.",
        "일할 때는 완벽주의자에요.",
        "쓸데 없는 것에 에너지를 쏟는 것을 싫어해요.",
        "자신의 기술을 활용할 수 있는 일이 좋아요.",
      ],
      linkList: [
        {
          content: "소프트웨어 개발자",
          link: "https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "데이터 엔지니어",
          link: "https://www.wanted.co.kr/wdlist/518/655?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
        {
          content: "비디오 게임 디자이너",
          link: "https://www.wanted.co.kr/wdlist/959/880?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
        },
      ],
    },
  ],
};

export const matchMBTIResult = {
  ENFJ: "gr",
  ENFP: "pd",
  ENTJ: "ds",
  ENTP: "bg",
  ESTP: "pr",
  ESTJ: "bc",
  ESFP: "bf",
  ESFJ: "wc",
  ISTJ: "si",
  ISTP: "ch",
  ISFP: "st",
  ISFJ: "cc",
  INFJ: "sy",
  INFP: "gh",
  INTJ: "sh",
  INTP: "db",
};
