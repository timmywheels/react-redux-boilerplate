import React, {Component, Fragment} from "react";
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";

class AppLayout extends Component {
    render() {
        return(
            <Fragment>
                <NavComponent/>
                <div className={"container-fluid"}>
                    {this.props.children}
                </div>
                <FooterComponent/>
            </Fragment>
        )
    }
}

export default AppLayout;