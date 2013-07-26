Ninja RAM Monitor
=================
Author: Brian Call
Version: 0.0.2
Status: Stable
License: BSD


## Installation
### Step 1 - Fetch the driver
```
cd PATH_TO_NINJA_CLIENT/drivers
git clone https://github.com/bacall213/ninja-mem.git
cd ninja-mem
npm install
```


### Step 2 - Restart the Ninja Block process
```
sudo service ninjablock restart
```


## Notes
- Install instructions have not been checked
- Free memory grabbed from /proc/meminfo and divided by 1000 to get MB
