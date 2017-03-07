"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("./config/config");
const log_1 = require("./support/log");
if (Config.USE_PATHFINDER) {
    PathFinder.use(true);
}
function loop() {
    if (!Memory.uuid || Memory.uuid > 100) {
        Memory.uuid = 0;
    }
    for (let i in Game.rooms) {
        let room = Game.rooms[i];
        for (let name in Memory.creeps) {
            let creep = Memory.creeps[name];
            if (creep.room === room.name) {
                if (!Game.creeps[name]) {
                    log_1.log.info("Deleting creep " + name + " from memory");
                    delete Memory.creeps[name];
                }
            }
        }
    }
}
exports.loop = loop;
//# sourceMappingURL=main.js.map