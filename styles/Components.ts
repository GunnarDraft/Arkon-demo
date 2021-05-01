import styled from 'styled-components'

export const TextFlex = styled.div`
  display: flex;
  flex: 1;
  /* color:#f1f1f1; */
  
`;

export const Base = styled.div`
  display: flex;
  flex: 1;
  flex-flow:column;
  justify-content:flex-start;
  align-items:stretch;
  /* background-color:#111; */
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
  align-items:flex-start;
  flex-flow:column;
  background-color:#eee; 
  padding:8px;
  margin:8px;
  z-index:2;
  box-sizing:border-box;
  border-radius:12px;
  border:1px solid #222;
`;



