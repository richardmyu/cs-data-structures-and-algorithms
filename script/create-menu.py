# -*- coding: utf-8 -*-
"""根据已有的 problems 目录生成指定语言的文件夹

用法
    py create-menu.py language
"""

import os
import sys

# TODO：1.进一步增加和优化-异常处理
# TODO：2.函数注释风格统一化

# linux 和 windows 下不同的文件路径，若项目路径变动，此处也需修改
LINUX_WORK_CWD = '/home/ym/Documents/githubproject/leetcode-practice/'
WIN_WORKS_CWD = '/mywork/hubproject/leetcode-practice/'
current_cwd = ''

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


def check_env():
    """判断当前运行环境，选择合适的路径"""
    print('env: {}; path: {}'.format(os.name, os.getcwd()))
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
    if len(sys.argv) < 2:
        raise IOError("缺少参数。使用 python xx.py -h/--help 来获取帮助。")
    elif sys.argv[1] == '-h' or sys.argv[1] == '--help':
        text = '''
        python xx.py type
        type 取于 js/javascript/py/python/ts/typescript
        '''
        print(text)
        return False
    elif not sys.argv[1] in lang_config.keys():
        raise IOError("参数有误，仅限于 js/javascript/py/python/ts/typescript")
    else:
        return True


def generate_menu():
    """根据 problems 文件夹获取 leetcode 问题目录"""
    print("--- generating menu ---")
    problems_types = os.listdir(os.path.abspath('./problems/'))
    problems_path = os.path.join(current_cwd, 'problems')
    problems_dict = {}

    # 处理“问题”分类
    for item in problems_types:
        if os.path.isdir(os.path.join(problems_path, item)):
            item_lists = []
            item_path = os.path.join(problems_path, item)
            # 下面的 item_lists 不能使用 [] 代替
            problems_dict.setdefault(item, item_lists)

            # 获取分类下的具体问题列表
            file_lists = os.listdir(item_path)
            for file in file_lists:
                file_path = os.path.join(item_path, file)
                if os.path.isfile(file_path):
                    # 根据问题文件类型调整
                    item_lists.append(file[0:-4])
            problems_dict.setdefault(item, item_lists)

    return problems_dict


def read_template():
    """读取模板内容"""
    print("--- get template ---")
    tem_path = os.path.join(current_cwd, 'template')

    # 编码文件
    with open(os.path.join(tem_path, lang_config[sys.argv[1]]['case_tem']), 'r') as case_file:
        case_context = case_file.read()

    # 测试文件
    with open(os.path.join(tem_path, lang_config[sys.argv[1]]['test_tem']), 'r') as test_file:
        test_context = test_file.read()

    return case_context, test_context


def create_menu(menus):
    """生成指定语言类型文件目录

    Args:
        menus(dict): The files list.

    """
    print("--- creating problems files -- start ---")
    lang_path = os.path.join(current_cwd, lang_config[sys.argv[1]]['name'])
    if not os.path.exists(lang_path):
        os.mkdir(lang_config[sys.argv[1]]['name'])

    # 进入语言包一级目录--语言
    os.chdir(lang_path)
    # 获取模板
    case_txt, test_txt = read_template()
    # 类型处理
    menu_types = menus.items()
    for item in menu_types:
        menu_type, file_lists = item
        type_path = os.path.join(lang_path, menu_type)
        if not os.path.exists(type_path):
            os.mkdir(menu_type)

        # 类型下-具体问题处理
        if len(file_lists) != 0:
            # 进入语言包二级目录--分类
            os.chdir(type_path)

            for file in file_lists:
                file_path = os.path.join(type_path, file)
                if not os.path.exists(file_path):
                    os.mkdir(file)
                # 进入语言包三级目录--问题
                os.chdir(file_path)
                code_file = os.path.join(file_path, 'case01.' + lang_config[sys.argv[1]]['code'])
                test_file = os.path.join(file_path, 'test.' + lang_config[sys.argv[1]]['code'])

                if not os.path.exists(code_file):
                    f_code = open(code_file, 'w')
                    f_code.write(case_txt)
                    f_code.close()
                if not os.path.exists(test_file):
                    f_test = open(test_file, 'w')
                    f_test.write(test_txt)
                    f_test.close()

                # 切回二级目录--分类
                os.chdir(type_path)

            # 切回一级目录--语言
            os.chdir(lang_path)

    # 切回项目根目录
    os.chdir(current_cwd)
    print("--- creating problems files -- finish ---")


if __name__ == '__main__':
    if check_type():
        check_env()
        problems = generate_menu()
        create_menu(problems)
