const time = "2024-04-15T19:30:00.000Z";

const formatTime = (time) => {
    const date = new Date(time);

    // Subtract 5 hours and 30 minutes from the date
    date.setHours(date.getHours() - 5);
    date.setMinutes(date.getMinutes() - 30);

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    if (date.toDateString() === now.toDateString()) {
        // If the date is today, show "Today" instead of the date
        return `Today ${date.toLocaleTimeString('en-IN', options)}`;
    } else if (date.toDateString() === tomorrow.toDateString()) {
        // If the date is tomorrow, show "Tomorrow" instead of the date
        return `Tomorrow ${date.toLocaleTimeString('en-IN', options)}`;
    } else {
        // Otherwise, show the full date and time
        return `${date.toLocaleDateString('en-IN')} ${date.toLocaleTimeString('en-IN', options)}`;
    }
};

console.log(formatTime(time));