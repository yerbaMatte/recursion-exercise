"use strict";
//BST - BinarySearchTree
class NodeBST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new NodeBST(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (true) {
                if (value === current.value)
                    return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null)
            return false;
        let current = this.root;
        let found = false;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        if (!found)
            return false;
        return current;
    }
    //Breadth first search
    BFS() {
        let node = this.root;
        const data = [];
        const queue = [];
        queue.push(this.root);
        console.log(queue);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
    }
    DFSPreOrder() {
        const data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        const data = [];
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
}
const tree = new BinarySearchTree();
tree.root = new NodeBST(6);
