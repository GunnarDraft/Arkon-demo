import { Button, TextField } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import styled from 'styled-components'
import { motion } from "framer-motion";

export const TextFlex = styled.div`
  display: flex;
  flex: 1; 
align-items:center;

`;
export const TextTitle = styled.div`
  margin:4px 8px !important;
  display:flex; 
  justify-content:space-between;
  font-size: 2rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400; 
`;
export const TextInput = styled(TextField)` 
margin:4px 8px !important;
`;
export const Form = styled.form`
display:flex;
flex-flow:row nowrap;
flex:1;
`
export const FlexUl = styled(motion.ul)` 
flex:1;
display:flex;
flex-flow:column;
height: calc(100vh - 170px);
box-sizing:border-box;
overflow-x:none;
overflow-y:auto;
margin:0; 
padding:8px;
`
export const FlexLi = styled(motion.li)`  
display:flex;
margin:2px 4px;
box-sizing:border-box;
overflow-x:none;

`
export const FlexDiv = styled(motion.div)` 
flex:1;
display:flex;
height: 100%;
box-sizing:border-box;
overflow-y:auto;
overflow-x:none;

`
export const Base = styled.div`
  display: flex;
  flex: 1;
  flex-flow:row;
  justify-content:space-evenly;
  align-items:stretch; 
  background-color:#e2e2e2;
  height:100vh;
`;
export const BoxFlex = styled.div`
  display: flex;
  flex: 1;   
  background-color:#efefef; 
  padding:8px;
  margin:8px;
  z-index:2;
  box-sizing:border-box;
  align-items:center;
  border-radius:6px;
`;
export const FlexRow = styled.div`
  display: flex;
  flex: 1;    
  flex-flow:row nowrap;
`;

export const TaskerContent = styled.div`
  display: flex;  
  flex-flow:column nowrap;
  justify-content:stretch;
  background-color:#efefef; 
  align-items:stretch; 
  align-self:flex-start;
  padding:8px;
  margin:8px ;
  z-index:2;
  flex:1;
  min-width:min-content; 
  box-sizing:border-box;
  border-radius:12px;
  box-shadow:0 0 2px #333; 
  box-sizing:border-box; 
  height: calc(100vh - 20px);
  overflow-x:none;
`;
export const TaskerItem = styled.div`
  display: flex;  
  flex-flow:row nowrap;
  justify-content:stretch;
  background-color:#efefef; 
  align-items:center; 
  align-self:stretch;
  justify-content:space-between; 
  margin:8px;
  z-index:2;
  flex:1;
  min-width:400px;  
  height: auto;
  box-sizing:border-box;
  border-radius:6px; 
  border:1px solid #ddd;
  box-sizing:border-box; 
  overflow-x:none;

`;


export const GridContent = styled.div`
  display:flex;
  flex:1;
  flex-flow:row nowrap;
  justify-content:flex-start;
  align-self:stretch;
  align-items:center;
  height:100%; 
  box-sizing:border-box; 
  overflow:hidden;  
  border-radius:6px !important; 
`

// export const FlexData = styled(DataGrid)`   
//   box-sizing:border-box; 
//   border-radius:6px !important;
//   & .MuiDataGrid-cell:focus-within {
//     outline: none !important; 
// }
// & .MuiDataGrid-cell:focus {
//     outline: none !important; 
// }
// ` 
export const ButtonPrimary = styled(Button)`  
  white-space: nowrap;
  margin:4px 8px !important;
`

