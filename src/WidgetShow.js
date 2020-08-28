import React from 'react';

const WidgetShow = (props) => {
  console.log(props);
  return(
    <div>
      {/* .match, go inside props, grab the match, get params from url */}
      <h1>You entered this URL parameter: {props.match.params.id}</h1>
      {/* procedures is an array */}
      <h2>One procedure we do is {props.procedures[props.match.params.id]} </h2>
    </div>
  );
}

export default WidgetShow;