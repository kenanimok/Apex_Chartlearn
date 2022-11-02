import { Tooltip } from "antd";
import styled from "styled-components";

export const BoxBarTree = styled.div`
  display: ${({ hide }) => (hide ? `grid` : "none")};
  gap: 16px;
  width: 100%;
`;

export const BoxBarTwo = styled.div`
  display: none;
  gap: 16px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  gap: ${({ gap }) => gap || 8}px;

  p {
    width: 30px;
    line-height: 14px;
    font-weight: 400;
    font-size: 12px;
    color: #1d1d42;
  }

  .bar-two {
    width: 40px;
  }

  .total {
    width: max-content;
    font-weight: 500;
    font-size: 24px;
  }
`;

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${(props) => props.percen || 0}%;
  color: white;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize || 10}px;
  line-height: 16px;
  background: ${(props) => props.color || "#ededed"};
`;

export const Total = styled.p`
  width: 85px;
  text-align: end;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #1d1d42;
  margin: 0;
`;

export const Progress = styled.div`
  width: 100%;
  height: ${(props) => props.height || 34}px;
  border-radius: 10px;
  box-shadow: 0 0 3px #b0b0;
  background-color: #ededed;
  margin: ${({ margin }) => margin || 0}px;
  display: flex;
  overflow: hidden;

  .men {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .women {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .men-wo {
    display: flex;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #1d1d42;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomBar = styled.div`
  display: flex;
  gap: 16px;

  .row-dot {
    display: flex;
    align-items: center;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }

    .men {
      background: #4786ff;
    }

    .women {
      background: #ffa336;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: #1d1d42;
      margin-left: 8px;
    }
  }
`;

export const CustomTooltip = styled(Tooltip)``;
