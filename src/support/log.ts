import * as Config from "../config/config";
import { LogLevel } from "./log.levels";

export class Log {
  public get level(): number { return Memory.log.level; }
  public set level(value: number) { Memory.log.level = value; }

  constructor() {
      this.level = Config.LOG_LEVEL;
  }

  private log(level: LogLevel, ...args: any[]): Log {
    if(this.level >= level) {
      console.log.apply(this, args);
    }
    return this;
  }

  public trace(...args: any[]) {
    this.log(LogLevel.Trace, args);
  }

  public debug(...args: any[]) {
    this.log(LogLevel.Debug, args);
  }

  public info(...args: any[]) {
    this.log(LogLevel.Info, args);
  }
  
  public warn(...args: any[]) {
    this.log(LogLevel.Warn, args);
  }
  
  public error(...args: any[]) {
    this.log(LogLevel.Error, args);
  }
}

export var log = new Log();

global.log = log;
