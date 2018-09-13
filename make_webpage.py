#! /usr/bin/env python

import argparse, os, sys, re

parser = argparse.ArgumentParser(description='Reformat weebly page into personal page')
parser.add_argument('filename',metavar='fn',type=str,help='the html file containing the website to convert')
args = parser.parse_args()

p_title = re.compile(r'(<title>.*)NICHOLAS S SELBY(.*</title>)',re.DOTALL)
p_footer = re.compile(r'<div class="footer-wrap".+</div><!-- end footer-wrap -->',re.DOTALL)
p_footCont = re.compile(r'<div id="wsite-menus">.*</div>(</body></html>)',re.DOTALL)
p_uploads = re.compile(r'uploads/[\d/]*(?:published/|editor/|background-images/)?',re.DOTALL)

with open(args.filename) as fh:
	content = fh.read()

# Retitle
content = re.sub(p_title,r'\1Nicholas S Selby\2',content)
content = content.replace('content="NICHOLAS S SELBY"', 'content="Nicholas S Selby"')

# Rename URL
content = content.replace('https://nicholassselby.weebly.com','http://www.mit.edu/~nselby')
content = content.replace('nicholassselby.weebly.com','www.mit.edu/~nselby')

# Remove Footer
content = re.sub(p_footer,'',content)
content = re.sub(p_footCont,r'\1',content)

# Rename Resources
oldResources = args.filename.replace(' ','%20').replace('.html','') + '_files'
content = content.replace(oldResources,'resources')
content = re.sub(p_uploads,'resources/',content)

# Link RFly
if 'Home' in args.filename:
	content = content.replace('rfly.txt','drone_relays_for_battery-free_networks.pdf')

fn = args.filename.replace(' - NICHOLAS S SELBY','').replace(' ','-').lower()
fn = fn[fn.index('/')+1:]
if fn.endswith('home.html'):
	fn = 'index.html'
with open(fn,'w') as fh:
	fh.write(content)