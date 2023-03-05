import React from 'react';
import { useHistory} from 'react-router-dom'
import '@coreui/coreui/dist/css/coreui.min.css';
import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { useGetUserDataQuery } from '../Store/ReduxData/apiSlice';


const AdminTable = () => {
    const { data: userData, isLoading, isError, isSuccess } = useGetUserDataQuery()
  
    const history = useHistory();

    let Content;
    
    if (isLoading) Content = <h2>Loading.....................</h2>
        
    else if (isSuccess) Content = <CTable>
        <CTableHead>
            <CTableRow>
                <CTableHeaderCell scope="col">Heading 1</CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 2 </CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 3 </CTableHeaderCell>
                <CTableHeaderCell scope="col">Button</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            {userData.map((data, index) => <CTableRow key={index} >
                <CTableDataCell scope="row">{data.hading_1}</CTableDataCell>
                <CTableDataCell>{data.hading_2}</CTableDataCell>
                <CTableDataCell >{data.hading_3}</CTableDataCell>
                        <CTableDataCell >
                        <CButton color="warning" variant="ghost" onClick={() => history.push(`/updatedata/${data.id}`)}>Edit</CButton>
                    <CButton color="warning" variant="ghost" onClick={() => history.push(`/getuserdata/${data.id}`)}>More Info</CButton>
                </CTableDataCell>
            </CTableRow>
            )}
        </CTableBody>
    </CTable>
    
    else if (isError) {
        console.log(isError)
        Content = <p>Error</p>
    }

  
    return Content;
   
}

export default AdminTable;


// /////////////////////https://coreui.io/demos/react/4.5/default/#/login
// ///https://coreui.io/react/docs/components/smart-table/