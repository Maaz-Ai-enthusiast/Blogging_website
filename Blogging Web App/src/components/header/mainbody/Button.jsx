import React from 'react';

const Button = ({btntext}) => {
  return (

    <button class="bg-gray-50 rounded-sm px-5 py-3 border border-transparent shadow-none transition duration-300 ease-in-out hover:border-gray-300 hover:shadow">
{btntext}
</button>
   
  );
};

export default Button;