module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        xsltproc: {
          options: {
            stylesheet: "test/fixtures/template.xsl",
          },
          compile: {
            files: [
              {
                expand: true,
                cwd: "test/fixtures/data",
                src: "*.xml",
                dest: "tmp",
                ext: ".html",
              },
            ],
          },
        },
      });

   grunt.loadNpmTasks("grunt-xsltproc");

   // Default task(s).
   grunt.registerTask('default', ['xsltproc']);
  };