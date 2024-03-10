const TestScript = require("./TestScript");

(async ()=>{
    const testscript = new TestScript();
    await testscript.run();
})();