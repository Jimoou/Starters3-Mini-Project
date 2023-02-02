export const CaseColor = (props: any) => {
    switch (props) {
      case "수료":
        return <span style={{ color: "blue" }}>수료</span>;
      case "인턴예정":
        return <span style={{ color: "orange" }}>인턴예정</span>;
      case "교육중":
        return <span style={{ color: "green" }}>교육중</span>;
      case "미수료":
        return <span style={{ color: "gray" }}>미수료</span>;
      case "퇴소":
        return <span style={{ color: "red" }}>퇴소</span>;
      default:
        return <span>{props}</span>;
    }
  };