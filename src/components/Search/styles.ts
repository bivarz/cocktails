import styled from 'styled-components';

export const Container = styled.section`
width:100%;

svg{
  color:#ce2b9d;
  z-index:2000;
  margin-left:10px;
}

.search-input-area {
  max-width:860px;  
  height:50px;
  border-radius:30px;
  background:#fff;
  display:flex;
  align-items:center;
  justify-content:left;
  border:2px solid #ce2b9d;

  @media screen and (max-width:1024px){
    margin:0px 15px;
  }

  input{
    width:100%;
    border:none;
    height:30px;
    margin:0px 10px;    
    color:#ce2b9d;
  }
}
  
`;
