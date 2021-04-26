import styled from 'styled-components';

export const Container = styled.nav`
  width:100%;
  background-color:#383a59;
  display:flex;
  justify-content:center; 
  z-index:1000;   
  height:100px;

  @media screen and (max-width:768px){
    height:160px;
  }

  .header-logo{
    max-width:150px;  
    @media screen and (max-width:768px){
    margin-top:5px;
  } 
  }
 
.header-content{
    height:100px;    
    width:100%;
    max-width:1140px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media screen and (max-width:768px){
    flex-direction:column;
  }
   

  img{
    width:95px;
  }    
    div{
      display:flex;
      align-items:center;      
      color:#bcc2cd;      
    }      
  }
  .header-aside{
    position:relative;
    width:100%;
    max-width:990px;    
    display:flex;
    justify-content:space-around;
  }
  .header-favorite-area{
    display:flex;
    justify-content:center;
    max-width: 120px;      
    width:100%;

    @media screen and (max-width:768px){
      flex-direction:column-reverse;
    position:absolute;
    top:-50px;
    right:0px;

    
  }
  }
`;
