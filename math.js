const bCalculate = (method, c, d) => {
  switch (method.toLowerCase()) {
    case 'add':
      return { operation: '+', result: c + d };
    case 'subtract':
      return { operation: '-', result: c - d };
    case 'multiply':
      return { operation: 'x', result: c * d };
    case 'divide':
      return { operation: '/', result: c / d };
    default:
      return 'The option is not valid.';
  }
};

const values = ['add', 'subtract', 'multiply', 'divide'];

const bCalculatorRoute = (request, response) => {
  request.query.c = parseInt(request.query.c); // Parse string value of c into an integer
  request.query.d = parseInt(request.query.d); // Parse string value of d into an integer

  const { method, x, y } = request.query; // Destructure out method, c, d from request.query

  // if d and c is Not a Number - tell them it has to be a number
  if (isNaN(d) || isNaN(c)) {
    return response.send('Both C and D must be a number');
  }

  // If method is not in our valid options - tell them it has to be and display them
  if (!validOptions.includes(method.toLowerCase())) {
    return response.send(
      `Method must include one of the following: ${validOptions.join(', ')}`
    );
  }

  // Get Operation and Result from simple calculate function
  const { operation, result } = bCalculate(method, c, d);

  response.send(`${c} ${operation} ${d} = ${result}`); // Print out value of calculation
};

module.exports = bCalculatorRoute; // Export out function
