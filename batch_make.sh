#!/bin/bash

for file in downloads/*
do
	if [[ $file == *.html ]]; then
		python make_webpage.py "$file" | sed 's/ /\\ /g'
	fi
done
