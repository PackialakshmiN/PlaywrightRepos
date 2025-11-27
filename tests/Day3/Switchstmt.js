function launchBrowser() {
if(browserName==="chrome")
{
    console.log("The broswer name is",browserName);

}else if (browserName==="firefox"){
    console.log("The broswer name is",browserName);
}else{
    console.log("The broswer name is",browserName);
}
}
function runTests(testTye){



switch(testTye) {
    case "smoke":
        console.log("The test types is",testTye);
        break;
    case "sanity":
        console.log("The test types is",testTye);
        break;
    case "regression":
        console.log("The test types is",testTye);   
        break;
        default:
            console.log("The testtype is",testTye);
}
}
runTests("sanity");
let browserName="chrome"
launchBrowser();