import webp from "gulp-webp"
import imagemin from "gulp-imagemin"

export const images = () => {
    return (
        app.gulp
            // 1) webp only from jpg/png/gif (only for build)
            .src(
                [
                    `${app.path.srcFolder}/img/**/*.{jpg,jpeg,png,gif}`,
                    `!${app.path.srcFolder}/img/**/*.webp`,
                ],
                { allowEmpty: true }
            )
            .pipe(app.plugins.newer(app.path.build.images))
            .pipe(app.plugins.ifPlugin(app.isBuild, webp()))
            .pipe(app.plugins.ifPlugin(app.isBuild, app.gulp.dest(app.path.build.images)))

            // 2) optimization all images
            .pipe(app.gulp.src(`${app.path.srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,ico,webp}`))
            .pipe(app.plugins.newer(app.path.build.images))
            .pipe(
                app.plugins.ifPlugin(
                    app.isBuild,
                    imagemin({
                        progressive: true,
                        svgoPlugins: [{ removeViewBox: false }],
                        interlaced: true,
                        optimizationLevel: 3,
                    })
                )
            )
            .pipe(app.gulp.dest(app.path.build.images))

            .pipe(app.gulp.src(app.path.src.svg))
            .pipe(app.gulp.dest(app.path.build.images))
            .pipe(app.plugins.browsersync.stream())
    )
}
