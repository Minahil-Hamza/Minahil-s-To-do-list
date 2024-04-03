#! /usr/bin/env node

import inqurier from "inquirer";

let todos = [];
let condition = true;

while(condition)
{

let addTask = await inqurier.prompt(
    [{
        name:'todos',
        type: 'input',
        message: "what do you want to add in yout todos?"
    },
{
    name: 'addMore',
    type: 'confirm',
    message: "do you want to add more?",
    default: "false"
}
]
);

todos.push(addTask.todo);
condition = addTask.addMore
console.log(addTask.todos)
};

