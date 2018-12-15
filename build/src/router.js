"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("./models/Service");
function getRoutes() {
    return [
        new Service_1.Service("core", "http://206.189.121.190", 3001),
        new Service_1.Service("transfo", "http://206.189.121.190", 5001),
        new Service_1.Service("auth", "http://167.99.202.94", 3001)
    ];
}
exports.getRoutes = getRoutes;
//# sourceMappingURL=router.js.map