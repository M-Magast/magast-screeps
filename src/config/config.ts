import { LogLevel } from "../support/log.levels";
/**
 * Enable this if you want a lot of text to be logged to console.
 * @type {boolean}
 */
export const ENABLE_DEBUG_MODE: boolean = true;

export const LOG_LEVEL: LogLevel = LogLevel.Debug;

/**
 * Enable this to use the experimental PathFinder class.
 */
export const USE_PATHFINDER: boolean = true;

/**
 * Minimum number of ticksToLive for a Creep before they go to renew.
 * @type {number}
 */
export const DEFAULT_MIN_LIFE_BEFORE_NEEDS_REFILL: number = 700;

/**
 * Prepend log output with current tick number.
 */
export const LOG_PRINT_TICK: boolean = true;

/**
 * Prepend log output with source line.
 */
export const LOG_PRINT_LINES: boolean = true;

/**
 * Load source maps and resolve source lines back to typeascript.
 */
export const LOG_LOAD_SOURCE_MAP: boolean = true;

/**
 * Maximum padding for source links (for aligning log output).
 */
export const LOG_MAX_PAD: number = 100;

