import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput,  CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useGetUserDataQuery, useUpdateUserDataMutation } from "../Store/ReduxData/apiSlice";
export const UpdateUser = ({ match }) => {
    const [updateData, setUpdateData] = useState([])
    const [updatApi, { isLoading }] = useUpdateUserDataMutation();
    const history = useHistory()

    const { data } = useGetUserDataQuery(undefined, {
        selectFromResult: ({ data }) => {
            return ({
                data: data?.find((el) => el.id === Number(match.params.id))
            })
        }
    })

   
    useEffect(() => {
        if (isLoading) {
            alert('Page is Loading')
        }
    }, [isLoading]);
    useEffect(() => {
        if (data) {
            setUpdateData(data)
        }
    }, [data])
    
    const UpdateHandler = (e) => {
    
        const names = e.target.name;
        const values = e.target.value;
        setUpdateData(data => ({
            ...data,[names]: values,
        }))
    }

    const UpdateSubmit = async(e) => {
        e.preventDefault();
       
        try {
            await updatApi(updateData)
            history.push('/')
        } catch (error) {
            console.log( 'Error' , error)
        }
    }

    return (<CContainer style={{ marginTop:"150px"}}>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm className="row g-3" onSubmit={UpdateSubmit}>
                                    <h2>Edit Your Profile</h2>
                                <CCol md="auto" >
                                        <CFormInput type="text" name="hading_1" value={updateData.hading_1 || ""} onChange={UpdateHandler} placeholder="hading_1" />
                                </CCol>
                                <CCol md="auto" >
                                        <CFormInput type="text" name="hading_2" value={updateData.hading_2 || ""} onChange={UpdateHandler} placeholder="hading_2" />
                                </CCol>
                                <CCol md="auto" >
                                        <CFormInput type="text" name="hading_3" value={updateData.hading_3 || ""} onChange={UpdateHandler} placeholder="hading_3" />
                                </CCol>
                                <CCol md="auto" >
                                        <CFormInput type="" placeholder="" />
                                </CCol>
                                <CCol md="auto" >
                                    <CFormInput type="" placeholder="" />
                                </CCol>
                                <CCol md="auto" >
                                    <CFormInput type="" placeholder="" />
                                </CCol>
                                <CCol md="auto"  >
                                        <CButton type="submit" className="d-grid" color="warning" variant="ghost">
                                        Confirm Edit
                                    </CButton>
                                </CCol>
                            </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
           
    )
}