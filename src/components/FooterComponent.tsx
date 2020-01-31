import React from 'react';
import SectionComponent from "./SectionComponent";
import RowComponent from "./RowComponent";
import ColumnComponent from "./ColumnComponent";
import OverlayComponent from "./OverlayComponent";
import SweetDomainsLogo from '../assets/img/sweetdomains-logo-white-001.svg';

const FooterComponent = (props: any) => {
    return (
        <OverlayComponent style={{background: '#3f3c56'}}>
            <SectionComponent fluid style={{height: 300}}>
                <RowComponent className={'p-5'}>
                    <ColumnComponent md={4}>
                        <img src={SweetDomainsLogo} height={100} alt={'SweetDomains.io Logo'}/>
                    </ColumnComponent>
                    <ColumnComponent md={4}>
                        <p className={'text-white pt-2'}><strong>Domains</strong></p>
                    </ColumnComponent>
                    <ColumnComponent md={4}>
                        <p className={'text-white pt-2'}><strong>Contact</strong></p>
                    </ColumnComponent>
                </RowComponent>
            </SectionComponent>
        </OverlayComponent>
    )
};

export default FooterComponent;