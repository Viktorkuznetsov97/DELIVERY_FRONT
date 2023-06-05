// .shopItem {
//     width: 100%;
//     border: 1px solid black;
//     border-radius: 10px;
//     padding: 3px 0;
//   }

import styled from "@emotion/styled";

const ShopItemWrapper = styled.button`
  cursor: pointer;
  width: 100%;
  border: 1px solid black;
  /* text-decoration: none; */
  background: none;
  padding: 10px 4px;
  border-radius: 7px;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &.disabled {
    cursor: default;
  }

  &.disabled:hover {
    background: none;
  }

  &.active {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ShopItem = ({ title, onSelectHandler, disabled, isActive }) => (
  <ShopItemWrapper
    className={`${disabled ? "disabled" : ""} ${isActive ? "active" : ""}`}
    onClick={onSelectHandler}
    disabled={disabled}
  >
    {title}
  </ShopItemWrapper>
);

export default ShopItem;
