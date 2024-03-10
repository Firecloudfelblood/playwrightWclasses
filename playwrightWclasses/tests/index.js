const TestScript = require("./Actions/TestScript");

(async ()=>{
    const testscript = new TestScript();
    await testscript.run();
})();