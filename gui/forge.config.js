const fs = require("fs/promises");
const path = require("path")
const { serialHooks } = require('electron-packager/src/hooks')

module.exports = {
  packagerConfig: {
    icon: "./assets/app",
    afterCopy: [
      serialHooks([
        (buildPath) => {

          if (process.platform === "darwin") {
            return fs.copyFile("../beat-marker.py", path.resolve(buildPath, "../", "../", "../", "../", "beat-marker.py"))
          }
          else if (process.platform === "win32") {
            return fs.copyFile("../beat-marker.py", path.resolve(buildPath, "../", "../", "beat-marker.py"))
          }

          return Promise.resolve()
        }
      ])
    ],
    
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
