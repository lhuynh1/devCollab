import React from 'react';
import "./Checkbox.css";

const Checkbox = (props) => (
    <div>
        <label className="form-label">{props.title}</label>
        <div className="checkbox-group">
            {props.options.map(option => {
                return (
                    <label key={option} className="form-label capitalize lang">
                        <input
                            className="form=checkbox"
                            name={props.setName}
                            onChange={props.controlFunc}
                            value={option}
                            checked={props.selectedOptions.indexOf(option) > -1}
                            type={props.type}/> {option}
                    </label>
                );
            })}
        </div>
    </div>
);

export default Checkbox;