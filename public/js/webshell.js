let cd="",fd,bcd,input

async function main() {
    input=await readline(`WS  ${cd}>`)
    if(fd==undefined){
        fd=await openFile()
        bcd=fd.name
        cd=bcd
    }
    main()
}
main()