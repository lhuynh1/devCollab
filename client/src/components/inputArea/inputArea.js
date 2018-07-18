import React from "react";

const inputArea = (props) => (
    <div className>
        <textarea
            className="form-input"
            style={props.resize ? null : {resize: "none"}}
            name={props.name}
            rows={props.rows}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder} />
    </div>
);

/* inputArea.propTypes = {
    title: React.PropTypes.string.isRequired,
    rows: Race.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    resize: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    controlFunc: React.PropTypes.func.isRequired
}; */

export default inputArea;