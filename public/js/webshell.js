async function main() {
    await readline(`WS  ${localStorage.cd==undefined?"":localStorage.cd}>`)
    if (localStorage.fd==undefined) {
        localStorage.fd=await openFile()
        localStorage.cd=fd.name
    }
    console.log();

    await main()
}
main()