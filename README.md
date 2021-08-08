# Using TSCC with Closure (Soy) Templates.

(This branch fixes the problem defined on the `master` branch of this repo.)

(Before you begin: you will need [Bazel](https://bazel.build/) to build the Closure Template Compiler. The instructions below were tested with version `bazel 4.1.0-homebrew`).

Initialize the submodules:

```bash
$ git submodule update --init --recursive --progress
```

Build the Closure Template Compiler:

```bash
$ (cd third_party/closure-templates \
    && bazel build java/src/com/google/template/soy:SoyToJsSrcCompiler_deploy.jar)
```

Generate the Closure Javascript from the Soy source (tested with OpenJDK 13):
```bash
$ java -jar third_party/closure-templates/bazel-bin/java/src/com/google/template/soy/SoyToJsSrccompiler_deploy.jar \
    --outputPathFormat dist/com/foo/bonjour.soy.js \
    --srcs com/foo/bonjour.soy
```

Build with TSCC and start a simple HTTP server to view the result:
```bash
$ npm i && npm run build && python -m SimpleHTTPServer 8000
```

Navigate to http://localhost:8000/page.html. You should see that the Closure Template has dynamically added "Bonjour, le Monde!" to the document.

