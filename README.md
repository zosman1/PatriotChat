# PatriotChat

## Setup


</details>

<details>
<summary>Installing NodeJs (skip this step if you already have it)</summary> 

### macOs
* First setup Homebrew by visiting [here](https://brew.sh)
* Then run ```brew install node```

### Windows
#### First Option
* Download the installer from [here](http://nodejs.org/#download)
* You'll want to get v8.5.0 by clicking on other downloads under the 8.6.0 Current download button.

#### Second Option
* Use Chocolatey and do ```cinst nodejs.install```

#### Third Option
* Use scoop and do ```scoop install nodejs```

### Installing Node.js on Linux
#### Installing on Ubuntu or Debian based systems
* Do ```curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -```
* Then ```sudo apt-get install -y nodejs```
* Lastly do ```sudo apt-get install -y build-essential``` if you need build tools.

#### For installing on other linux distributions please go [here](https://nodejs.org/en/download/package-manager/)

</details>


<details>
<summary>Installing Yarn (skip if you already have it)</summary>

### Installing Yarn on macOS
* First setup Homebrew by visiting [here](https://brew.sh)
* Run ```brew install yarn```
* If you already have nvm/node.js then do ```brew install yarn --without-node```


### Installing Yarn on Windows
You have 3 options for this:
#### First Option
* Download the installer
* You will need to install node.js first for this.
* Download the installer from [here](https://yarnpkg.com/latest.msi) and run it.

#### Second Option
* If you use chocolatey then do ```choco install yarn```
Third Option
* If you use scoop then do ```scoop install yarn```

### Installing Yarn on Linux
#### For Debian or Ubuntu you can install via Debian package repository.
* First do: ```curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list```
* Then do ```sudo apt-get update && sudo apt-get install yarn```
* NOTE: If you get errors from `cmdtest` being installed then run `sudo apt remove cmdtest`

#### For CentOS, Fedora, and RHEL, you can use the RPM package repo.
* First do ```sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo```
* Then you can do ```sudo yum install yarn``` or ```sudo dnf install yarn```

#### For other distributions please see the yarn installation instructions [here](https://yarnpkg.com/lang/en/docs/install/#linux-tab)
</details>


## Development
>Run `yarn install` to install dependancies required for the following

### Server
1. Make sure your dependencies are installed
2. `yarn run server`
3. the server should now be up and running
### Mobile

#### iOS
**Only supported on macOs**

You must have Xcode Installed, this can be found in the mac app store

##### `yarn run ios`
This command starts the local ios simulator and starts the react packager

##### Developing on your iPhone
* run `yarn start` to start the packager
* Open `/ios/PatriotChat.xcodeproj` in Xcode
* Connect your IOS device
* Select your device from the list of target devices in the top bar
* Press the run button
* Wait for the app to build and install onto your iPhone
* You are ready to develop!

#### Android
**Requires further setup**

Install the android SDK [here](http://www.androidauthority.com/how-to-install-android-sdk-software-development-kit-21137/)

##### Developing on your Android

You must have usb debugging enabled, [here is how](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm)

running `adb devices` will show all connected android devices and will show if your device is showing up on your computer

##### `yarn run android`
This command will push the app to any connected android device and will start the react packager

