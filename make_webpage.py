#! /usr/bin/env python

import argparse, os, sys, re

parser = argparse.ArgumentParser(description='Reformat weebly page into personal page')
parser.add_argument('filename',metavar='fn',type=str,help='the html file containing the website to convert')
args = parser.parse_args()

p_title = re.compile(r'(<title>.*)NICHOLAS S SELBY(.*</title>)',re.DOTALL)
p_footer = re.compile(r'<div class="footer-wrap".+</div><!-- end footer-wrap -->',re.DOTALL)
p_footCont = re.compile(r'<div id="wsite-menus">.*</div>(</body></html>)',re.DOTALL)
p_uploads = re.compile(r'uploads/[\d/]*(?:published/|editor/|background-images/)?',re.DOTALL)
p_youtube = re.compile(r'<div class="wsite-youtube".*?<iframe src="resources/([\w\-]+)\.html".*?</div>.*?</div>.*?</div>',re.DOTALL)
p_selectedWork = re.compile(r'(<div class="wsite-image[^"]*)(".*?alt="Picture")(.*?</a>)(.*?</div>.*?</div>.*?</div>)',re.DOTALL)
p_publication = re.compile(r'<div class="wsite-spacer".+?(<div class="paragraph)',re.DOTALL)

fn = args.filename
fn = fn[fn.index('/')+1:]

with open(args.filename) as fh:
	content = fh.read()

# Retitle
content = re.sub(p_title,r'\1Nicholas S Selby\2',content)
content = content.replace('content="NICHOLAS S SELBY"', 'content="Nicholas S Selby"')

# Adjust Font Size of Title
content = re.sub(r'(<span id="wsite-title")[^>]*>',r'\1>',content)

# Rename URL
content = content.replace('https://nicholassselby.weebly.com','http://www.mit.edu/~nselby')
content = content.replace('nicholassselby.weebly.com','www.mit.edu/~nselby')

# Remove Footer
content = re.sub(p_footer,'',content)
content = re.sub(p_footCont,r'\1',content)

# Rename Resources
oldResources = fn.replace(' ','%20').replace('.html','') + '_files'
content = content.replace(oldResources,'resources')
content = re.sub(p_uploads,'resources/',content)
content = re.sub(r'"url":"[\d/\\]+(/[^/]+\.[^"]+)',r'"url":"~nselby/resources\1',content)
content = content.replace(r'style="background-image: url(&quot;/resources/',r'style="background-image: url(&quot;/~nselby/resources/')

# YouTube
yt_replace = r'''<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/\1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>'''
content = re.sub(p_youtube, yt_replace, content)

# Add Custom CSS
content = content.replace('</head>','\n<link href="resources/rupumped.css" rel="stylesheet" type="text/css">\n</head>')

if 'Home' in fn:
	# Link RFly
	content = content.replace('rfly.txt','drone_relays_for_battery-free_networks.pdf')
	# Vertically center publications
	indexOfPublications = content.index('Publications')
	contentPostPubs = content[indexOfPublications:]
	contentPostPubs = re.sub(p_publication, r'\1 home-publication', contentPostPubs)
	content = content[:indexOfPublications] + contentPostPubs
if 'Selected' in fn:
	# Add Overlays
	content = re.sub(p_selectedWork, r'\1 selected-work-container \2  class="selected-work-image" \3 <div class="selected-work-overlay">RUPUMPED</div> \4', content)
	content = content.replace('</head>','\n<link href="resources/rupumped.css" rel="stylesheet" type="text/css">\n</head>')
	content = content.replace('RUPUMPED','#robotics #advanced-manufacturing #education', 1)
	content = content.replace('RUPUMPED','#acoustics #signal-processing #structures', 1)
	content = content.replace('RUPUMPED','#distributed-systems #networking', 1)
	content = content.replace('RUPUMPED','#rfid #networking #artificial-intelligence', 1)
	content = content.replace('RUPUMPED','#quantum #design', 1)
	content = content.replace('RUPUMPED','#solar #racecar #leadership', 1)
	content = content.replace('RUPUMPED','#rfid #drones #networking', 1)
	content = content.replace('RUPUMPED','#drones #artificial-intelligence #global-health', 1)
	content = content.replace('RUPUMPED','#global-health #humanitarian', 1)
if 'About' in fn:
	content = content.replace('alt','title')
	emDash = u'\u2014'.encode('utf-8')
	content = content.replace('better--',"better{0}".format(emDash))

fn = fn.replace(' - NICHOLAS S SELBY','').replace(' ','-').lower()
if fn.endswith('home.html'):
	fn = 'index.html'
with open(fn,'w') as fh:
	fh.write(content)