import React from 'react';

function IconLife({colorstyle="#67fe67", flipX = false}) {
    const styleclor = {

        color: colorstyle,
        transform: flipX ? 'scaleX(-1)' : 'scaleX(1)'
      };
  return (

<svg className={`icon-life health-bar-segment `} style={styleclor} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="m18.496 10.709l-8.636 8.88c-.24.246-.638-.039-.482-.345l3.074-6.066a.3.3 0 0 0-.268-.436H5.718a.3.3 0 0 1-.214-.51l8.01-8.115c.232-.235.618.023.489.328L11.706 9.86a.3.3 0 0 0 .28.417l6.291-.078a.3.3 0 0 1 .22.509"/>
</svg>
  );
}

export default IconLife;
