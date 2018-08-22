#! /usr/bin/env python

import os, pexpect
from os import listdir

htmls = os.listdir('.')
for fn in htmls:
	if fn.endswith('.html'):
		child = pexpect.spawn('cp ' + fn + ' ../www/' + fn)
		child.expect(pexpect.EOF)