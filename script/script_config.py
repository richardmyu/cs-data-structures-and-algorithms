# -*- coding: utf-8 -*-

# 定义语言包
lang_config = {
    'js': {'name': 'javascript', 'code': 'js', 'case_tem': 'js-01.txt', 'test_tem': 'js-test.txt'},
    'py': {'name': 'python', 'code': 'py', 'case_tem': 'py-01.txt', 'test_tem': 'py-test.txt'},
    'ts': {'name': 'typescript', 'code': 'ts', 'case_tem': 'ts-01.txt', 'test_tem': 'test.txt'}
}

# 将 javascript 指向 js，避免过多定义和修改
lang_config['javascript'] = lang_config['js']
lang_config['python'] = lang_config['py']
lang_config['typescript'] = lang_config['ts']

# linux 和 windows 下不同的文件路径，若项目路径变动，此处也需修改
LINUX_WORK_CWD = '/home/ym/Documents/githubproject/leetcode-practice/'
WIN_WORKS_CWD = '/mywork/hubproject/leetcode-practice/'
