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
var postorderTraversal = function(root) {
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
        visit(node.left, arr);
        visit(node.right, arr);
        arr.push(node.val);
    }
}