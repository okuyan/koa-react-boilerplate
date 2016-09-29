import React, { PropTypes } from 'react';
import config from '../configs/default';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

function Flow(props) {
  
  const stepConfig = config.steps[props.params.step];
  
  const renderFields = () => {
    const fields = stepConfig.fields.map(field => {
      switch (field.component) {
        case 'FormInput':
          return <li key={field.name}><FormInput /></li>;
        case 'FormSelect':
          return <li key={field.name}><FormSelect /></li>;
      }
    });
    return fields;
  };
  
  return (
    <div>
      <div>{props.params.step}</div>
      <ul className="fields">{renderFields()}</ul>
    </div>
  );
}

export default Flow;
