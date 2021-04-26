import styled from 'styled-components';

export const Container = styled.section`

width:100%;
display:flex;
justify-content:center;


div{
  justify-content:space-around;
  flex-wrap: wrap;
  max-width:1200px;
  display:flex;
  padding-top:10px;

  div{
    display:flex;
    justify-content:center;
    max-width:260px;   
    border-radius:5px;   
    margin-bottom:30px;
    padding-bottom:15px;
    @media screen and (max-width:519px){
      
    max-width:200px;
  }
  @media screen and (max-width:402px){
    max-width:160px;
  }
  @media screen and (max-width:338px){
    margin:0 5px;
    max-width:150px;
    margin-bottom:5px;
  }

    img{     
      width:100%;
      max-width:240px;
      border-radius:5px;
      
    }

    li{
      display:flex;
      justify-content:center;
      flex-direction:column;
  
    
    }
    strong{
      margin-top:10px;
      display:flex;
      justify-content:center;
    }   

    button{
      width:40%;
      padding:5px;
      border-radius:50px;
      border:none;
      background: #ce2b9d;
      margin-top:10px;
      color:#fff;
      font-weight:500;  
      
    }

    
  }
}
  
`;
