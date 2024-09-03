import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HeaderWrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <HeaderContainer>
        <BurgerKingLogo src="https://www.burgerking.co.kr/dist/favicon_bkr.ico" />
        <Menu>
          <ul className="mainmenu">
            <MenuItem>메뉴소개</MenuItem>
            <MenuItem>매장소개</MenuItem>
            <MenuItem>이벤트</MenuItem>
            <MenuItem>브랜드스토리</MenuItem>
          </ul>
          {isHovering && (
            <SubMenu>
              <li>
                <a href="#">추천메뉴</a>
                <a href="#">오리지널스&맥시멈</a>
                <a href="#">프리미엄</a>
                <a href="#">와퍼&주니어</a>
                <a href="#">치킨&슈프림버거</a>
                <a href="#">올데이킹&킹모닝</a>
                <a href="#">사이드</a>
                <a href="#">음료&디저트</a>
              </li>
              <li>
                <a href="#">매장찾기</a>
              </li>
              <li>
                <a href="#">이벤트</a>
              </li>
              <li>
                <a href="#">BRAND</a>
                <a href="#">WHOPPER</a>
                <a href="#">COMM.</a>
              </li>
            </SubMenu>
          )}
        </Menu>
        <Service>
          <Shop>가맹점 문의</Shop>
          <Order>딜리버리 주문</Order>
        </Service>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const BurgerKingLogo = styled.img`
  height: 90px;
  margin-right: 70px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 140px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #592316;
  margin-top: 23px;

  .mainmenu {
    display: flex;
    gap: 70px;
  }
`;

const MenuItem = styled.li`
  font-family: "SBAggroB", sans-serif; /* 폰트 적용 */
`;

const SubMenu = styled.ul`
  position: absolute;
  top: 140px;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 30px 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;

  li {
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    gap: 15px;
    font-size: 16px;
    font-weight: 500;
  }

  li a {
    text-decoration: none;
    color: #592316;
  }
`;

const Service = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;
  color: white;
  font-family: "SBAggroB", sans-serif; /* 폰트 적용 */
  margin-left: 70px;
  margin-top: 23px;
`;

const Shop = styled.div`
  background-color: #592316;
  border-radius: 30px;
  width: 180px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Order = styled.div`
  background-color: #d91c0b;
  border-radius: 30px;
  width: 180px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
