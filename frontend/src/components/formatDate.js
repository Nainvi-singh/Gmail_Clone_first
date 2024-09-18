export const formatDate = (date) => {
    const now = new Date();
    const emailDate = new Date(date);
    const diffDays = Math.floor((now - emailDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        // If the email is sent or received today
        return emailDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
        // If the email is sent or received yesterday
        return "Yesterday";
    } else if (diffDays < 30) {
        // If the email is sent or received within the past month
        return `${diffDays} days ago`;
    } else if (diffDays < 365) {
        // If the email is sent or received within the past year
        return `${Math.floor(diffDays / 30)} months ago`;
    } else {
        // For older dates
        return emailDate.toLocaleDateString();
    }
};
