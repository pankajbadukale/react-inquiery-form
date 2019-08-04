import React from "react";
import uuid from 'uuid';

export const FormInput = (props) => {
    let labelFor = uuid();
    // props.validationType
    return (
            <div className="form-group">
                <label className="control-label col-sm-10" htmlFor={labelFor}>{props.title}:</label>
                <div className="col-sm-10">
                  <input type="text" validate={props.validationType} value={props.stateValue} onChange={(e) => props.onFieldValueChange(e)} className="form-control" id={labelFor} placeholder={props.placeholder} name={props.name} />
                  <label className="alert alert-danger" role="alert">{props.validationMsg}</label>
                </div>
            </div>
    );
};

export const FormTextarea = (props) => {
    let labelFor = uuid();
    // props.validationType
    return (
            <div className="form-group">
                <label className="control-label col-sm-10" htmlFor={labelFor}>{props.title}:</label>
                <div className="col-sm-10">
                <textarea rows="5" validate={props.validationType} id={labelFor} value={props.stateValue} onChange={(e) => props.onFieldValueChange(e)} className="form-control" name={props.name} placeholder={props.placeholder}></textarea>
                  <label className="alert alert-danger" role="alert">{props.validationMsg}</label>
                </div>
            </div>
    );
};

export const FormSelect = (props) => {
    let labelFor = uuid();
    // props.validationType

    let options = props.options.map((opt, index) => (<option key={index} value={opt}>{opt}</option>))

    return (
            <div className="form-group">
                <label className="control-label col-sm-10" htmlFor={labelFor}>{props.title}:</label>
                <div className="col-sm-10">
                <select name={props.name} onChange={(e) => props.onFieldValueChange(e)} validate={props.validationType}>
                    <option value=""></option>
                    {options}
                </select>
                <label className="alert alert-danger" role="alert">{props.validationMsg}</label>
                </div>
            </div>
    );
};

export const FormRadio = (props) => {
    let radios = props.radios.map((opt, index) => {
        let anotherLabel = uuid();
        return (        
                <div className="col-sm-6" key={index}>
                    <input type="radio" value={opt.value} onChange={(e) => props.onFieldValueChange(e)} id={anotherLabel} name={opt.name} />
                    <label className="control-label" htmlFor={anotherLabel}>{opt.value}:</label>
                  </div>
            )
        });

    return (<div className="form-group">
                <label className="control-label col-sm-10" htmlFor="gender">{props.title} :</label>
                <div className="col-sm-10" name="gender" validate={props.validationType}>
                  {radios}
                </div>
                <label className="alert alert-danger" role="alert">{props.validationMsg}</label>
              </div>);
};

export const FormButton = (props) => {
    if(props.type === 'submit') {
        return (<button type="submit" className="btn btn-default">{props.title}</button>);
    } else {
        return (<button onClick={(e) => props.onClickHandler(e)} type="button" className="btn btn-primary">{props.title}</button>);
    }
};