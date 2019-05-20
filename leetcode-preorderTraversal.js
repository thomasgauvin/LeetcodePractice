/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var preorderTraversal = function(root) {
    var arr = [];
    if(root==null){
        return arr;
    }
    visit(root, arr);
    return arr;
};

function visit(node, arr){
    if(node==null){
        return arr;
    }
    else{
        arr.push(node.val);
        visit(node.left, arr);
        visit(node.right, arr);
    }
}

var root = {
    val: 5,
    left: {
        val: 6,
        left: null,
        right: null
    },
    right: {
        val: 7,
        left: {
            val: 8,
            left: null,
            right: null
        },
        right: null
    }
}

arr = preorderTraversal(root);
console.log(arr);
