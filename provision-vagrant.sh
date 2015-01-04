  #!/usr/bin/env bash

  cd /home/vagrant

  # Installing nvm
  wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh

  # This enables NVM without a logout/login
  export NVM_DIR="/home/vagrant/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

  # Install a node and alias
  nvm install 0.10.33
  nvm alias default 0.10.33

  # You can also install other stuff here
  #npm install -g bower ember-cli
