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
                { name: "7", displayName: "VII" },
                { name: "8", displayName: "VIII" },
                { name: "9", displayName: "IX" },
                { name: "x", primary: true}
            ],
            [
                { name: "4", displayName: "IV" },
                { name: "5", displayName: "V" },
                { name: "6", displayName: "VI" },
                { name: "-", primary: true}
            ],
            [
                { name: "1", displayName: "I" },
                { name: "2", displayName: "II" },
                { name: "3", displayName: "III" },
                { name: "+", primary: true}
            ],
            [
                { name: "0", displayName: "N", wide: true },
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