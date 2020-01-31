import React from 'react';
import {Col} from "reactstrap";

interface IColumnComponent {
    children?: any,
    xs?: string | number,
    sm?: string | number,
    md?: string | number,
    lg?: string | number,
    xl?: string | number,
    height?: string | number,
    className?: string
}

const ColumnComponent = (props: IColumnComponent) => {
    return (
        <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl} className={props.className} height={props.height}>{props.children}</Col>
    );
};

export default ColumnComponent;