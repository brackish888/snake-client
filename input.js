let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = stdinInput => {
  if (stdinInput === '\u0003') {
    console.log("Exit Game");
    process.exit();
  }
  // https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
  // https://www.w3schools.com/js/js_switch.asp
 
  if (stdinInput === 'w') {
    console.log("Moved up!");

    setTimeout(() => {
      connection.write('Move: up');
    }, 300);
  }

  if (stdinInput === 'a') {
    console.log("Moved left!");

    setTimeout(() => {
      connection.write('Move: left');
    }, 300);
  }

  if (stdinInput === 's') {
    console.log("Moved down!");

    setTimeout(() => {
      connection.write('Move: down');
    }, 300);
  }

  if (stdinInput === 'd') {
    console.log("Moved right!");

    setTimeout(() => {
      connection.write('Move: right');
    }, 300);
  }

  if (stdinInput === 'q') {
    console.log("Say something!");
    setTimeout(() => {
      connection.write('You sssssssssuck');
    }, 300);
  }
};






module.exports = setupInput;