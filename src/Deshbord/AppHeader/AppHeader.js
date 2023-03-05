import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,

    CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {  cilMenu } from '@coreui/icons'

import AppHeaderDropdown from './AppHeaderDropdown'

const AppHeader = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)

    return (
        <CHeader position="sticky" className="mb-4" style={{fontSize:"19px"}}>
            <CContainer fluid>
                
                <CHeaderToggler
                    className="ps-1"
                    onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                >
                    
                    <CIcon icon={cilMenu} size="lg" />
                   
                </CHeaderToggler>
             
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                    {/* <CIcon icon={logo} height={50} alt="Logo" /> */}
                    Admin Panle
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        Dashboard {/*    <CNavLink to="/" component={NavLink} >

                        </CNavLink> */}
                    </CNavItem>
                 
                </CHeaderNav>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    Admin Panle
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                    <AppHeaderDropdown />
                </CHeaderNav>
            </CContainer>
            <CHeaderDivider />
            <CContainer fluid>
            </CContainer>
        </CHeader>
    )
}

export default AppHeader
