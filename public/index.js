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
}
const tree = new BinarySearchTree();
