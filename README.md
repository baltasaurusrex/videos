# videos
issue when uploading to Vercel

17:27:17.609  	Retrieving list of deployment files...
17:27:19.078  	Downloading 18 deployment files...
17:27:19.359  	Analyzing source code...
17:27:19.909  	Installing build runtime...
17:27:22.867  	Build runtime installed: 2958.161ms
17:27:25.310  	Looking up build cache...
17:27:25.644  	Build cache not found
17:27:26.565  	Detected package.json
17:27:26.565  	Installing dependencies...
17:27:27.316  	npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!
17:28:02.677  	> core-js@2.6.12 postinstall /vercel/workpath0/node_modules/babel-runtime/node_modules/core-js
17:28:02.677  	> node -e "try{require('./postinstall')}catch(e){}"
17:28:02.827  	> core-js@3.9.0 postinstall /vercel/workpath0/node_modules/core-js
17:28:02.827  	> node -e "try{require('./postinstall')}catch(e){}"
17:28:02.942  	> core-js-pure@3.9.0 postinstall /vercel/workpath0/node_modules/core-js-pure
17:28:02.942  	> node -e "try{require('./postinstall')}catch(e){}"
17:28:03.094  	> ejs@2.7.4 postinstall /vercel/workpath0/node_modules/ejs
17:28:03.094  	> node ./postinstall.js
17:28:05.736  	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/webpack-dev-server/node_modules/fsevents):
17:28:05.736  	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
17:28:05.745  	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/watchpack-chokidar2/node_modules/fsevents):
17:28:05.745  	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
17:28:05.758  	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
17:28:05.759  	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
17:28:05.766  	added 1966 packages from 759 contributors in 38.55s
17:28:07.093  	125 packages are looking for funding
17:28:07.093  	  run `npm fund` for details
17:28:07.431  	Running "npm run build"
17:28:07.707  	> videos@0.1.0 build /vercel/workpath0
17:28:07.707  	> react-scripts build
17:28:09.664  	Creating an optimized production build...
17:28:20.999  	Treating warnings as errors because process.env.CI = true.
17:28:20.999  	Most CI servers set it automatically.
17:28:21.000  	Failed to compile.
17:28:21.000  	src/components/App.js
17:28:21.000  	  Line 3:8:  'youtube' is defined but never used  no-unused-vars
17:28:21.095  	npm ERR! code ELIFECYCLE
17:28:21.095  	npm ERR! errno 1
17:28:21.099  	npm ERR! videos@0.1.0 build: `react-scripts build`
17:28:21.099  	npm ERR! Exit status 1
17:28:21.100  	npm ERR! 
17:28:21.100  	npm ERR! Failed at the videos@0.1.0 build script.
17:28:21.100  	npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
17:28:21.114  	npm ERR! A complete log of this run can be found in:
17:28:21.114  	npm ERR!     /vercel/.npm/_logs/2021-02-27T09_28_21_100Z-debug.log
17:28:21.124  	Error: Command "npm run build" exited with 1
17:28:25.534  	Done with "package.json"
