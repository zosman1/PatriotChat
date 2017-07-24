# PatriotChat

## Setup
Node is required for the following: [install instructions](https://nodejs.org/en/download/)

### Installing Yarn
Install yarn [here](https://yarnpkg.com/lang/en/docs/install/)

## Development

### IOS
**Only supported on macOs**

You must have Xcode Installed, this can be found in the mac app store

#### `yarn run ios`
This command starts the local ios simulator and starts the react packager

#### Developing on your iPhone
* run `yarn start` to start the packager
* Open `/ios/PatriotChat.xcodeproj` in Xcode
* Connect your IOS device
* Select your device from the list of target devices in the top bar
* Press the run button
* Wait for the simulator to start up
* You are ready to develop!

### Android
**Requires further setup**

Install the android SDK [here](http://www.androidauthority.com/how-to-install-android-sdk-software-development-kit-21137/)

#### Developing on your Android

You must have usb debugging enabled, [here is how](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm)

running `adb devices` will show all connected android devices and will show if your device is showing up on your computer

#### `yarn run android`
This command will push the app to any connected android device and will start the react packager

