let cd="",fd,bcd,input,commandList=[]
class command{
    constructor(callback=(argumentList,optionList)=>{log("argument:"+argumentList);log("option:"+optionList)}) {
        this.callback=callback
    }
}
function createCommand(commandClass=new command()) {
    commandList[commandList.length]=commandClass
}
createCommand()
async function main() {
    input=await readline(`WS  ${cd}>`)
    if(fd==undefined){
        fd=await openFile()
        bcd=fd.name
        cd=bcd
    }
    let al=[],ol=[],all=[];
    for (let index = 0; index < input.length; index++) {
        const element = input.substring(index,1)
        
    }
    for (let index = 0; index < commandList.length; index++) {
        let element=commandList[index]
        element.callback()
    }
    main()
}
main()