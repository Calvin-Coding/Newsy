const readline = require("readline");
const colors = require("colors");
const q = "? ".green;
const name = "";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(q + "Enter Name: ".yellow, name => {
    names = name;
    console.log( `Welcome Reporter ${name} to Newsy.`.cyan);
    console.log("Choose level:\n1. Ports\n2. Import/Export\n3.Sleepless in Seattle".red);
    rl.question(q +"Choose Level: ".yellow, level => {
        if (level === "1") {
            console.log("Starting Level 1...".red);
            console.log(`Dear ${name},\n\tI'm afraid things are getting out of hand down by the ports. 
            I can no longer feel safe in my very own home when people are dissipering down by the ports. We need help. 
            The only lead I have is the man Luke Walker. The one person that was found said his name before he died. We
            need help soon.\n Your Friend,\nGrant Bennet`.brightYellow);
            console.log(`It is up to you, ${name} to solve this mystery. Or all will be lost...\nYou need to look up Luke Walker in the database.`.cyan);
            console.log('Open NEWS Database....'.green);
            newsDatabase();
        } else if (level === "2") {
            console.log("Starting Level 2...");
        } else if (level === "3") {
            console.log("Starting Level 3...");
        } else {
            console.log("Wrong Level...\nStopping Newsy...\nSee you next time!");
            process.exit(0);
        }
    });
});

function newsDatabase() {
    console.log(`Welcome ${name} to NEWS Database:\nEnter help If you need it`.green);
    rl.question(`${q} }- `, cmp => {
        if(cmp === "search") {
            rl.question(`${q} Enter Name}- `, cmpname => {
                if(cmpname == `Luke Walker`) {
                    console.log(`Luke Walker\nTime: 0:0:2\nDatabases Searched: 12\nResults: 3\n1. Law Dept.\n2. Medical\n3. GitHub`.brightGreen);
                    rl.question(`${q} Choose File}- `, cmpfile => {
                        if(cmpfile === "1") {
                            console.log(`Name: Luken \'Sky\' Walker\nTimes arrested: 12\nStatus: RED \nInfo: He is a danger to socity. A Mad Scientist. Out on Parol\nDriver Licence Number: 10659708634981608`.magenta);
                            newsDatabase();
                        }
                    });
                }
            });
        }
    });
}