import styled from 'styled-components'

export const TextFlex = styled.div`
  display: flex;
  flex: 1; 
`;
export const Base = styled.div`
  display: flex;
  flex: 1;
  flex-flow:row;
  justify-content:space-evenly;
  align-items:stretch;
  border:1px solid red;
  background-color:#e3e3e3;
  height:100vh;
`;
export const BoxFlex = styled.div`
  display: flex;
  flex: 1;   
  background-color:#eee; 
  padding:8px;
  margin:8px;
  z-index:2;
  box-sizing:border-box;
  border-radius:12px;
`;
export const TaskerContent = styled.div`
  display: flex;  
  flex-flow:row wrap;
  justify-content:stretch;
  background-color:#eee; 
  align-items:flex-start;
  align-self:flex-start;
  padding:8px;
  margin:8px;
  z-index:2;
  flex:1;
  min-width:300px;
  max-width:600px;
  max-height:max-content;
  min-height:min-content;
  box-sizing:border-box;
  border-radius:12px;
  border:1px solid #443;
  max-width:600px;
  box-sizing:border-box;
`;
export const FlexLi = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:stretch;
  `
export const FlexUl = styled.div`
  display:flex;
  box-sizing:border-box;
  flex-flow:column;
  flex:1;
  min-width:300px;
  max-width:600px;
  align-items:flex-start;
  border:1px solid #2f2f2f;
  padding:8px;
  margin:8px;
  border-radius:12px;

`


