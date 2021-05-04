import { Button, TextField,Typography  } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import styled from 'styled-components'

export const TextFlex = styled.div`
  display: flex;
  flex: 1; 
`;
export const TextTitle = styled(Typography)`
  
`;
export const TextInput = styled(TextField)`
border:1px dashed green;
margin:4px 8px !important;
`;

export const Base = styled.div`
  display: flex;
  flex: 1;
  flex-flow:row;
  justify-content:space-evenly;
  align-items:stretch; 
  background-color:#dedede;
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
  align-items:center;
  border-radius:12px;
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
  background-color:#eee; 
  align-items:flex-start; 
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
  height: min-content;
`;
export const TaskerItem = styled.div`
  display: flex;  
  flex-flow:row nowrap;
  justify-content:stretch;
  background-color:#eee; 
  align-items:center; 
  align-self:stretch;
  justify-content:space-between;
  padding:8px;
  margin:8px;
  z-index:2;
  flex:1;
  min-width:400px;  
  height: auto;
  box-sizing:border-box;
  border-radius:12px;
  box-shadow:0 0 2px #333; 
  box-sizing:border-box; 
`;
 

export const GridContent = styled.div`
  display:flex;
  flex:1;
  flex-flow:row nowrap;
  justify-content:flex-start;
  align-self:stretch;
  align-items:stretch;
  height:calc(100vh - 256px); 
  box-sizing:border-box;   
  margin:8px; 
  border-radius:12px !important;

`

export const FlexData = styled(DataGrid)`  
   
  box-sizing:border-box; 
  border-radius:12px !important;
  & .MuiDataGrid-cell:focus-within {
    outline: none !important; 
}
& .MuiDataGrid-cell:focus {
    outline: none !important; 
}
`

export const ButtonPrimary = styled(Button)`  
  white-space: nowrap;
  margin:4px 8px !important;
`

