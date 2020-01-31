import React, {Component, Fragment} from "react";
import RowComponent from "../components/RowComponent";
import OverlayComponent from "../components/OverlayComponent";

class HomeView extends Component {
    render() {
        return (
            <div style={{ marginTop: 400 }} className={'mt-5 h-100'}>
                <RowComponent>
                    <div>row</div>
                </RowComponent>
                <OverlayComponent style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                    <RowComponent>
                        <div>row</div>
                    </RowComponent>
                </OverlayComponent>
                <RowComponent>
                    <div>row</div>
                </RowComponent>
                <OverlayComponent style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right"
                }}>
                    <RowComponent>
                        <div>row</div>
                    </RowComponent>
                </OverlayComponent>
            </div>
        )
    }
}

export default HomeView;