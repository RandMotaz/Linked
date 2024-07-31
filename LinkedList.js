class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    static removeNthFromEnd(head, n) {
        let p1 = head;
        let p2 = head;
        let counter = 0;

        // Count the total number of nodes in the list
        while (p1 !== null) {
            p1 = p1.next;
            counter++;
        }

        if (counter >= n && n > 0) {
            let numOfSteps = counter - n;

            if (numOfSteps === 0) {
                head = p2.next;
            } else {
                for (let i = 1; i < numOfSteps; i++) {
                    p2 = p2.next;
                }
                p2.next = p2.next.next;
            }
        }

        return head;
    }
}

// Example usage
function main() {
    // Create a sample linked list: 1 -> null
    let head = new ListNode(1);

    // Remove the 1st node from the end
    let n = 1;
    let result = Solution.removeNthFromEnd(head, n);

    // Print the resulting linked list
    while (result !== null) {
        process.stdout.write(result.val + ' -> ');
        result = result.next;
    }
    console.log('null');
}

main();
