#/bin/bash

# get the sudo pw
read -s -p "Sudo password: " SUDO_PASSWORD

# build the app
yarn build

# copy build folder onto server
scp -r build jamie@jbwebsites.work:/home/jamie/tmp/typing/build

# ssh into server,
# remove current build folder from web root,
# copy new build folder into web root
# delete new build folder from tmp
ssh jamie@jbwebsites.work "
echo $SUDO_PASSWORD | sudo -S rm -rf /var/www/typing.jbwebsites.work/html/build;
echo $SUDO_PASSWORD | sudo -S cp -r /home/jamie/tmp/typing/build /var/www/typing.jbwebsites.work/html
rm -rf /home/jamie/tmp/typing/build
exit;
"