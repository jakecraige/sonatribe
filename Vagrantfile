# -*- mode: ruby -*-
# vi: set ft=ruby :
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.provider "virtualbox" do |vb|
    vb.memory = 4000
    vb.cpus = 1
  end

  config.vm.network :private_network, ip: "192.168.1.103"

  config.vm.synced_folder ".", "/vagrant"
  
  #, :nfs => { :mount_options => ["dmode=777","fmode=777"] }
  ## forward web

  config.vm.network "forwarded_port", guest: 4200, host: 4200

  ## forward API
  config.vm.network "forwarded_port", guest: 1337, host: 1337

  ## forward API
 
  config.vm.network "forwarded_port", guest: 35729, host: 35729


  ## forward API
  #config.vm.network "forwarded_port", guest: 5858, host: 5858

  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", path: "provision-vagrant.sh", privileged: false
  config.vm.provision "shell", path: "provision-root.sh"

end
