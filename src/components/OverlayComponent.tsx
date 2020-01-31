import React, {CSSProperties} from 'react';
import styled from 'styled-components';


const Overlay = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

interface IOverlayComponent {
    style?: CSSProperties
    children: any
    background?: string
    backgroundRepeat?: string
    backgroundSize?: string
    backgroundPositionY?: string
}

const OverlayComponent = (props: IOverlayComponent) => {
    return (
        <Overlay style={{
            background: props.background,
            backgroundRepeat: props.backgroundRepeat,
            backgroundSize: props.backgroundSize,
            backgroundPositionY: props.backgroundPositionY
        }} {...props}>
            {props.children}
        </Overlay>
    )
};

export default OverlayComponent;