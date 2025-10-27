import browsersync from "browser-sync"
import newer from "gulp-newer"
import ifPlugin from "gulp-if"
import plumber from "gulp-plumber"
import notify from "gulp-notify"

export const plugins = {
    browsersync,
    newer,
    ifPlugin,
    plumber,
    notify,
}
