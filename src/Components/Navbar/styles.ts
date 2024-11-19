import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.nav`
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    cursor: pointer;
  }

  .Image {
    width: 100%;
    height: 60px;
    max-width: 60px;
    margin-right: 20%;
  }

  .HomeButton,
  .AboutUsButton,
  .MenuButton,
  .ContactsButton,
  .OrderButton {
    width: 110px;
    color: black;
    font-weight: bold;
  }

  .FacebookIcon,
  .InstagramIcon,
  .ShoppingCartIcon {
    color: black;
    height: 25px;
    width: 25px;
  }

  ${media.lessThan("large")`
    justify-content: space-between;
    padding: 0 20px;

    .Image {
      margin-right: 0;
    }
  `}

  ${media.lessThan("large")`
    .OrderButton {
      margin-left: 0;
      text-align: center;
      width: 100%;
    }
  `}
`;

export const IconContainer = styled.div`
  ${media.lessThan("large")`
    display: none;
  `}

  .OrderButton {
    background-color: orange;

    &:hover {
        background-color: orangered;
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  ${media.lessThan("large")`
    display: flex;
    position: absolute;
    right: 20px;
  `}
`;

export const DrawerContent = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .DrawerButton {
    display: block;
    width: 100%;
    padding: 10px 20px;
    text-align: left;
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
  }

  .OrderButton {
    width: 100%;
    background-color: #f9a75b;
    color: #ffffff;
    font-weight: bold;
    padding: 10px 20px;
    text-align: center;
    margin-top: 20px;
  }

  ${media.lessThan("large")`
    align-items: center;

    .DrawerButton, .OrderButton {
      text-align: center;
    }
  `}
`;
