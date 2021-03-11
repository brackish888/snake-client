const handleUserInput = key => {
  if (key === '\u0003') {
    console.log("Exit Game");
    process.exit();
  }
  // https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
};
const setupInput = function(conn) {
  connection = conn; 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = setupInput;