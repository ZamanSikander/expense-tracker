 
        let totalAmount = 0;
        function add_expense() {
            const expenseName = document.getElementById("expense-name").value;
            const expenseAmount =parseFloat(document.getElementById('expense').value);

            if (expenseName && !isNaN(expenseAmount)) {
                const listExpense = document.createElement('li');
                listExpense.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
                document.getElementById('expense-list').appendChild(listExpense);


                totalAmount += expenseAmount;
                document.getElementById('totalExpense').textContent = totalAmount.toFixed(2);

                document.getElementById("expense-name").value = '';
                document.getElementById('expense').value = '';
            } else {
                alert('please enter both fields!')
            }

        }
        function remove_expense() {
            document.getElementById('expense-list').innerHTML = '';
            totalAmount = 0;
            document.getElementById('totalExpense').textContent = 0;
        }

