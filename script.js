 
        // let totalAmount = 0;
        // function add_expense() {
        //     const expenseName = document.getElementById("expense-name").value;
        //     const expenseAmount =parseFloat(document.getElementById('expense').value);

        //     if (expenseName && !isNaN(expenseAmount)) {
        //         const listExpense = document.createElement('li');
        //         listExpense.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
        //         document.getElementById('expense-list').appendChild(listExpense);


        //         totalAmount += expenseAmount;
        //         document.getElementById('totalExpense').textContent = totalAmount.toFixed(2);

        //         document.getElementById("expense-name").value = '';
        //         document.getElementById('expense').value = '';
        //     } else {
        //         alert('please enter both fields!')
        //     }

        // }
        // function remove_expense() {
        //     document.getElementById('expense-list').textContent = '';
        //     totalAmount = 0;
        //     document.getElementById('totalExpense').textContent = 0;
        // }




        let totalAmount = 0;
        document.addEventListener('DOMContentLoaded', loadExpenses);

        function add_expense() {
            const expenseName = document.getElementById("expense-name").value;
            const expenseAmount = parseFloat(document.getElementById('expense').value);

            if (expenseName && !isNaN(expenseAmount)) {
                const listExpense = document.createElement('li');
                listExpense.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
                document.getElementById('expense-list').appendChild(listExpense);

                totalAmount += expenseAmount;
                document.getElementById('totalExpense').textContent = totalAmount.toFixed(2);

                saveExpense(expenseName, expenseAmount);

                document.getElementById("expense-name").value = '';
                document.getElementById('expense').value = '';
            } else {
                alert('Please enter both fields!');
            }
        }

        function remove_expense() {
            document.getElementById('expense-list').innerHTML = '';
            totalAmount = 0;
            document.getElementById('totalExpense').textContent = 0;
            localStorage.removeItem('expenses');
        }

        function saveExpense(name, amount) {
            const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
            expenses.push({ name, amount });
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }

        function loadExpenses() {
            const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
            expenses.forEach(expense => {
                const listExpense = document.createElement('li');
                listExpense.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
                document.getElementById('expense-list').appendChild(listExpense);
                totalAmount += expense.amount;
            });
            document.getElementById('totalExpense').textContent = totalAmount.toFixed(2);
        }