
// boilerplate 
var BinarySearchTree = function (value) {

	// create a copy of this dynamic function
	var instance = Object.create(BinarySearchTree.prototype)

	// load this instance with bst values
	instance.value = value
	instance.right = undefined
	instance.left = undefined

	return instance
}

// inser main methods

/*
this function is just a big heap of recursion
that smartly figures out where your value
should go
*/
BinarySearchTree.prototype.insert = function (value) {

	// uses recursion in a since, makes a new instance
	// of ones self to act as a node
	var node = BinarySearchTree(value)

	function recurse (bst) {

		if (bst.value > value && bst.left == undefined) {
			bst.left = node // bam! inserted a node to the left
		
		} else if (bst.value > value) {
			recurse(bst.left);

		} else if (bst.value < value && bst.right == undefined) {
			bst.right = node // bam! node to the right

		} else if (bast.value < value) {
			recurse(bst.right)
		}
	}

	recurse(this)
}  

BinarySearchTree.prototype.contains = function (value) {

	var doesContain = false

	// accepts a value and returns a boolean 
	function recurse (bst) {

		if (bst.value == value) {
			doesContain = true // found the value

		} else if (bst.left !== undefined && value < bst.value) {
			recurse(bst.left) // shift left to find the value

		} else if (bst.right !== undefined && value > bst.value) {
      		recurse(bst.right) // shift right to find the value
    	} 
	}

	recurse(this)

	// return the boolean
	return doesContain
}

