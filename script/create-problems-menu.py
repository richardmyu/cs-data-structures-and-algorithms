# -*- coding: utf-8 -*-

import os
print("env: %s", os.name)
print("path: %s", os.getcwd())
problems_list = os.listdir(os.path.abspath('../problems/'))

file_lists = []

for directory in problems_list:
    if(os.path.isfile(directory) == False):
        file_lists.append(os.path.basename(directory)[:-3])

print(file_lists)
