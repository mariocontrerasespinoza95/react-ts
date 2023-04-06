import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';

function App() {
    const [expenses, setExpenses] = useState([
        { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
        { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
        { id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
        { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
    ]);

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleOnDelete = (id: number) => {
        setExpenses(expenses.filter((f) => f.id !== id));
    };

    const handleOnSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const visibleExpenses = selectedCategory
        ? expenses.filter((f) => f.category === selectedCategory)
        : expenses;

    return (
        <div>
            <div className="mb-3">
                <ExpenseFilter onSelectCategory={handleOnSelectCategory} />
            </div>
            <ExpenseList expenses={visibleExpenses} onDelete={handleOnDelete} />
        </div>
    );
}

export default App;
