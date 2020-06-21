import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  height: 213px;
  width: 100%;
  background: var(--primary);
  @media (min-width: 300px) {
    display: flex;
    height: 386px;
  }
  @media (min-width: 400px) {
    display: flex;
    height: 386px;
  }
  @media (min-width: 800px) {
    display: flex;
    height: 213px;
  }
  @media (min-width: 1200px) {
    display: flex;
    height: 213px;
  }
`;

export const AreaFooter = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  max-width: 1050px;

  padding: 0 0 0 25px;
  width: 100%;
  height: 100%;
  @media (min-width: 300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
  }
  @media (min-width: 400px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

export const AreaLocatition = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;

  width: 100%;

  height: 100%;
`;

export const Title = styled.div`
  width: 107px;
  height: 28px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;

  color: var(--secondary);
`;

export const DividerTitle = styled.div`
  width: 44px;
  height: 0px;
  left: 380px;
  bottom: 158px;

  margin-top: 10px;

  border: 5px solid #ffffff;
  border-radius: 5px;
  background: var(--secondary);
`;

export const Locatiton = styled.div`
  width: 216px;
  height: 110px;

  margin-top: 20px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;

  color: #ffffff;
`;
export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  padding: 40px;
`;

export const AreaLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Brand = styled.img``;

export const Affiliated = styled.img``;

export const AreaBrand = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-left: 15px;
  }
`;

export const TextBrand = styled.div`
  height: 12.21px;
  left: 72.6%;
  right: 24.03%;
  bottom: 120.79px;

  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 10.6017px;
  line-height: 14px;

  color: #ffffff;
  opacity: 0.8;

  margin-bottom: 5px;
`;
