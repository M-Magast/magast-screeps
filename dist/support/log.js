"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("../config/config");
const log_levels_1 = require("./log.levels");
class Log {
    get level() { return Memory.log.level; }
    set level(value) { Memory.log.level = value; }
    constructor() {
        this.level = Config.LOG_LEVEL;
    }
    log(level, ...args) {
        if (this.level >= level) {
            console.log.apply(this, args);
        }
        return this;
    }
    trace(...args) {
        this.log(log_levels_1.LogLevel.Trace, args);
    }
    debug(...args) {
        this.log(log_levels_1.LogLevel.Debug, args);
    }
    info(...args) {
        this.log(log_levels_1.LogLevel.Info, args);
    }
    warn(...args) {
        this.log(log_levels_1.LogLevel.Warn, args);
    }
    error(...args) {
        this.log(log_levels_1.LogLevel.Error, args);
    }
}
exports.Log = Log;
exports.log = new Log();
global.log = exports.log;
//# sourceMappingURL=log.js.map