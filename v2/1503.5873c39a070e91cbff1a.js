(window.webpackJsonp=window.webpackJsonp||[]).push([[1503],{ibgd:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: 'tui-tree-example-6',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample6 {\n    map = new Map<TreeNode, boolean>();\n\n    readonly data: TreeNode = {\n        text: 'Topmost',\n        children: [\n            {\n                text: 'Top level 1',\n                children: [\n                    {\n                        text: 'Another item',\n                        children: [\n                            {text: 'Next level 1'},\n                            {text: 'Next level 2'},\n                            {text: 'Next level 3'},\n                        ],\n                    },\n                ],\n            },\n            {text: 'Top level 2'},\n            {\n                text: 'Top level 3',\n                children: [{text: 'Test 1'}, {text: 'Test 2'}],\n            },\n        ],\n    };\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n\n    readonly getValue = (item: TreeNode, map: Map<TreeNode, boolean>): boolean | null => {\n        const flat = flatten(item);\n        const result = !!map.get(flat[0]);\n\n        for (let i = 0; i < flat.length; i++) {\n            if (result !== !!map.get(flat[i])) {\n                return null;\n            }\n        }\n\n        return result;\n    };\n\n    onChecked(node: TreeNode, value: boolean): void {\n        flatten(node).forEach(item => this.map.set(item, value));\n\n        this.map = new Map(this.map.entries());\n    }\n}\n\nfunction flatten(item: TreeNode): readonly TreeNode[] {\n    return item.children\n        ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])\n        : [item];\n}\n"}}]);