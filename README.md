Ninja RAM Monitor
=================
Author: Brian Call
Version: 0.0.3
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
- Data parsed from the output of the `free` command
- Formula: (Used / Total) * 100
- Output is limited by printf to a whole number up to three digits
- No "max value" checking is performed
