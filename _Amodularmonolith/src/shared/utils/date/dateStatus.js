export function getDueDateStatus(dueDate){

    if(!dueDate){
        return null;
    }

    const today = new Date();
    today.setHours(0,0,0,0);

    const due = new Date(dueDate);
    due.setHours(0,0,0,0);

    const diff = Math.floor((due - today) / (1000 * 60 * 60 * 24));

    if (diff < 0) {
        return "overdue";
    }

    if (diff === 0) {
        return "today";
    }

    if (diff === 1) {
        return "tomorrow";
    }

    if (diff <= 7) {
        return 'week';
    }

    return 'future';
}