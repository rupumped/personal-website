#! /usr/bin/env python

import os, pexpect
from os import listdir
'''
child = pexpect.spawn('rm -rf ../www/resources')
child.expect(pexpect.EOF)
child = pexpect.spawn('cp -r resources ../www/resources')
child.expect(pexpect.EOF)
'''
htmls = os.listdir('.')
for fn in htmls:
	if fn.endswith('.html'):
		child = pexpect.spawn('cp ' + fn + ' ../www/' + fn)
		child.expect(pexpect.EOF)
