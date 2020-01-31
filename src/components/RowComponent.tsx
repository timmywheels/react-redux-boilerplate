import React, {CSSProperties, Fragment} from 'react';
import { Row } from 'reactstrap';

interface IRowComponent {
    children?: any
    height?: string | number
    minHeight?: string | number
    borderTop?: string
    borderBottom?: string
    className?: string
    style?: CSSProperties
}

const RowComponent = (props: IRowComponent) => {
    return (
        <Fragment>
            <Row className={props.className} style={{height: props.height, minHeight: props.minHeight, borderTop: props.borderTop, borderBottom: props.borderBottom}}>
                {props.children}
            </Row>
        </Fragment>
    )
};

export default RowComponent;