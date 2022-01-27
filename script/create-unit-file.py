# -*- coding: utf-8 -*-
"""根据父级目录，生成脚本及测试文件

用法：
  py create-unit-file.py path -language
    path: 父级文件路径
    language: 文件类型
"""

import os
import sys
import script_config

current_cwd = ''
custome_cwd = ''


def check_env():
    """判断当前运行环境，选择合适的路径"""
    print('env: {}'.format(os.name))
    print('path: {}'.format(os.getcwd()))

    # heck env
    global current_cwd
    if os.name == 'nt':
        current_cwd = script_config.WIN_WORKS_CWD[:]
    else:
        current_cwd = script_config.LINUX_WORK_CWD[:]

    # check path
    if os.getcwd() != current_cwd:
        os.chdir(current_cwd)


def check_type():
    """处理命令行参数"""
    if len(sys.argv) < 3:
        raise IOError("缺少参数。使用 python xx.py -h/--help 来获取帮助。")
    elif len(sys.argv) > 3:
        raise IOError("存在多余参数。使用 python xx.py -h/--help 来获取帮助。")
    elif sys.argv[1] == '-h' or sys.argv[1] == '--help':
        text = '''
        python xx.py type
        type 取于 js/javascript/py/python/ts/typescript
        '''
        print(text)
        return False
    elif not os.path.exists(sys.argv[1]):
        raise IOError("指定路径不存在")
    elif not sys.argv[2][1:] in script_config.lang_config.keys():
        raise IOError("参数有误，仅限于 js/javascript/py/python/ts/typescript")
    else:
        global custome_cwd
        custome_cwd = sys.argv[1]
        return True


def read_template():
    """读取模板内容"""
    print("--- get template ---")
    tem_path = os.path.join(current_cwd, 'template')

    # 编码文件
    with open(os.path.join(tem_path, script_config.lang_config[sys.argv[2][1:]]['case_tem']), 'r') as case_file:
        case_context = case_file.read()

    # 测试文件
    with open(os.path.join(tem_path, script_config.lang_config[sys.argv[2][1:]]['test_tem']), 'r') as test_file:
        test_context = test_file.read()

    return case_context, test_context


def create_file():
    """生成指定语言类型文件
    """
    print("--- creating problems files -- start ---")

    # 获取模板
    case_txt, test_txt = read_template()
    code_file = os.path.join(custome_cwd, 'case01.' + script_config.lang_config[sys.argv[2][1:]]['code'])
    test_file = os.path.join(custome_cwd, 'test.' + script_config.lang_config[sys.argv[2][1:]]['code'])

    if not os.path.exists(code_file):
        f_code = open(code_file, 'w')
        f_code.write(case_txt)
        f_code.close()

    if not os.path.exists(test_file):
        f_test = open(test_file, 'w')
        f_test.write(test_txt)
        f_test.close()


if __name__ == '__main__':
    if check_type():
        check_env()
        create_file()
