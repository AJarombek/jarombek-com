<#
Commands to setup the application using PowerShell
Author: Andrew Jarombek
Date: 9/22/2019
 #>

# Install Chocolatey package manager
Set-ExecutionPolicy Bypass -Scope Process -Force

# This command needs elevated administrator privileges.
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

choco --version
npm -v
node -v

# Run Chocolatey install commands as admin
choco install -y nvm

# In my case, further manual intervention was needed to get the 'nvm' command to work
# First add the following to the path environment variable:
## C:\ProgramData\nvm
refreshenv

# Second, as an administrator, move the settings.txt file to the root of the C: drive:
cd C:\ProgramData\nvm\
cp settings.txt C:\

# cd C:\path\to\repo - in my desktop's case:
cd C:\Users\Andy\Documents\ComputerScience\GitHub\jarombek-com

# Now, NVM will work
nvm --version

nvm uninstall 8.16.1
nvm install 8.16.1
nvm use 8.16.1

# Install Node.js separately
choco install -y nodejs

# Commands to run the application locally.
npm install yarn -g
npm install webpack -g

$env:NODE_ENV = "local"
yarn

# Build local bundles with webpack and start the server
yarn client:dev
yarn server:dev
yarn server:deploy