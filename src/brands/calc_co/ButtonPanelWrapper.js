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
                { name: "÷", primary: true},
                { name: "x", primary: true},
                { name: "-", primary: true},
                { name: "+", primary: true}
            ],
            [
                { name: "7" },
                { name: "8" },
                { name: "9", wide: true },
                
            ],
            [
                { name: "4", wide: true },
                { name: "5" },
                { name: "6" },
               
            ],
            [
                { name: "1" },
                { name: "2", wide: true },
                { name: "3" },
                
            ],
            [
                { name: "0", wide: true },
                { name: ".", wide: true }
            ],
            [
                { name: "AC", primary: true },
                { name: "+/-", primary: true },
                { name: "%", primary: true },
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