import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  background-color:#a7aace;
  display:flex;
  justify-content:center; 
  flex-direction:row;
  z-index:1000;

  .subheader-content{
    max-width:1140px;   
    justify-content:space-around;
    display:flex;

    .subheader-history{
      max-width:1000px;
    }
  }
  .subheader-categories{
    display:flex;
    align-items:center;
    justify-content: space-around;
    width: 100%;
    min-width: 280px;

    p{
      font-weight:500;
      display:flex;
      align-items:center;
      color:#383A59;

      img{
        width:30px;
      }
    }

    p + p{
      margin-left:10px;
    }

   
  }
`;
