# -*- coding: utf-8 -*-

import os
import sys

LINUX_WORK_CWD = '/home/ym/Documents/githubproject/leetcode-practice/'
WIN_WORKS_CWD = '/mywork/hubproject/leetcode-practice/'
current_cwd = ''
# 语言名称（用来命名文件夹）
lang_name = {
    'js': 'javascript',
    'javascript': 'javascript',
    'py': 'python',
    'python': 'python',
    'ts': 'typescript',
    'typescript': 'typescript'
}
# 语言类型（对应编程语言文件类型后缀）
lang_type = {
    'js': 'js',
    'javascript': 'js',
    'py': 'py',
    'python': 'py',
    'ts': 'ts',
    'typescript': 'ts'
}


def check_env():
    """判断当前运行环境，选择合适的路径"""
    print('env: %s; path: %s', os.name, os.getcwd())
    # heck env
    global current_cwd
    if os.name == 'nt':
        current_cwd = WIN_WORKS_CWD[:]
    else:
        current_cwd = LINUX_WORK_CWD[:]

    # check path
    if os.getcwd() != current_cwd:
        os.chdir(current_cwd)


def check_type():
    """处理命令行参数"""
    print(sys.argv)
    if len(sys.argv) < 2:
        raise IOError("缺少参数。使用 python xx.py -h/--help 来获取帮助。")
    elif sys.argv[1] == '-h' or sys.argv[1] == '--help':
        text = '''
        python xx.py type
        type 取于 js/javascript/py/python/ts/typescript
        
        '''
        print(text)
    elif not sys.argv[1] in lang_name:
        raise IOError("参数有误，仅限于 js/javascript/py/python/ts/typescript")
    else:
        return True


def generate_menu():
    """根据 problems 文件夹获取 leetcode 问题目录"""

    problems_types = os.listdir(os.path.abspath('./problems/'))
    problems_path = os.path.join(current_cwd, 'problems')
    problems_dict = {}

    # 获取问题分类
    for item in problems_types:
        if os.path.isdir(os.path.join(problems_path, item)):
            item_lists = []
            item_path = os.path.join(problems_path, item)
            problems_dict.setdefault(item, item_lists)

            # 获取分类下的具体问题列表
            file_lists = os.listdir(item_path)
            for file in file_lists:
                file_path = os.path.join(item_path, file)
                if os.path.isfile(file_path):
                    item_lists.append(file[0:-3])
            problems_dict.setdefault(item, item_lists)

    print(problems_dict)
    return problems_dict


def create_menu(menus):
    """生成指定语言类型文件目录"""
    print("--- creating problems files ---")
    lang_path = os.path.join(current_cwd, lang_name[sys.argv[1]])
    if not os.path.exists(lang_path):
        os.mkdir(lang_name[sys.argv[1]])

    # TODO: javascript
    os.chdir(lang_path)

    # 类型处理
    menu_types = menus.items()
    for item in menu_types:
        # print(item)
        menu_type, file_lists = item
        type_path = os.path.join(lang_path, menu_type)
        # print(menu_type, file_lists)
        if not os.path.exists(type_path):
            os.mkdir(menu_type)

        # 类型下-具体问题处理
        if len(file_lists) != 0:
            # print('gg', current_cwd)
            # TODO: String
            os.chdir(type_path)

            for file in file_lists:
                file_path = os.path.join(type_path, file)
                if not os.path.exists(file_path):
                    os.mkdir(file)
                # TODO: 003-xxx
                os.chdir(file_path)
                code_file = os.path.join(file_path, '01.' + lang_type[sys.argv[1]])
                test_file = os.path.join(file_path, 'test.' + lang_type[sys.argv[1]])
                print('---')
                # print(code_file)
                # print(test_file)
                if not os.path.exists(code_file):
                    f_code = open(code_file, 'w')
                    text = '''
                    const testFn = require("./test");

                    /**
                    解法 1
                    
                    思路

                    小结

                    */

                    var fn = function () {
                    };

                    testFn(fn,"解法 1");

                    '''
                    f_code.write(text)
                    f_code.close()
                if not os.path.exists(test_file):
                    f_test = open(test_file, 'w')
                    text = '''
                    /***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn,msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn("abcabcbb"), 3);
  assert.deepStrictEqual(fn("bbbb"), 1);
  assert.deepStrictEqual(fn("pwwkew"), 3);
  assert.deepStrictEqual(fn(""), 0);
  assert.deepStrictEqual(fn(" "), 1);
  assert.deepStrictEqual(fn(" $%"), 3);
  assert.deepStrictEqual(fn(" $% "), 3);
  assert.deepStrictEqual(fn(" $% *&^%"), 6);
  assert.deepStrictEqual(fn("abcabcd"), 4);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;

                    '''
                    f_test.write(text)
                    f_test.close()
                # 切回分类
                os.chdir(type_path)

            # 每次完成类型即其下文件创建，切换回当前语言目录
            os.chdir(lang_path)

    # 切回项目根目录
    os.chdir(current_cwd)


if __name__ == '__main__':
    if check_type():
        check_env()
        problems = generate_menu()
        create_menu(problems)
