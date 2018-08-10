#! /usr/bin/env python

import os
import re

try:
	os.rename('NICHOLAS S SELBY - Home_files', 'resources')
except:
	pass

try:
	os.remove('resources/footer-toast-published-image.jpg')
except:
	pass

with open('NICHOLAS S SELBY - Home.html') as index:
	content = index.read()

# Add newline before header
content = content[:content.index('<head>')] + '\n' + content[content.index('<head>'):]

# Remove first scripts
content = content[:content.index('<head>')+6] + content[content.index('<title>'):]

# Add newline before title
content = content[:content.index('<title>')] + '\n' + content[content.index('<title>'):]

# Retitle
content = content.replace('NICHOLAS S SELBY - Home','Nicholas S Selby', 1)

# Remove metas from header
content = content[:content.index('<meta')] + content[content.index('<meta http-equiv'):]

# Add newline before meta
content = content[:content.index('<meta')] + '\n' + content[content.index('<meta'):]

# Rename resource folder
content = content.replace('NICHOLAS%20S%20SELBY%20-%20Home_files','resources')

# Rename url
content = content.replace('https://nicholassselby.weebly.com','http://www.mit.edu/~nselby')
content = content.replace('nicholassselby.weebly.com','www.mit.edu/~nselby')

# Remove footer
content = content[:content.index('<div class="footer-wrap"')] + '\n</div>\n' + content[content.index('<div class="nav mobile-nav"'):]

# Remove plugins
line = '<script type="text/javascript" src="resources/plugins.js"></script>'
content = content[:content.index(line)] + content[content.index(line)+len(line):]

# Remove customer accounts
content = content[:content.index('<div id="customer-accounts-app"')] + content[content.index('<script type="text/javascript" async="1">'):]

# Remove signup
content = content[:content.index('<div id="wsite-menus"')] + content[content.index('</body>'):]

with open('index.html','w') as index:
	index.write(content)
