let user ={
    userName: "",
    todo : []
};
function getReply(voice) {
command=voice.toLowerCase();
if (command.includes("hello my name is")) {
    let splitedstring=command.split(' ')
   user.userName=splitedstring[splitedstring.length-1];
    return`nice to meet you ${user.userName}`  

}else if ('what is my name' == command) {
    return `Your name is ${user.userName}`
    
}else if(command.startsWith("add") && command.endsWith("to my todo")){
    let todoItem=command.split(' ');
    let sliceElements=todoItem.slice(1,todoItem.length-3).join(' ');
    user.todo.push(sliceElements);
    return `${sliceElements} added to your todo`

}else if(command.startsWith("remove") && command.endsWith("from my todo")){
    let todoItem=command.split(' ');
    let sliceElements=(todoItem.slice(1,todoItem.length-3)).join(' ');
    let index = user.todo.indexOf(sliceElements);
    if(index > -1){
       let itemToDelete = user.todo.splice(index,1);
       return `removed ${itemToDelete} from your todo`       
    }   
}else if ('what is on my todo?'== command) {
    let numberOfItemsOnTodo=user.todo.length;
    return `your to have ${numberOfItemsOnTodo} todos - ${user.todo}`

}else if ('what day is it today?' == command) {
     const dateObj = new Date();
    const month= dateObj.toLocaleDateString('default', { month: 'long' });
    const year = dateObj.getFullYear();
    const date = dateObj.getDate();
    return `${date} ${month} ${year}`
}
else if(command.startsWith("what is ")){
    let regExp=/\d [\+\/\*\-]/g;
    if(regExp.test(command))
    {
        const operation = command.slice(7);
        return eval(operation)  
    }  
}
else if ('set a timer for 4 minutes' == command) {
    const millisecondsFor4Minutes = 1000 * 60 * 4;
    let timer = setTimeout(timerFunction, millisecondsFor4Minutes);
    return `timer set for 4 minutes`;
    function timerFunction() {
    console.log(`timer done`)
    }
}   
}
console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 6 + 5 * 10'));
console.log(getReply('Set a timer for 4 minutes'));


