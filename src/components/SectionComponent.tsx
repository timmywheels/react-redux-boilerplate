import React, {CSSProperties} from 'react';

interface ISectionComponent {
    children?: any
    fluid?: boolean
    style?: CSSProperties
}
const SectionComponent = (props: ISectionComponent) => {
    return (
        <section className={ props.fluid? 'container-fluid': 'container'}  {...props}>
            {props.children}
        </section>
    )
};

export default SectionComponent;