Ninja RAM Monitor
=================
Author: Brian Call
Version: 0.0.5
Status: Stable
License: MIT

### Installation
#### Step 1 - Fetch the driver
```
cd PATH_TO_NINJA_CLIENT/drivers
git clone https://github.com/bacall213/ninja-mem.git
cd ninja-mem
npm install
```

#### Step 2 - Restart the Ninja Block process
```
sudo service ninjablock restart
```

#### Step 3 (optional) - Stylize your Ninjablocks dashboard\*
1) Create a new widget
2) Assign this driver from your list to the widget
3) Import the GIST at: https://gist.github.com/bacall213/6341813

\* As of 9/10/13, the BETA dashboard is required if you want to use the above pre-configured widget.



### Notes
- Data parsed from the output of the `free` command
- Formula: (Used / Total) * 100
- Output is limited by printf to a whole number up to three digits
- No "max value" checking is performed
- With the inclusion of the nodejs module 'os', os.freemem() and os.totalmem() could be used to replace the use of `free`



### Change History
##### 0.0.5
- Added change history to readme
- Changed device type from 2000 (sandbox device) to 521 (ninjablock RAM)
- Cleaned up the code a bit
- Added require('os') to device.js
- Using os.hostname() to generate a more descriptive default title, "RAM@<hostname> (% use)." The new title should make it "play nice" with other RAM monitors without needing to update the titles to keep them uniquely idenfiable.
- Changed the styles in the readme so the headings wouldn't be quite so gigantic.



### License
Copyright (c) 2013 Brian Call

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
