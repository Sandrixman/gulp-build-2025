import fonter from "gulp-fonter-fix"
import ttf2woff2 from "gulp-ttf2woff2"
import merge from "merge-stream"

export const otfToTtf = () => {
    return app.gulp
        .src(`${app.path.srcFolder}/fonts/*.otf`, { allowEmpty: true })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "FONTS OTF→TTF",
                    message: "<%= error.message %>",
                })
            )
        )
        .pipe(fonter({ formats: ["ttf"] }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    const toWoff = app.gulp
        .src(`${app.path.srcFolder}/fonts/*.ttf`, { allowEmpty: true })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "FONTS TTF→WOFF",
                    message: "<%= error.message %>",
                })
            )
        )
        .pipe(fonter({ formats: ["woff"] }))
        .pipe(app.gulp.dest(app.path.build.fonts))

    const toWoff2 = app.gulp
        .src(`${app.path.srcFolder}/fonts/*.ttf`, { allowEmpty: true })
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts))

    const copyWoff = app.gulp
        .src([`${app.path.srcFolder}/fonts/*.woff`, `${app.path.srcFolder}/fonts/*.woff2`], {
            allowEmpty: true,
        })
        .pipe(app.gulp.dest(app.path.build.fonts))

    return merge(toWoff, toWoff2, copyWoff)
}
