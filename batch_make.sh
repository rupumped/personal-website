#!/bin/bash

for file in download/*
do
	if [[ $file == *.html ]]; then
		python make_webpage.py "$file" | sed 's/ /\\ /g'
	fi
done