import React from "react";
import PropTypes from "prop-types";
import ButtonPanel from "../../component/ButtonPanel";

export default class ButtonPanelWrapper extends React.Component {

    static propTypes = {
        clickHandler: PropTypes.func
    };

    render() {
        let buttonsMatrix = [
            [
                { name: "AC" },
                { name: "+/-" },
                { name: "%" },
                { name: "÷", primary: true}
            ],
            [
                { name: "7" },
                { name: "8" },
                { name: "9" },
                { name: "x", primary: true}
            ],
            [
                { name: "4" },
                { name: "5" },
                { name: "6" },
                { name: "-", primary: true}
            ],
            [
                { name: "1" },
                { name: "2" },
                { name: "3" },
                { name: "+", primary: true}
            ],
            [
                { name: "0", wide: true },
                { name: "." },
                { name: "=", primary: true}
            ]
        ];

        return (
            <ButtonPanel 
                clickHandler={this.props.clickHandler} 
                buttonsMatrix={buttonsMatrix}
            />
        );
    }
}