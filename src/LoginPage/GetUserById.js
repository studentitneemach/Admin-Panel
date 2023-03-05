import React from "react";
import { useGetUserDataByIdQuery } from "../Store/ReduxData/apiSlice";
import '@coreui/coreui/dist/css/coreui.min.css';
import {  CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
const GetUserById = ({ match }) => {

    const { data: UserData, isLoading, isError, isSuccess } = useGetUserDataByIdQuery(match.params.id)
    let Content;

    if (isLoading) Content = <h2>Loading.....................</h2>

    else if (isSuccess) Content = <CTable color="light">
        <CTableHead>
            <CTableRow>
                <CTableHeaderCell scope="col">Heading 1</CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 2 </CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 3 </CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 1</CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 2 </CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 3 </CTableHeaderCell>
                <CTableHeaderCell scope="col">Heading 1</CTableHeaderCell>
            </CTableRow>
        </CTableHead>
        <CTableBody>
            <CTableRow >
                <CTableHeaderCell scope="row">{UserData.hading_1}</CTableHeaderCell>
                <CTableDataCell>{UserData.hading_2}</CTableDataCell>
                <CTableDataCell >{UserData.hading_3}</CTableDataCell>
                <CTableDataCell>{UserData.hading_2}</CTableDataCell>
                <CTableDataCell >{UserData.hading_3}</CTableDataCell>
                <CTableDataCell>{UserData.hading_2}</CTableDataCell>
                <CTableDataCell >{UserData.hading_3}</CTableDataCell>
            </CTableRow>
          
        </CTableBody>
    </CTable>

    else if (isError) {
        console.log(isError)
        Content = <p>Error</p>
    }

    return Content;
}

export default GetUserById