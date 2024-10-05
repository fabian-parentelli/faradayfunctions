export const restDays = (endDate: Date): number => {
    const now = new Date();
    if (isNaN(endDate.getTime())) {
        throw new Error('La fecha de finalización no es válida');
    };
    const remainingDays = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return remainingDays > 0 ? remainingDays : 0;
};
