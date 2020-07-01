const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const myArray = [];

rl.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  myArray.push(answer);
  
  rl.question('What\'s an activity you like doing?  ', (answer) => {
    myArray.push(answer)
  
    rl.question('What do you listen to while doing that?  ', (answer) => {
      myArray.push(answer)
    
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)  ', (answer) => {
        myArray.push(answer)
      
        rl.question('What\'s your favourite thing to eat for that meal?  ', (answer) => {
          myArray.push(answer)
        
          rl.question('Which sport is your absolute favourite?  ', (answer) => {
            myArray.push(answer)
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (answer) => {
              myArray.push(answer)
            
              console.log(myArray[0], " loves listening to ", myArray[2], " while ", myArray[1], ", devouring ", myArray[4], " for ", myArray[3], ", prefers ", myArray[5], " over any other sport, and is amazing at ", myArray[6], ".");

              rl.close();
            });

          });
          
        });
        
      });
      
    });
    
  });
 
});



