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
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ENFP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ENTJ,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ESFJ,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ENTP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ESFP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ESTJ,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ESTP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: INFJ,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: INFP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: INTJ,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: INTP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ISFJ,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ISFP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ISTJ,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
    {
      image: ISTP,
      title: "",
      type: "",
      resultItems: [],
      linkList: [{ content: "", link: "" }],
    },
  ],
};
